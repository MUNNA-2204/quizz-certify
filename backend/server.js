import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import cors from 'cors';
import dotenv from 'dotenv';
import PDFDocument from 'pdfkit';
import fs from 'fs';
import nodemailer from 'nodemailer';
import { v4 as uuidv4 } from 'uuid';
import admin from 'firebase-admin'; // ES module syntax
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { URL } from 'url'; // Import URL for file URL creation

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

dotenv.config();
const app = express();

// Get the directory of the current file for reliable path resolution
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Dynamically import the service account key with correct assertion and URL conversion
let serviceAccount;
try {
  const serviceAccountPath = resolve(__dirname, 'serviceAccountKey.json');
  console.log('Attempting to load service account from:', serviceAccountPath); // Debug log
  if (!fs.existsSync(serviceAccountPath)) {
    throw new Error(`Service account file not found at ${serviceAccountPath}`);
  }
  // Convert the path to a file:// URL for Windows compatibility
  const fileUrl = new URL(`file://${serviceAccountPath.replace(/\\/g, '/')}`);
  serviceAccount = await import(fileUrl.href, { with: { type: 'json' } }).then((module) => module.default);
  console.log('Service account loaded successfully');
} catch (error) {
  console.error('Error loading serviceAccountKey.json:', error.message);
  throw new Error(`Failed to load service account key: ${error.message}`);
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://quizcertification.firebaseio.com', // Match your Firebase project URL
});
const db = admin.firestore();

app.use(cors({ origin: 'http://localhost:5173', methods: ['POST', 'GET', 'OPTIONS'], allowedHeaders: ['Content-Type'] }));
app.use(express.json({ limit: '10mb' }));

let geminiService;
try {
  geminiService = process.env.GEMINI_API_KEY ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY) : null;
  if (!geminiService) console.error('GEMINI_API_KEY not set');
} catch (error) {
  console.error('Gemini Initialization Error:', error);
  geminiService = null;
}

// Existing /analyze endpoint (unchanged)
app.post('/analyze', async (req, res) => {
  try {
    const { code, exercise = 'General code review' } = req.body;

    console.log('Received /analyze request:', { code, exercise });

    if (!code || typeof code !== 'string' || code.length < 10) {
      return res.status(400).json({ error: "Invalid code input", details: "Code must be a string of at least 10 characters" });
    }

    if (!geminiService) {
      return res.status(200).json({
        result: `🔧 Mock Analysis\n\nExercise: ${exercise}\n\n1. Code structure appears valid\n2. Consider adding error handling`,
        mock: true,
        timestamp: new Date().toISOString()
      });
    }

    const model = geminiService.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `
      You are a general code reviewer, not tied to any specific programming language. Analyze the following input for the exercise "${exercise}":
      \`\`\`
      ${code}
      \`\`\`
      Provide feedback strictly based on the exercise requirements:
      1. Correctness rating (0-10) relative to the exercise goal
      2. Issues or errors (if the input fails to meet the exercise objective)
      3. Suggested improvements or solutions to align with the exercise
      4. General best practices relevant to the exercise context
      Do NOT assume the input is code in any specific language (e.g., JavaScript, Python, etc.) unless the exercise explicitly states a language requirement. If the input doesn’t make sense as code for the exercise, evaluate it as plain text relative to the task. Focus only on whether the input fulfills the exercise, not on language-specific syntax.
    `;

    console.log("Sending prompt to Gemini:", prompt);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log("Gemini response:", text);

    res.status(200).json({
      result: text,
      timestamp: new Date().toISOString(),
      mock: false
    });
  } catch (error) {
    console.error('Analysis error:', error);
    res.status(500).json({ 
      error: "Analysis service unavailable",
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Updated /certificate endpoint with Firebase fetching
app.post('/certificate', async (req, res) => {
  try {
    const { userId, courseId, email, score } = req.body;
    if (!userId || !courseId || !email || score < 70) {
      return res.status(400).json({ error: "Invalid data or score too low" });
    }

    // Fetch user name from Firestore
    let userName = 'User'; // Default if not found
    const userDoc = await db.collection('users').doc(userId).get();
    if (userDoc.exists) {
      userName = userDoc.data().name || userDoc.data().displayName || userName;
      console.log(`Fetched user name: ${userName} for userId: ${userId}`);
    } else {
      console.warn(`User ${userId} not found in Firestore, using default name`);
    }

    // Fetch course title from Firestore (optional)
    let courseTitle = courseId.replace(/^\w/, (c) => c.toUpperCase()); // Default
    const courseDoc = await db.collection('courses').doc(courseId).get();
    if (courseDoc.exists) {
      courseTitle = courseDoc.data().title || courseTitle;
      console.log(`Fetched course title: ${courseTitle} for courseId: ${courseId}`);
    } else {
      console.warn(`Course ${courseId} not found in Firestore, using default title`);
    }

    // Generate Unique ID
    const certificateId = uuidv4();

    // Ensure certificates directory exists
    const certDir = './certificates';
    if (!fs.existsSync(certDir)) {
      fs.mkdirSync(certDir, { recursive: true });
      console.log(`Created directory: ${certDir}`);
    }

    // Create PDF
    const doc = new PDFDocument({ size: "A4", margin: 40 });
    const filePath = `${certDir}/${userId}_${courseId}_${certificateId}.pdf`;
    const writeStream = fs.createWriteStream(filePath);
    doc.pipe(writeStream);

    // Background with Watermark
    const gradient = doc.linearGradient(40, 40, 555, 752);
    gradient.stop(0, '#d4af37').stop(1, '#1e40af');
    doc.rect(40, 40, 515, 712).fill(gradient);

    // Watermark
    doc
      .fontSize(80)
      .fillColor('#ffffff')
      .opacity(0.1)
      .text('CERTIFIED', 0, 350, { align: 'center', rotate: -45 })
      .opacity(1);

    // White Overlay for Text Clarity
    doc.rect(50, 50, 495, 692).fillOpacity(0.9).fill('#ffffff');

    // Border
    doc.rect(50, 50, 495, 692).lineWidth(5).strokeColor('#1e40af').stroke();

    // Header
    doc
      .font('Times-Roman')
      .fontSize(36)
      .fillColor('#d4af37')
      .text('Certificate of Achievement', 0, 80, { align: 'center' });
    // Placeholder for logo - replace with your logo path
    // doc.image('path/to/logo.png', 225, 30, { width: 150, align: 'center' });

    // Subheader and Name
    doc
      .font('Helvetica')
      .fontSize(20)
      .fillColor('#333')
      .text('This certificate is proudly awarded to', 0, 180, { align: 'center' });
    doc
      .font('Times-Roman')
      .fontSize(32)
      .fillColor('#1e40af')
      .text(userName.toUpperCase(), 0, 220, { align: 'center' });

    // Course Details
    doc
      .font('Helvetica')
      .fontSize(18)
      .fillColor('#666')
      .text('For successfully completing the course:', 0, 300, { align: 'center' });
    doc
      .font('Helvetica-Bold')
      .fontSize(24)
      .fillColor('#333')
      .text(courseTitle, 0, 340, { align: 'center' });

    // Details
    doc
      .font('Helvetica')
      .fontSize(14)
      .fillColor('#666')
      .text(`Score: ${score}%`, 150, 420)
      .text(`Completion Date: ${new Date().toLocaleDateString()}`, 150, 440)
      .text(`Certificate ID: ${certificateId.slice(0, 8)}`, 150, 460, { underline: true });

    // Decorative Line
    doc
      .moveTo(150, 480)
      .lineTo(450, 480)
      .lineWidth(1)
      .strokeColor('#d4af37')
      .stroke();

    // Badge
    doc
      .circle(450, 150, 60)
      .lineWidth(3)
      .strokeColor('#d4af37')
      .fill('#d4af37');
    doc
      .font('Helvetica-Bold')
      .fontSize(16)
      .fillColor('#ffffff')
      .text('2025\nExcellence', 420, 130, { align: 'center', lineGap: 5 });

    // Seal
    doc
      .circle(450, 550, 50)
      .lineWidth(3)
      .strokeColor('#dc2626')
      .fill('#dc2626');
    doc
      .font('Helvetica-Bold')
      .fontSize(14)
      .fillColor('#ffffff')
      .text('Verified\nSeal', 420, 530, { align: 'center', lineGap: 5 });

    // Footer with Signature
    doc
      .font('Helvetica')
      .fontSize(16)
      .fillColor('#666')
      .text('Issued by TechCert - Empowering Future Innovators', 0, 620, { align: 'center' });
    // Placeholder for signature image - replace with your signature path
    // doc.image('path/to/signature.png', 200, 660, { width: 200 });
    doc
      .moveTo(200, 700)
      .lineTo(400, 700)
      .lineWidth(1)
      .strokeColor('#333')
      .stroke();
    doc.text('Authorized Signature', 0, 710, { align: 'center' });

    doc.end();

    // Wait for PDF generation to complete
    writeStream.on('finish', async () => {
      try {
        // Email Certificate
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
        });
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: email,
          subject: `Your ${courseTitle} Certificate`,
          text: `Congratulations, ${userName}! Attached is your certificate for completing ${courseTitle}. Your Certificate ID is ${certificateId.slice(0, 8)} for verification.`,
          attachments: [{ filename: `${courseId}_certificate.pdf`, path: filePath }],
        });

        res.json({ message: "Certificate sent", certificateId: certificateId.slice(0, 8) });
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        res.status(500).json({ error: "Failed to send email", details: emailError.message });
      }
    });

    writeStream.on('error', (fsError) => {
      console.error('File system error:', fsError);
      res.status(500).json({ error: "Failed to generate certificate", details: fsError.message });
    });
  } catch (error) {
    console.error('Certificate generation error:', error);
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));