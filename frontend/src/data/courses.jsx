import {
  Code2,
  Code,
  FlaskConical,
  Gem,
  Cpu,
  Zap,
  Box,
  Coffee,
  Server,
  FileCode,
  Apple,
  Smartphone,
  Brackets,
  Link,
  // Add more icons as needed
} from "lucide-react";
import {
  FaReact,
  FaMobileAlt,
  FaMicrosoft,
  FaCss3Alt,
  FaJs,
  FaAngular,
  FaVuejs,
  FaDatabase,
  FaDocker,
  FaAws,
  FaRProject,
  FaPaintBrush,
  FaCogs, FaMicrochip, FaShieldAlt, FaChartLine, FaComments, 
  FaCamera, FaBitcoin, FaChartPie, FaCloud, FaServer, 
   FaClock, FaGamepad, FaVrCardboard, FaPlug, 
  FaNetworkWired, FaTasks, FaTachometerAlt, FaPalette, FaVideo, 
  FaBullhorn, FaShoppingCart, FaBrain, FaCube, 
  FaCode, FaLaptopCode, FaSitemap, FaBug, FaGlobe, 
  FaTools, FaLeaf, FaEye, FaMicrophone, FaUserSecret , FaBalanceScale, FaMagic , FaKey,
  FaChartBar
} from "react-icons/fa";
import {
  SiFlutter,
  SiKotlin,
  SiDotnet,
  SiSpring,
  SiGo,
  SiRust,
  SiTypescript,
  SiNextdotjs,
  SiSvelte,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiGraphql,
  SiRedis,
  SiKubernetes,
  SiGooglecloud,
  SiTerraform,
  SiAnsible,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiCplusplus,
  SiSolidity,
  SiScala,
  SiElixir,
  SiDeno,
  SiJulia,
  SiPerl,
  SiClojure,
  SiHaskell,SiQiskit, SiDialogflow, SiRos, SiBlender, SiD3Dotjs
} from "react-icons/si";

export const courses = [
  {
    id: "html",
    title: "HTML",
    category: "Frontend Development",
    duration: "6 Weeks",
    description: "From absolute beginner to HTML professional - covers all modern HTML5 features",
    rating: 4.9,
    icon: <Code className="text-blue-600" size={24} />,
    keywords: ["html5", "semantic-html", "forms", "tables", "multimedia","webdevelopment"],
    quiz: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language",
          "Hyper Text Makeup Language"
        ],
        answer: 0,
      },
      {
        question: "Which tag is used for the largest heading?",
        options: [
          "<heading>",
          "<h6>",
          "<h1>",
          "<head>"
        ],
        answer: 2,
      },
  {
    question: "Which attribute is used to provide an alternate text for an image?",
    options: [
      "title",
      "src",
      "alt",
      "href"
    ],
    answer: 2,
  },
  {
    question: "Which tag is used to define a table row?",
    options: [
      "<td>",
      "<th>",
      "<tr>",
      "<table>"
    ],
    answer: 2,
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: [
      "<br>",
      "<break>",
      "<lb>",
      "<linebreak>"
    ],
    answer: 0,
  },
  {
    question: "Which input type is used to create a slider control?",
    options: [
      "range",
      "slider",
      "scroll",
      "number"
    ],
    answer: 0,
  },
  {
    question: "What is the purpose of the <fieldset> element in a form?",
    options: [
      "To group related data",
      "To style inputs",
      "To validate the form",
      "To submit the form"
    ],
    answer: 0,
  },
  {
    question: "Which tag is used to define a clickable hyperlink?",
    options: [
      "<link>",
      "<a>",
      "<href>",
      "<navigate>"
    ],
    answer: 1,
  },
  {
    question: "What does the 'required' attribute do in a form input?",
    options: [
      "Prevents editing",
      "Makes the field mandatory",
      "Fills default value",
      "Hides the field"
    ],
    answer: 1,
  },
  {
    question: "What is the default method for a form submission?",
    options: [
      "GET",
      "POST",
      "PUT",
      "FETCH"
    ],
    answer: 0,
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: [
      "<ol>",
      "<li>",
      "<ul>",
      "<list>"
    ],
    answer: 2,
  },
  {
    question: "What is the purpose of the <meta> tag?",
    options: [
      "To define document metadata",
      "To link CSS files",
      "To insert scripts",
      "To display meta text"
    ],
    answer: 0,
  },
  {
    question: "Which tag defines the body of an HTML document?",
    options: [
      "<main>",
      "<content>",
      "<body>",
      "<section>"
    ],
    answer: 2,
  },
  {
    question: "How do you create a checkbox input in HTML?",
    options: [
      "<input type='checkbox'>",
      "<checkbox>",
      "<input checkbox>",
      "<input type='check'>"
    ],
    answer: 0,
  },
  {
    question: "Which attribute is used to specify the path of an image?",
    options: [
      "href",
      "src",
      "path",
      "link"
    ],
    answer: 1,
  },
    ],
    content: {
      overview: "Master HTML from the ground up with this comprehensive course covering all essential HTML elements, attributes, and modern techniques for building accessible, semantic web pages.",
      prerequisites: ["Basic computer skills", "Text editor"],
      modules: [
        {
          title: "HTML Fundamentals",
          lessons: [
            {
              title: "Introduction & Editors",
              content: [
                "What is HTML and how it works",
                "HTML5 vs older versions",
                "Choosing code editors (VS Code, Sublime, etc.)",
                "Browser developer tools overview",
                "Basic HTML document structure"
              ],
              examples: [
                {
                  code: `<!DOCTYPE html>
  <html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
  </html>`,
                  explanation: "Most basic HTML document structure"
                }
              ],
              exercises: [
                "Install VS Code and create first HTML file",
                "Experiment with different editors",
                "Inspect page elements in browser dev tools"
              ]
            },
            {
              title: "Basic Elements & Attributes",
              content: [
                "HTML element syntax (opening/closing tags)",
                "Core attributes (id, class, style, title)",
                "Global attributes (lang, dir, hidden, etc.)",
                "Boolean attributes (checked, disabled, etc.)",
                "Custom data attributes"
              ],
              examples: [
                {
                  code: `<p id="intro" class="highlight" data-extra="info">
    This paragraph has multiple attributes
  </p>
  
  <input type="checkbox" checked disabled>`,
                  explanation: "Elements with various attribute types"
                }
              ],
              exercises: [
                "Create elements with different attributes",
                "Experiment with boolean attributes",
                "Add custom data attributes"
              ]
            }
          ]
        },
        {
          title: "Text & Formatting",
          lessons: [
            {
              title: "Headings & Paragraphs",
              content: [
                "Heading hierarchy (h1-h6)",
                "Paragraphs and line breaks",
                "Horizontal rules (thematic breaks)",
                "Accessibility considerations",
                "SEO best practices for headings"
              ],
              examples: [
                {
                  code: `<h1>Main Title</h1>
  <h2>Section Heading</h2>
  <p>This is a paragraph of text.</p>
  <hr>
  <p>Another paragraph after a thematic break.</p>`,
                  explanation: "Proper heading structure with paragraphs"
                }
              ],
              exercises: [
                "Create a document with proper heading hierarchy",
                "Mark up a news article with headings and paragraphs",
                "Check heading structure in accessibility tools"
              ]
            },
            {
              title: "Text Formatting & Styles",
              content: [
                "Logical vs physical formatting tags",
                "Strong vs bold, em vs italic",
                "Superscript, subscript, and small text",
                "Marked/highlighted text",
                "Inline styles (basic CSS introduction)"
              ],
              examples: [
                {
                  code: `<p>
    This text contains <strong>important</strong> words,
    <em>emphasis</em>, and <mark>highlighted</mark> content.
    H<sub>2</sub>O and E=mc<sup>2</sup> examples.
  </p>
  
  <p style="color: blue; font-size: 1.2em;">
    This paragraph has inline styles.
  </p>`,
                  explanation: "Various text formatting techniques"
                }
              ],
              exercises: [
                "Format a scientific paper excerpt",
                "Create a highlighted text note",
                "Experiment with inline styles"
              ]
            },
            {
              title: "Quotations & Comments",
              content: [
                "Block quotes vs inline quotes",
                "Citation and attribution",
                "HTML comment syntax",
                "Commenting best practices",
                "Conditional comments (legacy)"
              ],
              examples: [
                {
                  code: `<blockquote cite="https://example.com">
    <p>This is an important quotation.</p>
    <footer>- Author Name</footer>
  </blockquote>
  
  <p>He said <q>Hello there!</q></p>
  
  <!-- This is a comment that won't be displayed -->
  <!--[if IE]>
    Special instructions for old IE
  <![endif]-->`,
                  explanation: "Quotations and comments in HTML"
                }
              ],
              exercises: [
                "Mark up a book excerpt with proper quotations",
                "Add comments to document your code",
                "Create a citation block"
              ]
            }
          ]
        },
        {
          title: "Document Structure",
          lessons: [
            {
              title: "Page Head & Metadata",
              content: [
                "Head section components",
                "Title element and SEO",
                "Meta tags (charset, viewport, description)",
                "Link tags (favicon, stylesheets)",
                "Script tags and loading strategies"
              ],
              examples: [
                {
                  code: `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Page description">
    <title>Page Title</title>
    <link rel="icon" href="favicon.ico">
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
  </head>`,
                  explanation: "Complete head section with essential elements"
                }
              ],
              exercises: [
                "Create a proper head section for a blog",
                "Add responsive viewport meta tag",
                "Include favicon and stylesheets"
              ]
            },
            {
              title: "Layout & Semantic Elements",
              content: [
                "Div vs semantic containers",
                "Header, nav, main, footer",
                "Article vs section elements",
                "Accessibility landmarks",
                "HTML5 outline algorithm"
              ],
              examples: [
                {
                  code: `<body>
    <header>
      <h1>Site Header</h1>
      <nav>Main Navigation</nav>
    </header>
    
    <main>
      <article>
        <h2>Blog Post</h2>
        <section>
          <h3>Introduction</h3>
          <p>Content...</p>
        </section>
      </article>
    </main>
    
    <footer>Copyright info</footer>
  </body>`,
                  explanation: "Semantic page layout structure"
                }
              ],
              exercises: [
                "Convert a div-based layout to semantic HTML",
                "Create a blog post with proper sectioning",
                "Test accessibility with screen reader"
              ]
            }
          ]
        },
        {
          title: "Links & Media",
          lessons: [
            {
              title: "Hyperlinks & Navigation",
              content: [
                "Anchor tag attributes (href, target, rel)",
                "Absolute vs relative URLs",
                "Linking to page sections (fragments)",
                "Email and telephone links",
                "Link accessibility best practices"
              ],
              examples: [
                {
                  code: `<a href="https://example.com" target="_blank" rel="noopener">External Link</a>
  <a href="/about.html">Internal Page</a>
  <a href="#section-id">Jump to Section</a>
  <a href="mailto:contact@example.com">Email Us</a>
  <a href="tel:+1234567890">Call Us</a>`,
                  explanation: "Different types of hyperlinks"
                }
              ],
              exercises: [
                "Create a navigation menu with links",
                "Implement anchor links within a long page",
                "Add contact links (email and phone)"
              ]
            },
            {
              title: "Images & Favicons",
              content: [
                "Img tag and attributes (src, alt, sizes)",
                "Responsive images (srcset)",
                "Picture element for art direction",
                "Favicon formats and implementation",
                "Image accessibility requirements"
              ],
              examples: [
                {
                  code: `<img src="photo.jpg" alt="Description" width="800" height="600">
  
  <picture>
    <source media="(min-width: 1200px)" srcset="large.jpg">
    <source media="(min-width: 800px)" srcset="medium.jpg">
    <img src="small.jpg" alt="Fallback image">
  </picture>
  
  <!-- In head section -->
  <link rel="icon" href="favicon.ico" sizes="any">
  <link rel="icon" href="icon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="apple-touch-icon.png">`,
                  explanation: "Images with responsive options and favicons"
                }
              ],
              exercises: [
                "Add images with proper alt text",
                "Create responsive image solutions",
                "Implement multiple favicon formats"
              ]
            },
            {
              title: "Audio & Video",
              content: [
                "HTML5 media elements",
                "Supported formats and codecs",
                "Subtitles and captions (WebVTT)",
                "Media accessibility requirements",
                "Embedding YouTube/Vimeo"
              ],
              examples: [
                {
                  code: `<video controls width="600">
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.webm" type="video/webm">
    <track src="subtitles.vtt" kind="subtitles" srclang="en">
    Your browser doesn't support HTML5 video.
  </video>
  
  <audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser doesn't support HTML5 audio.
  </audio>`,
                  explanation: "HTML5 media elements with fallbacks"
                }
              ],
              exercises: [
                "Embed a video with multiple formats",
                "Add captions to a video",
                "Create an audio player"
              ]
            }
          ]
        },
        {
          title: "Lists & Tables",
          lessons: [
            {
              title: "Ordered & Unordered Lists",
              content: [
                "UL vs OL elements",
                "List item styling (CSS basics)",
                "Nested lists hierarchy",
                "Description lists (DL, DT, DD)",
                "Accessibility considerations"
              ],
              examples: [
                {
                  code: `<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item
      <ol>
        <li>Nested ordered</li>
      </ol>
    </li>
  </ul>
  
  <dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
  </dl>`,
                  explanation: "Different types of HTML lists"
                }
              ],
              exercises: [
                "Create a multi-level navigation menu",
                "Mark up a glossary using description lists",
                "Style nested lists with CSS"
              ]
            },
            {
              title: "HTML Tables",
              content: [
                "Table structure (table, thead, tbody, tfoot)",
                "Row and cell elements (tr, td, th)",
                "Column and row spanning",
                "Accessible table markup",
                "Table styling basics"
              ],
              examples: [
                {
                  code: `<table>
    <caption>Monthly Sales</caption>
    <thead>
      <tr>
        <th>Month</th>
        <th>Sales</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>January</td>
        <td>$1000</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Total</td>
        <td>$1000</td>
      </tr>
    </tfoot>
  </table>`,
                  explanation: "Accessible table with all structural elements"
                }
              ],
              exercises: [
                "Create a timetable using tables",
                "Implement a complex table with colspan/rowspan",
                "Make tables accessible with ARIA attributes"
              ]
            }
          ]
        },
        {
          title: "Forms & Input",
          lessons: [
            {
              title: "Form Basics",
              content: [
                "Form element and attributes",
                "Input types (text, email, password, etc.)",
                "Labels and fieldset/legend",
                "Basic form validation",
                "Form accessibility best practices"
              ],
              examples: [
                {
                  code: `<form action="/submit" method="post">
    <fieldset>
      <legend>Contact Info</legend>
      
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      
      <button type="submit">Submit</button>
    </fieldset>
  </form>`,
                  explanation: "Accessible form with basic validation"
                }
              ],
              exercises: [
                "Create a contact form with validation",
                "Build a login form",
                "Implement proper form labeling"
              ]
            },
            {
              title: "Advanced Form Controls",
              content: [
                "All input types (date, color, range, etc.)",
                "Select, textarea, and datalist",
                "Radio buttons and checkboxes",
                "File upload controls",
                "Form submission methods"
              ],
              examples: [
                {
                  code: `<label for="color">Favorite Color:</label>
  <input type="color" id="color" name="color">
  
  <label for="volume">Volume:</label>
  <input type="range" id="volume" name="volume" min="0" max="100">
  
  <label for="resume">Upload Resume:</label>
  <input type="file" id="resume" name="resume" accept=".pdf,.docx">`,
                  explanation: "Various advanced form controls"
                }
              ],
              exercises: [
                "Create a survey form with all input types",
                "Implement a file upload interface",
                "Build a product customization form"
              ]
            }
          ]
        },
        {
          title: "Advanced Topics",
          lessons: [
            {
              title: "Iframes & Embeds",
              content: [
                "Iframe security considerations",
                "Embedding maps, videos, and widgets",
                "Sandbox attribute for security",
                "Responsive iframe techniques",
                "Accessibility concerns"
              ],
              examples: [
                {
                  code: `<iframe 
    src="https://maps.example.com" 
    width="600" 
    height="450"
    title="Location Map"
    loading="lazy"
    allowfullscreen
    sandbox="allow-same-origin allow-scripts">
  </iframe>`,
                  explanation: "Secure iframe implementation"
                }
              ],
              exercises: [
                "Embed a Google Map in your page",
                "Create a responsive iframe solution",
                "Experiment with sandbox attributes"
              ]
            },
            {
              title: "HTML Symbols & Emojis",
              content: [
                "HTML entity codes for symbols",
                "Emoji support in HTML",
                "Special character encoding",
                "Accessibility for symbols/emojis",
                "When to use SVG vs emoji"
              ],
              examples: [
                {
                  code: `<p>
    HTML symbols: &copy; &trade; &lt; &gt;
    <br>
    Emojis: 😀 📱 🌍
    <br>
    Math symbols: &pi; &sum; &int;
  </p>`,
                  explanation: "Using symbols and emojis in HTML"
                }
              ],
              exercises: [
                "Create a page with mathematical symbols",
                "Build an emoji rating component",
                "Implement accessible symbol usage"
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: "css",
    title: "CSS",
    category: "Frontend Development",
    duration: "8 Weeks",
    description: "From fundamentals to advanced techniques - master modern CSS styling",
    rating: 4.8,
    icon: <FaPaintBrush className="text-blue-600" size={24} />,
    keywords: ["css3", "styling", "layout", "responsive", "animations","webdevelopment"],
    content: {
      overview: "Master CSS from basic styling to advanced layout techniques, animations, and responsive design principles for creating beautiful, modern websites.",
      prerequisites: ["Basic HTML knowledge"],
      modules: [
        {
          title: "CSS Fundamentals",
          lessons: [
            {
              title: "CSS Introduction",
              content: [
                "What is CSS and why it's important",
                "CSS evolution (CSS1 to CSS3)",
                "Browser rendering engines",
                "CSS vs inline styles",
                "Developer tools for CSS"
              ],
              examples: [
                {
                  code: `/* This is a CSS comment */
  body {
    background-color: lightblue;
  }
  
  h1 {
    color: white;
    text-align: center;
  }`,
                  explanation: "Basic CSS stylesheet example"
                }
              ],
              exercises: [
                "Create your first stylesheet",
                "Link CSS to an HTML file",
                "Experiment with browser dev tools"
              ]
            },
            {
              title: "CSS Syntax",
              content: [
                "Selector, property, value structure",
                "Declaration blocks",
                "Multiple selectors",
                "Multiple declarations",
                "CSS syntax best practices"
              ],
              examples: [
                {
                  code: `/* Selector { property: value; } */
  h1, h2, h3 {
    font-family: Arial, sans-serif;
    color: #333333;
    margin-bottom: 1rem;
  }`,
                  explanation: "CSS syntax with multiple selectors and declarations"
                }
              ],
              exercises: [
                "Write CSS rules with different selectors",
                "Create a well-formatted stylesheet",
                "Practice combining selectors"
              ]
            },
            {
              title: "CSS Selectors",
              content: [
                "Element, class, and ID selectors",
                "Attribute selectors",
                "Pseudo-classes and pseudo-elements",
                "Combinators (child, descendant, sibling)",
                "Specificity and inheritance"
              ],
              examples: [
                {
                  code: `/* Element selector */
  p {
    line-height: 1.5;
  }
  
  /* Class selector */
  .highlight {
    background-color: yellow;
  }
  
  /* ID selector */
  #main-header {
    font-size: 2rem;
  }
  
  /* Attribute selector */
  input[type="text"] {
    border: 1px solid #ccc;
  }
  
  /* Pseudo-class */
  a:hover {
    color: red;
  }`,
                  explanation: "Various CSS selector types"
                }
              ],
              exercises: [
                "Style elements using different selectors",
                "Create a navigation menu with hover effects",
                "Experiment with specificity"
              ]
            },
            {
              title: "CSS Comments",
              content: [
                "Single-line vs multi-line comments",
                "Commenting best practices",
                "Organizing CSS with comments",
                "Commenting for team workflows",
                "CSS documentation"
              ],
              examples: [
                {
                  code: `/* Main page styles 
     ===================== */
     
  /* Navigation styles */
  nav {
    /* Temporary border for debugging */
    border: 1px solid red;
  }
  
  /* 
    Multi-line comment
    explaining complex styles
  */
  .container {
    width: 100%;
  }`,
                  explanation: "Effective CSS commenting"
                }
              ],
              exercises: [
                "Document your CSS with comments",
                "Create a style guide with comments",
                "Organize a stylesheet into sections"
              ]
            }
          ]
        },
        {
          title: "Styling Basics",
          lessons: [
            {
              title: "CSS Colors",
              content: [
                "Color systems (hex, rgb, hsl)",
                "Named colors vs custom colors",
                "Opacity and transparency",
                "Color contrast and accessibility",
                "CurrentColor keyword"
              ],
              examples: [
                {
                  code: `/* Different color notations */
  .color-example {
    color: red;                    /* Named color */
    background-color: #ff0000;     /* Hex */
    border-color: rgb(255, 0, 0);  /* RGB */
    outline-color: hsl(0, 100%, 50%); /* HSL */
    opacity: 0.8;                  /* Transparency */
  }`,
                  explanation: "Various ways to specify colors in CSS"
                }
              ],
              exercises: [
                "Create a color palette using different notations",
                "Test color contrast for accessibility",
                "Implement a dark/light theme toggle"
              ]
            },
            {
              title: "CSS Backgrounds",
              content: [
                "Background colors and images",
                "Background positioning and repeating",
                "Multiple backgrounds",
                "Background size and clipping",
                "Gradient backgrounds"
              ],
              examples: [
                {
                  code: `.background-example {
    background-color: #f0f0f0;
    background-image: url('texture.png'), linear-gradient(to bottom, #fff, #000);
    background-position: center, top;
    background-repeat: no-repeat, repeat;
    background-size: contain, auto;
  }`,
                  explanation: "Advanced background properties with multiple backgrounds"
                }
              ],
              exercises: [
                "Create a hero section with background image",
                "Implement gradient backgrounds",
                "Experiment with background blending modes"
              ]
            },
            {
              title: "CSS Borders",
              content: [
                "Border styles (solid, dashed, etc.)",
                "Border width and color",
                "Border radius for rounded corners",
                "Border images",
                "Box-shadow effects"
              ],
              examples: [
                {
                  code: `.border-example {
    border: 2px dashed #ff0000;
    border-radius: 10px;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.3);
  }
  
  .circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }`,
                  explanation: "Border properties and rounded corners"
                }
              ],
              exercises: [
                "Create different border styles for elements",
                "Make circular elements using border-radius",
                "Implement card components with shadows"
              ]
            },
            {
              title: "CSS Margins & Padding",
              content: [
                "Margin vs padding concepts",
                "Shorthand notation",
                "Negative margins",
                "Margin collapsing behavior",
                "Box-sizing property"
              ],
              examples: [
                {
                  code: `.spacing-example {
    margin: 10px 20px; /* top/bottom left/right */
    padding: 5px 10px 15px 20px; /* top right bottom left */
  }
  
  .box-model {
    box-sizing: border-box; /* includes padding/border in width */
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    /* Total width remains 300px */
  }`,
                  explanation: "Margin, padding, and box-sizing examples"
                }
              ],
              exercises: [
                "Create a layout using proper spacing",
                "Experiment with negative margins",
                "Compare content-box vs border-box"
              ]
            },
            {
              title: "CSS Height & Width",
              content: [
                "Fixed vs relative units",
                "Min/max dimensions",
                "Viewport units (vh, vw)",
                "Aspect ratio control",
                "Overflow handling"
              ],
              examples: [
                {
                  code: `.dimension-example {
    width: 80%; /* relative to parent */
    max-width: 1200px; /* won't grow beyond this */
    height: 50vh; /* 50% of viewport height */
    min-height: 300px; /* minimum height */
    overflow: auto; /* scroll if content overflows */
  }`,
                  explanation: "Responsive dimension control"
                }
              ],
              exercises: [
                "Create a responsive container",
                "Implement a full-height hero section",
                "Experiment with aspect-ratio property"
              ]
            },
            {
              title: "CSS Box Model",
              content: [
                "Content, padding, border, margin",
                "Box-sizing property",
                "Display types (block, inline, inline-block)",
                "Margin collapsing",
                "Visual formatting model"
              ],
              examples: [
                {
                  code: `/* Standard box model */
  .box-standard {
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
    /* Total width: 300 + 40 + 10 + 20 = 370px */
  }
  
  /* Border-box model */
  .box-border {
    box-sizing: border-box;
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
    /* Total width: 300px (content adjusts) */
  }`,
                  explanation: "Comparing standard and border-box models"
                }
              ],
              exercises: [
                "Visualize the box model with different elements",
                "Create layouts using different display types",
                "Solve common box model problems"
              ]
            },
            {
              title: "CSS Outline",
              content: [
                "Outline vs border differences",
                "Outline styles and colors",
                "Outline offset",
                "Accessibility considerations",
                "Focus states for interactive elements"
              ],
              examples: [
                {
                  code: `button {
    outline: 2px solid transparent;
    outline-offset: 3px;
    transition: outline 0.2s ease;
  }
  
  button:focus {
    outline-color: blue;
  }
  
  /* Remove outline only when alternative focus style exists */
  button:focus:not(:focus-visible) {
    outline: none;
  }`,
                  explanation: "Accessible outline usage"
                }
              ],
              exercises: [
                "Create accessible focus styles",
                "Experiment with outline-offset",
                "Style form inputs with proper focus indicators"
              ]
            }
          ]
        },
        {
          title: "Typography & Visuals",
          lessons: [
            {
              title: "CSS Text",
              content: [
                "Text alignment and decoration",
                "Text transformation",
                "Letter and word spacing",
                "Text shadow effects",
                "Text overflow handling"
              ],
              examples: [
                {
                  code: `.text-example {
    text-align: justify;
    text-decoration: underline wavy blue;
    text-transform: uppercase;
    letter-spacing: 1px;
    word-spacing: 2px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }`,
                  explanation: "Various text styling properties"
                }
              ],
              exercises: [
                "Style a paragraph with multiple text properties",
                "Create text effects with shadows",
                "Implement truncated text with ellipsis"
              ]
            },
            {
              title: "CSS Fonts",
              content: [
                "Font families and fallbacks",
                "Web fonts (@font-face)",
                "Font size units (px, em, rem)",
                "Font weight and style",
                "Variable fonts"
              ],
              examples: [
                {
                  code: `/* Web font */
  @font-face {
    font-family: 'CustomFont';
    src: url('customfont.woff2') format('woff2');
  }
  
  .font-example {
    font-family: 'CustomFont', Arial, sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    font-style: italic;
    line-height: 1.6;
  }
  
  /* Variable font */
  @font-face {
    font-family: 'VariableFont';
    src: url('variablefont.woff2') format('woff2-variations');
    font-weight: 100 900;
  }
  
  .variable-example {
    font-family: 'VariableFont';
    font-weight: 450;
  }`,
                  explanation: "Font styling with web and variable fonts"
                }
              ],
              exercises: [
                "Implement a web font from Google Fonts",
                "Create a typographic scale with rem units",
                "Experiment with variable font properties"
              ]
            },
            {
              title: "CSS Icons",
              content: [
                "Icon fonts (Font Awesome, etc.)",
                "SVG icons implementation",
                "CSS-only icons (pseudo-elements)",
                "Icon accessibility",
                "Icon sizing and alignment"
              ],
              examples: [
                {
                  code: `/* Using Font Awesome */
  <i class="fas fa-user"></i>
  
  /* SVG icon */
  .icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    background-image: url('icon.svg');
    background-size: contain;
  }
  
  /* CSS-only icon */
  .css-icon::before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    border: 2px solid currentColor;
    border-radius: 50%;
  }`,
                  explanation: "Different approaches to implementing icons"
                }
              ],
              exercises: [
                "Create a navigation bar with icons",
                "Implement a custom SVG icon system",
                "Make CSS-only icons for simple shapes"
              ]
            },
            {
              title: "CSS Links",
              content: [
                "Link states (visited, hover, active, focus)",
                "Styling different link types",
                "Button-like links",
                "Underline customization",
                "Link accessibility best practices"
              ],
              examples: [
                {
                  code: `a {
    color: #0066cc;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: color 0.3s, border-color 0.3s;
  }
  
  a:hover {
    color: #003366;
    border-bottom-color: currentColor;
  }
  
  a:focus {
    outline: 2px solid #0066cc;
    outline-offset: 2px;
  }
  
  a:active {
    color: #ff0000;
  }
  
  a[href^="http"]::after {
    content: " ↗";
  }`,
                  explanation: "Comprehensive link styling with states"
                }
              ],
              exercises: [
                "Style different link states distinctly",
                "Create a button-like link component",
                "Implement external link indicators"
              ]
            },
            {
              title: "CSS Lists",
              content: [
                "List style types (bullets, numbers)",
                "Custom list markers",
                "List positioning (inside/outside)",
                "Horizontal lists for navigation",
                "Accessibility considerations"
              ],
              examples: [
                {
                  code: `/* Custom bullet list */
  ul.custom {
    list-style-type: none;
    padding-left: 0;
  }
  
  ul.custom li {
    padding-left: 1.5em;
    position: relative;
  }
  
  ul.custom li::before {
    content: "•";
    color: red;
    position: absolute;
    left: 0;
  }
  
  /* Horizontal navigation */
  nav ul {
    display: flex;
    gap: 1rem;
    list-style: none;
    padding: 0;
  }`,
                  explanation: "Custom list styling examples"
                }
              ],
              exercises: [
                "Create a styled checklist with custom markers",
                "Convert a vertical list to horizontal navigation",
                "Implement an accessible tabbed interface using lists"
              ]
            },
            {
              title: "CSS Tables",
              content: [
                "Table border styling",
                "Table layout (fixed vs auto)",
                "Zebra striping",
                "Responsive table techniques",
                "Accessible table styling"
              ],
              examples: [
                {
                  code: `table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  /* Responsive table */
  @media (max-width: 600px) {
    table, thead, tbody, th, td, tr {
      display: block;
    }
  }`,
                  explanation: "Styled table with responsive considerations"
                }
              ],
              exercises: [
                "Style a data table with zebra striping",
                "Create a responsive table solution",
                "Implement table sorting with CSS highlighting"
              ]
            }
          ]
        },
        {
          title: "Layout & Positioning",
          lessons: [
            {
              title: "CSS Display",
              content: [
                "Display types (block, inline, inline-block)",
                "Flexbox basics",
                "Grid basics",
                "Display none vs visibility hidden",
                "Layout flow concepts"
              ],
              examples: [
                {
                  code: `.block-example {
    display: block;
    width: 200px;
    height: 100px;
    background: red;
  }
  
  .inline-example {
    display: inline;
    /* width/height won't work */
    background: blue;
  }
  
  .inline-block-example {
    display: inline-block;
    width: 100px;
    height: 50px;
    background: green;
  }`,
                  explanation: "Different display types comparison"
                }
              ],
              exercises: [
                "Create a layout mixing different display types",
                "Convert inline elements to block and vice versa",
                "Experiment with display: contents"
              ]
            },
            {
              title: "CSS Max-Width",
              content: [
                "Width vs max-width differences",
                "Responsive container patterns",
                "Media queries with max-width",
                "Fluid typography with max-width",
                "Container queries (new feature)"
              ],
              examples: [
                {
                  code: `.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  /* Fluid typography */
  h1 {
    font-size: clamp(1.5rem, 5vw, 3rem);
  }
  
  /* Container queries */
  @container (min-width: 500px) {
    .card {
      display: flex;
    }
  }`,
                  explanation: "Max-width usage for responsive layouts"
                }
              ],
              exercises: [
                "Create a responsive container with max-width",
                "Implement fluid typography",
                "Experiment with container queries"
              ]
            },
            {
              title: "CSS Positions",
              content: [
                "Static, relative, absolute positioning",
                "Fixed and sticky positioning",
                "Z-index and stacking context",
                "Positioning practical applications",
                "Accessibility considerations"
              ],
              examples: [
                {
                  code: `.relative-box {
    position: relative;
    height: 200px;
    background: #eee;
  }
  
  .absolute-box {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 100px;
    height: 100px;
    background: red;
  }
  
  .sticky-header {
    position: sticky;
    top: 0;
    background: white;
    z-index: 100;
  }`,
                  explanation: "Different positioning types"
                }
              ],
              exercises: [
                "Create a sticky navigation header",
                "Implement tooltips using absolute positioning",
                "Build a modal dialog with proper z-index"
              ]
            },
            {
              title: "CSS Z-Index",
              content: [
                "Stacking order fundamentals",
                "Stacking context creation",
                "Z-index best practices",
                "Common z-index pitfalls",
                "Debugging stacking issues"
              ],
              examples: [
                {
                  code: `.modal {
    position: fixed;
    z-index: 1000;
    /* Creates new stacking context */
  }
  
  .modal-overlay {
    position: fixed;
    z-index: 999;
    /* Will appear below modal */
  }
  
  /* Elements with z-index only work on positioned elements */
  .nav-item {
    position: relative;
    z-index: 1;
  }
  
  .nav-item:hover {
    z-index: 2;
  }`,
                  explanation: "Z-index usage in different contexts"
                }
              ],
              exercises: [
                "Create overlapping elements with proper z-index",
                "Debug a stacking context problem",
                "Implement a dropdown menu with correct z-index"
              ]
            },
            {
              title: "CSS Overflow",
              content: [
                "Overflow visible, hidden, scroll, auto",
                "Text overflow handling",
                "Custom scrollbars",
                "Overflow practical applications",
                "Accessibility considerations"
              ],
              examples: [
                {
                  code: `.scroll-container {
    width: 300px;
    height: 200px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: blue white;
  }
  
  /* Custom scrollbar for WebKit */
  .scroll-container::-webkit-scrollbar {
    width: 8px;
  }
  
  .scroll-container::-webkit-scrollbar-thumb {
    background: blue;
    border-radius: 4px;
  }
  
  .truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }`,
                  explanation: "Overflow control with scrollbar styling"
                }
              ],
              exercises: [
                "Create a scrollable content area with custom scrollbars",
                "Implement text truncation for long content",
                "Build an image gallery with horizontal scrolling"
              ]
            },
            {
              title: "CSS Float",
              content: [
                "Float left/right/none",
                "Clearing floats",
                "Float for text wrapping",
                "Modern alternatives to float",
                "Legacy float-based layouts"
              ],
              examples: [
                {
                  code: `.float-left {
    float: left;
    margin-right: 20px;
    width: 200px;
  }
  
  .clearfix::after {
    content: "";
    display: table;
    clear: both;
  }
  
  /* Modern alternative with flexbox */
  .container {
    display: flex;
    gap: 20px;
  }`,
                  explanation: "Float usage and clearfix technique"
                }
              ],
              exercises: [
                "Create a text wrap around an image using float",
                "Implement a legacy float-based grid system",
                "Convert a float layout to flexbox"
              ]
            },
            {
              title: "CSS Inline-Block",
              content: [
                "Inline-block behavior",
                "Vertical alignment control",
                "Whitespace issues and solutions",
                "Inline-block for grids",
                "Modern alternatives"
              ],
              examples: [
                {
                  code: `.inline-block-item {
    display: inline-block;
    width: 30%;
    vertical-align: top;
    /* Fix whitespace issue */
    margin-right: -4px;
  }
  
  /* Modern alternative with flexbox */
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .container > * {
    flex: 1 1 30%;
  }`,
                  explanation: "Inline-block usage and modern alternatives"
                }
              ],
              exercises: [
                "Create a grid layout with inline-block",
                "Solve the whitespace gap issue",
                "Convert an inline-block layout to flexbox"
              ]
            },
            {
              title: "CSS Align",
              content: [
                "Text alignment",
                "Margin auto for centering",
                "Flexbox alignment properties",
                "Grid alignment properties",
                "Centering techniques comparison"
              ],
              examples: [
                {
                  code: `/* Traditional centering */
  .center-box {
    width: 200px;
    margin: 0 auto;
  }
  
  /* Flexbox centering */
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
  }
  
  /* Grid centering */
  .grid-center {
    display: grid;
    place-items: center;
    height: 300px;
  }
  
  /* Text alignment */
  .text-center {
    text-align: center;
  }`,
                  explanation: "Various alignment techniques"
                }
              ],
              exercises: [
                "Center elements using different methods",
                "Create a vertically centered hero section",
                "Align form elements consistently"
              ]
            }
          ]
        },
        {
          title: "Advanced Selectors & Effects",
          lessons: [
            {
              title: "CSS Pseudo-classes",
              content: [
                "Link states (:hover, :active, etc.)",
                "Form pseudo-classes (:checked, :valid)",
                "Structural pseudo-classes (:nth-child)",
                "User action pseudo-classes (:focus-visible)",
                "Logical pseudo-classes (:not, :is, :where)"
              ],
              examples: [
                {
                  code: `/* Link states */
  a:hover {
    color: red;
  }
  
  /* Form states */
  input:focus {
    outline: 2px solid blue;
  }
  
  input:invalid {
    border-color: red;
  }
  
  /* Structural */
  li:nth-child(odd) {
    background: #f0f0f0;
  }
  
  /* Logical */
  button:not(.disabled) {
    cursor: pointer;
  }`,
                  explanation: "Various pseudo-class examples"
                }
              ],
              exercises: [
                "Style a navigation menu with hover effects",
                "Create a striped table using :nth-child",
                "Implement form validation styling"
              ]
            },
            {
              title: "CSS Pseudo-elements",
              content: [
                "::before and ::after",
                "::first-letter and ::first-line",
                "::selection styling",
                "::marker for list items",
                "Content property usage"
              ],
              examples: [
                {
                  code: `/* Add icons with ::before */
  li::before {
    content: "→ ";
    color: blue;
  }
  
  /* Style first letter */
  p::first-letter {
    font-size: 2em;
    float: left;
  }
  
  /* Custom selection color */
  ::selection {
    background: yellow;
    color: black;
  }
  
  /* Custom list markers */
  li::marker {
    color: red;
    content: "✓ ";
  }`,
                  explanation: "Pseudo-element usage examples"
                }
              ],
              exercises: [
                "Create custom bullets for lists",
                "Add decorative elements with ::before/after",
                "Style selected text differently"
              ]
            },
            {
              title: "CSS Opacity",
              content: [
                "Opacity vs RGBA transparency",
                "Opacity inheritance",
                "Performance considerations",
                "Opacity animations",
                "Accessibility implications"
              ],
              examples: [
                {
                  code: `.opacity-example {
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }
  
  .opacity-example:hover {
    opacity: 1;
  }
  
  /* Alternative with RGBA */
  .rgba-example {
    background-color: rgba(255, 0, 0, 0.5);
    /* Only background is transparent */
  }`,
                  explanation: "Opacity vs RGBA comparison"
                }
              ],
              exercises: [
                "Create a semi-transparent overlay",
                "Implement a fade-in effect on hover",
                "Compare opacity vs RGBA performance"
              ]
            }
          ]
        },
        {
          title: "UI Components",
          lessons: [
            {
              title: "CSS Navigation Bar",
              content: [
                "Horizontal vs vertical navigation",
                "Dropdown menus",
                "Mobile navigation patterns",
                "Accessible navigation",
                "Sticky navigation bars"
              ],
              examples: [
                {
                  code: `<nav class="navbar">
    <ul class="nav-list">
      <li><a href="/">Home</a></li>
      <li class="dropdown">
        <a href="/products">Products</a>
        <ul class="dropdown-menu">
          <li><a href="/products/1">Product 1</a></li>
          <li><a href="/products/2">Product 2</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  
  <style>
  .navbar {
    background: #333;
  }
  
  .nav-list {
    display: flex;
    gap: 1rem;
    list-style: none;
  }
  
  .nav-list a {
    color: white;
    text-decoration: none;
    padding: 1rem;
    display: block;
  }
  
  .dropdown-menu {
    display: none;
    position: absolute;
    background: #444;
  }
  
  .dropdown:hover .dropdown-menu {
    display: block;
  }
  
  @media (max-width: 768px) {
    .nav-list {
      flex-direction: column;
    }
  }
  </style>`,
                  explanation: "Responsive navigation with dropdown"
                }
              ],
              exercises: [
                "Create a responsive navigation bar",
                "Implement a mobile menu with hamburger icon",
                "Build an accessible mega menu"
              ]
            },
            {
              title: "CSS Dropdowns",
              content: [
                "Basic dropdown patterns",
                "CSS-only dropdowns",
                "Accessible dropdown techniques",
                "Dropdown animations",
                "Mega dropdowns"
              ],
              examples: [
                {
                  code: `.dropdown {
    position: relative;
  }
  
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
    min-width: 200px;
    background: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
  
  /* Show on hover */
  .dropdown:hover .dropdown-menu {
    display: block;
    animation: fadeIn 0.3s ease;
  }
  
  /* Accessible version with focus */
  .dropdown:focus-within .dropdown-menu {
    display: block;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }`,
                  explanation: "Animated dropdown with accessibility"
                }
              ],
              exercises: [
                "Create a CSS-only dropdown menu",
                "Add smooth animations to dropdowns",
                "Implement keyboard-navigable dropdowns"
              ]
            },
            {
              title: "CSS Image Gallery",
              content: [
                "Grid-based galleries",
                "Lightbox effects",
                "Responsive image grids",
                "Hover effects",
                "Accessible galleries"
              ],
              examples: [
                {
                  code: `.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  .gallery-item {
    position: relative;
    overflow: hidden;
  }
  
  .gallery img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .gallery-item:hover img {
    transform: scale(1.1);
  }
  
  /* Lightbox overlay */
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.8);
    display: grid;
    place-items: center;
  }`,
                  explanation: "Responsive image gallery with hover effects"
                }
              ],
              exercises: [
                "Create a masonry-style image gallery",
                "Implement a lightbox viewer",
                "Add hover captions to gallery images"
              ]
            },
            {
              title: "CSS Image Sprites",
              content: [
                "Sprite sheet concept",
                "Background positioning",
                "Performance benefits",
                "Hover effects with sprites",
                "Responsive sprites"
              ],
              examples: [
                {
                  code: `.icon {
    width: 32px;
    height: 32px;
    background-image: url('sprite.png');
    background-repeat: no-repeat;
  }
  
  .icon-home {
    background-position: 0 0;
  }
  
  .icon-settings {
    background-position: -32px 0;
  }
  
  .icon:hover {
    background-position-y: -32px;
  }
  
  /* For high DPI screens */
  @media (min-resolution: 2dppx) {
    .icon {
      background-image: url('sprite@2x.png');
      background-size: 64px 64px;
    }
  }`,
                  explanation: "Image sprite implementation with hover"
                }
              ],
              exercises: [
                "Create a sprite sheet for common icons",
                "Implement hover effects using sprites",
                "Optimize a website by converting images to sprites"
              ]
            },
            {
              title: "CSS Attribute Selectors",
              content: [
                "Basic attribute selectors",
                "Value matching patterns",
                "Practical applications",
                "Performance considerations",
                "Combining with other selectors"
              ],
              examples: [
                {
                  code: `/* Links to PDFs */
  a[href$=".pdf"]::after {
    content: " (PDF)";
  }
  
  /* External links */
  a[href^="http"]:not([href*="mysite.com"]) {
    color: red;
  }
  
  /* Input types */
  input[type="text"] {
    border: 1px solid #ccc;
  }
  
  /* Data attributes */
  [data-tooltip] {
    position: relative;
  }
  
  [data-tooltip]::before {
    content: attr(data-tooltip);
    position: absolute;
    /* tooltip styling */
  }`,
                  explanation: "Various attribute selector patterns"
                }
              ],
              exercises: [
                "Style external links differently",
                "Create tooltips using data attributes",
                "Implement form input styling based on type"
              ]
            },
            {
              title: "CSS Forms",
              content: [
                "Form element styling",
                "Validation states",
                "Custom checkboxes/radio buttons",
                "Form layout techniques",
                "Accessible form patterns"
              ],
              examples: [
                {
                  code: `/* Style text inputs */
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  /* Custom checkbox */
  .checkbox-container {
    display: block;
    position: relative;
    padding-left: 2rem;
  }
  
  .checkbox-container input {
    position: absolute;
    opacity: 0;
  }
  
  .checkbox-checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.5rem;
    width: 1.5rem;
    background: #eee;
  }
  
  .checkbox-container input:checked ~ .checkbox-checkmark {
    background: #2196F3;
  }
  
  /* Validation states */
  input:invalid {
    border-color: red;
  }
  
  input:focus:invalid {
    box-shadow: 0 0 5px rgba(255,0,0,0.5);
  }`,
                  explanation: "Comprehensive form styling"
                }
              ],
              exercises: [
                "Style a complete contact form",
                "Create custom checkboxes and radios",
                "Implement accessible form validation"
              ]
            },
            {
              title: "CSS Counters",
              content: [
                "Counter-reset and counter-increment",
                "Nested counters",
                "Custom list numbering",
                "Heading numbering",
                "Practical applications"
              ],
              examples: [
                {
                  code: `/* Numbered headings */
  body {
    counter-reset: section;
  }
  
  h2::before {
    counter-increment: section;
    content: "Section " counter(section) ": ";
  }
  
  /* Nested list numbering */
  ol {
    counter-reset: item;
    list-style: none;
  }
  
  ol li::before {
    counter-increment: item;
    content: counters(item, ".") " ";
  }
  
  /* Custom ordered list */
  .custom-ol {
    counter-reset: my-counter;
    list-style: none;
  }
  
  .custom-ol li {
    counter-increment: my-counter;
  }
  
  .custom-ol li::before {
    content: counter(my-counter, upper-roman) ") ";
    color: blue;
  }`,
                  explanation: "CSS counter usage examples"
                }
              ],
              exercises: [
                "Create a document with numbered headings",
                "Implement nested list numbering",
                "Style a legal document with custom numbering"
              ]
            }
          ]
        },
        {
          title: "Layout Systems",
          lessons: [
            {
              title: "CSS Website Layout",
              content: [
                "Header, main, footer structure",
                "Sidebar layouts",
                "Responsive layout patterns",
                "Holy Grail layout",
                "Modern layout techniques"
              ],
              examples: [
                {
                  code: `<div class="layout">
    <header>Header</header>
    <div class="main-content">
      <main>Main Content</main>
      <aside>Sidebar</aside>
    </div>
    <footer>Footer</footer>
  </div>
  
  <style>
  .layout {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }
  
  .main-content {
    display: grid;
    grid-template-columns: 1fr 300px;
  }
  
  @media (max-width: 768px) {
    .main-content {
      grid-template-columns: 1fr;
    }
  }
  </style>`,
                  explanation: "Responsive website layout with grid"
                }
              ],
              exercises: [
                "Create a classic blog layout",
                "Implement a responsive sidebar",
                "Build a magazine-style layout"
              ]
            },
            {
              title: "CSS Units",
              content: [
                "Absolute units (px, pt, etc.)",
                "Relative units (em, rem, %)",
                "Viewport units (vw, vh, vmin, vmax)",
                "Container units (new cqw, cqh)",
                "Unit best practices"
              ],
              examples: [
                {
                  code: `/* Root font size */
  html {
    font-size: 16px;
  }
  
  /* Relative units */
  .text-example {
    font-size: 1.2rem; /* 19.2px */
    padding: 1em; /* 19.2px */
    margin-bottom: 0.5rem; /* 8px */
  }
  
  /* Viewport units */
  .hero {
    height: 100vh;
    width: 100vw;
  }
  
  /* Container units */
  @container (width > 500px) {
    .card {
      padding: 2cqw;
    }
  }`,
                  explanation: "Different CSS unit usage"
                }
              ],
              exercises: [
                "Create a fluid typography system",
                "Implement a full-viewport hero section",
                "Experiment with container query units"
              ]
            }
          ]
        } ,{
          title: "Visual Effects",
          lessons: [
            {
              title: "CSS Rounded Corners",
              content: [
                "border-radius property",
                "Elliptical corners",
                "Individual corner control",
                "Perfect circles and ovals",
                "Creative shape designs"
              ],
              examples: [
                {
                  code: `.rounded {
    border-radius: 10px; /* uniform corners */
  }
  
  .circle {
    border-radius: 50%; /* perfect circle */
  }
  
  .elliptical {
    border-radius: 50% / 20%; /* horizontal / vertical */
  }
  
  .individual {
    border-radius: 5px 10px 15px 20px; /* top-left top-right bottom-right bottom-left */
  }`,
                  explanation: "Various border-radius applications"
                }
              ],
              exercises: [
                "Create circular profile pictures",
                "Design a speech bubble with custom corners",
                "Make an oval-shaped button"
              ]
            },
            {
              title: "CSS Border Images",
              content: [
                "border-image-source",
                "border-image-slice",
                "border-image-width",
                "border-image-outset",
                "border-image-repeat"
              ],
              examples: [
                {
                  code: `.fancy-border {
    border: 10px solid transparent;
    border-image: url('border.png') 30 round;
    /* shorthand for source, slice, and repeat */
  }
  
  .stretchy-border {
    border-image: linear-gradient(red, blue) 10 stretch;
  }`,
                  explanation: "Custom border images with different styles"
                }
              ],
              exercises: [
                "Create a decorative frame using border images",
                "Implement a gradient border",
                "Design a ticket-style border effect"
              ]
            },
            {
              title: "CSS Backgrounds",
              content: [
                "Multiple backgrounds",
                "Background size and position",
                "Background attachment",
                "Background blend modes",
                "Background clip and origin"
              ],
              examples: [
                {
                  code: `.hero {
    background: 
      linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
      url('hero.jpg') center/cover no-repeat,
      #f0f0f0;
  }
  
  .textured {
    background-color: white;
    background-image: url('texture.png');
    background-blend-mode: multiply;
  }
  
  .fixed-bg {
    background-attachment: fixed;
  }`,
                  explanation: "Advanced background techniques"
                }
              ],
              exercises: [
                "Create a parallax scrolling effect",
                "Design a textured background with blend mode",
                "Implement a full-screen hero with gradient overlay"
              ]
            },
            {
              title: "CSS Gradients",
              content: [
                "Linear gradients",
                "Radial gradients",
                "Conic gradients",
                "Gradient color stops",
                "Creative gradient patterns"
              ],
              examples: [
                {
                  code: `.linear {
    background: linear-gradient(45deg, red, blue);
  }
  
  .radial {
    background: radial-gradient(circle, yellow, orange, red);
  }
  
  .conic {
    background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);
  }
  
  .stripes {
    background: repeating-linear-gradient(
      45deg,
      #606dbc,
      #606dbc 10px,
      #465298 10px,
      #465298 20px
    );
  }`,
                  explanation: "Various gradient types and patterns"
                }
              ],
              exercises: [
                "Create a rainbow gradient button",
                "Design a striped background",
                "Implement a gradient text effect"
              ]
            },
            {
              title: "CSS Shadows",
              content: [
                "Box-shadow property",
                "Text-shadow property",
                "Multiple shadows",
                "Inner shadows",
                "Neumorphism effects"
              ],
              examples: [
                {
                  code: `.card {
    box-shadow: 3px 3px 10px rgba(0,0,0,0.3);
  }
  
  .neu {
    box-shadow: 
      5px 5px 10px #b8b9be,
      -5px -5px 10px #ffffff;
  }
  
  .text-effect {
    text-shadow: 
      1px 1px 1px rgba(0,0,0,0.5),
      0 0 10px rgba(255,255,255,0.8);
  }
  
  .inset {
    box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
  }`,
                  explanation: "Shadow effects for depth and dimension"
                }
              ],
              exercises: [
                "Create a floating card effect",
                "Design a neon text sign",
                "Implement a soft UI (neumorphism) button"
              ]
            },
            {
              title: "CSS Text Effects",
              content: [
                "Text shadows",
                "Gradient text",
                "Stroke/outline text",
                "Text clipping",
                "3D text effects"
              ],
              examples: [
                {
                  code: `.gradient-text {
    background: linear-gradient(to right, red, purple);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  
  .stroke {
    -webkit-text-stroke: 1px black;
    color: white;
  }
  
  .clipped {
    background: url('texture.jpg');
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  
  .three-d {
    text-shadow: 
      1px 1px 0 #ccc,
      2px 2px 0 #bbb,
      3px 3px 0 #aaa;
  }`,
                  explanation: "Creative text styling techniques"
                }
              ],
              exercises: [
                "Create gradient-filled headings",
                "Design outlined text for image overlays",
                "Implement a 3D text effect"
              ]
            },
            {
              title: "CSS Web Fonts",
              content: [
                "@font-face rule",
                "Font formats (woff, woff2)",
                "Font loading strategies",
                "Variable fonts",
                "Font performance optimization"
              ],
              examples: [
                {
                  code: `@font-face {
    font-family: 'CustomFont';
    src: url('customfont.woff2') format('woff2'),
         url('customfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
  .variable-font {
    font-family: 'VariableFont';
    font-weight: 375;
    font-stretch: 85%;
  }
  
  body {
    font-family: 'CustomFont', fallback, sans-serif;
  }`,
                  explanation: "Web font implementation with fallbacks"
                }
              ],
              exercises: [
                "Implement a custom font from Google Fonts",
                "Create typographic hierarchy with variable fonts",
                "Optimize font loading with font-display"
              ]
            }
          ]
        },
        {
          title: "Transforms & Transitions",
          lessons: [
            {
              title: "CSS 2D Transforms",
              content: [
                "Translate, rotate, scale",
                "Skew transformations",
                "Transform origin",
                "Multiple transforms",
                "Performance considerations"
              ],
              examples: [
                {
                  code: `.translate {
    transform: translate(20px, 10px);
  }
  
  .rotate {
    transform: rotate(15deg);
  }
  
  .scale {
    transform: scale(1.2);
  }
  
  .skew {
    transform: skew(10deg, 5deg);
  }
  
  .multiple {
    transform: rotate(5deg) scale(1.1) translateX(10px);
  }`,
                  explanation: "Various 2D transform functions"
                }
              ],
              exercises: [
                "Create a hover effect with scale transform",
                "Design a tilted photo gallery",
                "Implement a card flip animation"
              ]
            },
            {
              title: "CSS Transitions",
              content: [
                "Transition properties",
                "Timing functions",
                "Transition delays",
                "Multiple transitions",
                "Performance best practices"
              ],
              examples: [
                {
                  code: `.button {
    background: blue;
    transition: background 0.3s ease, transform 0.2s ease-out;
  }
  
  .button:hover {
    background: darkblue;
    transform: translateY(-3px);
  }
  
  .menu-item {
    transition: all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }
  
  .menu-item:hover {
    transform: scale(1.1);
  }`,
                  explanation: "Smooth transition effects"
                }
              ],
              exercises: [
                "Create a button with hover and active states",
                "Design an accordion with smooth expansion",
                "Implement a color-changing navigation menu"
              ]
            },
            {
              title: "CSS Animations",
              content: [
                "@keyframes rule",
                "Animation properties",
                "Timing functions",
                "Animation fill modes",
                "Complex animation sequences"
              ],
              examples: [
                {
                  code: `@keyframes slideIn {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  .banner {
    animation: slideIn 0.5s ease-out forwards;
  }
  
  .pulse {
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }`,
                  explanation: "Keyframe animation examples"
                }
              ],
              exercises: [
                "Create a loading spinner animation",
                "Design an attention-grabbing call-to-action",
                "Implement a page entrance animation sequence"
              ]
            }
          ]
        },
        {
          title: "Image Techniques",
          lessons: [
            {
              title: "CSS Image Centering",
              content: [
                "Text-align for inline images",
                "Margin auto technique",
                "Flexbox centering",
                "Grid centering",
                "Background image positioning"
              ],
              examples: [
                {
                  code: `.center-img {
    display: block;
    margin: 0 auto;
  }
  
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .grid-center {
    display: grid;
    place-items: center;
  }
  
  .background-center {
    background-image: url('image.jpg');
    background-position: center;
    background-repeat: no-repeat;
  }`,
                  explanation: "Various image centering techniques"
                }
              ],
              exercises: [
                "Center images in different layout contexts",
                "Create a hero section with centered background image",
                "Implement a responsive image gallery with centered thumbnails"
              ]
            },
            {
              title: "CSS Image Filters",
              content: [
                "Filter functions (blur, brightness, etc.)",
                "Multiple filters",
                "Filter transitions",
                "Backdrop-filter",
                "Performance considerations"
              ],
              examples: [
                {
                  code: `.blur {
    filter: blur(2px);
  }
  
  .darken {
    filter: brightness(0.8) contrast(1.2);
  }
  
  .sepia {
    filter: sepia(100%);
  }
  
  .modal {
    backdrop-filter: blur(5px);
  }
  
  .hover-effect {
    transition: filter 0.3s ease;
  }
  
  .hover-effect:hover {
    filter: grayscale(100%);
  }`,
                  explanation: "Image filter effects and transitions"
                }
              ],
              exercises: [
                "Create a black-and-white image hover effect",
                "Design a frosted glass effect with backdrop-filter",
                "Implement a photo filter selector"
              ]
            }
          ]
        },
        {
          title: "UI Components",
          lessons: [
            {
              title: "CSS Buttons",
              content: [
                "Button states (hover, active, focus)",
                "Gradient buttons",
                "Animated buttons",
                "3D button effects",
                "Accessible button patterns"
              ],
              examples: [
                {
                  code: `.btn {
    display: inline-block;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    background: linear-gradient(to bottom, #4CAF50, #45a049);
    color: white;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 0 #3d8b40;
  }
  
  .btn:hover {
    background: linear-gradient(to bottom, #45a049, #3d8b40);
    transform: translateY(-2px);
    box-shadow: 0 6px 0 #3d8b40;
  }
  
  .btn:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0 #3d8b40;
  }
  
  .btn:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.4);
  }`,
                  explanation: "Interactive button with multiple states"
                }
              ],
              exercises: [
                "Create a call-to-action button with hover effects",
                "Design a 3D toggle switch",
                "Implement an animated loading button"
              ]
            },
            {
              title: "CSS Pagination",
              content: [
                "Basic pagination styling",
                "Active and disabled states",
                "Responsive pagination",
                "Animated page transitions",
                "Accessibility considerations"
              ],
              examples: [
                {
                  code: `.pagination {
    display: flex;
    gap: 4px;
    list-style: none;
  }
  
  .page-item {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    transition: all 0.3s ease;
  }
  
  .page-link {
    text-decoration: none;
    color: #333;
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 40px;
  }
  
  .active {
    background: #4CAF50;
    color: white;
  }
  
  .disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  
  @media (max-width: 600px) {
    .page-item:not(.active):not(:first-child):not(:last-child) {
      display: none;
    }
  }`,
                  explanation: "Responsive pagination component"
                }
              ],
              exercises: [
                "Create a numbered pagination control",
                "Design a 'Load More' button with animation",
                "Implement an accessible pagination system"
              ]
            }
          ]
        },
        {
          title: "Layout Systems",
          lessons: [
            {
              title: "CSS Multiple Columns",
              content: [
                "Column-count and column-width",
                "Column gaps and rules",
                "Column spans",
                "Balanced vs unbalanced columns",
                "Responsive column layouts"
              ],
              examples: [
                {
                  code: `.newspaper {
    column-count: 3;
    column-gap: 2em;
    column-rule: 1px solid #ddd;
  }
  
  .full-width {
    column-span: all;
  }
  
  @media (max-width: 800px) {
    .newspaper {
      column-count: 2;
    }
  }
  
  @media (max-width: 500px) {
    .newspaper {
      column-count: 1;
    }
  }`,
                  explanation: "Multi-column layout with responsive adjustments"
                }
              ],
              exercises: [
                "Create a newspaper-style article layout",
                "Implement a responsive image gallery with columns",
                "Design a masonry layout using CSS columns"
              ]
            },
            {
              title: "CSS @property",
              content: [
                "Custom property registration",
                "Type checking for variables",
                "Animating custom properties",
                "Inheritance control",
                "Browser support considerations"
              ],
              examples: [
                {
                  code: `@property --hue {
    syntax: '<number>';
    inherits: true;
    initial-value: 0;
  }
  
  .animated {
    background: hsl(var(--hue), 100%, 50%);
    animation: hue-rotate 5s infinite linear;
  }
  
  @keyframes hue-rotate {
    to {
      --hue: 360;
    }
  }`,
                  explanation: "Animating custom properties with @property"
                }
              ],
              exercises: [
                "Create a color-shifting animation using @property",
                "Implement a progress bar with animated custom properties",
                "Design a theme switcher with registered properties"
              ]
            },
            {
              title: "CSS Box-Sizing",
              content: [
                "Content-box vs border-box",
                "Global box-sizing reset",
                "Padding and border behavior",
                "Layout consistency",
                "Responsive design implications"
              ],
              examples: [
                {
                  code: `/* Global reset */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  .content-box {
    box-sizing: content-box;
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    /* Total width: 200 + 40 + 10 = 250px */
  }
  
  .border-box {
    box-sizing: border-box;
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    /* Total width: 200px (content area: 150px) */
  }`,
                  explanation: "Box-sizing behavior comparison"
                }
              ],
              exercises: [
                "Create a layout using both box-sizing models",
                "Implement a responsive grid with consistent spacing",
                "Fix a layout problem caused by box-sizing"
              ]
            }
          ]
        },
        {
          title: "Flexbox & Grid",
          lessons: [
            {
              title: "CSS Flex Container",
              content: [
                "Display flex",
                "Flex direction",
                "Flex wrapping",
                "Justify-content",
                "Align-items"
              ],
              examples: [
                {
                  code: `.flex-container {
    display: flex;
    flex-direction: row; /* column, row-reverse, column-reverse */
    flex-wrap: wrap; /* nowrap, wrap-reverse */
    justify-content: center; /* flex-start, flex-end, space-between, etc. */
    align-items: stretch; /* center, flex-start, baseline, etc. */
    gap: 1rem;
  }`,
                  explanation: "Flex container properties"
                }
              ],
              exercises: [
                "Create a responsive navigation bar with flexbox",
                "Design a card layout with flexible wrapping",
                "Implement a vertically centered hero section"
              ]
            },
            {
              title: "CSS Flex Items",
              content: [
                "Flex-grow",
                "Flex-shrink",
                "Flex-basis",
                "Align-self",
                "Order property"
              ],
              examples: [
                {
                  code: `.flex-item {
    flex: 1 0 200px; /* grow shrink basis */
    align-self: center;
    order: 2;
  }
  
  .first-item {
    order: 1;
  }
  
  .special-item {
    flex-grow: 2;
  }`,
                  explanation: "Flex item properties"
                }
              ],
              exercises: [
                "Create a flexible grid with growing items",
                "Design a media object with flexible components",
                "Implement a reorderable layout"
              ]
            },
            {
              title: "CSS Flex Responsiveness",
              content: [
                "Flexbox media queries",
                "Direction changes",
                "Wrapping strategies",
                "Flexible sizing",
                "Mobile-first flexbox"
              ],
              examples: [
                {
                  code: `.responsive-flex {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  @media (min-width: 600px) {
    .responsive-flex {
      flex-direction: row;
    }
    
    .sidebar {
      flex: 0 0 250px;
    }
    
    .main-content {
      flex: 1;
    }
  }`,
                  explanation: "Responsive flexbox layout"
                }
              ],
              exercises: [
                "Create a mobile-first layout with flexbox",
                "Implement a responsive form with flexible inputs",
                "Design a gallery that changes direction on small screens"
              ]
            },
            {
              title: "CSS Grid",
              content: [
                "Display grid",
                "Grid template areas",
                "Gap properties",
                "Grid auto-flow",
                "Grid alignment"
              ],
              examples: [
                {
                  code: `.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto 1fr auto;
    gap: 20px;
    grid-template-areas:
      "header header header"
      "sidebar main main"
      "footer footer footer";
  }
  
  .header { grid-area: header; }
  .sidebar { grid-area: sidebar; }
  .main { grid-area: main; }
  .footer { grid-area: footer; }`,
                  explanation: "Basic grid layout with template areas"
                }
              ],
              exercises: [
                "Create a magazine-style layout with grid",
                "Implement a responsive dashboard with grid areas",
                "Design a photo gallery with automatic grid placement"
              ]
            },
            {
              title: "CSS Grid Columns/Rows",
              content: [
                "Explicit vs implicit tracks",
                "Fraction units (fr)",
                "Minmax function",
                "Repeat notation",
                "Auto-fill vs auto-fit"
              ],
              examples: [
                {
                  code: `.grid {
    display: grid;
    grid-template-columns: 
      minmax(100px, 200px) 
      repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: minmax(100px, auto);
    gap: 1rem;
  }
  
  /* 12-column grid */
  .twelve-col {
    grid-template-columns: repeat(12, 1fr);
  }`,
                  explanation: "Flexible grid track sizing"
                }
              ],
              exercises: [
                "Create a responsive product grid with minmax",
                "Implement a 12-column layout system",
                "Design an image gallery with auto-fill"
              ]
            },
            {
              title: "CSS Grid Container",
              content: [
                "Justify-content",
                "Align-content",
                "Justify-items",
                "Align-items",
                "Place-content shorthand"
              ],
              examples: [
                {
                  code: `.centered-grid {
    display: grid;
    place-content: center;
    min-height: 100vh;
  }
  
  .aligned-grid {
    display: grid;
    justify-content: space-between;
    align-content: start;
    justify-items: center;
    align-items: start;
  }`,
                  explanation: "Grid container alignment properties"
                }
              ],
              exercises: [
                "Create a perfectly centered modal with grid",
                "Design a card layout with aligned grid items",
                "Implement a dashboard with controlled grid spacing"
              ]
            },
            {
              title: "CSS Grid Items",
              content: [
                "Grid-column",
                "Grid-row",
                "Grid-area",
                "Justify-self",
                "Align-self"
              ],
              examples: [
                {
                  code: `.grid-item {
    grid-column: 1 / 3; /* start at 1, end before 3 */
    grid-row: span 2; /* span 2 rows */
  }
  
  .special-item {
    grid-area: 2 / 1 / 4 / 3; /* row-start / col-start / row-end / col-end */
    justify-self: center;
    align-self: end;
  }`,
                  explanation: "Grid item placement properties"
                }
              ],
              exercises: [
                "Create a featured product banner spanning columns",
                "Design a masonry layout with grid item placement",
                "Implement a responsive card with flexible positioning"
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: "javascript",
    title: "JavaScript",
    category: "Frontend Development",
    duration: "10 Weeks",
    description: "From fundamentals to advanced concepts - master JavaScript programming for modern web development",
    rating: 4.9,
    icon: <FaJs className="text-yellow-500\" size={24} />,
    keywords: ["javascript", "es6", "dom", "async", "oop","webdevelopment"],
    content: {
      "overview": "Master JavaScript from basic syntax to advanced concepts including functions, objects, async programming, and modern ES6+ features for building interactive web applications.",
      "prerequisites": ["Basic HTML & CSS knowledge"],
      "modules": [
        {
          "title": "JavaScript Basics",
          "lessons": [
            {
              "title": "JavaScript Introduction",
              "content": [
                "What is JavaScript and its role in web development",
                "JavaScript vs ECMAScript",
                "Client-side vs server-side JavaScript",
                "Writing your first JavaScript code",
                "Developer tools and console"
              ],
              "examples": [
                {
                  "code": "// Hello World example\nconsole.log(\"Hello, World!\");\n\n// Simple interaction\ndocument.getElementById(\"myBtn\").addEventListener(\"click\", function() {\n  alert(\"Button clicked!\");\n});",
                  "explanation": "Basic JavaScript examples showing console output and DOM interaction"
                }
              ],
              "exercises": [
                "Write a script that displays an alert message",
                "Create a simple console log statement",
                "Link a JavaScript file to an HTML document"
              ]
            },
            {
              "title": "JavaScript Output",
              "content": [
                "Using console.log()",
                "DOM manipulation (innerHTML, textContent)",
                "Displaying alerts with alert()",
                "Writing to document with document.write()",
                "Best practices for output in modern JavaScript"
              ],
              "examples": [
                {
                  "code": "// Different output methods\nconsole.log(\"Debugging information\");\n\ndocument.getElementById(\"output\").innerHTML = \"<strong>Hello</strong>\";\n\nalert(\"Important message\");\n\n// document.write() - mostly for demonstration\ndocument.write(\"<h1>Page content</h1>\");",
                  "explanation": "Various ways to output data in JavaScript"
                }
              ],
              "exercises": [
                "Create a script that outputs to both console and webpage",
                "Build a simple calculator that displays results in the DOM",
                "Write a script that shows different alert messages based on user input"
              ]
            },
            {
              "title": "JavaScript Comments",
              "content": [
                "Single-line comments",
                "Multi-line comments",
                "Using comments for documentation",
                "Commenting best practices",
                "Commenting out code for debugging"
              ],
              "examples": [
                {
                  "code": "// This is a single-line comment\n\n/*\n  This is a multi-line comment\n  that spans several lines\n*/\n\n/**\n * JSDoc style documentation\n * @param {number} a - first number\n * @param {number} b - second number\n * @returns {number} sum of a and b\n */\nfunction add(a, b) {\n  return a + b;\n}",
                  "explanation": "Different types of JavaScript comments"
                }
              ],
              "exercises": [
                "Add appropriate comments to existing code",
                "Document a function using JSDoc style comments",
                "Comment out code blocks for testing"
              ]
            }
          ]
        },
        {
          "title": "Syntax & Structure",
          "lessons": [
            {
              "title": "JavaScript Statements",
              "content": [
                "Syntax and structure of statements",
                "Code blocks and whitespace",
                "Semicolon usage and automatic insertion",
                "Comments (single-line and multi-line)",
                "Statement best practices and style guides"
              ],
              "examples": [
                {
                  "code": "// Single statement\nlet x = 5;\n\n// Code block\nif (x > 10) {\n  console.log(\"x is greater than 10\");\n  x = 10;\n}\n\n// Multiple statements on one line (not recommended)\nlet a = 1, b = 2, c = 3;\n\n/*\n  Multi-line comment\n  explaining complex code\n*/\nfunction example() {\n  return \"Hello\";\n}",
                  "explanation": "JavaScript statement syntax and structure"
                }
              ],
              "exercises": [
                "Write properly formatted JavaScript statements",
                "Create a code block with multiple statements",
                "Add comments to explain your code"
              ]
            },
            {
              "title": "JavaScript Syntax",
              "content": [
                "Case sensitivity",
                "Identifiers and naming conventions",
                "Literals and variables",
                "Operators and expressions",
                "Reserved keywords"
              ],
              "examples": [
                {
                  "code": "// Case sensitivity\nlet myVar = \"hello\";\nlet myvar = \"world\"; // Different variable\n\n// Naming conventions\nconst PI = 3.14; // Constants in uppercase\nlet userName = \"John\"; // camelCase for variables\n\n// Literals\nlet decimal = 42;\nlet string = \"Hello\";\nlet array = [1, 2, 3];\nlet object = { key: \"value\" };\n\n// Reserved words\n// let class = \"test\"; // SyntaxError",
                  "explanation": "JavaScript syntax rules and conventions"
                }
              ],
              "exercises": [
                "Create variables following naming conventions",
                "Write expressions using different literals",
                "Identify and fix syntax errors in provided code"
              ]
            },
            {
              "title": "JavaScript Type Conversion",
              "content": [
                "Implicit type conversion",
                "Explicit type conversion",
                "String to number conversion",
                "Number to string conversion",
                "Boolean conversion rules"
              ],
              "examples": [
                {
                  "code": "// Implicit conversion\nlet result = '5' + 2; // '52'\nlet result2 = '5' - 2; // 3\n\n// Explicit conversion\nlet num = Number('123'); // 123\nlet str = String(123); // '123'\nlet bool = Boolean(1); // true\n\n// Truthy/falsy values\nlet val1 = Boolean(''); // false\nlet val2 = Boolean('hello'); // true",
                  "explanation": "Type conversion in JavaScript"
                }
              ],
              "exercises": [
                "Convert between different types explicitly",
                "Predict and test implicit conversion results",
                "Write a function that handles different input types"
              ]
            }
          ]
        },
        {
          "title": "Variables & Data Types",
          "lessons": [
            {
              "title": "JavaScript Variables",
              "content": [
                "var, let, and const declarations",
                "Variable naming rules",
                "Variable scope (global vs local)",
                "Hoisting behavior",
                "Temporal dead zone (TDZ)"
              ],
              "examples": [
                {
                  "code": "// Variable declarations\nvar oldVariable = \"deprecated\";\nlet changeable = \"can change\";\nconst constant = \"cannot change\";\n\n// Scope example\nfunction example() {\n  let localVar = \"only visible here\";\n}\n\n// Hoisting\nconsole.log(hoisted); // undefined\nvar hoisted = \"value\";",
                  "explanation": "Variable declarations and scope in JavaScript"
                }
              ],
              "exercises": [
                "Create variables using let and const",
                "Demonstrate variable scope with examples",
                "Compare hoisting behavior between var and let"
              ]
            },
            {
              "title": "JavaScript Data Types",
              "content": [
                "Primitive types (number, string, boolean, etc.)",
                "typeof operator",
                "Type coercion",
                "Objects and reference types",
                "BigInt for large numbers"
              ],
              "examples": [
                {
                  "code": "// Primitive types\nlet num = 42; // number\nlet str = \"hello\"; // string\nlet bool = true; // boolean\nlet nothing = null; // null\nlet notDefined; // undefined\nlet sym = Symbol(\"unique\"); // symbol\n\n// typeof\nconsole.log(typeof num); // \"number\"\nconsole.log(typeof null); // \"object\" (historical bug)\n\n// Type coercion\nlet coerced = \"5\" + 2; // \"52\" (string)\nlet coerced2 = \"5\" - 2; // 3 (number)\n\n// BigInt\nconst bigNum = 123456789012345678901234567890n;",
                  "explanation": "JavaScript data types and type-related operations"
                }
              ],
              "exercises": [
                "Check types of different values using typeof",
                "Demonstrate type coercion with examples",
                "Create and use BigInt values"
              ]
            },
            {
              "title": "JavaScript Let, Const, Var",
              "content": [
                "Differences between let, const and var",
                "Block scope vs function scope",
                "Redeclaration rules",
                "When to use each declaration type",
                "Best practices for variable declarations"
              ],
              "examples": [
                {
                  "code": "// var - function scoped\nvar x = 1;\nif (true) {\n  var x = 2; // same variable\n}\nconsole.log(x); // 2\n\n// let - block scoped\nlet y = 1;\nif (true) {\n  let y = 2; // different variable\n}\nconsole.log(y); // 1\n\n// const - block scoped and immutable\nconst z = 1;\n// z = 2; // Error",
                  "explanation": "Variable declaration differences"
                }
              ],
              "exercises": [
                "Compare scoping behavior of var and let",
                "Create programs demonstrating const immutability",
                "Refactor old code using var to use let/const"
              ]
            }
          ]
        },
        {
          "title": "Operators & Functions",
          "lessons": [
            {
              "title": "JavaScript Operators",
              "content": [
                "Arithmetic operators",
                "Assignment operators",
                "Comparison operators",
                "Logical operators",
                "Ternary operator",
                "Bitwise operators",
                "Operator precedence"
              ],
              "examples": [
                {
                  "code": "// Arithmetic\nlet sum = 10 + 5;\nlet remainder = 10 % 3;\n\n// Assignment\nlet x = 10;\nx += 5; // x = x + 5\n\n// Comparison\nlet isEqual = 10 == \"10\"; // true (type coercion)\nlet isStrictEqual = 10 === \"10\"; // false\n\n// Logical\nlet and = true && false;\nlet or = true || false;\nlet not = !true;\n\n// Ternary\nlet age = 20;\nlet status = age >= 18 ? \"adult\" : \"minor\";\n\n// Bitwise\nlet bitwiseAnd = 5 & 1; // 0101 & 0001 = 0001 (1)\n\n// Precedence\nlet result = 10 + 5 * 2; // 20, not 30",
                  "explanation": "Various JavaScript operators"
                }
              ],
              "exercises": [
                "Create expressions using different operators",
                "Compare values using strict equality",
                "Rewrite if-else statements using ternary operator",
                "Experiment with bitwise operations"
              ]
            },
            {
              "title": "JavaScript Functions",
              "content": [
                "Function declarations vs expressions",
                "Parameters and arguments",
                "Return values",
                "Arrow functions",
                "Default parameters",
                "Function hoisting",
                "Immediately Invoked Function Expressions (IIFE)"
              ],
              "examples": [
                {
                  "code": "// Function declaration\nfunction greet(name) {\n  return \"Hello, \" + name;\n}\n\n// Function expression\nconst add = function(a, b) {\n  return a + b;\n};\n\n// Arrow function\nconst multiply = (a, b) => a * b;\n\n// Default parameters\nfunction power(base, exponent = 2) {\n  return base ** exponent;\n}\n\n// IIFE\n(function() {\n  console.log(\"Immediately invoked\");\n})();",
                  "explanation": "Different ways to define functions in JavaScript"
                }
              ],
              "exercises": [
                "Create functions using different declaration styles",
                "Write a function that accepts parameters and returns a value",
                "Convert function expressions to arrow functions",
                "Create and use an IIFE"
              ]
            },
            {
              "title": "JavaScript Arrow Functions",
              "content": [
                "Arrow function syntax",
                "Lexical this binding",
                "When to use arrow functions",
                "Limitations of arrow functions",
                "Arrow functions vs regular functions"
              ],
              "examples": [
                {
                  "code": "// Basic arrow function\nconst square = x => x * x;\n\n// Multiple parameters\nconst add = (a, b) => a + b;\n\n// Lexical this\nfunction Timer() {\n  this.seconds = 0;\n  setInterval(() => {\n    this.seconds++;\n    console.log(this.seconds);\n  }, 1000);\n}\n\n// Limitations\nconst obj = {\n  method: () => {\n    console.log(this); // Not what you might expect\n  }\n};",
                  "explanation": "Arrow functions in JavaScript"
                }
              ],
              "exercises": [
                "Convert regular functions to arrow functions",
                "Create an object with methods using arrow functions",
                "Demonstrate lexical this binding"
              ]
            }
          ]
        },
        {
          "title": "Objects & Arrays",
          "lessons": [
            {
              "title": "JavaScript Objects",
              "content": [
                "Object literal syntax",
                "Properties and methods",
                "Accessing properties (dot vs bracket notation)",
                "Object reference behavior",
                "Object shorthand properties",
                "Object constructor",
                "Object display techniques"
              ],
              "examples": [
                {
                  "code": "// Object literal\nconst person = {\n  name: \"Alice\",\n  age: 30,\n  greet: function() {\n    return \"Hello, my name is \" + this.name;\n  }\n};\n\n// Property access\nconsole.log(person.name); // dot notation\nconsole.log(person[\"age\"]); // bracket notation\n\n// Shorthand properties\nconst name = \"Bob\";\nconst age = 25;\nconst person2 = { name, age }; // {name: \"Bob\", age: 25}\n\n// Object constructor\nfunction Book(title, author) {\n  this.title = title;\n  this.author = author;\n}\nconst myBook = new Book(\"JS Guide\", \"John Doe\");",
                  "explanation": "Working with objects in JavaScript"
                }
              ],
              "exercises": [
                "Create an object representing a book with properties and methods",
                "Access and modify object properties using both notations",
                "Use object property shorthand to create objects",
                "Create objects using constructor functions"
              ]
            },
            {
              "title": "JavaScript Arrays",
              "content": [
                "Array creation and initialization",
                "Accessing array elements",
                "Array length property",
                "Basic array operations",
                "Array destructuring",
                "Array methods (push, pop, shift, unshift, etc.)",
                "Array sorting and iteration"
              ],
              "examples": [
                {
                  "code": "// Array creation\nconst fruits = [\"apple\", \"banana\", \"orange\"];\n\n// Accessing elements\nconsole.log(fruits[0]); // \"apple\"\nconsole.log(fruits.length); // 3\n\n// Basic operations\nfruits.push(\"grape\"); // add to end\nfruits.pop(); // remove from end\nfruits.unshift(\"pear\"); // add to beginning\n\n// Destructuring\nconst [first, second] = fruits;\n\n// Array methods\nconst numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(num => num * 2);\nconst evens = numbers.filter(num => num % 2 === 0);",
                  "explanation": "Working with arrays in JavaScript"
                }
              ],
              "exercises": [
                "Create and manipulate arrays with different methods",
                "Access and modify array elements",
                "Use array destructuring to extract values",
                "Implement array sorting and filtering"
              ]
            },
            {
              "title": "JavaScript Array Methods",
              "content": [
                "Iteration methods (forEach, map, filter)",
                "Search methods (find, findIndex, includes)",
                "Transformation methods (reduce, flat, flatMap)",
                "Sorting methods (sort)",
                "Other utility methods (some, every, slice, splice)"
              ],
              "examples": [
                {
                  "code": "const numbers = [1, 2, 3, 4, 5];\n\n// forEach\nnumbers.forEach(num => console.log(num));\n\n// map\nconst squared = numbers.map(num => num * num);\n\n// filter\nconst evens = numbers.filter(num => num % 2 === 0);\n\n// reduce\nconst sum = numbers.reduce((total, num) => total + num, 0);\n\n// find\nconst firstEven = numbers.find(num => num % 2 === 0);\n\n// sort\nconst sorted = numbers.sort((a, b) => b - a);",
                  "explanation": "Array methods in JavaScript"
                }
              ],
              "exercises": [
                "Transform arrays using map and filter",
                "Calculate aggregate values with reduce",
                "Search for elements in arrays",
                "Implement custom sorting logic"
              ]
            }
          ]
        },
        {
          "title": "Control Flow",
          "lessons": [
            {
              "title": "JavaScript If Else",
              "content": [
                "if statement",
                "else and else if clauses",
                "Conditional (ternary) operator",
                "Truthy and falsy values",
                "Switch statement alternative"
              ],
              "examples": [
                {
                  "code": "// Basic if-else\nlet age = 20;\nif (age >= 18) {\n  console.log(\"Adult\");\n} else {\n  console.log(\"Minor\");\n}\n\n// else if\nlet score = 85;\nif (score >= 90) {\n  console.log(\"A\");\n} else if (score >= 80) {\n  console.log(\"B\");\n} else {\n  console.log(\"C or below\");\n}\n\n// Ternary operator\nlet isMember = true;\nlet discount = isMember ? 0.1 : 0;",
                  "explanation": "Conditional logic in JavaScript"
                }
              ],
              "exercises": [
                "Write a function that returns different messages based on input conditions",
                "Convert if-else statements to ternary operator where appropriate",
                "Create a grading system using else-if statements"
              ]
            },
            {
              "title": "JavaScript Switch",
              "content": [
                "Switch statement syntax",
                "Case clauses",
                "Default case",
                "Break statements",
                "When to use switch vs if-else"
              ],
              "examples": [
                {
                  "code": "let day = 3;\nlet dayName;\n\nswitch (day) {\n  case 1:\n    dayName = \"Monday\";\n    break;\n  case 2:\n    dayName = \"Tuesday\";\n    break;\n  case 3:\n    dayName = \"Wednesday\";\n    break;\n  default:\n    dayName = \"Unknown\";\n}",
                  "explanation": "Switch statement in JavaScript"
                }
              ],
              "exercises": [
                "Convert if-else chains to switch statements",
                "Create a calculator using switch for operations",
                "Implement a menu system with switch"
              ]
            },
            {
              "title": "JavaScript Loops",
              "content": [
                "for loop",
                "while loop",
                "do...while loop",
                "for...in loop",
                "for...of loop",
                "Loop control (break, continue)",
                "Labeled statements"
              ],
              "examples": [
                {
                  "code": "// for loop\nfor (let i = 0; i < 5; i++) {\n  console.log(i);\n}\n\n// while loop\nlet count = 0;\nwhile (count < 5) {\n  console.log(count);\n  count++;\n}\n\n// for...of (arrays)\nconst fruits = [\"apple\", \"banana\", \"orange\"];\nfor (let fruit of fruits) {\n  console.log(fruit);\n}\n\n// for...in (objects)\nconst person = {name: \"Alice\", age: 30};\nfor (let key in person) {\n  console.log(key, person[key]);\n}\n\n// break and continue\nfor (let i = 0; i < 10; i++) {\n  if (i === 5) break;\n  if (i % 2 === 0) continue;\n  console.log(i);\n}",
                  "explanation": "Different loop types in JavaScript"
                }
              ],
              "exercises": [
                "Write a loop that prints numbers from 1 to 100",
                "Loop through an array of objects and display their properties",
                "Compare different loop types and their use cases",
                "Use break and continue in loop control"
              ]
            }
          ]
        },
        {
          "title": "Strings & Numbers",
          "lessons": [
            {
              "title": "JavaScript Strings",
              "content": [
                "String creation",
                "String properties and methods",
                "String concatenation",
                "Template literals",
                "String search methods",
                "String manipulation"
              ],
              "examples": [
                {
                  "code": "// String creation\nlet str1 = 'Hello';\nlet str2 = \"World\";\nlet str3 = `Template`;\n\n// Properties and methods\nlet length = str1.length; // 5\nlet upper = str1.toUpperCase(); // \"HELLO\"\nlet substr = str1.substring(1, 3); // \"el\"\n\n// Template literals\nlet name = \"Alice\";\nlet greeting = `Hello, ${name}!`; // \"Hello, Alice!\"\n\n// String search\nlet index = str1.indexOf('e'); // 1\nlet includes = str1.includes('ell'); // true",
                  "explanation": "Working with strings in JavaScript"
                }
              ],
              "exercises": [
                "Create and manipulate strings using various methods",
                "Use template literals for string interpolation",
                "Implement string search functionality",
                "Write functions for string manipulation"
              ]
            },
            {
              "title": "JavaScript Numbers",
              "content": [
                "Number representation",
                "Number methods",
                "Number properties",
                "Math object",
                "Random numbers",
                "Number precision and limitations"
              ],
              "examples": [
                {
                  "code": "// Number representation\nlet num1 = 123;\nlet num2 = 12.34;\nlet num3 = 0xff; // hexadecimal\n\n// Number methods\nlet fixed = num2.toFixed(1); // \"12.3\"\nlet precision = num2.toPrecision(3); // \"12.3\"\n\n// Math object\nlet max = Math.max(10, 20, 30); // 30\nlet random = Math.random(); // random number between 0 and 1\nlet rounded = Math.round(12.5); // 13\n\n// Number properties\nconsole.log(Number.MAX_SAFE_INTEGER); // 9007199254740991",
                  "explanation": "Working with numbers in JavaScript"
                }
              ],
              "exercises": [
                "Perform calculations using Math object methods",
                "Generate random numbers within specific ranges",
                "Format numbers for display",
                "Handle large numbers with BigInt"
              ]
            },
            {
              "title": "JavaScript BigInt",
              "content": [
                "BigInt introduction",
                "Creating BigInt values",
                "BigInt operations",
                "Limitations of BigInt",
                "When to use BigInt"
              ],
              "examples": [
                {
                  "code": "// BigInt creation\nconst bigNum = 123456789012345678901234567890n;\nconst bigNum2 = BigInt(\"123456789012345678901234567890\");\n\n// Operations\nconst sum = bigNum + 1n;\nconst product = bigNum * 2n;\n\n// Limitations\n// Can't mix with regular numbers\n// console.log(bigNum + 1); // Error\n\n// Conversion\nconsole.log(bigNum.toString()); // string representation",
                  "explanation": "Working with BigInt in JavaScript"
                }
              ],
              "exercises": [
                "Perform calculations with very large numbers",
                "Convert between BigInt and other types",
                "Handle BigInt in mathematical operations"
              ]
            }
          ]
        },
        {
          "title": "Dates & Events",
          "lessons": [
            {
              "title": "JavaScript Dates",
              "content": [
                "Date object creation",
                "Date methods",
                "Date formatting",
                "Date arithmetic",
                "Timezone considerations",
                "Date libraries (moment.js alternatives)"
              ],
              "examples": [
                {
                  "code": "// Date creation\nconst now = new Date();\nconst specificDate = new Date(2023, 0, 1); // Jan 1, 2023\nconst fromString = new Date(\"2023-01-01\");\n\n// Date methods\nlet year = now.getFullYear();\nlet month = now.getMonth(); // 0-11\nlet day = now.getDate();\n\n// Date formatting\nconsole.log(now.toDateString());\nconsole.log(now.toISOString());\n\n// Date arithmetic\nconst tomorrow = new Date(now);\ntomorrow.setDate(now.getDate() + 1);",
                  "explanation": "Working with dates in JavaScript"
                }
              ],
              "exercises": [
                "Create and display dates in different formats",
                "Calculate date differences",
                "Implement a countdown timer",
                "Format dates for internationalization"
              ]
            },
            {
              "title": "JavaScript Events",
              "content": [
                "Event handling",
                "Event listeners",
                "Event object properties",
                "Common events (click, load, keypress, etc.)",
                "Event propagation (bubbling and capturing)",
                "Event delegation"
              ],
              "examples": [
                {
                  "code": "// Event listener\nconst button = document.getElementById(\"myButton\");\nbutton.addEventListener(\"click\", function(event) {\n  console.log(\"Button clicked\", event.target);\n});\n\n// Event object\ndocument.addEventListener(\"keydown\", function(event) {\n  console.log(`Key pressed: ${event.key}`);\n});\n\n// Event delegation\ndocument.querySelector(\"ul\").addEventListener(\"click\", function(event) {\n  if (event.target.tagName === \"LI\") {\n    console.log(\"List item clicked:\", event.target.textContent);\n  }\n});",
                  "explanation": "Event handling in JavaScript"
                }
              ],
              "exercises": [
                "Create interactive elements with event listeners",
                "Handle keyboard and mouse events",
                "Implement event delegation for dynamic content",
                "Prevent default behavior and stop propagation"
              ]
            }
          ]
        },
        {
          "title": "Advanced Concepts",
          "lessons": [
            {
              "title": "JavaScript Classes",
              "content": [
                "Class syntax (ES6)",
                "Constructors and methods",
                "Inheritance (extends)",
                "Static methods and properties",
                "Private class fields (#)",
                "Getters and setters"
              ],
              "examples": [
                {
                  "code": "// Basic class\nclass Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n  \n  greet() {\n    return \"Hello, my name is \" + this.name;\n  }\n}\n\n// Inheritance\nclass Student extends Person {\n  constructor(name, age, grade) {\n    super(name, age);\n    this.grade = grade;\n  }\n  \n  study() {\n    return this.name + \" is studying\";\n  }\n}\n\n// Private field\nclass Counter {\n  #count = 0;\n  \n  increment() {\n    this.#count++;\n  }\n  \n  get count() {\n    return this.#count;\n  }\n}\n\n// Static method\nclass MathUtils {\n  static square(x) {\n    return x * x;\n  }\n}",
                  "explanation": "Classes in JavaScript"
                }
              ],
              "exercises": [
                "Create a class hierarchy for different vehicle types",
                "Implement static methods for utility functions",
                "Use private fields to encapsulate internal state",
                "Implement getters and setters for computed properties"
              ]
            },
            {
              "title": "JavaScript Modules",
              "content": [
                "ES6 module syntax (import/export)",
                "Named vs default exports",
                "Module scope",
                "Dynamic imports",
                "Module patterns in older JavaScript",
                "Bundlers (Webpack, Rollup)"
              ],
              "examples": [
                {
                  "code": "// math.js - module file\nexport const PI = 3.14159;\n\nexport function square(x) {\n  return x * x;\n}\n\nexport default function cube(x) {\n  return x * x * x;\n}\n\n// app.js - using the module\nimport { PI, square } from './math.js';\nimport cube from './math.js'; // default import\n\n// Dynamic import\nasync function loadModule() {\n  const module = await import('./math.js');\n  console.log(module.square(4));\n}",
                  "explanation": "JavaScript modules"
                }
              ],
              "exercises": [
                "Create a module that exports multiple utilities",
                "Implement dynamic imports for lazy loading",
                "Convert legacy code to use ES6 modules",
                "Set up a simple module bundler configuration"
              ]
            },
            {
              "title": "JavaScript JSON",
              "content": [
                "JSON syntax",
                "JSON.stringify()",
                "JSON.parse()",
                "Working with JSON data",
                "AJAX and fetch with JSON",
                "JSON best practices"
              ],
              "examples": [
                {
                  "code": "// JSON stringification\nconst person = { name: \"Alice\", age: 30 };\nconst jsonStr = JSON.stringify(person);\n// '{\"name\":\"Alice\",\"age\":30}'\n\n// JSON parsing\nconst jsonObj = JSON.parse(jsonStr);\n// {name: \"Alice\", age: 30}\n\n// Fetching JSON\naasync function fetchData() {\n  const response = await fetch('https://api.example.com/data');\n  const data = await response.json();\n  console.log(data);\n}",
                  "explanation": "Working with JSON in JavaScript"
                }
              ],
              "exercises": [
                "Convert JavaScript objects to JSON and back",
                "Fetch and display JSON data from an API",
                "Handle JSON parsing errors",
                "Implement data storage using JSON"
              ]
            }
          ]
        },
        {
          "title": "Error Handling & Debugging",
          "lessons": [
            {
              "title": "JavaScript Errors",
              "content": [
                "Error types (SyntaxError, ReferenceError, etc.)",
                "try-catch-finally blocks",
                "Throwing custom errors",
                "Error handling best practices",
                "Error objects and stack traces"
              ],
              "examples": [
                {
                  "code": "// Basic error handling\ntry {\n  // Code that might throw an error\n  const result = riskyOperation();\n  console.log(result);\n} catch (error) {\n  console.error(\"An error occurred:\", error.message);\n} finally {\n  console.log(\"This always runs\");\n}\n\n// Custom errors\nclass ValidationError extends Error {\n  constructor(message) {\n    super(message);\n    this.name = \"ValidationError\";\n  }\n}\n\nfunction validateInput(input) {\n  if (!input) {\n    throw new ValidationError(\"Input is required\");\n  }\n}",
                  "explanation": "Error handling in JavaScript"
                }
              ],
              "exercises": [
                "Implement try-catch blocks for error-prone code",
                "Create and throw custom error types",
                "Handle different types of errors specifically",
                "Use finally blocks for cleanup"
              ]
            },
            {
              "title": "JavaScript Debugging",
              "content": [
                "Console methods (log, error, warn, etc.)",
                "Debugger statement",
                "Browser developer tools",
                "Breakpoints and stepping",
                "Performance profiling",
                "Debugging best practices"
              ],
              "examples": [
                {
                  "code": "// Console debugging\nconsole.log(\"Debug information\");\nconsole.table([{a: 1, b: 2}, {a: 3, b: 4}]);\nconsole.group(\"Detailed Debug\");\nconsole.log(\"More info\");\nconsole.groupEnd();\n\n// Debugger statement\nfunction problematicFunction() {\n  debugger; // Execution will pause here if dev tools are open\n  // Problematic code\n}",
                  "explanation": "Debugging techniques in JavaScript"
                }
              ],
              "exercises": [
                "Use console methods for debugging",
                "Set breakpoints in browser developer tools",
                "Step through code execution",
                "Profile performance of JavaScript code"
              ]
            }
          ]
        },
        {
          "title": "Additional Topics",
          "lessons": [
            {
              "title": "JavaScript Regular Expressions",
              "content": [
                "Regex syntax",
                "Pattern matching",
                "Regex methods (test, exec)",
                "String methods with regex (match, replace, etc.)",
                "Common regex patterns"
              ],
              "examples": [
                {
                  "code": "// Regex creation\nconst emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\nconst digitRegex = new RegExp(\"\\\\d\");\n\n// Testing\nconst isValidEmail = emailRegex.test(\"test@example.com\"); // true\n\n// Matching\nconst str = \"The price is $100\";\nconst match = str.match(/\\d+/); // [\"100\"]\n\n// Replacing\nconst newStr = str.replace(/\\d+/, \"200\"); // \"The price is $200\"",
                  "explanation": "Regular expressions in JavaScript"
                }
              ],
              "exercises": [
                "Create regex patterns for common validations",
                "Implement form validation with regex",
                "Use regex for string manipulation",
                "Extract information from text using regex"
              ]
            },
            {
              "title": "JavaScript Style Guide",
              "content": [
                "Code formatting",
                "Naming conventions",
                "Best practices",
                "Linting tools (ESLint)",
                "Code organization",
                "Documentation standards"
              ],
              "examples": [
                {
                  "code": "// Good practices\nconst MAX_COUNT = 100; // Constants in uppercase\n\nfunction calculateTotal(items) { // camelCase for functions\n  return items.reduce((sum, item) => sum + item.price, 0);\n}\n\n// Avoid\nfunction bad_naming() { // Underscores not conventional\n  var x = 10; // var instead of let/const\n  if(x>5){ // No spaces\n    console.log('bad');\n  }\n}",
                  "explanation": "JavaScript style guidelines"
                }
              ],
              "exercises": [
                "Format code according to style guidelines",
                "Set up ESLint for a project",
                "Refactor code to follow best practices",
                "Document code using JSDoc"
              ]
            },
            {
              "title": "JavaScript Iterables",
              "content": [
                "Iterable protocol",
                "Iterator protocol",
                "for...of loop",
                "Built-in iterables (Array, String, Map, Set)",
                "Creating custom iterables",
                "Generators"
              ],
              "examples": [
                {
                  "code": "// Built-in iterables\nconst arr = [1, 2, 3];\nfor (const item of arr) {\n  console.log(item);\n}\n\n// Custom iterable\nconst range = {\n  from: 1,\n  to: 5,\n  [Symbol.iterator]() {\n    let current = this.from;\n    let last = this.to;\n    return {\n      next() {\n        if (current <= last) {\n          return { done: false, value: current++ };\n        } else {\n          return { done: true };\n        }\n      }\n    };\n  }\n};\n\nfor (const num of range) {\n  console.log(num); // 1, 2, 3, 4, 5\n}",
                  "explanation": "Iterables in JavaScript"
                }
              ],
              "exercises": [
                "Create custom iterable objects",
                "Implement iterator protocol for a class",
                "Use generators to create iterables",
                "Compare different iteration techniques"
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: "typescript",
    title: "TypeScript",
    category: "Frontend Development",
    duration: "8 Weeks",
    description: "Master TypeScript - a typed superset of JavaScript that compiles to plain JavaScript for scalable web applications",
    rating: 4.8,
    icon: <SiTypescript className="text-blue-500" size={24} />,
    keywords: ["typescript", "typing", "javascript", "compiler", "es6",],
    content: {
      "overview": "Learn TypeScript from the ground up, understanding how to add static typing to JavaScript for better tooling, scalability, and maintainability of your applications.",
      "prerequisites": ["Basic JavaScript knowledge"],
      "modules": [
        {
          "title": "TypeScript Fundamentals",
          "lessons": [
            {
              "title": "TypeScript Introduction",
              "content": [
                "What is TypeScript and why use it",
                "TypeScript vs JavaScript comparison",
                "TypeScript compiler and workflow",
                "TypeScript's type system benefits",
                "Setting up a TypeScript development environment"
              ],
              "examples": [
                {
                  "code": "// Basic TypeScript example\nfunction greet(name: string): string {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet('TypeScript')); // Hello, TypeScript!\n// console.log(greet(42)); // Error: Argument of type 'number' is not assignable to parameter of type 'string'",
                  "explanation": "Basic TypeScript function with type annotations showing type safety"
                }
              ],
              "exercises": [
                "Install TypeScript compiler and set up a project",
                "Convert a simple JavaScript file to TypeScript",
                "Write a function with type annotations"
              ]
            },
            {
              "title": "TypeScript Get Started",
              "content": [
                "Installing TypeScript",
                "Configuring tsconfig.json",
                "Compiling TypeScript to JavaScript",
                "TypeScript with Node.js",
                "TypeScript with browsers",
                "Development tools and IDE support"
              ],
              "examples": [
                {
                  "code": "// tsconfig.json example\n{\n  \"compilerOptions\": {\n    \"target\": \"es6\",\n    \"module\": \"commonjs\",\n    \"strict\": true,\n    \"outDir\": \"./dist\"\n  },\n  \"include\": [\"src/**/*.ts\"],\n  \"exclude\": [\"node_modules\"]\n}\n\n// Compiling from command line\n// tsc\n// tsc --watch",
                  "explanation": "TypeScript configuration and compilation"
                }
              ],
              "exercises": [
                "Create a tsconfig.json file with appropriate settings",
                "Set up a basic TypeScript project structure",
                "Configure your IDE for TypeScript development"
              ]
            }
          ]
        },
        {
          "title": "Basic Types",
          "lessons": [
            {
              "title": "TypeScript Simple Types",
              "content": [
                "Primitive types: string, number, boolean",
                "Array types",
                "The any type and its implications",
                "Type annotations and type inference",
                "Working with null and undefined"
              ],
              "examples": [
                {
                  "code": "// Simple type examples\nlet name: string = 'Alice';\nlet age: number = 30;\nlet isActive: boolean = true;\n\n// Arrays\nlet numbers: number[] = [1, 2, 3];\nlet names: Array<string> = ['Alice', 'Bob'];\n\n// Type inference\nlet inferredString = 'This is a string'; // TypeScript infers 'string'\nlet inferredNumber = 42; // TypeScript infers 'number'",
                  "explanation": "Basic TypeScript type annotations and inference"
                }
              ],
              "exercises": [
                "Declare variables with different primitive types",
                "Create typed arrays of different kinds",
                "Experiment with type inference"
              ]
            },
            {
              "title": "TypeScript Special Types",
              "content": [
                "The void type",
                "The never type",
                "Literal types",
                "Type aliases",
                "The unknown type",
                "Intersection types"
              ],
              "examples": [
                {
                  "code": "// Special types examples\n// void\nfunction logMessage(message: string): void {\n  console.log(message);\n}\n\n// never\nfunction throwError(message: string): never {\n  throw new Error(message);\n}\n\n// literal types\nlet direction: 'north' | 'south' | 'east' | 'west';\ndirection = 'north'; // OK\n// direction = 'up'; // Error\n\n// type alias\ntype Point = {\n  x: number;\n  y: number;\n};\n\n// unknown\nlet userInput: unknown;\nuserInput = 'Hello';\n// let text: string = userInput; // Error without type checking",
                  "explanation": "Special TypeScript types and their use cases"
                }
              ],
              "exercises": [
                "Create functions that return void and never",
                "Implement literal types for configuration options",
                "Create and use type aliases"
              ]
            }
          ]
        },
        {
          "title": "Data Structures",
          "lessons": [
            {
              "title": "TypeScript Arrays",
              "content": [
                "Array type syntax",
                "Readonly arrays",
                "Array generics",
                "Array tuple types",
                "Common array methods with types"
              ],
              "examples": [
                {
                  "code": "// Array type examples\nlet numbers: number[] = [1, 2, 3];\nlet names: Array<string> = ['Alice', 'Bob'];\n\n// Readonly array\nconst fixedNumbers: ReadonlyArray<number> = [1, 2, 3];\n// fixedNumbers.push(4); // Error\n\n// Array methods with types\nconst doubled = numbers.map(n => n * 2); // number[]\nconst filtered = names.filter(name => name.startsWith('A')); // string[]\n\n// Tuple in array\nlet matrix: [number, number][] = [\n  [1, 2],\n  [3, 4]\n];",
                  "explanation": "Working with arrays in TypeScript"
                }
              ],
              "exercises": [
                "Create typed arrays of different data structures",
                "Implement functions that work with typed arrays",
                "Use array methods with proper type annotations"
              ]
            },
            {
              "title": "TypeScript Tuple",
              "content": [
                "Tuple type syntax",
                "Optional tuple elements",
                "Rest elements in tuples",
                "Readonly tuples",
                "When to use tuples vs interfaces"
              ],
              "examples": [
                {
                  "code": "// Tuple examples\nlet person: [string, number];\nperson = ['Alice', 30]; // OK\n// person = [30, 'Alice']; // Error\n\n// Optional elements\nlet optionalTuple: [string, number?];\noptionalTuple = ['Hello'];\noptionalTuple = ['Hello', 42];\n\n// Rest elements\nlet rgb: [number, number, number, number?];\n\n// Readonly tuple\nconst point: readonly [number, number] = [10, 20];\n// point[0] = 5; // Error\n\n// Named tuples (TypeScript 4.0+)\nlet user: [name: string, age: number];",
                  "explanation": "Working with tuples in TypeScript"
                }
              ],
              "exercises": [
                "Create tuples for different use cases (coordinates, RGB colors)",
                "Implement functions that accept and return tuples",
                "Compare tuples with object types"
              ]
            }
          ]
        },
        {
          "title": "Object Types",
          "lessons": [
            {
              "title": "TypeScript Object Types",
              "content": [
                "Object type syntax",
                "Optional properties",
                "Readonly properties",
                "Index signatures",
                "Excess property checks",
                "Nested object types"
              ],
              "examples": [
                {
                  "code": "// Object type examples\ntype User = {\n  id: number;\n  name: string;\n  email?: string; // Optional\n  readonly createdAt: Date; // Readonly\n};\n\nconst alice: User = {\n  id: 1,\n  name: 'Alice',\n  createdAt: new Date()\n};\n\n// Index signature\ntype Dictionary = {\n  [key: string]: number;\n};\n\nconst scores: Dictionary = {\n  math: 90,\n  science: 85\n};\n\n// Excess property check\n// const bob: User = {\n//   id: 2,\n//   name: 'Bob',\n//   createdAt: new Date(),\n//   age: 30 // Error\n// };",
                  "explanation": "Working with object types in TypeScript"
                }
              ],
              "exercises": [
                "Create complex object types with optional and readonly properties",
                "Implement index signatures for flexible objects",
                "Handle excess property checks in function parameters"
              ]
            },
            {
              "title": "TypeScript Enums",
              "content": [
                "Numeric enums",
                "String enums",
                "Heterogeneous enums",
                "Const enums",
                "When to use enums vs union types"
              ],
              "examples": [
                {
                  "code": "// Enum examples\nenum Direction {\n  North,\n  South,\n  East,\n  West\n}\n\nlet dir: Direction = Direction.North;\n\n// String enum\nenum LogLevel {\n  ERROR = 'ERROR',\n  WARN = 'WARN',\n  INFO = 'INFO',\n  DEBUG = 'DEBUG'\n}\n\n// Const enum\nconst enum Size {\n  Small,\n  Medium,\n  Large\n}\n\n// Usage\nlet selectedSize: Size = Size.Medium;\n\n// Compiled to:\n// let selectedSize = 1;",
                  "explanation": "Working with enums in TypeScript"
                }
              ],
              "exercises": [
                "Create enums for different scenarios (status codes, user roles)",
                "Compare numeric and string enums",
                "Implement const enums and examine the compiled output"
              ]
            }
          ]
        },
        {
          "title": "Advanced Types",
          "lessons": [
            {
              "title": "TypeScript Aliases & Interfaces",
              "content": [
                "Type aliases syntax",
                "Interface syntax",
                "Differences between type aliases and interfaces",
                "Extending interfaces",
                "Merging interfaces",
                "Implementing interfaces in classes"
              ],
              "examples": [
                {
                  "code": "// Type alias example\ntype Point = {\n  x: number;\n  y: number;\n};\n\n// Interface example\ninterface Person {\n  name: string;\n  age: number;\n  greet(): void;\n}\n\n// Extending\ninterface Employee extends Person {\n  employeeId: number;\n}\n\n// Implementing\nclass Manager implements Employee {\n  constructor(\n    public name: string,\n    public age: number,\n    public employeeId: number\n  ) {}\n\n  greet() {\n    console.log(`Hello, I'm ${this.name}`);\n  }\n}\n\n// Differences\n// - Interfaces can be merged\n// - Interfaces can be implemented by classes\n// - Type aliases can represent more complex types",
                  "explanation": "Type aliases vs interfaces in TypeScript"
                }
              ],
              "exercises": [
                "Create type aliases for complex object structures",
                "Define and implement interfaces for classes",
                "Compare merging behavior of interfaces vs type aliases"
              ]
            },
            {
              "title": "TypeScript Union Types",
              "content": [
                "Union type syntax",
                "Type narrowing with typeof",
                "Discriminated unions",
                "Type predicates",
                "Working with union types in functions"
              ],
              "examples": [
                {
                  "code": "// Union type examples\ntype ID = string | number;\n\nfunction printId(id: ID) {\n  if (typeof id === 'string') {\n    console.log(id.toUpperCase());\n  } else {\n    console.log(id.toFixed(2));\n  }\n}\n\n// Discriminated union\ntype Shape =\n  | { kind: 'circle'; radius: number }\n  | { kind: 'square'; size: number }\n  | { kind: 'rectangle'; width: number; height: number };\n\nfunction area(shape: Shape): number {\n  switch (shape.kind) {\n    case 'circle':\n      return Math.PI * shape.radius ** 2;\n    case 'square':\n      return shape.size ** 2;\n    case 'rectangle':\n      return shape.width * shape.height;\n  }\n}\n\n// Type predicate\nfunction isString(value: unknown): value is string {\n  return typeof value === 'string';\n}",
                  "explanation": "Working with union types in TypeScript"
                }
              ],
              "exercises": [
                "Create functions that handle different input types with unions",
                "Implement discriminated unions for complex data structures",
                "Write type predicates for custom type guards"
              ]
            }
          ]
        },
        {
          "title": "Functions & Classes",
          "lessons": [
            {
              "title": "TypeScript Functions",
              "content": [
                "Function type expressions",
                "Parameter type annotations",
                "Return type annotations",
                "Optional and default parameters",
                "Function overloads",
                "this parameter typing"
              ],
              "examples": [
                {
                  "code": "// Function type examples\nfunction add(a: number, b: number): number {\n  return a + b;\n}\n\n// Function type expression\nlet multiply: (x: number, y: number) => number;\nmultiply = function(x, y) { return x * y; };\n\n// Optional and default parameters\nfunction greet(name: string, greeting?: string): string {\n  return `${greeting || 'Hello'}, ${name}`;\n}\n\n// Function overloads\nfunction createDate(timestamp: number): Date;\nfunction createDate(year: number, month: number, day: number): Date;\nfunction createDate(overload1: number, overload2?: number, overload3?: number): Date {\n  if (overload2 !== undefined && overload3 !== undefined) {\n    return new Date(overload1, overload2, overload3);\n  } else {\n    return new Date(overload1);\n  }\n}\n\n// this parameter\ninterface Card {\n  suit: string;\n  card: number;\n}\ninterface Deck {\n  suits: string[];\n  cards: number[];\n  createCardPicker(this: Deck): () => Card;\n}",
                  "explanation": "Function typing in TypeScript"
                }
              ],
              "exercises": [
                "Create typed functions with different parameter patterns",
                "Implement function overloads for flexible APIs",
                "Handle this parameter typing in object methods"
              ]
            },
            {
              "title": "TypeScript Classes",
              "content": [
                "Class property typing",
                "Class method typing",
                "Access modifiers (public, private, protected)",
                "Readonly modifiers",
                "Parameter properties",
                "Abstract classes"
              ],
              "examples": [
                {
                  "code": "// Class example\nclass Person {\n  // Property typing\n  name: string;\n  private age: number;\n  readonly id: number;\n\n  constructor(name: string, age: number, id: number) {\n    this.name = name;\n    this.age = age;\n    this.id = id;\n  }\n\n  // Method typing\n  greet(): string {\n    return `Hello, my name is ${this.name}`;\n  }\n\n  // Parameter properties (shorthand)\n  constructor(public username: string, private password: string) {}\n}\n\n// Abstract class\nabstract class Animal {\n  abstract makeSound(): void;\n\n  move(): void {\n    console.log('Moving...');\n  }\n}\n\nclass Dog extends Animal {\n  makeSound() {\n    console.log('Woof!');\n  }\n}",
                  "explanation": "Class typing in TypeScript"
                }
              ],
              "exercises": [
                "Create classes with typed properties and methods",
                "Implement access modifiers for encapsulation",
                "Extend abstract classes with concrete implementations"
              ]
            }
          ]
        },
        {
          "title": "Type System Features",
          "lessons": [
            {
              "title": "TypeScript Casting",
              "content": [
                "Type assertion syntax",
                "as syntax vs angle-bracket syntax",
                "Type assertions vs type declarations",
                "Non-null assertion operator",
                "Type assertions with unknown and any",
                "When to avoid type assertions"
              ],
              "examples": [
                {
                  "code": "// Type assertion examples\nlet someValue: unknown = 'hello';\n\n// Angle-bracket syntax (not recommended in JSX)\nlet strLength1: number = (<string>someValue).length;\n\n// as syntax (preferred)\nlet strLength2: number = (someValue as string).length;\n\n// Non-null assertion\nfunction liveDangerously(optional?: string) {\n  console.log(optional!.toUpperCase()); // ! asserts non-null\n}\n\n// Double assertion\nlet value: unknown = 'hello';\nlet str: string = value as unknown as string; // Two-step assertion\n\n// When to avoid\n// const x = 'hello' as number; // Error without intermediate step",
                  "explanation": "Type assertions in TypeScript"
                }
              ],
              "exercises": [
                "Use type assertions to handle DOM elements",
                "Properly assert types when migrating from JavaScript",
                "Compare type assertions with proper type guards"
              ]
            },
            {
              "title": "TypeScript Basic Generics",
              "content": [
                "Generic functions",
                "Generic interfaces",
                "Generic classes",
                "Generic constraints",
                "Default type parameters",
                "Common generic patterns"
              ],
              "examples": [
                {
                  "code": "// Generic function\nfunction identity<T>(arg: T): T {\n  return arg;\n}\n\nlet output = identity<string>('hello');\nlet output2 = identity('hello'); // Type inference\n\n// Generic interface\ninterface Box<T> {\n  contents: T;\n}\n\nlet box: Box<string> = { contents: 'hello' };\n\n// Generic class\nclass Queue<T> {\n  private data: T[] = [];\n  push(item: T) { this.data.push(item); }\n  pop(): T | undefined { return this.data.shift(); }\n}\n\n// Generic constraints\nfunction loggingIdentity<T extends { length: number }>(arg: T): T {\n  console.log(arg.length);\n  return arg;\n}",
                  "explanation": "Generics in TypeScript"
                }
              ],
              "exercises": [
                "Create generic functions that work with multiple types",
                "Implement generic data structures (Stack, Queue)",
                "Apply constraints to generic type parameters"
              ]
            }
          ]
        },
        {
          "title": "Utility Types",
          "lessons": [
            {
              "title": "TypeScript Utility Types",
              "content": [
                "Common utility types (Partial, Required, Readonly, etc.)",
                "Record type",
                "Pick and Omit",
                "Exclude and Extract",
                "ReturnType and Parameters",
                "Creating custom utility types"
              ],
              "examples": [
                {
                  "code": "// Utility type examples\ninterface User {\n  id: number;\n  name: string;\n  email?: string;\n}\n\n// Partial\nfunction updateUser(user: User, fields: Partial<User>) {\n  return { ...user, ...fields };\n}\n\n// Readonly\nconst readOnlyUser: Readonly<User> = { id: 1, name: 'Alice' };\n// readOnlyUser.name = 'Bob'; // Error\n\n// Record\nconst userRoles: Record<number, string> = {\n  1: 'admin',\n  2: 'user'\n};\n\n// Pick\ntype UserBasicInfo = Pick<User, 'id' | 'name'>;\n\n// Custom utility type\ntype Nullable<T> = T | null;",
                  "explanation": "Utility types in TypeScript"
                }
              ],
              "exercises": [
                "Use Partial and Required for form handling",
                "Create type-safe dictionaries with Record",
                "Implement custom utility types for your domain"
              ]
            },
            {
              "title": "TypeScript keyof",
              "content": [
                "keyof operator",
                "Indexed access types",
                "Mapped types",
                "Combining keyof with generics",
                "Practical use cases for keyof"
              ],
              "examples": [
                {
                  "code": "// keyof examples\ninterface Person {\n  name: string;\n  age: number;\n  location: string;\n}\n\ntype PersonKeys = keyof Person; // 'name' | 'age' | 'location'\n\nfunction getProperty<T, K extends keyof T>(obj: T, key: K) {\n  return obj[key];\n}\n\nconst person: Person = { name: 'Alice', age: 30, location: 'NY' };\nconst name = getProperty(person, 'name'); // string\n// const unknown = getProperty(person, 'unknown'); // Error\n\n// Mapped types\ntype ReadonlyPerson = {\n  readonly [K in keyof Person]: Person[K];\n};\n\n// Indexed access\ntype AgeType = Person['age']; // number",
                  "explanation": "keyof operator in TypeScript"
                }
              ],
              "exercises": [
                "Create type-safe property accessor functions",
                "Implement mapped types for readonly versions of interfaces",
                "Combine keyof with generics for flexible utilities"
              ]
            }
          ]
        },
        {
          "title": "Advanced Topics",
          "lessons": [
            {
              "title": "TypeScript Null",
              "content": [
                "Null and undefined in TypeScript",
                "Strict null checks",
                "Optional chaining operator (?.)",
                "Nullish coalescing operator (??)",
                "Definite assignment assertions",
                "Non-null assertion operator (!)"
              ],
              "examples": [
                {
                  "code": "// Null and undefined examples\nlet maybeString: string | null | undefined;\n\n// Optional chaining\ninterface User {\n  profile?: {\n    name?: string;\n    email?: string;\n  };\n}\n\nfunction getUserEmail(user: User): string | undefined {\n  return user.profile?.email;\n}\n\n// Nullish coalescing\nlet defaultValue = maybeString ?? 'default';\n\n// Definite assignment assertion\nclass Example {\n  name!: string; // Assert that name will be assigned\n}\n\n// Non-null assertion\nfunction liveDangerously(value?: string) {\n  console.log(value!.toUpperCase());\n}",
                  "explanation": "Handling null and undefined in TypeScript"
                }
              ],
              "exercises": [
                "Implement optional chaining for nested object access",
                "Use nullish coalescing for default values",
                "Compare different null handling approaches"
              ]
            },
            {
              "title": "TypeScript Definitely Typed",
              "content": [
                "What is Definitely Typed",
                "Using @types packages",
                "Declaring types for third-party libraries",
                "Creating declaration files (.d.ts)",
                "Contributing to Definitely Typed",
                "Module augmentation"
              ],
              "examples": [
                {
                  "code": "// Using @types packages\n// npm install --save-dev @types/lodash\n\nimport _ from 'lodash';\n_.chunk([1, 2, 3, 4], 2); // Properly typed\n\n// Declaration file example (custom.d.ts)\ndeclare module 'my-module' {\n  export function doSomething(value: string): number;\n}\n\n// Module augmentation\ndeclare global {\n  interface Array<T> {\n    myCustomMethod(): void;\n  }\n}\n\nArray.prototype.myCustomMethod = function() {\n  console.log('Custom method!');\n};",
                  "explanation": "Working with Definitely Typed in TypeScript"
                }
              ],
              "exercises": [
                "Install and use type definitions for a popular library",
                "Create a simple declaration file for a JavaScript module",
                "Extend existing types with module augmentation"
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: "react",
    title: "React.js",
    category: "Frontend Development",
    duration: "10 Weeks",
    description: "Master React.js - A JavaScript library for building modern, interactive user interfaces",
    rating: 4.9,
    icon: <FaReact className="text-blue-400" size={24} />,
    keywords: ["react", "hooks", "components", "jsx", "frontend","webdevelopment"],
    content: {
      "overview": "Learn React from the ground up, from basic concepts to advanced patterns including hooks, state management, and performance optimization.",
      "prerequisites": ["JavaScript ES6+", "HTML & CSS"],
      "modules": [
        {
          "title": "React Fundamentals",
          "lessons": [
            {
              "title": "React Introduction",
              "content": [
                "What is React and why use it?",
                "React's component-based architecture",
                "Virtual DOM concept",
                "React ecosystem overview",
                "Setting up a React development environment"
              ],
              "examples": [
                {
                  "code": "// First React component\nimport React from 'react';\n\nfunction App() {\n  return (\n    <div>\n      <h1>Hello React!</h1>\n    </div>\n  );\n}\n\nexport default App;",
                  "explanation": "Basic React component structure"
                }
              ],
              "exercises": [
                "Set up a new React project using Create React App",
                "Create a simple component that displays your name",
                "Compare React with other frontend frameworks"
              ]
            },
            {
              "title": "React Render HTML",
              "content": [
                "How React renders to the DOM",
                "The ReactDOM.render() method",
                "Root DOM node concept",
                "Rendering elements vs components",
                "Updating the rendered elements"
              ],
              "examples": [
                {
                  "code": "// Rendering to DOM\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n\nconst element = <h1>Hello, world</h1>;\n\nReactDOM.render(\n  element,\n  document.getElementById('root')\n);",
                  "explanation": "Basic React rendering example"
                }
              ],
              "exercises": [
                "Render different HTML elements to the DOM",
                "Update rendered content after a timeout",
                "Create a clock component that updates every second"
              ]
            },
            {
              "title": "React JSX",
              "content": [
                "JSX syntax and rules",
                "Embedding expressions in JSX",
                "JSX vs HTML differences",
                "JSX and React.createElement()",
                "JSX best practices"
              ],
              "examples": [
                {
                  "code": "// JSX examples\nconst name = 'John Doe';\nconst element = <h1>Hello, {name}</h1>;\n\nconst user = {\n  firstName: 'Jane',\n  lastName: 'Doe'\n};\n\nfunction formatName(user) {\n  return user.firstName + ' ' + user.lastName;\n}\n\nconst greeting = (\n  <div>\n    <h1>Hello, {formatName(user)}!</h1>\n    <p>Current time: {new Date().toLocaleTimeString()}</p>\n  </div>\n);",
                  "explanation": "JSX syntax and expression embedding"
                }
              ],
              "exercises": [
                "Convert HTML snippets to JSX",
                "Create a component that displays dynamic data using JSX",
                "Compare JSX with traditional templating languages"
              ]
            }
          ]
        },
        {
          "title": "React Components",
          "lessons": [
            {
              "title": "React Components Basics",
              "content": [
                "Component concept in React",
                "Function components vs class components",
                "Component composition",
                "Component reusability",
                "Component file structure"
              ],
              "examples": [
                {
                  "code": "// Function component\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n\n// Class component\nclass Welcome extends React.Component {\n  render() {\n    return <h1>Hello, {this.props.name}</h1>;\n  }\n}\n\n// Using components\nfunction App() {\n  return (\n    <div>\n      <Welcome name=\"Sara\" />\n      <Welcome name=\"Cahal\" />\n      <Welcome name=\"Edite\" />\n    </div>\n  );\n}",
                  "explanation": "Component declaration and usage"
                }
              ],
              "exercises": [
                "Create both function and class components",
                "Build a component hierarchy (parent-child components)",
                "Create a reusable Button component"
              ]
            },
            {
              "title": "React Class Components",
              "content": [
                "Class component syntax",
                "The render() method",
                "Component lifecycle methods",
                "State in class components",
                "Event handling in class components"
              ],
              "examples": [
                {
                  "code": "// Class component with state\nclass Counter extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { count: 0 };\n    this.increment = this.increment.bind(this);\n  }\n\n  increment() {\n    this.setState({ count: this.state.count + 1 });\n  }\n\n  render() {\n    return (\n      <div>\n        <p>Count: {this.state.count}</p>\n        <button onClick={this.increment}>Increment</button>\n      </div>\n    );\n  }\n}",
                  "explanation": "Class component with state and event handling"
                }
              ],
              "exercises": [
                "Convert a function component to a class component",
                "Implement a timer using class lifecycle methods",
                "Create a form component with controlled inputs"
              ]
            },
            {
              "title": "React Props",
              "content": [
                "What are props?",
                "Passing props to components",
                "Default props",
                "PropTypes for type checking",
                "Children prop",
                "Props vs state"
              ],
              "examples": [
                {
                  "code": "// Props example\nfunction UserProfile(props) {\n  return (\n    <div>\n      <h2>{props.name}</h2>\n      <p>Age: {props.age}</p>\n      <p>Location: {props.location}</p>\n      {props.children}\n    </div>\n  );\n}\n\n// Using the component\n<UserProfile name=\"John\" age={30} location=\"New York\">\n  <p>Additional information</p>\n</UserProfile>\n\n// PropTypes\nimport PropTypes from 'prop-types';\n\nUserProfile.propTypes = {\n  name: PropTypes.string.isRequired,\n  age: PropTypes.number,\n  location: PropTypes.string\n};\n\nUserProfile.defaultProps = {\n  location: 'Unknown'\n};",
                  "explanation": "Working with props in React"
                }
              ],
              "exercises": [
                "Create a component that accepts and displays props",
                "Implement PropTypes for component validation",
                "Build a component that uses the children prop"
              ]
            }
          ]
        },
        {
          "title": "React Features",
          "lessons": [
            {
              "title": "React Events",
              "content": [
                "Handling events in React",
                "Synthetic events",
                "Binding event handlers",
                "Passing arguments to event handlers",
                "Common event patterns"
              ],
              "examples": [
                {
                  "code": "// Event handling examples\nfunction ButtonClick() {\n  function handleClick(e) {\n    e.preventDefault();\n    console.log('Button clicked!');\n  }\n\n  return <button onClick={handleClick}>Click me</button>;\n}\n\n// With parameter\nclass LoggingButton extends React.Component {\n  handleClick(id) {\n    console.log(`Button ${id} clicked`);\n  }\n\n  render() {\n    return (\n      <button onClick={() => this.handleClick(1)}>\n        Click me\n      </button>\n    );\n  }\n}",
                  "explanation": "Event handling in React components"
                }
              ],
              "exercises": [
                "Create a button with click event handler",
                "Implement a form with submit handler",
                "Create a component with mouseover events"
              ]
            },
            {
              "title": "React Conditionals",
              "content": [
                "Conditional rendering in JSX",
                "Element variables",
                "Inline if with logical && operator",
                "Inline if-else with ternary operator",
                "Preventing component rendering"
              ],
              "examples": [
                {
                  "code": "// Conditional rendering examples\nfunction UserGreeting(props) {\n  if (props.isLoggedIn) {\n    return <h1>Welcome back!</h1>;\n  }\n  return <h1>Please sign up.</h1>;\n}\n\n// Inline with &&\nfunction Mailbox(props) {\n  const unreadMessages = props.unreadMessages;\n  return (\n    <div>\n      <h1>Hello!</h1>\n      {unreadMessages.length > 0 &&\n        <h2>\n          You have {unreadMessages.length} unread messages.\n        </h2>\n      }\n    </div>\n  );\n}\n\n// Ternary operator\nfunction Item({ name, isPacked }) {\n  return (\n    <li>\n      {isPacked ? name + ' ✔' : name + ' ✖'}\n    </li>\n  );\n}",
                  "explanation": "Different conditional rendering techniques"
                }
              ],
              "exercises": [
                "Create a component that shows/hides content based on state",
                "Implement a notification badge with conditional display",
                "Build a login/logout toggle component"
              ]
            },
            {
              "title": "React Lists",
              "content": [
                "Rendering multiple components",
                "Using the map() function",
                "Keys and their importance",
                "Proper key selection",
                "List component best practices"
              ],
              "examples": [
                {
                  "code": "// List rendering example\nfunction NumberList(props) {\n  const numbers = props.numbers;\n  return (\n    <ul>\n      {numbers.map((number) =>\n        <li key={number.toString()}>\n          {number}\n        </li>\n      )}\n    </ul>\n  );\n}\n\n// More complex example\nfunction TodoList() {\n  const todos = [\n    { id: 1, text: 'Learn React', completed: true },\n    { id: 2, text: 'Build a project', completed: false },\n    { id: 3, text: 'Deploy to production', completed: false }\n  ];\n\n  return (\n    <ul>\n      {todos.map((todo) => (\n        <TodoItem \n          key={todo.id}\n          todo={todo}\n        />\n      ))}\n    </ul>\n  );\n}",
                  "explanation": "Rendering lists in React with proper keys"
                }
              ],
              "exercises": [
                "Render a list of items from an array",
                "Create a dynamic list that can add/remove items",
                "Implement a sortable table component"
              ]
            }
          ]
        },
        {
          "title": "Forms & Routing",
          "lessons": [
            {
              "title": "React Forms",
              "content": [
                "Controlled components",
                "Uncontrolled components",
                "Form submission handling",
                "Form validation",
                "Complex forms with multiple inputs",
                "Form libraries overview"
              ],
              "examples": [
                {
                  "code": "// Controlled form example\nclass NameForm extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { value: '' };\n    this.handleChange = this.handleChange.bind(this);\n    this.handleSubmit = this.handleSubmit.bind(this);\n  }\n\n  handleChange(event) {\n    this.setState({ value: event.target.value });\n  }\n\n  handleSubmit(event) {\n    alert('A name was submitted: ' + this.state.value);\n    event.preventDefault();\n  }\n\n  render() {\n    return (\n      <form onSubmit={this.handleSubmit}>\n        <label>\n          Name:\n          <input \n            type=\"text\" \n            value={this.state.value} \n            onChange={this.handleChange} \n          />\n        </label>\n        <input type=\"submit\" value=\"Submit\" />\n      </form>\n    );\n  }\n}",
                  "explanation": "Controlled form components in React"
                }
              ],
              "exercises": [
                "Create a controlled form with validation",
                "Implement a multi-step form wizard",
                "Build a search input with debounced onChange"
              ]
            },
            {
              "title": "React Router",
              "content": [
                "Client-side routing concept",
                "Setting up React Router",
                "Route configuration",
                "Navigation with Link and NavLink",
                "URL parameters",
                "Nested routes",
                "Programmatic navigation"
              ],
              "examples": [
                {
                  "code": "// React Router example\nimport {\n  BrowserRouter as Router,\n  Switch,\n  Route,\n  Link,\n  useParams\n} from 'react-router-dom';\n\nfunction App() {\n  return (\n    <Router>\n      <div>\n        <nav>\n          <ul>\n            <li><Link to=\"/\">Home</Link></li>\n            <li><Link to=\"/about\">About</Link></li>\n            <li><Link to=\"/users\">Users</Link></li>\n          </ul>\n        </nav>\n\n        <Switch>\n          <Route path=\"/about\">\n            <About />\n          </Route>\n          <Route path=\"/users/:id\">\n            <User />\n          </Route>\n          <Route path=\"/users\">\n            <Users />\n          </Route>\n          <Route path=\"/\">\n            <Home />\n          </Route>\n        </Switch>\n      </div>\n    </Router>\n  );\n}\n\nfunction User() {\n  let { id } = useParams();\n  return <h2>User ID: {id}</h2>;\n}",
                  "explanation": "Basic routing with React Router"
                }
              ],
              "exercises": [
                "Set up routing for a multi-page application",
                "Create a navigation menu with active link highlighting",
                "Implement a protected route that requires authentication"
              ]
            }
          ]
        },
        {
          "title": "Performance & Styling",
          "lessons": [
            {
              "title": "React Memo",
              "content": [
                "React.memo for component memoization",
                "When to use memo",
                "Memo vs useMemo",
                "Custom comparison functions",
                "Performance optimization techniques"
              ],
              "examples": [
                {
                  "code": "// React.memo example\nconst MyComponent = React.memo(function MyComponent(props) {\n  /* render using props */\n});\n\n// With custom comparison\nconst areEqual = (prevProps, nextProps) => {\n  return prevProps.value === nextProps.value;\n};\n\nconst MemoizedComponent = React.memo(MyComponent, areEqual);\n\n// Usage\nfunction ParentComponent() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <button onClick={() => setCount(c => c + 1)}>Increment</button>\n      <MemoizedComponent value=\"static\" />\n    </div>\n  );\n}",
                  "explanation": "Using React.memo for performance optimization"
                }
              ],
              "exercises": [
                "Identify components that could benefit from memoization",
                "Implement React.memo in a component hierarchy",
                "Create a custom comparison function for memo"
              ]
            },
            {
              "title": "React CSS Styling",
              "content": [
                "Inline styles in React",
                "CSS classes with className",
                "CSS Modules",
                "CSS-in-JS libraries overview",
                "Styled-components basics",
                "Style best practices"
              ],
              "examples": [
                {
                  "code": "// Styling examples\n// Inline styles\nconst divStyle = {\n  color: 'blue',\n  backgroundColor: 'lightgray'\n};\n\nfunction HelloWorld() {\n  return <div style={divStyle}>Hello World!</div>;\n}\n\n// CSS classes\nimport './Button.css';\n\nfunction Button() {\n  return <button className=\"btn btn-primary\">Click me</button>;\n}\n\n// CSS Modules\nimport styles from './Button.module.css';\n\nfunction Button() {\n  return <button className={styles.primary}>Click me</button>;\n}",
                  "explanation": "Different styling approaches in React"
                }
              ],
              "exercises": [
                "Style a component using inline styles",
                "Create a component with CSS Modules",
                "Implement a themed button using styled-components"
              ]
            },
            {
              "title": "React Sass Styling",
              "content": [
                "Setting up Sass in React",
                "Sass features overview",
                "Nesting styles",
                "Variables and mixins",
                "Sass modules",
                "Sass best practices in React"
              ],
              "examples": [
                {
                  "code": "// Sass example\n// Button.module.scss\n$primary-color: #3498db;\n\n.btn {\n  padding: 10px 15px;\n  border-radius: 4px;\n  \n  &-primary {\n    background-color: $primary-color;\n    color: white;\n    \n    &:hover {\n      background-color: darken($primary-color, 10%);\n    }\n  }\n}\n\n// Using in component\nimport styles from './Button.module.scss';\n\nfunction Button() {\n  return <button className={styles.btnPrimary}>Click me</button>;\n}",
                  "explanation": "Using Sass with React components"
                }
              ],
              "exercises": [
                "Set up Sass in a React project",
                "Create a component with nested Sass styles",
                "Implement a theme system using Sass variables"
              ]
            }
          ]
        },
        {
          "title": "React Hooks",
          "lessons": [
            {
              "title": "React Hooks Introduction",
              "content": [
                "What are hooks?",
                "Why were hooks introduced?",
                "Rules of hooks",
                "Basic hooks overview",
                "When to use hooks"
              ],
              "examples": [
                {
                  "code": "// Basic hooks example\nimport { useState, useEffect } from 'react';\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = `You clicked ${count} times`;\n  });\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}",
                  "explanation": "Basic useState and useEffect hooks"
                }
              ],
              "exercises": [
                "Convert a class component to use hooks",
                "Identify components that could benefit from hooks",
                "Explain the rules of hooks in your own words"
              ]
            },
            {
              "title": "useState Hook",
              "content": [
                "State management with useState",
                "Initializing state",
                "Updating state",
                "Functional updates",
                "Multiple state variables",
                "State management patterns"
              ],
              "examples": [
                {
                  "code": "// useState examples\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n      <button onClick={() => setCount(0)}>Reset</button>\n    </div>\n  );\n}\n\n// Functional update\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  const increment = () => {\n    setCount(prevCount => prevCount + 1);\n  };\n  \n  // ...\n}\n\n// Multiple state variables\nfunction Form() {\n  const [name, setName] = useState('');\n  const [email, setEmail] = useState('');\n  \n  // ...\n}",
                  "explanation": "Different ways to use useState hook"
                }
              ],
              "exercises": [
                "Create a counter component with useState",
                "Implement a form with multiple state variables",
                "Convert a class component's state to useState hooks"
              ]
            },
            {
              "title": "useEffect Hook",
              "content": [
                "Side effects in React",
                "Effect dependencies",
                "Cleanup functions",
                "Running effects conditionally",
                "Common useEffect patterns",
                "useEffect vs lifecycle methods"
              ],
              "examples": [
                {
                  "code": "// useEffect examples\nfunction Timer() {\n  const [seconds, setSeconds] = useState(0);\n\n  useEffect(() => {\n    const interval = setInterval(() => {\n      setSeconds(s => s + 1);\n    }, 1000);\n    \n    return () => clearInterval(interval);\n  }, []);\n\n  return <div>Seconds: {seconds}</div>;\n}\n\n// Data fetching\nfunction UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n\n  useEffect(() => {\n    async function fetchUser() {\n      const response = await fetch(`/api/users/${userId}`);\n      const data = await response.json();\n      setUser(data);\n    }\n    \n    fetchUser();\n  }, [userId]);\n\n  // ...\n}",
                  "explanation": "Using useEffect for side effects"
                }
              ],
              "exercises": [
                "Create a component that fetches data on mount",
                "Implement a window resize listener with cleanup",
                "Build a component that updates document title"
              ]
            },
            {
              "title": "useContext Hook",
              "content": [
                "Context API overview",
                "Creating and providing context",
                "Consuming context with useContext",
                "Performance considerations",
                "When to use context",
                "Context patterns"
              ],
              "examples": [
                {
                  "code": "// useContext example\nconst ThemeContext = React.createContext('light');\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value=\"dark\">\n      <Toolbar />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction Toolbar() {\n  return <ThemedButton />;\n}\n\nfunction ThemedButton() {\n  const theme = useContext(ThemeContext);\n  return <button className={theme}>I am styled by theme!</button>;\n}",
                  "explanation": "Using context with useContext hook"
                }
              ],
              "exercises": [
                "Create and consume a theme context",
                "Implement a user authentication context",
                "Build a language switcher using context"
              ]
            },
            {
              "title": "useRef Hook",
              "content": [
                "Refs in React",
                "Creating refs with useRef",
                "Accessing DOM elements",
                "Mutable values with refs",
                "Refs vs state",
                "Common use cases"
              ],
              "examples": [
                {
                  "code": "// useRef examples\nfunction TextInputWithFocusButton() {\n  const inputEl = useRef(null);\n  \n  const onButtonClick = () => {\n    inputEl.current.focus();\n  };\n  \n  return (\n    <>\n      <input ref={inputEl} type=\"text\" />\n      <button onClick={onButtonClick}>Focus the input</button>\n    </>\n  );\n}\n\n// Mutable value\nfunction Timer() {\n  const [count, setCount] = useState(0);\n  const intervalRef = useRef();\n  \n  useEffect(() => {\n    intervalRef.current = setInterval(() => {\n      setCount(c => c + 1);\n    }, 1000);\n    \n    return () => clearInterval(intervalRef.current);\n  }, []);\n  \n  // ...\n}",
                  "explanation": "Different uses of useRef hook"
                }
              ],
              "exercises": [
                "Create a component that focuses an input on mount",
                "Implement a previous value tracker with useRef",
                "Build a video player with play/pause controls"
              ]
            },
            {
              "title": "useReducer Hook",
              "content": [
                "Reducer concept",
                "useReducer syntax",
                "State management with reducers",
                "When to useReducer vs useState",
                "Common patterns",
                "Combining with context"
              ],
              "examples": [
                {
                  "code": "// useReducer example\nconst initialState = { count: 0 };\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    case 'decrement':\n      return { count: state.count - 1 };\n    case 'reset':\n      return initialState;\n    default:\n      throw new Error();\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, initialState);\n  \n  return (\n    <>\n      Count: {state.count}\n      <button onClick={() => dispatch({ type: 'increment' })}>+</button>\n      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>\n      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>\n    </>\n  );\n}",
                  "explanation": "State management with useReducer"
                }
              ],
              "exercises": [
                "Convert a useState component to useReducer",
                "Implement a todo list with reducer",
                "Create a form with complex state management"
              ]
            },
            {
              "title": "useCallback Hook",
              "content": [
                "Function reference equality",
                "useCallback syntax",
                "Preventing unnecessary re-renders",
                "Dependency array",
                "When to use useCallback",
                "Performance implications"
              ],
              "examples": [
                {
                  "code": "// useCallback example\nfunction Parent() {\n  const [count, setCount] = useState(0);\n  \n  // Without useCallback - recreated on every render\n  // const handleClick = () => console.log('Clicked');\n  \n  // With useCallback - same function unless dependencies change\n  const handleClick = useCallback(() => {\n    console.log('Clicked', count);\n  }, [count]);\n  \n  return <Child onClick={handleClick} />;\n}\n\nconst Child = React.memo(function Child({ onClick }) {\n  console.log('Child render');\n  return <button onClick={onClick}>Click me</button>;\n});",
                  "explanation": "Using useCallback to optimize performance"
                }
              ],
              "exercises": [
                "Identify components that could benefit from useCallback",
                "Optimize a component hierarchy with useCallback",
                "Compare renders with and without useCallback"
              ]
            },
            {
              "title": "useMemo Hook",
              "content": [
                "Memoization concept",
                "useMemo syntax",
                "Expensive calculations",
                "Dependency array",
                "When to use useMemo",
                "useMemo vs React.memo"
              ],
              "examples": [
                {
                  "code": "// useMemo example\nfunction ExpensiveComponent({ list }) {\n  // Without useMemo - recalculates on every render\n  // const sortedList = list.sort((a, b) => a.value - b.value);\n  \n  // With useMemo - only recalculates when list changes\n  const sortedList = useMemo(() => {\n    return list.sort((a, b) => a.value - b.value);\n  }, [list]);\n  \n  return (\n    <ul>\n      {sortedList.map(item => (\n        <li key={item.id}>{item.value}</li>\n      ))}\n    </ul>\n  );\n}",
                  "explanation": "Using useMemo for performance optimization"
                }
              ],
              "exercises": [
                "Identify expensive calculations that could be memoized",
                "Optimize a component with useMemo",
                "Compare performance with and without useMemo"
              ]
            },
            {
              "title": "Custom Hooks",
              "content": [
                "What are custom hooks?",
                "Extracting component logic",
                "Custom hook conventions",
                "Sharing logic between components",
                "Common custom hook patterns",
                "Testing custom hooks"
              ],
              "examples": [
                {
                  "code": "// Custom hook example\nfunction useWindowSize() {\n  const [size, setSize] = useState({\n    width: window.innerWidth,\n    height: window.innerHeight\n  });\n  \n  useEffect(() => {\n    function handleResize() {\n      setSize({\n        width: window.innerWidth,\n        height: window.innerHeight\n      });\n    }\n    \n    window.addEventListener('resize', handleResize);\n    return () => window.removeEventListener('resize', handleResize);\n  }, []);\n  \n  return size;\n}\n\n// Using the custom hook\nfunction ResponsiveComponent() {\n  const { width } = useWindowSize();\n  \n  return (\n    <div>\n      {width < 768 ? 'Mobile' : 'Desktop'}\n    </div>\n  );\n}",
                  "explanation": "Creating and using custom hooks"
                }
              ],
              "exercises": [
                "Create a custom hook for form handling",
                "Extract data fetching logic into a custom hook",
                "Build a hook for tracking mouse position"
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: "tailwind-css",
    title: "Tailwind CSS",
    category: "Frontend Development",
    duration: "6 Weeks",
    description: "Master Tailwind CSS - A utility-first CSS framework for rapidly building modern websites without leaving your HTML",
    rating: 4.8,
    icon: <SiTailwindcss className="text-blue-500" size={24} />,
    keywords: ["tailwind", "css", "utility-first", "styling", "frontend","webdevelopment"],
    content: {
      "overview": "Learn Tailwind CSS from the ground up, understanding how to use utility classes to build custom designs without writing custom CSS.",
      "prerequisites": ["HTML", "Basic CSS"],
      "modules": [
        {
          "title": "Tailwind CSS Fundamentals",
          "lessons": [
            {
              "title": "Introduction to Tailwind CSS",
              "content": [
                "Tailwind CSS is a utility-first CSS framework that enables developers to build modern and responsive user interfaces quickly. Unlike traditional CSS frameworks, which come with predefined components, Tailwind CSS provides low-level utility classes that allow for rapid and flexible styling without writing custom CSS. This approach promotes consistency and scalability while keeping styles modular and reusable."
              ],
              "examples": [
                {
                  "code": "<!-- Basic Tailwind example -->\n<button class=\"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600\">\n  Click me\n</button>",
                  "explanation": "Simple button styled with Tailwind's utility classes showing padding, background color, text color, border radius, and hover state"
                }
              ],
              "exercises": [
                "Install Tailwind CSS in a new project",
                "Create a simple styled component using only utility classes",
                "Compare Tailwind with traditional CSS frameworks"
              ]
            }
          ]
        },
        {
          "title": "Tailwind CSS Layout",
          "lessons": [
            {
              "title": "Tailwind CSS Container",
              "content": [
                "The container class in Tailwind CSS is used to create a responsive, centered container that adapts to different screen sizes. It ensures that the content is properly aligned and does not exceed the specified width constraints."
              ],
              "examples": [
                {
                  "code": "<!-- Container example -->\n<div class=\"container mx-auto px-4\">\n  <!-- Content goes here -->\n</div>",
                  "explanation": "Centered container with automatic horizontal padding that adjusts its max-width at different breakpoints"
                }
              ],
              "exercises": [
                "Create a responsive container with custom max-widths",
                "Implement a layout with multiple nested containers",
                "Modify container behavior in tailwind.config.js"
              ]
            },
            {
              "title": "Tailwind CSS Box Sizing",
              "content": [
                "Tailwind provides utilities for box-sizing, which determine how an element's width and height are calculated. It includes options like border-box and content-box to control layout consistency."
              ],
              "examples": [
                {
                  "code": "<!-- Box sizing examples -->\n<div class=\"box-border p-4 border-4 border-blue-500 w-full\">\n  Border-box behavior (border included in width)\n</div>\n\n<div class=\"box-content p-4 border-4 border-red-500 w-full\">\n  Content-box behavior (border adds to width)\n</div>",
                  "explanation": "Comparison of border-box and content-box behavior showing how borders affect element dimensions differently"
                }
              ],
              "exercises": [
                "Create elements demonstrating both box-sizing models",
                "Implement a layout where box-sizing affects spacing",
                "Set global border-box sizing in your project"
              ]
            },
            {
              "title": "Tailwind CSS Display",
              "content": [
                "The display utilities in Tailwind allow elements to be rendered as block, inline, flex, grid, hidden, and more. These utilities help in structuring content and defining layout behaviors."
              ],
              "examples": [
                {
                  "code": "<!-- Display examples -->\n<div class=\"block md:inline-block lg:hidden xl:flex\">\n  This element changes display at different breakpoints\n</div>\n\n<div class=\"hidden sm:block\">\n  Only visible on sm screens and up\n</div>",
                  "explanation": "Element that changes its display property responsively and one that's hidden on mobile but visible on larger screens"
                }
              ],
              "exercises": [
                "Create a responsive navigation that changes display at breakpoints",
                "Implement a mobile-first hidden/show pattern",
                "Experiment with different display modes for common elements"
              ]
            },
            {
              "title": "Tailwind CSS Float",
              "content": [
                "The float utilities (float-left, float-right, and float-none) enable elements to be positioned to the left or right within a container, often used for inline positioning of images or text."
              ],
              "examples": [
                {
                  "code": "<!-- Float example -->\n<div class=\"bg-gray-200 p-4\">\n  <img src=\"image.jpg\" class=\"float-left mr-4 mb-4 w-32 h-32\">\n  <p>Text wrapping around the floated image...</p>\n  <div class=\"clear-both\"></div>\n</div>",
                  "explanation": "Traditional image float with text wrap and proper clearing"
                }
              ],
              "exercises": [
                "Create a text wrap around a floated image",
                "Implement a multi-column layout with floats",
                "Compare float-based layout with flexbox alternative"
              ]
            },
            {
              "title": "Tailwind CSS Clear",
              "content": [
                "The clear utilities (clear-left, clear-right, clear-both, clear-none) are used to manage the flow of floated elements and prevent unwanted overlap."
              ],
              "examples": [
                {
                  "code": "<!-- Clear example -->\n<div class=\"bg-gray-200 p-4\">\n  <div class=\"float-left w-1/2\">Left column</div>\n  <div class=\"float-right w-1/2\">Right column</div>\n  <div class=\"clear-both\"></div>\n  <p>Content below the floated elements</p>\n</div>",
                  "explanation": "Clearing floated elements to ensure proper layout flow"
                }
              ],
              "exercises": [
                "Create a layout requiring clear property",
                "Implement a clearfix solution",
                "Fix a float collapse issue using clear"
              ]
            },
            {
              "title": "Tailwind CSS Object Fit",
              "content": [
                "The object-fit utilities (object-contain, object-cover, object-fill, etc.) control how images and media elements are resized to fit their container while maintaining their aspect ratio."
              ],
              "examples": [
                {
                  "code": "<!-- Object-fit examples -->\n<div class=\"flex space-x-4\">\n  <div class=\"w-32 h-32\">\n    <img src=\"portrait.jpg\" class=\"w-full h-full object-cover\" alt=\"Cover\">\n  </div>\n  <div class=\"w-32 h-32\">\n    <img src=\"portrait.jpg\" class=\"w-full h-full object-contain\" alt=\"Contain\">\n  </div>\n</div>",
                  "explanation": "Comparison of object-cover (fills container, may crop) vs object-contain (fits entirely, may letterbox)"
                }
              ],
              "exercises": [
                "Create an image gallery with different object-fit modes",
                "Implement a hero banner with perfectly fitted background image",
                "Compare object-fit behaviors with various aspect ratios"
              ]
            },
            {
              "title": "Tailwind CSS Object Position",
              "content": [
                "object-position utilities (object-top, object-center, object-bottom, etc.) define how an object (image or video) is positioned within its container when using object-fit."
              ],
              "examples": [
                {
                  "code": "<!-- Object-position example -->\n<div class=\"w-full h-64 bg-gray-200\">\n  <img src=\"landscape.jpg\" \n       class=\"w-full h-full object-cover object-left-top\" \n       alt=\"Positioned image\">\n</div>",
                  "explanation": "Image that covers its container but is positioned to show the top-left portion"
                }
              ],
              "exercises": [
                "Create a profile picture component with centered positioning",
                "Implement a product showcase with controlled image focus",
                "Build a responsive banner with different focus points at different breakpoints"
              ]
            },
            {
              "title": "Tailwind CSS Overflow",
              "content": [
                "The overflow utilities (overflow-auto, overflow-hidden, overflow-scroll, etc.) control how content is displayed when it exceeds the container's boundaries."
              ],
              "examples": [
                {
                  "code": "<!-- Overflow examples -->\n<div class=\"h-32 overflow-y-auto border p-4\">\n  <p class=\"mb-4\">Long content that will scroll...</p>\n  <p class=\"mb-4\">More content...</p>\n  <p>Bottom content</p>\n</div>\n\n<div class=\"overflow-x-auto\">\n  <table class=\"min-w-full\">...</table>\n</div>",
                  "explanation": "Vertically scrollable content area and horizontally scrollable table"
                }
              ],
              "exercises": [
                "Create a scrollable content section",
                "Implement a horizontal scrolling component",
                "Fix content overflow issues in a layout"
              ]
            },
            {
              "title": "Tailwind CSS Overscroll Behavior",
              "content": [
                "Overscroll behavior utilities (overscroll-auto, overscroll-contain, overscroll-``none) determine how a container reacts when scrolling reaches the boundary, preventing excessive scroll effects."
              ],
              "examples": [
                {
                  "code": "<!-- Overscroll example -->\n<div class=\"h-64 overflow-y-auto overscroll-y-contain\">\n  <div class=\"h-96 p-4\">\n    Scrollable content that won't affect parent scroll when reaching boundaries\n  </div>\n</div>",
                  "explanation": "Scrollable area that prevents scroll chaining to parent elements"
                }
              ],
              "exercises": [
                "Create a modal with contained scrolling",
                "Implement a nested scrollable component",
                "Fix scroll bleed issues in a complex layout"
              ]
            },
            {
              "title": "Tailwind CSS Position",
              "content": [
                "Positioning utilities (static, relative, absolute, fixed, sticky) allow elements to be placed in specific locations within the layout."
              ],
              "examples": [
                {
                  "code": "<!-- Position examples -->\n<div class=\"relative h-32 bg-gray-200\">\n  <div class=\"absolute bottom-0 right-0 bg-blue-500 p-2\">\n    Absolute positioned\n  </div>\n</div>\n\n<div class=\"sticky top-0 bg-red-500 p-4\">\n  Sticky header\n</div>",
                  "explanation": "Absolutely positioned element within relative parent and sticky header that remains at top during scroll"
                }
              ],
              "exercises": [
                "Create a positioned dropdown menu",
                "Implement a sticky navigation bar",
                "Build a complex layout with multiple positioning contexts"
              ]
            },
            {
              "title": "Tailwind CSS Top/Right/Bottom/Left",
              "content": [
                "These utilities (top-0, right-0, bottom-0, left-0, etc.) are used to set an element’s position relative to its parent when using absolute, fixed, or sticky positioning."
              ],
              "examples": [
                {
                  "code": "<!-- Positioning example -->\n<div class=\"relative h-64 bg-gray-200\">\n  <div class=\"absolute top-4 left-4 bg-blue-500 p-2\">Top-left</div>\n  <div class=\"absolute bottom-4 right-4 bg-red-500 p-2\">Bottom-right</div>\n  <div class=\"absolute inset-x-0 bottom-0 bg-green-500 p-2 text-center\">Full width bottom</div>\n</div>",
                  "explanation": "Multiple positioned elements using different offset properties"
                }
              ],
              "exercises": [
                "Create a badge positioned on a corner of an element",
                "Implement a full-width footer that sticks to bottom",
                "Build a tooltip that positions relative to its trigger"
              ]
            },
            {
              "title": "Tailwind CSS Visibility",
              "content": [
                "The visibility utilities (visible, invisible) control whether an element is visible or hidden without affecting the document flow."
              ],
              "examples": [
                {
                  "code": "<!-- Visibility example -->\n<div class=\"invisible md:visible\">\n  Hidden on mobile but visible on medium screens and up\n</div>\n\n<div class=\"visible hover:invisible\">\n  Disappears on hover (but maintains layout space)\n</div>",
                  "explanation": "Responsively visible element and one that disappears on hover while maintaining layout space"
                }
              ],
              "exercises": [
                "Create a skip-to-content link that's visible on focus",
                "Implement a loading indicator that becomes invisible",
                "Compare visibility:hidden with display:none in a layout"
              ]
            },
            {
              "title": "Tailwind CSS Z-Index",
              "content": [
                "The z-index utilities (z-0, z-10, z-50, etc.) manage the stack order of elements, ensuring that some elements appear above or below others in the layout."
              ],
              "examples": [
                {
                  "code": "<!-- Z-index example -->\n<div class=\"relative\">\n  <div class=\"absolute z-10 bg-white p-4 shadow-lg\">\n    This appears above\n  </div>\n  <div class=\"absolute z-0 bg-gray-200 p-4 mt-2 ml-2\">\n    This appears below\n  </div>\n</div>",
                  "explanation": "Stacked elements controlled by z-index with visual depth effect"
                }
              ],
              "exercises": [
                "Create a modal overlay with proper z-index",
                "Implement a dropdown menu that appears above other content",
                "Customize the z-index scale in tailwind.config.js"
              ]
            }
          ]
        },
        {
          "title": "Flexbox Fundamentals",
          "lessons": [
            {
              "title": "Tailwind CSS Flex Direction",
              "content": [
                "Tailwind CSS provides powerful flexbox utilities that allow developers to create flexible and responsive layouts efficiently. Flexbox is useful for aligning items, distributing space, and making components dynamically adjust to different screen sizes.",
                "The flex-direction utilities (flex-row, flex-row-reverse, flex-col, flex-col-reverse) define the direction in which flex container items are placed, either in a row (horizontal) or column (vertical)."
              ],
              "examples": [
                {
                  "code": "<div class=\"flex flex-row\">\n  <div class=\"p-4 bg-blue-500\">Item 1</div>\n  <div class=\"p-4 bg-red-500\">Item 2</div>\n</div>\n\n<div class=\"flex flex-col mt-4\">\n  <div class=\"p-4 bg-blue-500\">Item 1</div>\n  <div class=\"p-4 bg-red-500\">Item 2</div>\n</div>",
                  "explanation": "Horizontal (row) vs vertical (column) flex directions"
                }
              ],
              "exercises": [
                "Create a responsive navbar that switches from row to column on mobile",
                "Build a pricing table with vertical stacking on small screens",
                "Implement a reverse-ordered comment section"
              ]
            },
            {
              "title": "Tailwind CSS Flex Wrap",
              "content": [
                "The flex-wrap utilities (flex-wrap, flex-wrap-reverse, flex-nowrap) control whether flex items should wrap to the next line or stay in a single row."
              ],
              "examples": [
                {
                  "code": "<div class=\"flex flex-wrap gap-4\">\n  <div class=\"w-32 h-32 bg-blue-500\">Item</div>\n  <div class=\"w-32 h-32 bg-red-500\">Item</div>\n  <!-- More items -->\n</div>\n\n<div class=\"flex flex-nowrap overflow-x-auto py-4\">\n  <div class=\"flex-none w-32 h-32 bg-green-500\">Scrollable</div>\n  <!-- More items -->\n</div>",
                  "explanation": "Wrapped multi-line flex vs single-line scrollable flex"
                }
              ],
              "exercises": [
                "Create a responsive image gallery that wraps on small screens",
                "Implement a scrollable horizontal navigation that never wraps",
                "Build a tag cloud with wrapping behavior"
              ]
            },
            {
              "title": "Tailwind CSS Flex (flex-1, flex-auto, etc.)",
              "content": [
                "The flex utility (flex-1, flex-auto, flex-initial, flex-none) determines how flex items grow or shrink relative to the container."
              ],
              "examples": [
                {
                  "code": "<div class=\"flex\">\n  <div class=\"flex-1 p-4 bg-blue-500\">Uses all space</div>\n  <div class=\"flex-1 p-4 bg-red-500\">Equal space</div>\n</div>\n\n<div class=\"flex\">\n  <div class=\"w-64 p-4 bg-green-500\">Fixed width</div>\n  <div class=\"flex-auto p-4 bg-yellow-500\">Takes remaining space</div>\n</div>",
                  "explanation": "flex-1 for equal distribution vs flex-auto for remaining space"
                }
              ],
              "exercises": [
                "Build a dashboard with a fixed sidebar and flexible main content",
                "Create a responsive card grid with flexible items",
                "Implement a form with flexible input fields"
              ]
            },
            {
              "title": "Tailwind CSS Flex Grow",
              "content": [
                "The flex-grow utilities (grow, grow-0) specify whether a flex item should grow to fill available space in its container."
              ],
              "examples": [
                {
                  "code": "<div class=\"flex\">\n  <div class=\"p-4 bg-blue-500\">Static</div>\n  <div class=\"grow p-4 bg-red-500\">Expands</div>\n  <div class=\"p-4 bg-green-500\">Static</div>\n</div>",
                  "explanation": "Middle item grows to fill available space"
                }
              ],
              "exercises": [
                "Create a flexible content area between fixed header/footer",
                "Implement a resizable panel layout",
                "Build a progress bar with growing segments"
              ]
            },
            {
              "title": "Tailwind CSS Flex Shrink",
              "content": [
                "The flex-shrink utilities (shrink, shrink-0) define whether a flex item should shrink when there isn’t enough space in the container."
              ],
              "examples": [
                {
                  "code": "<div class=\"flex\">\n  <div class=\"w-64 shrink-0 p-4 bg-blue-500\">Won't shrink</div>\n  <div class=\"p-4 bg-red-500\">May shrink</div>\n</div>",
                  "explanation": "Left item maintains 256px width even in constrained space"
                }
              ],
              "exercises": [
                "Create a navigation with fixed-width logo and flexible menu",
                "Implement a table with fixed first column",
                "Build a media object with fixed image size"
              ]
            },
            {
              "title": "Tailwind CSS Order",
              "content": [
                "The order utilities (order-first, order-last, order-none, order-1, order-2, etc.) control the visual arrangement of flex items, allowing reordering without changing the HTML structure."
              ],
              "examples": [
                {
                  "code": "<div class=\"flex\">\n  <div class=\"order-2 p-4 bg-blue-500\">Appears second</div>\n  <div class=\"order-1 p-4 bg-red-500\">Appears first</div>\n</div>\n\n<div class=\"flex flex-col md:flex-row\">\n  <div class=\"order-2 md:order-1 p-4 bg-green-500\">Second on mobile</div>\n  <div class=\"order-1 md:order-2 p-4 bg-yellow-500\">First on mobile</div>\n</div>",
                  "explanation": "Manual ordering and responsive order switching"
                }
              ],
              "exercises": [
                "Create a mobile-first layout where sidebar moves on desktop",
                "Implement a featured content card that appears first visually",
                "Build a responsive testimonial section with alternating order"
              ]
            }
          ]
        },
        {
          "title": "Tailwind CSS Grid",
          "lessons": [
            {
              "title": "Tailwind CSS Grid Template Columns",
              "content": [
                "Tailwind CSS provides powerful grid utilities that allow developers to create complex, responsive layouts using the CSS Grid system. These utilities help define rows, columns, and spacing effectively.",
                "The grid-cols-{n} utility sets the number of columns in a grid layout, where {n} represents the number of columns, allowing structured and responsive designs.",
                "Defines the number and size of columns in a grid layout",
                "Utilities: `grid-cols-1` through `grid-cols-12`",
                "Responsive variants: `md:grid-cols-3`",
                "Custom columns via `tailwind.config.js`",
                "Fractional units: `grid-cols-4` creates 4 equal columns"
              ],
              "examples": [
                {
                  "code": "<div class=\"grid grid-cols-3 gap-4\">\n  <div class=\"bg-blue-500 p-4\">1</div>\n  <div class=\"bg-red-500 p-4\">2</div>\n  <div class=\"bg-green-500 p-4\">3</div>\n</div>",
                  "explanation": "3-column grid with equal-width columns"
                }
              ],
              "exercises": [
                "Create a responsive photo gallery with 1 column on mobile and 3 on desktop",
                "Build a dashboard layout with a main content area and sidebar",
                "Implement a pricing table with 4 equal columns"
              ]
            },
            {
              "title": "Tailwind CSS Grid Column Start/End",
              "content": [
                "These utilities (col-start-{n}, col-end-{n}) define where a grid column starts and ends within the layout, providing precise column alignment.",
                "Controls item placement across columns with `col-start-*` and `col-end-*`",
                "Span utilities: `col-span-2` (spans 2 columns)",
                "Line-based placement: `col-start-3` (starts at line 3)",
                "Full-width items: `col-span-full`",
                "Responsive variants: `lg:col-span-4`"
              ],
              "examples": [
                {
                  "code": "<div class=\"grid grid-cols-4 gap-4\">\n  <div class=\"col-span-2 bg-blue-500 p-4\">Wide</div>\n  <div class=\"bg-red-500 p-4\">Normal</div>\n  <div class=\"col-start-4 bg-green-500 p-4\">Positioned</div>\n</div>",
                  "explanation": "Item spanning 2 columns + positioned item"
                }
              ],
              "exercises": [
                "Create a featured product card that spans 2 columns",
                "Build a magazine-style layout with varied column spans",
                "Implement a responsive grid where items reposition at breakpoints"
              ]
            },
            {
              "title": "Tailwind CSS Grid Template Rows",
              "content": [
                "The grid-rows-{n} utility specifies the number of rows in a grid layout, ensuring proper structuring of content.",
                "Defines explicit row tracks with `grid-rows-*`",
                "Utilities: `grid-rows-1` through `grid-rows-6`",
                "Responsive variants: `lg:grid-rows-3`",
                "Auto-rows for implicit grids: `grid-rows-auto`",
                "Combining with `grid-flow-col` for horizontal layouts"
              ],
              "examples": [
                {
                  "code": "<div class=\"grid grid-rows-3 h-64 gap-2\">\n  <div class=\"bg-blue-500 p-4\">Row 1</div>\n  <div class=\"bg-red-500 p-4\">Row 2</div>\n  <div class=\"bg-green-500 p-4\">Row 3</div>\n</div>",
                  "explanation": "Explicit 3-row grid with fixed height"
                }
              ],
              "exercises": [
                "Create a calendar layout with fixed row heights",
                "Build a vertical timeline component",
                "Implement a masonry-style layout with auto-rows"
              ]
            },
            {
              "title": "Tailwind CSS Grid Row Start/End",
              "content": [
                "These utilities (row-start-{n}, row-end-{n}) define the starting and ending positions of a row within the grid, offering control over row placements.",
                "Controls vertical placement with `row-start-*` and `row-end-*`",
                "Span utilities: `row-span-2` (spans 2 rows)",
                "Line-based placement: `row-start-3`",
                "Full-height items: `row-span-full`",
                "Combining with column placement for complex grids"
              ],
              "examples": [
                {
                  "code": "<div class=\"grid grid-cols-3 grid-rows-3 gap-2 h-64\">\n  <div class=\"row-span-2 bg-blue-500 p-4\">Tall</div>\n  <div class=\"col-span-2 bg-red-500 p-4\">Wide</div>\n  <div class=\"bg-green-500 p-4\">Normal</div>\n</div>",
                  "explanation": "Combined row/column spanning"
                }
              ],
              "exercises": [
                "Create a dashboard with a tall sidebar widget",
                "Build a Pinterest-style card layout with varying heights",
                "Implement a responsive grid with items that change row spans"
              ]
            },
            {
              "title": "Tailwind CSS Grid Auto Flow",
              "content": [
                "The grid-flow-{direction} utility (row, col, dense) determines how auto-placed grid items are positioned within the grid container.",
                "Controls auto-placement algorithm with `grid-flow-row` (default), `grid-flow-col`, `grid-flow-dense`",
                "Row-based vs column-based auto flow",
                "Dense packing: `grid-flow-row-dense` fills gaps",
                "Responsive variants: `md:grid-flow-col`",
                "Use cases for each flow type"
              ],
              "examples": [
                {
                  "code": "<div class=\"grid grid-flow-col gap-4 overflow-x-auto py-4\">\n  <div class=\"w-32 h-32 bg-blue-500\">1</div>\n  <!-- 10+ items -->\n</div>",
                  "explanation": "Horizontal scrolling grid"
                }
              ],
              "exercises": [
                "Create a horizontal image scroller",
                "Build a dense-packed gallery that fills gaps",
                "Implement a responsive layout that switches flow direction"
              ]
            },
            {
              "title": "Tailwind CSS Grid Auto Columns",
              "content": [
                "The auto-cols-{size} utility sets the size of implicitly created columns in the grid, ensuring proper spacing.",
                "Controls size of implicit columns with `auto-cols-auto`, `auto-cols-min`, `auto-cols-max`, `auto-cols-fr`",
                "Custom sizing: `auto-cols-[200px]`",
                "Use with `grid-flow-col`",
                "Responsive variants: `lg:auto-cols-min`",
                "Typical use cases for auto columns"
              ],
              "examples": [
                {
                  "code": "<div class=\"grid grid-flow-col auto-cols-min gap-4\">\n  <div class=\"bg-blue-500 p-4\">Short</div>\n  <div class=\"bg-red-500 p-4\">Longer content here</div>\n</div>",
                  "explanation": "Columns sized to content width"
                }
              ],
              "exercises": [
                "Create a dynamic table with columns sized to content",
                "Build a horizontal timeline with varying column widths",
                "Implement a responsive grid that switches to auto columns on mobile"
              ]
            },
            {
              "title": "Tailwind CSS Grid Auto Rows",
              "content": [
                "The auto-rows-{size} utility sets the size of implicitly created rows in the grid, optimizing content distribution.",
                "Controls size of implicit rows with `auto-rows-auto`, `auto-rows-min`, `auto-rows-max`, `auto-rows-fr`",
                "Fixed height rows: `auto-rows-[100px]`",
                "Use with `grid-flow-row`",
                "Responsive variants: `md:auto-rows-fr`",
                "Combining with `grid-template-rows`"
              ],
              "examples": [
                {
                  "code": "<div class=\"grid auto-rows-[100px] gap-4\">\n  <div class=\"bg-blue-500 p-4\">1</div>\n  <div class=\"bg-red-500 p-4\">2</div>\n</div>",
                  "explanation": "Grid with fixed 100px tall rows"
                }
              ],
              "exercises": [
                "Create a masonry layout with uniform row heights",
                "Build a responsive card grid with min-height rows",
                "Implement a calendar with fixed-height days"
              ]
            },
            {
              "title": "Tailwind CSS Gap",
              "content": [
                "The gap-{size} utility defines the spacing between rows and columns in the grid layout, improving readability and alignment in designs.",
                "Controls gutters between grid items with `gap-*`",
                "Separate axis control: `gap-x-*` and `gap-y-*`",
                "Responsive variants: `md:gap-8`",
                "Negative gaps for advanced layouts",
                "Combining with padding for nested grids"
              ],
              "examples": [
                {
                  "code": "<div class=\"grid grid-cols-3 gap-4 md:gap-8\">\n  <div class=\"bg-blue-500 p-4\">1</div>\n  <!-- 8 more items -->\n</div>",
                  "explanation": "Responsive gap sizing"
                }
              ],
              "exercises": [
                "Create a dense grid with small gaps on mobile and large on desktop",
                "Build a staggered layout with different x/y gaps",
                "Implement a card grid with zero gap and internal padding"
              ]
            }
          ]
        },
        {
          "title": "Tailwind CSS Alignment",
          "lessons": [
            {
              "title": "Tailwind CSS Justify Content",
              "content": [
                "Alignment utilities in Tailwind CSS help control the positioning of elements inside flex and grid containers, making layouts more structured and visually appealing.",
                "The justify-content utilities (justify-start, justify-center, justify-end, justify-between, justify-around, justify-evenly) determine how flex and grid items are distributed along the main axis.",
                "Controls horizontal alignment in flex/grid containers",
                "Key utilities: justify-start, justify-center, justify-end, justify-between, justify-around, justify-evenly",
                "Works with both Flexbox and Grid layouts",
                "Responsive variants (e.g., md:justify-between)"
              ],
              "examples": [
                {
                  "code": "<div class=\"flex justify-between\">\n  <div class=\"bg-blue-500 p-4\">Item 1</div>\n  <div class=\"bg-blue-500 p-4\">Item 2</div>\n</div>",
                  "explanation": "Items pushed to opposite ends with equal space between"
                }
              ],
              "exercises": [
                "Create a navigation bar with space-between alignment",
                "Center-align a grid of cards on mobile, then justify-between on desktop",
                "Build a pagination component with evenly spaced page numbers"
              ]
            },
            {
              "title": "Tailwind CSS Justify Items",
              "content": [
                "The justify-items utilities (justify-items-start, justify-items-center, justify-items-end, justify-items-stretch) control the alignment of grid items along the horizontal axis.",
                "Sets default horizontal alignment for all grid items",
                "Utilities: justify-items-start, justify-items-center, justify-items-end, justify-items-stretch",
                "Only affects Grid layouts (not Flexbox)",
                "Can be overridden by justify-self on individual items"
              ],
              "examples": [
                {
                  "code": "<div class=\"grid grid-cols-3 justify-items-center gap-4\">\n  <div class=\"bg-red-500 p-4\">Centered</div>\n  <div class=\"bg-red-500 p-4\">Centered</div>\n</div>",
                  "explanation": "All grid items centered horizontally by default"
                }
              ],
              "exercises": [
                "Create a form grid with right-aligned labels",
                "Build a dashboard with stretched metric cards",
                "Implement a responsive grid that changes default alignment at breakpoints"
              ]
            },
            {
              "title": "Tailwind CSS Justify Self",
              "content": [
                "The justify-self utilities (justify-self-auto, justify-self-start, justify-self-center, justify-self-end, justify-self-stretch) allow individual grid items to override the container’s justify-items setting.",
                "Overrides horizontal alignment for individual grid items",
                "Utilities: justify-self-auto, justify-self-start, justify-self-center, justify-self-end, justify-self-stretch",
                "Useful for creating layout exceptions",
                "Takes precedence over justify-items"
              ],
              "examples": [
                {
                  "code": "<div class=\"grid grid-cols-3 justify-items-start gap-4\">\n  <div class=\"justify-self-end bg-green-500 p-4\">Aligned Right</div>\n  <div class=\"bg-green-500 p-4\">Default Left</div>\n</div>",
                  "explanation": "Single item overriding the container's default alignment"
                }
              ],
              "exercises": [
                "Create a grid with one featured item that breaks alignment",
                "Build a pricing table with a centered featured plan",
                "Implement a card layout with right-aligned action buttons"
              ]
            },
            {
              "title": "Tailwind CSS Align Content",
              "content": [
                "The align-content utilities (content-start, content-center, content-end, content-between, content-around, content-evenly) control the spacing of flex and grid items along the cross-axis.",
                "Controls vertical distribution in multi-line containers",
                "Utilities: content-start, content-center, content-end, content-between, content-around, content-evenly",
                "Only works when container has extra vertical space",
                "Commonly used with flex-wrap"
              ],
              "examples": [
                {
                  "code": "<div class=\"flex flex-wrap h-64 content-around\">\n  <div class=\"w-full bg-purple-500 p-4\">Line 1</div>\n  <div class=\"w-full bg-purple-500 p-4\">Line 2</div>\n</div>",
                  "explanation": "Space distributed evenly around wrapped flex lines"
                }
              ],
              "exercises": [
                "Create a masonry layout with equal vertical spacing",
                "Build a multi-line form with centered content",
                "Implement a timeline with evenly distributed sections"
              ]
            },
            {
              "title": "Tailwind CSS Align Items",
              "content": [
                "The align-items utilities (items-start, items-center, items-end, items-stretch) determine how items align along the cross-axis.",
                "Sets default vertical alignment for all flex/grid items",
                "Utilities: items-start, items-center, items-end, items-baseline, items-stretch",
                "Affects cross-axis alignment",
                "Foundation for consistent vertical spacing"
              ],
              "examples": [
                {
                  "code": "<div class=\"flex items-center h-32 bg-gray-200\">\n  <div class=\"bg-blue-500 p-4\">Vertically Centered</div>\n</div>",
                  "explanation": "Flex item centered vertically in container"
                }
              ],
              "exercises": [
                "Create a navbar with vertically centered links",
                "Build a card grid with baseline-aligned titles",
                "Implement a form with bottom-aligned submit button"
              ]
            },
            {
              "title": "Tailwind CSS Align Self",
              "content": [
                "The align-self utilities (self-auto, self-start, self-center, self-end, self-stretch) allow individual items to override the container’s align-items setting.",
                "Overrides vertical alignment for individual items",
                "Utilities: self-auto, self-start, self-center, self-end, self-stretch, self-baseline",
                "Takes precedence over align-items",
                "Useful for creating layout exceptions"
              ],
              "examples": [
                {
                  "code": "<div class=\"flex items-start h-32 bg-gray-200\">\n  <div class=\"self-center bg-red-500 p-4\">Centered</div>\n  <div class=\"bg-red-500 p-4\">Top</div>\n</div>",
                  "explanation": "Single item overriding container's default alignment"
                }
              ],
              "exercises": [
                "Create a media object with bottom-aligned actions",
                "Build a grid with one stretched featured item",
                "Implement a testimonial with baseline-aligned author info"
              ]
            },
            {
              "title": "Tailwind CSS Place Content",
              "content": [
                "The place-content utilities (place-content-start, place-content-center, place-content-end, place-content-between) adjust alignment for both axes in a grid container.",
                "Shorthand for justify-content + align-content",
                "Utilities: place-content-start, place-content-center, place-content-end, place-content-between, place-content-around, place-content-evenly, place-content-stretch",
                "Perfect for centering grids in both axes",
                "Responsive variants available"
              ],
              "examples": [
                {
                  "code": "<div class=\"grid h-64 place-content-center\">\n  <div class=\"bg-green-500 p-4\">Perfectly Centered</div>\n</div>",
                  "explanation": "Item centered both horizontally and vertically"
                }
              ],
              "exercises": [
                "Create a loading spinner centered in its container",
                "Build a hero section with perfectly centered content",
                "Implement a modal dialog with center alignment"
              ]
            },
            {
              "title": "Tailwind CSS Place Items",
              "content": [
                "The place-items utilities (place-items-start, place-items-center, place-items-end, place-items-stretch) control alignment along both axes.",
                "Shorthand for justify-items + align-items",
                "Utilities: place-items-start, place-items-center, place-items-end, place-items-stretch",
                "Sets default alignment for all grid items",
                "Responsive variants available"
              ],
              "examples": [
                {
                  "code": "<div class=\"grid grid-cols-3 place-items-center gap-4 h-32\">\n  <div class=\"bg-blue-500 p-4\">Centered</div>\n  <div class=\"bg-blue-500 p-4\">Centered</div>\n</div>",
                  "explanation": "All grid items centered in their cells"
                }
              ],
              "exercises": [
                "Create a dashboard with uniformly centered cards",
                "Build an image gallery with stretched items",
                "Implement a responsive grid that changes alignment at breakpoints"
              ]
            },
            {
              "title": "Tailwind CSS Place Self",
              "content": [
                "The place-self utilities (place-self-auto, place-self-start, place-self-center, place-self-end, place-self-stretch) allow overriding of container alignment settings for individual items.",
                "Shorthand for justify-self + align-self",
                "Utilities: place-self-auto, place-self-start, place-self-center, place-self-end, place-self-stretch",
                "Overrides both axes alignment for individual items",
                "Powerful for creating layout exceptions"
              ],
              "examples": [
                {
                  "code": "<div class=\"grid grid-cols-3 place-items-start gap-4\">\n  <div class=\"place-self-center bg-yellow-500 p-4\">Centered</div>\n  <div class=\"bg-yellow-500 p-4\">Top Left</div>\n</div>",
                  "explanation": "Single item overriding container's default alignment"
                }
              ],
              "exercises": [
                "Create a grid with one perfectly centered featured item",
                "Build a pricing table with a highlighted plan",
                "Implement a card layout with a stretched CTA button"
              ]
            }
          ]
        },
        {
          "title": "Tailwind CSS Spacing",
          "lessons": [
            {
              "title": "Tailwind CSS Padding",
              "content": [
                "The p-{size} utility controls the padding inside an element, allowing space between the content and its border. You can specify different padding sizes like p-2, p-4, p-6, etc., or use directional utilities such as pt-4 (padding-top), pr-4 (padding-right), pb-4 (padding-bottom), and pl-4 (padding-left).",
                "Controls inner spacing of elements with `p-{size}` utilities",
                "Directional variants: `pt-` (top), `pr-` (right), `pb-` (bottom), `pl-` (left), `px-` (x-axis), `py-` (y-axis)",
                "Size scale: `p-0` (0px) to `p-96` (24rem), with increments like `p-1` (0.25rem), `p-4` (1rem), etc.",
                "Negative padding not supported (unlike margins)",
                "Responsive variants: `md:p-8`, `lg:px-4`"
              ],
              "examples": [
                {
                  "code": "<div class=\"p-4 bg-blue-500\">Uniform padding</div>\n<div class=\"px-8 py-2 bg-red-500\">X/Y-axis padding</div>\n<div class=\"pt-0 pr-4 pb-8 pl-2 bg-green-500\">Directional padding</div>",
                  "explanation": "Different padding configurations showing uniform, axis-specific, and directional spacing"
                }
              ],
              "exercises": [
                "Create a card component with responsive padding (small on mobile, large on desktop)",
                "Build a navbar with horizontal padding but no vertical padding",
                "Implement a testimonial with asymmetric padding (more bottom than top)"
              ]
            },
            {
              "title": "Tailwind CSS Margin",
              "content": [
                "The m-{size} utility defines the margin outside an element, creating space between it and surrounding elements. Margins can be applied with values like m-2, m-4, m-6, etc., or directionally as mt-4 (margin-top), mr-4 (margin-right), mb-4 (margin-bottom), and ml-4 (margin-left).",
                "Controls outer spacing with `m-{size}` utilities",
                "Directional variants: `mt-`, `mr-`, `mb-`, `ml-`, `mx-`, `my-`",
                "Negative margins: `-m-1` to `-m-96` for pulling elements closer",
                "Auto margins: `mx-auto` for centering blocks",
                "Responsive variants: `md:mt-8`, `lg:-mx-4`"
              ],
              "examples": [
                {
                  "code": "<div class=\"m-4 bg-blue-500\">Uniform margin</div>\n<div class=\"mx-auto w-32 bg-red-500\">Centered with auto margins</div>\n<div class=\"-mt-8 ml-4 bg-green-500\">Negative top margin + left margin</div>",
                  "explanation": "Margin examples showing uniform spacing, centering, and negative offsets"
                }
              ],
              "exercises": [
                "Center a container horizontally using auto margins",
                "Create a stacked card layout with negative margins between cards",
                "Build a responsive grid where items gain larger margins on desktop"
              ]
            },
            {
              "title": "Tailwind CSS Space Between",
              "content": [
                "The space-{size} utility is used in flexbox layouts to define spacing between child elements while keeping them aligned. For example, space-x-4 adds horizontal space between flex children, while space-y-4 adds vertical spacing.",
                "Adds consistent spacing between sibling elements with `space-{axis}-{size}`",
                "Axis variants: `space-x-` (horizontal), `space-y-` (vertical)",
                "Size scale matches padding/margin (e.g., `space-x-4`)",
                "Negative values: `-space-x-2` for tighter grouping",
                "Doesn't add space before first or after last child",
                "Responsive variants: `md:space-y-8`"
              ],
              "examples": [
                {
                  "code": "<div class=\"flex space-x-4\">\n  <div class=\"bg-blue-500 p-4\">Item 1</div>\n  <div class=\"bg-blue-500 p-4\">Item 2</div>\n</div>\n\n<div class=\"grid space-y-2\">\n  <div class=\"bg-red-500 p-4\">Row 1</div>\n  <div class=\"bg-red-500 p-4\">Row 2</div>\n</div>",
                  "explanation": "Horizontal space between flex items and vertical space between grid items"
                }
              ],
              "exercises": [
                "Create a button group with consistent spacing between buttons",
                "Build a vertical list where items gain more space on larger screens",
                "Implement a responsive flex row that switches to stacked items with vertical spacing on mobile"
              ]
            }
          ]
        },
        {
          "title": "Tailwind CSS Sizing",
          "lessons": [
            {
              "title": "Tailwind CSS Width",
              "content": [
                "Tailwind CSS provides utilities to control the sizing of elements, including width and height properties.",
                "The w- utilities (w-0, w-full, w-screen, etc.) control an element’s width, allowing precise adjustments for different screen sizes.",
                "Controls element width with `w-{size}` utilities",
                "Fixed widths: `w-1` (0.25rem) to `w-96` (24rem)",
                "Percentage widths: `w-1/2`, `w-full`, `w-screen`",
                "Responsive variants: `md:w-1/2`, `lg:w-64`",
                "Special values: `w-auto`, `w-min`, `w-max`, `w-fit`"
              ],
              "examples": [
                {
                  "code": "<div class=\"w-full md:w-1/2 lg:w-64 bg-blue-500 p-4\">\n  Responsive width (full → half → fixed)\n</div>",
                  "explanation": "Element that changes width at different breakpoints"
                }
              ],
              "exercises": [
                "Create a responsive sidebar that's full-width on mobile and fixed on desktop",
                "Build a 3-column grid with percentage-based widths",
                "Implement a fluid container that maxes out at 1024px"
              ]
            },
            {
              "title": "Tailwind CSS Min-Width",
              "content": [
                "The max-w- utilities (max-w-xs, max-w-sm, max-w-md, etc.) set an element’s maximum width, preventing it from exceeding a certain size.",
                "Sets minimum width with `min-w-{size}` utilities",
                "Options: `min-w-0`, `min-w-full`, `min-w-min`, `min-w-max`, `min-w-fit`",
                "Prevents elements from shrinking below specified size",
                "Responsive variants: `lg:min-w-32`"
              ],
              "examples": [
                {
                  "code": "<div class=\"min-w-[200px] max-w-md bg-red-500 p-4\">\n  Minimum 200px width but won't exceed max-w-md\n</div>",
                  "explanation": "Element with constrained minimum and maximum width"
                }
              ],
              "exercises": [
                "Create a table with columns that don't collapse too narrow",
                "Build a responsive card with a minimum width threshold",
                "Implement a pricing table where cells maintain minimum width"
              ]
            },
            {
              "title": "Tailwind CSS Max-Width",
              "content": [
                "The max-w- utilities (max-w-xs, max-w-sm, max-w-md, etc.) set an element’s maximum width, preventing it from exceeding a certain size.",
                "Controls maximum width with `max-w-{size}` utilities",
                "Scale: `max-w-xs` (20rem) to `max-w-7xl` (80rem)",
                "Content-based: `max-w-prose`, `max-w-screen-*`",
                "Responsive variants: `md:max-w-2xl`"
              ],
              "examples": [
                {
                  "code": "<div class=\"max-w-prose mx-auto bg-green-500 p-4\">\n  Readable content width (optimal line length)\n</div>",
                  "explanation": "Content constrained to optimal reading width"
                }
              ],
              "exercises": [
                "Create a blog post container with readable line length",
                "Implement a fluid hero section that stops expanding at xl breakpoint",
                "Build a modal dialog with constrained maximum width"
              ]
            },
            {
              "title": "Tailwind CSS Height",
              "content": [
                "The h- utilities (h-0, h-full, h-screen, etc.) define the height of an element.",
                "Controls element height with `h-{size}` utilities",
                "Fixed heights: `h-4` (1rem) to `h-96` (24rem)",
                "Percentage heights: `h-1/2`, `h-full`, `h-screen`",
                "Responsive variants: `md:h-64`, `lg:h-screen`"
              ],
              "examples": [
                {
                  "code": "<div class=\"h-32 md:h-64 bg-purple-500 p-4\">\n  Responsive height (mobile → desktop)\n</div>",
                  "explanation": "Element that grows taller on larger screens"
                }
              ],
              "exercises": [
                "Create a hero section that fills viewport height on desktop",
                "Build a dashboard with fixed-height cards",
                "Implement a responsive image container with aspect ratio"
              ]
            },
            {
              "title": "Tailwind CSS Min-Height",
              "content": [
                "The min-h- utilities (min-h-0, min-h-full, min-h-screen) control the minimum height an element can have.",
                "Sets minimum height with `min-h-{size}` utilities",
                "Options: `min-h-0`, `min-h-full`, `min-h-screen`, `min-h-min`, `min-h-max`, `min-h-fit`",
                "Prevents content from being too short",
                "Responsive variants: `lg:min-h-[400px]`"
              ],
              "examples": [
                {
                  "code": "<div class=\"min-h-screen bg-yellow-500 p-4\">\n  At least viewport height\n</div>",
                  "explanation": "Element that ensures minimum viewport height"
                }
              ],
              "exercises": [
                "Create a footer that pushes to bottom of short pages",
                "Build a loading spinner container with minimum height",
                "Implement a hero section that's never too short"
              ]
            },
            {
              "title": "Tailwind CSS Max-Height",
              "content": [
                "The max-h- utilities (max-h-0, max-h-full, max-h-screen) specify the maximum height an element can take.",
                "Controls maximum height with `max-h-{size}` utilities",
                "Scale: `max-h-32` (8rem) to `max-h-screen`",
                "Useful for scrollable containers",
                "Responsive variants: `md:max-h-96`"
              ],
              "examples": [
                {
                  "code": "<div class=\"max-h-64 overflow-y-auto bg-pink-500 p-4\">\n  Scrollable content (max height 16rem)\n</div>",
                  "explanation": "Container that scrolls when content exceeds max height"
                }
              ],
              "exercises": [
                "Create a dropdown menu with constrained height",
                "Build a scrollable code snippet container",
                "Implement a modal with constrained content area"
              ]
            }
          ]
        },
        {
          "title": "Tailwind CSS Typography",
          "lessons": [
            {
              "title": "Tailwind CSS Font Family",
              "content": [
                "Typography utilities in Tailwind CSS help control the text appearance and formatting in a structured and consistent manner.",
                "The font- utilities (font-sans, font-serif, font-mono) define the font family used for text.",
                "Sets font stacks with `font-{family}` utilities",
                "Defaults: `font-sans`, `font-serif`, `font-mono`",
                "Custom fonts can be added in config",
                "Responsive variants: `md:font-serif`"
              ],
              "examples": [
                {
                  "code": "<p class=\"font-sans\">Sans-serif</p>\n<p class=\"font-mono\">Monospace</p>",
                  "explanation": "Different font family utilities"
                }
              ],
              "exercises": [
                "Create a document with serif body and sans-serif headings",
                "Implement a code block with monospace font",
                "Add a custom font family via tailwind.config.js"
              ]
            },
            {
              "title": "Tailwind CSS Font Size",
              "content": [
                "The text- utilities (text-xs, text-sm, text-lg, text-xl, etc.) set the font size of text.",
                "Controls text size with `text-{size}` utilities",
                "Scale: `text-xs` (0.75rem) to `text-9xl` (8rem)",
                "Responsive variants: `md:text-xl`",
                "Line height automatically adjusted"
              ],
              "examples": [
                {
                  "code": "<h1 class=\"text-4xl md:text-5xl\">Responsive Heading</h1>",
                  "explanation": "Heading that grows larger on desktop"
                }
              ],
              "exercises": [
                "Create a typographic scale for headings",
                "Implement a responsive article with larger text on desktop",
                "Build a pricing table with emphasized numbers"
              ]
            },
            {
              "title": "Tailwind CSS Font Smoothing",
              "content": [
                "The antialiased and subpixel-antialiased utilities control how text is rendered for better readability.",
                "Controls font rendering with `antialiased` and `subpixel-antialiased`",
                "Improves text readability on different platforms",
                "No size variants (apply globally)"
              ],
              "examples": [
                {
                  "code": "<p class=\"antialiased\">Smooth text</p>",
                  "explanation": "Text with improved anti-aliasing"
                }
              ],
              "exercises": [
                "Compare antialiased vs subpixel-antialiased text",
                "Apply font smoothing to body text globally"
              ]
            },
            {
              "title": "Tailwind CSS Font Style",
              "content": [
                "The italic and not-italic utilities define whether text is italicized.",
                "Controls italics with `italic` and `not-italic`",
                "Toggle italic text dynamically",
                "Responsive variants: `md:italic`"
              ],
              "examples": [
                {
                  "code": "<p class=\"italic\">Emphasized text</p>",
                  "explanation": "Text rendered in italics"
                }
              ],
              "exercises": [
                "Create a blockquote with italicized text",
                "Implement a toggle that switches text style"
              ]
            },
            {
              "title": "Tailwind CSS Font Weight",
              "content": [
                "The font- utilities (font-thin, font-bold, font-extrabold, etc.) adjust text thickness.",
                "Controls thickness with `font-{weight}` utilities",
                "Scale: `font-thin` (100) to `font-black` (900)",
                "Responsive variants: `md:font-bold`"
              ],
              "examples": [
                {
                  "code": "<p class=\"font-light\">Light</p>\n<p class=\"font-bold\">Bold</p>",
                  "explanation": "Different font weights"
                }
              ],
              "exercises": [
                "Create a heading hierarchy with varying weights",
                "Implement emphasized text in paragraphs",
                "Build a UI with medium-weight body text"
              ]
            },
            {
              "title": "Tailwind CSS Font Variant Numeric",
              "content": [
                "These utilities (normal-nums, ordinal, slashed-zero, etc.) modify how numbers are displayed.",
                "Special number styling with `ordinal`, `slashed-zero`, etc.",
                "Utilities: `normal-nums`, `ordinal`, `slashed-zero`, etc.",
                "Affects only numeric characters"
              ],
              "examples": [
                {
                  "code": "<p class=\"ordinal\">1st</p>\n<p class=\"slashed-zero\">0</p>",
                  "explanation": "Special numeric formatting"
                }
              ],
              "exercises": [
                "Create a price list with tabular numbers",
                "Implement ordinal indicators for rankings"
              ]
            },
            {
              "title": "Tailwind CSS Letter Spacing",
              "content": [
                "The tracking- utilities (tracking-tight, tracking-wide) adjust spacing between letters.",
                "Controls tracking with `tracking-{size}` utilities",
                "Scale: `tracking-tighter` (-0.05em) to `tracking-widest` (0.1em)",
                "Responsive variants: `md:tracking-wide`"
              ],
              "examples": [
                {
                  "code": "<p class=\"tracking-tight\">Tight</p>\n<p class=\"tracking-widest\">Wide</p>",
                  "explanation": "Different letter spacing examples"
                }
              ],
              "exercises": [
                "Create a logo with custom letter spacing",
                "Implement headings with responsive tracking"
              ]
            },
            {
              "title": "Tailwind CSS Line Height",
              "content": [
                "The leading- utilities (leading-none, leading-loose) define line spacing.",
                "Controls vertical rhythm with `leading-{size}`",
                "Scale: `leading-3` (0.75rem) to `leading-10` (2.5rem)",
                "Responsive variants: `md:leading-snug`"
              ],
              "examples": [
                {
                  "code": "<p class=\"leading-tight\">Tight lines</p>\n<p class=\"leading-loose\">Loose lines</p>",
                  "explanation": "Different line height examples"
                }
              ],
              "exercises": [
                "Create readable paragraphs with optimal line height",
                "Implement code blocks with tight line spacing"
              ]
            },
            {
              "title": "Tailwind CSS List Style Type",
              "content": [
                "The list- utilities (list-disc, list-decimal, list-none) style list items.",
                "Controls bullets with `list-{type}` utilities",
                "Options: `list-none`, `list-disc`, `list-decimal`",
                "Position: `list-inside`, `list-outside`"
              ],
              "examples": [
                {
                  "code": "<ul class=\"list-disc list-inside\">\n  <li>Item</li>\n</ul>",
                  "explanation": "Bulleted list with inside positioning"
                }
              ],
              "exercises": [
                "Create a styled numbered list",
                "Implement a navigation with no list markers"
              ]
            },
            {
              "title": "Tailwind CSS Placeholder",
              "content": [
                "The placeholder- utilities (placeholder-gray-500) style input placeholders.",
                "Styles input placeholders with `placeholder-{style}`",
                "Supports color, opacity, and text styles",
                "Must be enabled in config"
              ],
              "examples": [
                {
                  "code": "<input class=\"placeholder-red-500\" placeholder=\"Error...\">",
                  "explanation": "Input with styled placeholder text"
                }
              ],
              "exercises": [
                "Create a search input with subtle placeholder",
                "Implement a form with consistent placeholder styling"
              ]
            },
            {
              "title": "Tailwind CSS Text Color",
              "content": [
                "The text- utilities (text-red-500, text-blue-600) define text color.",
                "Sets text color with `text-{color}-{shade}`",
                "Color palette: `text-gray-500`, `text-blue-700`, etc.",
                "Opacity control: `text-opacity-50`",
                "Responsive variants: `md:text-red-500`"
              ],
              "examples": [
                {
                  "code": "<p class=\"text-blue-600\">Colored text</p>",
                  "explanation": "Text with custom color"
                }
              ],
              "exercises": [
                "Create a color-coded status system",
                "Implement dark mode text colors"
              ]
            },
            {
              "title": "Tailwind CSS Text Decoration",
              "content": [
                "The underline, line-through, and no-underline utilities manage text decorations.",
                "Controls underlines with `underline`, `line-through`, etc.",
                "Style: `decoration-solid`, `decoration-double`",
                "Color: `decoration-blue-500`",
                "Thickness: `decoration-{width}`"
              ],
              "examples": [
                {
                  "code": "<p class=\"underline decoration-wavy\">Fancy underline</p>",
                  "explanation": "Text with styled underline"
                }
              ],
              "exercises": [
                "Create links with custom underlines",
                "Implement strikethrough prices"
              ]
            },
            {
              "title": "Tailwind CSS Text Transform",
              "content": [
                "The uppercase, lowercase, capitalize utilities modify text casing",
                "Controls case with `uppercase`, `lowercase`, `capitalize`",
                "Original case: `normal-case`",
                "Responsive variants: `md:uppercase`"
              ],
              "examples": [
                {
                  "code": "<p class=\"uppercase\">All caps</p>",
                  "explanation": "Transformed text case"
                }
              ],
              "exercises": [
                "Create heading styles with consistent casing",
                "Implement a navigation with responsive text transform"
              ]
            },
            {
              "title": "Tailwind CSS White Space",
              "content": [
                "The whitespace- utilities (whitespace-nowrap, whitespace-pre) control text wrapping.",
                "Controls wrapping with `whitespace-{value}`",
                "Options: `normal`, `nowrap`, `pre`, `pre-line`, `pre-wrap`",
                "Responsive variants: `md:whitespace-nowrap`"
              ],
              "examples": [
                {
                  "code": "<p class=\"whitespace-nowrap\">No wrapping</p>",
                  "explanation": "Text that won't wrap"
                }
              ],
              "exercises": [
                "Create a code snippet with preserved whitespace",
                "Implement a table cell with no text wrapping"
              ]
            },
            {
              "title": "Tailwind CSS Word Break",
              "content": [
                "The break-words, break-all utilities handle text breaking inside elements.",
                "Controls line breaks with `break-{type}`",
                "Options: `break-normal`, `break-words`, `break-all`",
                "Responsive variants: `md:break-words`"
              ],
              "examples": [
                {
                  "code": "<p class=\"break-words\">Longwordwithoutspaces</p>",
                  "explanation": "Text that will break long words"
                }
              ],
              "exercises": [
                "Create a responsive text container that handles long words",
                "Implement a URL display with proper breaking"
              ]
            }
          ]
        },
        {
          "title": "Tailwind CSS Backgrounds",
          "lessons": [
            {
              "title": "Tailwind CSS Background Image",
              "content": [
                "Tailwind CSS allows you to set background images using utility classes. You can apply gradients, solid images, or even dynamic URLs as backgrounds.",
                "Adds background images with `bg-{type}` utilities",
                "Types: `bg-none`, `bg-gradient-to-{direction}`",
                "Custom images: `bg-[url(...)]`",
                "Multiple backgrounds support",
                "Responsive variants: `md:bg-gradient-to-r`"
              ],
              "examples": [
                {
                  "code": "<div class=\"bg-[url('/hero.jpg')] bg-cover bg-center h-64\">\n  <div class=\"bg-gradient-to-r from-black/60 to-transparent h-full\"></div>\n</div>",
                  "explanation": "Image background with gradient overlay"
                }
              ],
              "exercises": [
                "Create a hero section with background image and gradient",
                "Implement a card with decorative pattern background",
                "Build a testimonial with multiple layered backgrounds"
              ]
            },
            {
              "title": "Tailwind CSS Background Clip",
              "content": [
                "The background-clip property defines how the background is confined within an element. It can be clipped to the border, padding, or content area.",
                "Controls background painting area with `bg-clip-{value}`",
                "Options: `bg-clip-border`, `bg-clip-padding`, `bg-clip-content`, `bg-clip-text`",
                "Text clipping requires `text-transparent`",
                "Creative effects with gradients"
              ],
              "examples": [
                {
                  "code": "<h1 class=\"text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent\">\n  Gradient Text\n</h1>",
                  "explanation": "Text filled with gradient background"
                }
              ],
              "exercises": [
                "Create text with gradient fill",
                "Implement a card with background clipped to content box",
                "Build a decorative heading with complex clipping"
              ]
            },
            {
              "title": "Tailwind CSS Background Color",
              "content": [
                "This controls the background color of an element using predefined color utilities. Tailwind provides a wide range of colors with different shades for customization.",
                "Sets solid colors with `bg-{color}-{shade}`",
                "Full color palette: `bg-red-500`, `bg-emerald-200`, etc.",
                "Custom colors: `bg-[#ff0000]`",
                "Responsive variants: `md:bg-blue-700`"
              ],
              "examples": [
                {
                  "code": "<div class=\"bg-indigo-600 hover:bg-indigo-700 transition-colors p-4\">\n  Interactive background\n</div>",
                  "explanation": "Background color with hover state and transition"
                }
              ],
              "exercises": [
                "Create a color-coded status system",
                "Implement a dark mode toggle that switches background colors",
                "Build a notification component with semantic colors"
              ]
            },
            {
              "title": "Tailwind CSS Background Opacity",
              "content": [
                "Background opacity controls how transparent the background color or image appears. It is useful for overlay effects or ensuring readability of text over backgrounds.",
                "Controls transparency with `bg-opacity-{value}`",
                "Scale: `bg-opacity-0` to `bg-opacity-100`",
                "Works with any background color",
                "Responsive variants: `md:bg-opacity-50`"
              ],
              "examples": [
                {
                  "code": "<div class=\"bg-black bg-opacity-50 backdrop-blur-sm p-4\">\n  Semi-transparent background\n</div>",
                  "explanation": "See-through background with blur effect"
                }
              ],
              "exercises": [
                "Create a modal overlay with adjustable opacity",
                "Implement a glassmorphism card component",
                "Build a hero section with translucent background"
              ]
            },
            {
              "title": "Tailwind CSS Background Position",
              "content": [
                "This defines how the background image is positioned within an element. It allows setting specific placements like center, top, left, or custom positions.",
                "Positions images with `bg-{position}`",
                "Options: `bg-center`, `bg-top`, `bg-bottom`, `bg-left`, `bg-right`",
                "Combined positions: `bg-left-top`",
                "Custom positions: `bg-[position]`",
                "Responsive variants: `lg:bg-right-bottom`"
              ],
              "examples": [
                {
                  "code": "<div class=\"bg-[url('/pattern.png')] bg-right-top bg-no-repeat h-64\">\n  Decorative positioned pattern\n</div>",
                  "explanation": "Background image positioned at top-right"
                }
              ],
              "exercises": [
                "Create a hero with optimally positioned background",
                "Implement a card with corner-positioned accent graphic",
                "Build a responsive background that repositions on mobile"
              ]
            },
            {
              "title": "Tailwind CSS Background Repeat",
              "content": [
                "The background-repeat property determines whether a background image should be repeated. It can be set to repeat, no-repeat, or customized based on the layout.",
                "Controls tiling with `bg-{repeat}`",
                "Options: `bg-repeat`, `bg-no-repeat`, `bg-repeat-x`, `bg-repeat-y`, `bg-repeat-round`, `bg-repeat-space`",
                "Responsive variants: `md:bg-no-repeat`"
              ],
              "examples": [
                {
                  "code": "<div class=\"bg-[url('/dots.svg')] bg-repeat-x bg-left-top h-32\">\n  Horizontally repeating pattern\n</div>",
                  "explanation": "Background that repeats only horizontally"
                }
              ],
              "exercises": [
                "Create a section with vertically striped background",
                "Implement a non-repeating full-width hero image",
                "Build a decorative border using background repeat"
              ]
            },
            {
              "title": "Tailwind CSS Background Size",
              "content": [
                "This property defines how the background image is sized within an element. It can be set to cover the entire element, fit within it, or follow custom sizing.",
                "Scales images with `bg-{size}`",
                "Options: `bg-auto`, `bg-cover`, `bg-contain`",
                "Custom sizes: `bg-[length]`",
                "Responsive variants: `md:bg-cover`"
              ],
              "examples": [
                {
                  "code": "<div class=\"bg-[url('/hero.jpg')] bg-cover bg-center h-96\">\n  Full-cover background\n</div>",
                  "explanation": "Background image that covers entire element"
                }
              ],
              "exercises": [
                "Create a responsive hero that switches between cover and contain",
                "Implement a logo grid with uniformly sized backgrounds",
                "Build a parallax section with custom background sizing"
              ]
            }
          ]
        },
        {
          "title": "Tailwind CSS Borders",
          "lessons": [
            {
              "title": "Tailwind CSS Border Radius",
              "content": [
                "This property controls the roundness of an element’s corners. It helps in creating smooth, rounded edges or fully circular shapes.",
                "Rounds corners with `rounded-{size}`",
                "Scale: `rounded-none` to `rounded-full`",
                "Directional: `rounded-t-lg`, `rounded-r-md`, etc.",
                "Responsive variants: `md:rounded-xl`"
              ],
              "examples": [
                {
                  "code": "<div class=\"rounded-lg md:rounded-xl bg-white p-4 shadow\">\n  Responsive rounded card\n</div>",
                  "explanation": "Card with rounded corners that increase on desktop"
                }
              ],
              "exercises": [
                "Create a pill-shaped button",
                "Implement a card with different corner radii",
                "Build an avatar circle with rounded-full"
              ]
            },
            {
              "title": "Tailwind CSS Border Width",
              "content": [
                "The border-width property specifies the thickness of an element’s border. Tailwind allows setting different widths for each side or a uniform border",
                "Controls thickness with `border-{width}`",
                "Scale: `border` (1px) to `border-8` (8px)",
                "Directional: `border-t-2`, `border-b-4`, etc.",
                "Responsive variants: `md:border-2`"
              ],
              "examples": [
                {
                  "code": "<div class=\"border-2 border-dashed border-gray-300 p-4\">\n  Dashed border\n</div>",
                  "explanation": "Element with 2px dashed border"
                }
              ],
              "exercises": [
                "Create an input with thick bottom border only",
                "Implement a timeline with left-border indicators",
                "Build a card with responsive border thickness"
              ]
            },
            {
              "title": "Tailwind CSS Border Color",
              "content": [
                "This defines the color of an element’s border. Tailwind provides a variety of colors with different shades to match any design.",
                "Sets color with `border-{color}-{shade}`",
                "Full palette: `border-red-500`, `border-emerald-200`, etc.",
                "Transparency: `border-opacity-50`",
                "Responsive variants: `md:border-blue-600`"
              ],
              "examples": [
                {
                  "code": "<div class=\"border-2 border-indigo-500/50 p-4\">\n  Semi-transparent border\n</div>",
                  "explanation": "Border with 50% opacity"
                }
              ],
              "exercises": [
                "Create a color-coded status border system",
                "Implement a dark mode toggle for border colors",
                "Build a focus state with animated border color"
              ]
            },
            {
              "title": "Tailwind CSS Border Opacity",
              "content": [
                "Border opacity controls the transparency of the border color. It allows creating subtle or bold border effects.",
                "Controls transparency with `border-opacity-{value}`",
                "Scale: `border-opacity-0` to `border-opacity-100`",
                "Works with any border color",
                "Responsive variants: `md:border-opacity-75`"
              ],
              "examples": [
                {
                  "code": "<div class=\"border border-black border-opacity-20 p-4\">\n  Subtle border\n</div>",
                  "explanation": "Low-opacity border for subtle effect"
                }
              ],
              "exercises": [
                "Create a glass panel with semi-transparent border",
                "Implement a hover effect that increases border opacity",
                "Build a modal with adjustable border transparency"
              ]
            },
            {
              "title": "Tailwind CSS Border Style",
              "content": [
                "This property defines the style of the border, such as solid, dashed, or dotted. Tailwind provides utility classes for different border styles.",
                "Changes rendering with `border-{style}`",
                "Options: `border-solid`, `border-dashed`, `border-dotted`, `border-double`, `border-none`",
                "Responsive variants: `md:border-dotted`"
              ],
              "examples": [
                {
                  "code": "<div class=\"border-2 border-dotted border-gray-400 p-4\">\n  Dotted border\n</div>",
                  "explanation": "Element with dotted border style"
                }
              ],
              "exercises": [
                "Create a coupon with dashed border",
                "Implement a decorative double border",
                "Build a focus state that changes border style"
              ]
            },
            {
              "title": "Tailwind CSS Divide Width",
              "content": [
                "Divide width controls the space between child elements inside a container. It is often used for separating list items or table rows with lines.",
                "Adds borders between siblings with `divide-{axis}-{width}`",
                "Axis: `divide-x`, `divide-y`",
                "Width scale matches border utilities",
                "Responsive variants: `md:divide-y-2`"
              ],
              "examples": [
                {
                  "code": "<div class=\"divide-y divide-gray-200\">\n  <div class=\"py-2\">Item 1</div>\n  <div class=\"py-2\">Item 2</div>\n</div>",
                  "explanation": "Automatic dividers between child elements"
                }
              ],
              "exercises": [
                "Create a stacked list with dividers",
                "Implement a responsive grid that adds vertical dividers on desktop",
                "Build a timeline with customized divider width"
              ]
            },
            {
              "title": "Tailwind CSS Divide Color",
              "content": [
                "The divide-color property defines the color of the dividing lines between elements. It allows customizing the separation effect between child elements.",
                "Colors dividers with `divide-{color}-{shade}`",
                "Full palette: `divide-blue-500`, `divide-gray-200`, etc.",
                "Works with divide-width utilities",
                "Responsive variants: `md:divide-gray-300`"
              ],
              "examples": [
                {
                  "code": "<div class=\"divide-y divide-blue-500/20\">\n  <div class=\"py-2\">Item 1</div>\n  <div class=\"py-2\">Item 2</div>\n</div>",
                  "explanation": "Subtle blue dividers between items"
                }
              ],
              "exercises": [
                "Create a list with alternating divider colors",
                "Implement a dark mode divider system",
                "Build a pricing table with accent-colored dividers"
              ]
            },
            {
              "title": "Tailwind CSS Divide Opacity",
              "content": [
                "This property controls the transparency of the dividing lines. It helps in achieving subtle or more visible separation effects.",
                "Controls divider transparency with `divide-opacity-{value}`",
                "Scale: `divide-opacity-0` to `divide-opacity-100`",
                "Works with divide-color utilities",
                "Responsive variants: `md:divide-opacity-50`"
              ],
              "examples": [
                {
                  "code": "<div class=\"divide-y divide-black divide-opacity-10\">\n  <div class=\"py-2\">Item 1</div>\n  <div class=\"py-2\">Item 2</div>\n</div>",
                  "explanation": "Very subtle dividers"
                }
              ],
              "exercises": [
                "Create a list with hover-revealed dividers",
                "Implement a subtle timeline with low-opacity dividers",
                "Build a comment thread with nested divider opacity levels"
              ]
            },
            {
              "title": "Tailwind CSS Divide Style",
              "content": [
                "The divide-style property allows setting different styles for the dividing lines, such as solid, dashed, or dotted.",
                "Changes divider rendering with `divide-{style}`",
                "Options: `divide-solid`, `divide-dashed`, `divide-dotted`, `divide-double`",
                "Works with other divide utilities",
                "Responsive variants: `md:divide-dashed`"
              ],
              "examples": [
                {
                  "code": "<div class=\"divide-y divide-dashed divide-gray-400\">\n  <div class=\"py-2\">Item 1</div>\n  <div class=\"py-2\">Item 2</div>\n</div>",
                  "explanation": "Dashed dividers between items"
                }
              ],
              "exercises": [
                "Create an invoice with dotted dividers",
                "Implement a decorative double-divided section",
                "Build a responsive list that changes divider style at breakpoints"
              ]
            },
            {
              "title": "Tailwind CSS Ring Width",
              "content": [
                "The ring-width property adds an outline (or ring) around an element without affecting its actual border. It is useful for focus states or hover effects.",
                "Adds focus rings with `ring-{width}`",
                "Scale: `ring-0` to `ring-4`",
                "Offset: `ring-offset-{width}`",
                "Responsive variants: `md:ring-2`"
              ],
              "examples": [
                {
                  "code": "<button class=\"focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 p-2\">\n  Click me\n</button>",
                  "explanation": "Button with focus ring effect"
                }
              ],
              "exercises": [
                "Create accessible form inputs with visible focus rings",
                "Implement a toggle with custom ring width",
                "Build a navigation with subtle focus indicators"
              ]
            },
            {
              "title": "Tailwind CSS Ring Color",
              "content": [
                "This controls the color of the ring effect applied around an element. It is often used to highlight elements dynamically.",
                "Colors rings with `ring-{color}-{shade}`",
                "Full palette: `ring-blue-500`, `ring-red-300`, etc.",
                "Works with ring-width utilities",
                "Responsive variants: `md:ring-green-500`"
              ],
              "examples": [
                {
                  "code": "<input class=\"focus:ring-2 focus:ring-pink-500\" placeholder=\"Focus me\">",
                  "explanation": "Input with pink focus ring"
                }
              ],
              "exercises": [
                "Create a validation system with colored focus rings",
                "Implement a dark mode toggle for ring colors",
                "Build a button set with different semantic ring colors"
              ]
            },
            {
              "title": "Tailwind CSS Ring Opacity",
              "content": [
                "Ring opacity determines the transparency level of the ring effect. It helps in creating subtle or bold focus indicators.",
                "Controls ring transparency with `ring-opacity-{value}`",
                "Scale: `ring-opacity-0` to `ring-opacity-100`",
                "Works with ring-color utilities",
                "Responsive variants: `md:ring-opacity-50`"
              ],
              "examples": [
                {
                  "code": "<button class=\"focus:ring-2 focus:ring-black focus:ring-opacity-20\">\n  Subtle focus\n</button>",
                  "explanation": "Button with low-opacity focus ring"
                }
              ],
              "exercises": [
                "Create a subtle focus state for form inputs",
                "Implement a toggle that increases ring opacity on focus",
                "Build a UI with context-specific ring opacity levels"
              ]
            }
          ]
        } , 
        {
          "title": "Tailwind CSS Effects",
          "lessons": [
            {
              "title": "Tailwind CSS Box Shadow",
              "content": [
                "The box-shadow property adds shadow effects around elements to create depth. Tailwind provides multiple shadow utilities, ranging from subtle to intense, which enhance the visual hierarchy of components.",
                "Adds shadows with `shadow-{size}` utilities",
                "Size scale: `shadow-sm` to `shadow-2xl`",
                "Color variants: `shadow-{color}` (requires config)",
                "Inner shadows: `shadow-inner`",
                "Responsive variants: `md:shadow-lg`"
              ],
              "examples": [
                {
                  "code": "<div class=\"shadow-lg hover:shadow-xl transition-shadow\">\n  Card with interactive shadow\n</div>",
                  "explanation": "Elevated card with hover effect"
                }
              ],
              "exercises": [
                "Create a floating action button with shadow",
                "Implement a card that gains shadow on hover",
                "Build a responsive shadow system that changes at breakpoints"
              ]
            },
            {
              "title": "Tailwind CSS Opacity",
              "content": [
                "Opacity controls the transparency level of an element. Tailwind provides utility classes for adjusting the opacity from fully visible to fully transparent. It is useful for hover effects, overlays, and UI enhancements.",
                "Controls transparency with `opacity-{value}`",
                "Scale: `opacity-0` to `opacity-100` in 5-point increments",
                "Works with any element and content",
                "Responsive variants: `md:opacity-75`"
              ],
              "examples": [
                {
                  "code": "<div class=\"bg-blue-500 opacity-75 hover:opacity-100 transition-opacity\">\n  Semi-transparent panel\n</div>",
                  "explanation": "Element with adjustable opacity"
                }
              ],
              "exercises": [
                "Create a loading overlay with 90% opacity",
                "Implement a fade-in animation using opacity",
                "Build a tooltip that becomes opaque on hover"
              ]
            }
          ]
        },
        {
          "title": "Tailwind CSS Filters",
          "lessons": [
            {
              "title": "Tailwind CSS Filter",
              "content": [
                "The filter property enables various graphical effects like blurring, brightness adjustments, and contrast modifications. Tailwind provides utilities for applying multiple filters efficiently.",
                "Enables filter utilities with `filter` class",
                "Required as parent for filter utilities",
                "Disables filters with `filter-none`",
                "Responsive variants: `md:filter`"
              ],
              "examples": [
                {
                  "code": "<div class=\"filter grayscale hover:grayscale-0 transition-all\">\n  <img src=\"photo.jpg\" alt=\"Filter example\">\n</div>",
                  "explanation": "Image that removes grayscale on hover"
                }
              ],
              "exercises": [
                "Create an image gallery with filter effects",
                "Implement a hover effect that applies filters",
                "Build a disabled state using filter-none"
              ]
            },
            {
              "title": "Tailwind CSS Blur",
              "content": [
                "This filter applies a blur effect to an element, making it appear out of focus. It is often used for background effects, modals, or overlays.",
                "Applies blur with `blur-{size}`",
                "Scale: `blur-none` to `blur-2xl`",
                "Creates frosted glass effects",
                "Responsive variants: `md:blur-sm`"
              ],
              "examples": [
                {
                  "code": "<div class=\"bg-white/20 backdrop-blur-md p-4\">\n  Glassmorphism effect\n</div>",
                  "explanation": "Semi-transparent panel with blur"
                }
              ],
              "exercises": [
                "Create a modal overlay with blur effect",
                "Implement a hover zoom effect with background blur",
                "Build a frosted glass navigation bar"
              ]
            },
            {
              "title": "Tailwind CSS Brightness",
              "content": [
                "Brightness adjusts the intensity of light on an element. Increasing brightness makes the element appear lighter, while decreasing it darkens the element.",
                "Controls luminance with `brightness-{value}`",
                "Scale: `brightness-0` to `brightness-200`",
                "Darkens or lightens content",
                "Responsive variants: `md:brightness-90`"
              ],
              "examples": [
                {
                  "code": "<img class=\"hover:brightness-110 transition-all\" src=\"product.jpg\">",
                  "explanation": "Image that brightens on hover"
                }
              ],
              "exercises": [
                "Create a dark mode image brightness adjustment",
                "Implement a disabled state with reduced brightness",
                "Build a spotlight effect with varying brightness"
              ]
            },
            {
              "title": "Tailwind CSS Contrast",
              "content": [
                "Contrast controls the difference between light and dark areas of an element. Higher contrast makes the colors more vivid, while lower contrast makes them more muted.",
                "Adjusts contrast with `contrast-{value}`",
                "Scale: `contrast-0` to `contrast-200`",
                "Enhances or reduces color difference",
                "Responsive variants: `lg:contrast-125`"
              ],
              "examples": [
                {
                  "code": "<div class=\"contrast-75 hover:contrast-100\">\n  Low-contrast text block\n</div>",
                  "explanation": "Content that normalizes contrast on hover"
                }
              ],
              "exercises": [
                "Create an accessible contrast toggle",
                "Implement a vintage photo effect",
                "Build a high-contrast mode for readability"
              ]
            },
            {
              "title": "Tailwind CSS Drop Shadow",
              "content": [
                "Drop shadow applies a shadow effect similar to box-shadow but is optimized for images and text. It enhances the depth of elements.",
                "Adds shadow effects with `drop-shadow-{size}`",
                "Scale: `drop-shadow-sm` to `drop-shadow-xl`",
                "Creates depth for transparent elements",
                "Responsive variants: `md:drop-shadow-md`"
              ],
              "examples": [
                {
                  "code": "<svg class=\"drop-shadow-lg\">...</svg>",
                  "explanation": "Icon with soft shadow"
                }
              ],
              "exercises": [
                "Create floating SVG icons",
                "Implement a logo with depth effect",
                "Build a sticker-style UI element"
              ]
            },
            {
              "title": "Tailwind CSS Grayscale",
              "content": [
                "Grayscale converts an element’s colors into shades of gray, removing all color saturation. This is often used for disabled states or stylistic effects.",
                "Converts to grayscale with `grayscale` or `grayscale-{amount}`",
                "Scale: `grayscale-0` to `grayscale` (100%)",
                "Creates monochrome effects",
                "Responsive variants: `md:grayscale`"
              ],
              "examples": [
                {
                  "code": "<img class=\"grayscale hover:grayscale-0 transition-all\" src=\"photo.jpg\">",
                  "explanation": "Image that becomes colorful on hover"
                }
              ],
              "exercises": [
                "Create a memorial tribute with grayscale images",
                "Implement a hover effect for product listings",
                "Build a dark mode image treatment"
              ]
            },
            {
              "title": "Tailwind CSS Hue Rotate",
              "content": [
                "This filter rotates the color hues of an element, shifting the colors in the color spectrum. It is useful for creative color transformations.",
                "Shifts colors with `hue-rotate-{degrees}`",
                "Scale: `hue-rotate-0` to `hue-rotate-180`",
                "Creates color variations",
                "Responsive variants: `lg:hue-rotate-90`"
              ],
              "examples": [
                {
                  "code": "<div class=\"hue-rotate-60\">\n  <img src=\"product.jpg\" alt=\"Color-shifted\">\n</div>",
                  "explanation": "Image with altered color palette"
                }
              ],
              "exercises": [
                "Create a seasonal color theme switcher",
                "Implement a product color variant preview",
                "Build an artistic photo filter"
              ]
            },
            {
              "title": "Tailwind CSS Invert",
              "content": [
                "Inversion flips an element’s colors, turning light areas dark and vice versa. It is commonly used for dark mode effects",
                "Inverts colors with `invert` or `invert-{amount}`",
                "Scale: `invert-0` to `invert` (100%)",
                "Creates negative-like effects",
                "Responsive variants: `md:invert`"
              ],
              "examples": [
                {
                  "code": "<div class=\"invert hover:invert-0 bg-white p-4\">\n  Inverted content block\n</div>",
                  "explanation": "Content that normalizes on hover"
                }
              ],
              "exercises": [
                "Create a dark mode toggle with inversion",
                "Implement a 'focus mode' for images",
                "Build a high-contrast accessibility feature"
              ]
            },
            {
              "title": "Tailwind CSS Saturate",
              "content": [
                "Saturation controls the intensity of an element’s colors. Increasing saturation makes colors more vibrant, while decreasing it makes them appear dull.",
                "Adjusts intensity with `saturate-{value}`",
                "Scale: `saturate-0` to `saturate-200`",
                "Enhances or reduces color vibrancy",
                "Responsive variants: `lg:saturate-150`"
              ],
              "examples": [
                {
                  "code": "<img class=\"saturate-50 hover:saturate-100\" src=\"product.jpg\">",
                  "explanation": "Desaturated product image"
                }
              ],
              "exercises": [
                "Create a vintage photo gallery",
                "Implement a hover effect for product images",
                "Build a mood-setting UI control"
              ]
            },
            {
              "title": "Tailwind CSS Sepia",
              "content": [
                "Sepia applies a warm brown tone to an element, creating an old-fashioned or vintage effect.",
                "Applies warm tone with `sepia` or `sepia-{amount}`",
                "Scale: `sepia-0` to `sepia` (100%)",
                "Creates antique photo effects",
                "Responsive variants: `md:sepia`"
              ],
              "examples": [
                {
                  "code": "<div class=\"sepia hover:sepia-0\">\n  <img src=\"photo.jpg\" alt=\"Vintage\">\n</div>",
                  "explanation": "Image that normalizes on hover"
                }
              ],
              "exercises": [
                "Create a historical timeline with aged photos",
                "Implement a nostalgic design treatment",
                "Build a photo filter selector"
              ]
            },
            {
              "title": "Tailwind CSS Backdrop Filter",
              "content": [
                "Backdrop filter applies graphical effects to the background of an element, affecting everything behind it rather than the element itself.",
                "Enables backdrop filters with `backdrop-filter`",
                "Disables with `backdrop-filter-none`",
                "Requires browser support",
                "Responsive variants: `md:backdrop-filter`"
              ],
              "examples": [
                {
                  "code": "<div class=\"backdrop-filter backdrop-blur-lg\">\n  Glass panel\n</div>",
                  "explanation": "Element with background blur effect"
                }
              ],
              "exercises": [
                "Create a mobile menu with frosted glass effect",
                "Implement a notification with blurred background",
                "Build a modal dialog with backdrop filters"
              ]
            },
            {
              "title": "Tailwind CSS Backdrop Blur",
              "content": [
                "Backdrop blur blurs the background behind an element while keeping the element itself sharp. This effect is commonly used in glassmorphism UI designs.",
                "Blurs behind element with `backdrop-blur-{size}`",
                "Scale: `backdrop-blur-none` to `backdrop-blur-2xl`",
                "Creates glassmorphism effects",
                "Responsive variants: `lg:backdrop-blur-md`"
              ],
              "examples": [
                {
                  "code": "<div class=\"bg-white/20 backdrop-blur-sm p-4\">\n  Translucent panel\n</div>",
                  "explanation": "Semi-transparent blurred background"
                }
              ],
              "exercises": [
                "Create a command palette with blurred background",
                "Implement a hover card with glass effect",
                "Build a sticky header with adaptive blur"
              ]
            },
            {
              "title": "Tailwind CSS Backdrop Brightness",
              "content": [
                "This filter controls the brightness of the background behind an element, making it appear lighter or darker.",
                "Adjusts background brightness with `backdrop-brightness-{value}`",
                "Scale: `backdrop-brightness-0` to `backdrop-brightness-200`",
                "Darkens or lightens behind element",
                "Responsive variants: `md:backdrop-brightness-90`"
              ],
              "examples": [
                {
                  "code": "<div class=\"backdrop-brightness-50 p-4\">\n  Darkened overlay\n</div>",
                  "explanation": "Area that darkens content behind it"
                }
              ],
              "exercises": [
                "Create a spotlight effect for modals",
                "Implement a dark mode overlay",
                "Build a focus mode for reading"
              ]
            },
            {
              "title": "Tailwind CSS Backdrop Contrast",
              "content": [
                "Backdrop contrast adjusts the contrast of the background behind an element, enhancing or softening the background colors.",
                "Adjusts background contrast with `backdrop-contrast-{value}`",
                "Scale: `backdrop-contrast-0` to `backdrop-contrast-200`",
                "Enhances or reduces behind element",
                "Responsive variants: `lg:backdrop-contrast-125`"
              ],
              "examples": [
                {
                  "code": "<div class=\"backdrop-contrast-75 p-4\">\n  Low-contrast overlay\n</div>",
                  "explanation": "Area that mutes contrast behind it"
                }
              ],
              "exercises": [
                "Create a subtle notification system",
                "Implement a background content de-emphasizer",
                "Build an accessibility contrast helper"
              ]
            },
            {
              "title": "Tailwind CSS Backdrop Grayscale",
              "content": [
                "Backdrop grayscale removes colors from the background behind an element, turning it into shades of gray",
                "Converts background to grayscale with `backdrop-grayscale` or `backdrop-grayscale-{amount}`",
                "Scale: `backdrop-grayscale-0` to `backdrop-grayscale` (100%)",
                "Creates monochrome behind element",
                "Responsive variants: `md:backdrop-grayscale`"
              ],
              "examples": [
                {
                  "code": "<div class=\"backdrop-grayscale hover:backdrop-grayscale-0\">\n  <img src=\"background.jpg\" class=\"absolute inset-0\">\n  <div class=\"relative p-8\">Content</div>\n</div>",
                  "explanation": "Container that desaturates its background"
                }
              ],
              "exercises": [
                "Create a memorial overlay",
                "Implement a focus mode that desaturates distractions",
                "Build a theme toggle for background treatment"
              ]
            },
            {
              "title": "Tailwind CSS Backdrop Hue Rotate",
              "content": [
                "This filter rotates the hues of the background behind an element, shifting its colors dynamically.",
                "Shifts background colors with `backdrop-hue-rotate-{degrees}`",
                "Scale: `backdrop-hue-rotate-0` to `backdrop-hue-rotate-180`",
                "Alters color palette behind element",
                "Responsive variants: `lg:backdrop-hue-rotate-90`"
              ],
              "examples": [
                {
                  "code": "<div class=\"backdrop-hue-rotate-60 p-4\">\n  Color-shifted overlay\n</div>",
                  "explanation": "Area that modifies colors behind it"
                }
              ],
              "exercises": [
                "Create a seasonal theme overlay",
                "Implement a mood-setting control",
                "Build a product customizer preview"
              ]
            },
            {
              "title": "Tailwind CSS Backdrop Invert",
              "content": [
                "Backdrop invert inverts the colors of the background behind an element, making light areas dark and vice versa.",
                "Inverts background colors with `backdrop-invert` or `backdrop-invert-{amount}`",
                "Scale: `backdrop-invert-0` to `backdrop-invert` (100%)",
                "Creates negative-like effect behind element",
                "Responsive variants: `md:backdrop-invert`"
              ],
              "examples": [
                {
                  "code": "<div class=\"backdrop-invert p-4\">\n  Inverted background\n</div>",
                  "explanation": "Area that inverts colors behind it"
                }
              ],
              "exercises": [
                "Create a dark mode overlay",
                "Implement a high-contrast reading mode",
                "Build an accessibility tool"
              ]
            },
            {
              "title": "Tailwind CSS Backdrop Opacity",
              "content": [
                "Backdrop opacity controls the transparency of the background behind an element, allowing for subtle or strong overlays.",
                "Adjusts background transparency with `backdrop-opacity-{value}`",
                "Scale: `backdrop-opacity-0` to `backdrop-opacity-100`",
                "Controls see-through effect",
                "Responsive variants: `md:backdrop-opacity-50`"
              ],
              "examples": [
                {
                  "code": "<div class=\"backdrop-opacity-30 bg-black/50 p-4\">\n  Semi-transparent overlay\n</div>",
                  "explanation": "Area that partially obscures background"
                }
              ],
              "exercises": [
                "Create a modal overlay with adjustable opacity",
                "Implement a hover effect that reveals background",
                "Build a notification system with variable transparency"
              ]
            },
            {
              "title": "Tailwind CSS Backdrop Saturate",
              "content": [
                "Backdrop saturation controls how vibrant or muted the background colors appear behind an element.",
                "Adjusts background intensity with `backdrop-saturate-{value}`",
                "Scale: `backdrop-saturate-0` to `backdrop-saturate-200`",
                "Controls color vibrancy behind element",
                "Responsive variants: `lg:backdrop-saturate-150`"
              ],
              "examples": [
                {
                  "code": "<div class=\"backdrop-saturate-50 p-4\">\n  Desaturated overlay\n</div>",
                  "explanation": "Area that mutes colors behind it"
                }
              ],
              "exercises": [
                "Create a vintage photo overlay",
                "Implement a focus mode that desaturates distractions",
                "Build a mood-setting UI control"
              ]
            },
            {
              "title": "Tailwind CSS Backdrop Sepia",
              "content": [
                "This effect applies a sepia tone to the background behind an element, creating a vintage or warm-toned effect.",
                "Applies warm tone to background with `backdrop-sepia` or `backdrop-sepia-{amount}`",
                "Scale: `backdrop-sepia-0` to `backdrop-sepia` (100%)",
                "Creates antique effect behind element",
                "Responsive variants: `md:backdrop-sepia`"
              ],
              "examples": [
                {
                  "code": "<div class=\"backdrop-sepia p-4\">\n  Vintage overlay\n</div>",
                  "explanation": "Area that applies sepia to background"
                }
              ],
              "exercises": [
                "Create a historical timeline effect",
                "Implement a nostalgic theme toggle",
                "Build a photo filter preview"
              ]
            }
          ]
        },
        {
          "title": "Tailwind CSS Tables",
          "lessons": [
            {
              "title": "Tailwind CSS Border Collapse",
              "content": [
                "The border-collapse property controls how table borders are displayed. It allows setting borders to be collapsed into a single line or separated with spacing.",
                "Controls table borders with `border-{collapse|separate}`",
                "`border-collapse`: Single border between cells",
                "`border-separate`: Distinct borders (default)",
                "Responsive variants: `md:border-collapse`"
              ],
              "examples": [
                {
                  "code": "<table class=\"border-collapse\">\n  <tr><td class=\"border\">Cell</td></tr>\n</table>",
                  "explanation": "Table with shared cell borders"
                }
              ],
              "exercises": [
                "Create a compact table with collapsed borders",
                "Implement a pricing table with distinct cell borders",
                "Build a responsive table that changes border style"
              ]
            },
            {
              "title": "Tailwind CSS Table Layout",
              "content": [
                "Table layout defines how a table’s cells and columns are structured. It allows specifying automatic sizing or fixed column widths to maintain a consistent table design.",
                "Controls sizing algorithm with `table-{auto|fixed}`",
                "`table-auto`: Content-based column widths (default)",
                "`table-fixed`: Equal column widths or custom widths",
                "Responsive variants: `md:table-fixed`"
              ],
              "examples": [
                {
                  "code": "<table class=\"table-fixed w-full\">\n  <tr><td class=\"w-1/4\">25%</td><td>75%</td></tr>\n</table>",
                  "explanation": "Table with explicitly sized columns"
                }
              ],
              "exercises": [
                "Create a timetable with fixed column widths",
                "Implement a data table that switches to auto layout on mobile",
                "Build a comparison table with controlled column sizing"
              ]
            }
          ]
        },
        {
          "title": "Transitions & Animations",
          "lessons": [
            {
              "title": "Tailwind CSS Transition Property",
              "content": [
                "The transition-property defines which CSS properties should be animated when they change. Tailwind provides utility classes to specify transitions for elements, such as opacity, background color, and transform.",
                "Controls which properties transition with `transition-{type}`",
                "`transition-all`: All animatable properties",
                "`transition-none`: No transitions",
                "`transition-colors`: Color properties only",
                "`transition-opacity`: Opacity only",
                "`transition-shadow`: Shadow properties only",
                "`transition-transform`: Transform properties only"
              ],
              "examples": [
                {
                  "code": "<button class=\"transition-colors duration-200 hover:bg-blue-600\">\n  Hover Button\n</button>",
                  "explanation": "Button transitions only background color on hover"
                }
              ],
              "exercises": [
                "Create a card with shadow-only transition",
                "Implement a fading alert with opacity transition",
                "Build a navigation menu with multiple transition properties"
              ]
            },
            {
              "title": "Tailwind CSS Transition Duration",
              "content": [
                "This property controls how long a transition effect takes to complete. Tailwind allows setting predefined durations, ranging from instant to slow transitions, to enhance animations.",
                "Controls transition length with `duration-{ms}`",
                "Range: `duration-75` (75ms) to `duration-1000` (1s)",
                "Custom durations configurable in tailwind.config.js",
                "Responsive variants: `md:duration-300`"
              ],
              "examples": [
                {
                  "code": "<div class=\"transition-all duration-500 hover:opacity-0\">\n  Slow fade out\n</div>",
                  "explanation": "Element fades out over 500ms"
                }
              ],
              "exercises": [
                "Create a fast color transition on button click",
                "Implement a slow-motion hover effect",
                "Build a notification with staggered transition durations"
              ]
            },
            {
              "title": "Tailwind CSS Transition Timing",
              "content": [
                "The transition-timing-function defines the speed curve of the transition effect. It determines how the transition accelerates or decelerates over time, using easing functions like ease-in, ease-out, or linear.",
                "Controls acceleration curve with `ease-{type}`",
                "`ease-linear`: Constant speed",
                "`ease-in`: Accelerates into transition",
                "`ease-out`: Decelerates out of transition",
                "`ease-in-out`: Smooth acceleration and deceleration",
                "Responsive variants: `md:ease-in-out`"
              ],
              "examples": [
                {
                  "code": "<div class=\"transition-all ease-in-out duration-300 transform hover:scale-110\">\n  Smooth scale\n</div>",
                  "explanation": "Element scales with smooth easing"
                }
              ],
              "exercises": [
                "Create a bouncing ball animation",
                "Implement a menu that slides in with ease-out",
                "Build a hover effect with custom timing function"
              ]
            },
            {
              "title": "Tailwind CSS Transition Delay",
              "content": [
                "This property specifies the delay before a transition starts. Tailwind provides utility classes to set different delays, allowing for staggered animations or timed effects.",
                "Delays transition start with `delay-{ms}`",
                "Range: `delay-75` (75ms) to `delay-1000` (1s)",
                "Custom delays configurable in tailwind.config.js",
                "Responsive variants: `md:delay-200`"
              ],
              "examples": [
                {
                  "code": "<div class=\"transition-opacity delay-300 duration-500 opacity-0 hover:opacity-100\">\n  Delayed fade in\n</div>",
                  "explanation": "Element begins fading in after 300ms delay"
                }
              ],
              "exercises": [
                "Create a staggered animation sequence",
                "Implement a tooltip with delayed appearance",
                "Build a notification system with sequenced delays"
              ]
            }
          ]
        },
        {
          "title": "Transforms",
          "lessons": [
            {
              "title": "Tailwind CSS Transform",
              "content": [
                "The transform property allows elements to be manipulated visually, such as by rotating, scaling, or translating them. Tailwind provides a range of transform utilities for dynamic UI effects.",
                "Enables CSS transforms with `transform` class",
                "Required for scale, rotate, translate, etc.",
                "`transform-gpu`: Hardware-accelerated transforms",
                "`transform-none`: Disables transforms",
                "Responsive variants: `md:transform`"
              ],
              "examples": [
                {
                  "code": "<div class=\"transform hover:rotate-12 transition-transform\">\n  Hover to rotate\n</div>",
                  "explanation": "Element rotates 12 degrees on hover"
                }
              ],
              "exercises": [
                "Create an image gallery with hover zoom",
                "Implement a rotating loading indicator",
                "Build a card that lifts on hover with transform"
              ]
            },
            {
              "title": "Tailwind CSS Transform Origin",
              "content": [
                "The transform-origin property sets the point around which transformations (scale, rotate, etc.) occur. It allows positioning the transformation’s pivot at different parts of an element.",
                "Sets transform pivot point with `origin-{position}`",
                "Positions: `center`, `top`, `right`, `bottom`, `left`, and corners",
                "Custom origins configurable in tailwind.config.js",
                "Responsive variants: `md:origin-top`"
              ],
              "examples": [
                {
                  "code": "<div class=\"transform origin-left scale-x-0 hover:scale-x-100 transition-transform\">\n  Slide in from left\n</div>",
                  "explanation": "Element scales from left edge"
                }
              ],
              "exercises": [
                "Create a menu that swings open from top-left",
                "Implement a scale effect that grows from bottom",
                "Build a notification that slides in from screen edge"
              ]
            },
            {
              "title": "Tailwind CSS Scale",
              "content": [
                "The scale property controls the size of an element, allowing it to grow or shrink without affecting layout. It is useful for hover effects and responsive designs.",
                "Resizes elements with `scale-{size}`",
                "Values: `scale-0` (0%) to `scale-150` (150%)",
                "Axis-specific: `scale-x-{size}` and `scale-y-{size}`",
                "Responsive variants: `md:scale-105`"
              ],
              "examples": [
                {
                  "code": "<button class=\"transform hover:scale-110 active:scale-95 transition-transform\">\n  Interactive button\n</button>",
                  "explanation": "Button scales on hover and active states"
                }
              ],
              "exercises": [
                "Create a pulse animation using scale",
                "Implement a zoom-on-focus effect for form inputs",
                "Build a card that scales differently on X/Y axes"
              ]
            },
            {
              "title": "Tailwind CSS Translate",
              "content": [
                "The translate property moves an element along the X or Y axis without affecting its surrounding elements. It is commonly used for animations, modals, and UI interactions.",
                "Moves elements with `translate-{axis}-{amount}`",
                "Axes: `x` (horizontal) and `y` (vertical)",
                "Values: `translate-x-1` to `translate-x-full` (plus negatives)",
                "Responsive variants: `md:translate-x-4`"
              ],
              "examples": [
                {
                  "code": "<div class=\"transform hover:-translate-y-2 transition-transform\">\n  Lift on hover\n</div>",
                  "explanation": "Element moves up 2 units on hover"
                }
              ],
              "exercises": [
                "Create a parallax effect with translate",
                "Implement a sliding menu component",
                "Build a draggable element simulation"
              ]
            }
          ]
        },
        {
          "title": "Interactivity",
          "lessons": [
            {
              "title": "Tailwind CSS Cursor",
              "content": [
                "The cursor property defines the type of cursor displayed when hovering over an element. Tailwind includes various cursor styles, such as pointer, default, wait, and not-allowed.",
                "Controls mouse cursor with `cursor-{type}`",
                "Types: `default`, `pointer`, `text`, `move`, `wait`, etc.",
                "`cursor-none`: Hides cursor",
                "Responsive variants: `md:cursor-pointer`"
              ],
              "examples": [
                {
                  "code": "<button class=\"cursor-pointer hover:cursor-wait\">\n  Submit\n</button>",
                  "explanation": "Button shows wait cursor on hover"
                }
              ],
              "exercises": [
                "Create a draggable element with move cursor",
                "Implement a disabled button state with not-allowed cursor",
                "Build a text input with appropriate cursor"
              ]
            },
            {
              "title": "Tailwind CSS User Select",
              "content": [
                "The user-select property controls whether users can select text within an element. It is useful for preventing text copying or enabling text selection where necessary.",
                "Controls text selection with `select-{type}`",
                "`select-none`: Prevents text selection",
                "`select-text`: Allows text selection",
                "`select-all`: Selects all text when clicked",
                "Responsive variants: `md:select-none`"
              ],
              "examples": [
                {
                  "code": "<div class=\"select-none\">\n  This text can't be highlighted\n</div>",
                  "explanation": "Text selection is disabled"
                }
              ],
              "exercises": [
                "Create a UI element that prevents text selection",
                "Implement a code block that allows selection",
                "Build a click-to-select-all input field"
              ]
            }
          ]
        },
        {
          "title": "SVG Styling",
          "lessons": [
            {
              "title": "Tailwind CSS Fill",
              "content": [
                "The fill property sets the color of an SVG shape’s interior. Tailwind allows applying solid colors, gradients, or transparency to SVG fills.",
                "Controls SVG fill color with `fill-{color}`",
                "Uses Tailwind's color palette (e.g., `fill-blue-500`)",
                "`fill-current`: Inherits current text color",
                "Responsive variants: `md:fill-red-500`"
              ],
              "examples": [
                {
                  "code": "<svg class=\"w-6 h-6 fill-green-500 hover:fill-green-700\">\n  <path d=\"...\"/>\n</svg>",
                  "explanation": "SVG icon with hover color change"
                }
              ],
              "exercises": [
                "Create an icon set with color variants",
                "Implement a logo that changes color on dark mode",
                "Build an interactive color picker for SVG elements"
              ]
            },
            {
              "title": "Tailwind CSS Stroke",
              "content": [
                "The stroke property defines the color of an SVG shape’s outline. Tailwind provides stroke utilities to apply colors to SVG borders.",
                "Controls SVG stroke color with `stroke-{color}`",
                "Uses Tailwind's color palette (e.g., `stroke-gray-800`)",
                "`stroke-current`: Inherits current text color",
                "Responsive variants: `md:stroke-blue-500`"
              ],
              "examples": [
                {
                  "code": "<svg class=\"w-6 h-6 stroke-2 stroke-red-500\">\n  <path d=\"...\" stroke-linecap=\"round\"/>\n</svg>",
                  "explanation": "SVG with 2px red stroke"
                }
              ],
              "exercises": [
                "Create an outline icon set",
                "Implement a diagram with color-coded strokes",
                "Build an animated stroke drawing effect"
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: "angular",
    title: "Angular",
    category: "Frontend Development",
    duration: "8 Weeks",
    description: "Develop enterprise-grade applications with Angular",
    rating: 4.6,
    icon: <FaAngular className="text-red-600" size={24} />,
    keywords: ["typescript", "mvc", "dependency-injection","webdevelopment"],
    quiz: [
      {
        text: "Which directive is used for AngularJS routing?",
        options: ["ng-route", "ng-view", "ui-router"],
        correctIndex: 1,
        explanation: "ng-view is the directive that renders templates based on routes"
      },
      {
        text: "What service provides route parameters?",
        options: ["$route", "$routeParams", "$location"],
        correctIndex: 1
      }
    ] ,
    content: {
    "overview": "Learn AngularJS core concepts through individual focused lessons",
    "prerequisites": ["HTML", "JavaScript"],
    "modules": [
      {
        "title": "AngularJS",
        "lessons": [
          {
            "title": "AngularJS Home",
            "content": [
              "AngularJS is a structural JavaScript framework developed by Google for building dynamic web applications. It extends HTML's syntax to express application components clearly through directives.",
              "The framework implements MVC (Model-View-Controller) architecture automatically, handling DOM manipulation and AJAX glue code. AngularJS uses two-way data binding that synchronizes models and views instantly.",
              "Its dependency injection system helps developers build testable applications easily. The framework is perfect for single-page applications (SPAs) with its routing capabilities. AngularJS was first released in 2010 and gained popularity for its declarative programming style. It introduced concepts like scopes, templates, and expressions that revolutionized frontend development.",
               "The framework works well with other libraries and can be extended. While newer versions exist, AngularJS (1.x) remains in use for legacy applications. Its compilation process happens in the browser, making it immediately viewable. The framework includes services for common tasks like HTTP communication. AngularJS emphasizes testability throughout its design. It supports filters for formatting displayed data. The learning curve is moderate compared to vanilla JavaScript."
            ],
            "examples": [
              {
                "code": "<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js\"></script>",
                "explanation": "Including AngularJS in your project"
              }
            ],
            "exercises": [
              "Create a basic HTML page with AngularJS",
              "List 3 features of AngularJS"
            ]
          },
          {
            "title": "AngularJS Intro",
            "content": [
              "AngularJS introduces a component-based architecture where applications are built as trees of components. The framework's core philosophy revolves around extending HTML vocabulary through directives.",
              "It eliminates much boilerplate code through data binding and dependency injection. AngularJS applications start with the ng-app directive that auto-bootstraps the application. The framework uses plain JavaScript objects for models, making them easy to work with. Controllers in AngularJS set up initial state and add behavior to scope objects.",
              "Templates combine HTML with AngularJS markup to render dynamic views. The framework's compiler traverses the DOM to transform templates into live views. AngularJS includes services that are singleton objects instantiated only once per app.",
              "The framework supports unit testing through its dependency injection system. Directives allow creating custom HTML elements and attributes. AngularJS handles browser differences behind the scenes automatically.", 
              "The framework includes security features like contextual escaping. Its modular architecture allows organizing code into functional components. AngularJS was designed with CRUD applications in mind from the beginning."
            ],
            "examples": [
              {
                "code": "<div ng-app>\n  {{ 5 + 5 }}\n</div>",
                "explanation": "Simple expression example"
              }
            ],
            "exercises": [
              "Create a page with 3 different expressions",
              "Explain two-way data binding"
            ]
          },
          {
            "title": "AngularJS Expressions",
            "content": [
              "AngularJS expressions are JavaScript-like code snippets written inside double braces {{ }} or directive attributes. They bind application data to HTML and can contain literals, operators, and variables. Unlike JavaScript expressions, they're evaluated against scope objects rather than the global window.",
              "AngularJS expressions are forgiving, returning undefined rather than throwing errors for missing properties. They support filters for formatting output before display. Expressions can perform simple mathematical operations and comparisons. The framework automatically evaluates expressions during the digest cycle.",
              "Expressions don't support control flow statements like loops or conditionals. They can access AngularJS's built-in services like filter within templates. Expressions are re-evaluated when their underlying data changes.",
              "They maintain separation between presentation logic and business logic. AngularJS prevents access to potentially dangerous objects like window in expressions. The framework provides context-specific expression evaluation in different scopes. Expressions can be used in ng-style and ng-class for dynamic styling. They support one-time binding with :: syntax for performance optimization.",
              "Syntax: {{ expression }}",
              "Using expressions to bind data",
              "Valid vs invalid expressions"
            ],
            "examples": [
              {
                "code": "<p>Total: {{ quantity * cost }}</p>",
                "explanation": "Expression with calculation"
              }
            ],
            "exercises": [
              "Create expressions with different operations",
              "Identify invalid expressions"
            ]
          },
          {
            "title": "AngularJS Modules",
            "content": [
              "AngularJS modules are containers for different parts of an application including controllers, services, and directives. They provide namespaces that prevent global scope pollution. The angular.module() method is used to create and retrieve modules.",
              "Modules can list other modules as dependencies, enabling code reuse. Configuration blocks run during module loading for provider registration. Run blocks execute after injector creation for application initialization.",
              "Modules help organize large applications into cohesive functional blocks. They make applications easier to test by allowing mock dependencies. Modules can be loaded in any order due to AngularJS's dependency injection. The framework loads modules lazily when they're needed. Modules declare what the application needs to run through dependency injection.", 
              "They serve as the main entry point for AngularJS applications. Modules can be divided by feature or route for better organization. Third-party modules can be easily integrated into applications. Module methods include controller(), service(), and filter() for component registration.",
              "Creating modules with angular.module()",
              "Module dependencies",
              "Organizing application components"
            ],
            "examples": [
              {
                "code": "var app = angular.module('myApp', []);",
                "explanation": "Module creation"
              }
            ],
            "exercises": [
              "Create a custom module",
              "Add a controller to your module"
            ]
          },
          {
            "title": "AngularJS Directives",
            "content": [
              "Directives are markers on DOM elements that tell AngularJS's HTML compiler to attach specified behavior. They extend HTML with custom elements and attributes. AngularJS includes built-in directives like ng-model, ng-repeat, and ng-show. Directives can create reusable components with their own templates and behavior.",
              "They support isolate scope for creating self-contained components. Directive definitions include restrict options (E for element, A for attribute). They have lifecycle hooks like compile and link for DOM manipulation. Directives can transclude content to create wrapper components. They support controllers for inter-directive communication. Priority and terminal options control directive compilation order.",
              "AngularJS's directive API allows creating complex UI widgets. Custom directives follow naming conventions like myDirective in JS and my-directive in HTML. They can require other directives to enable composition. Directives support template URLs for external template files. The framework's compiler processes directives recursively through the DOM tree.",
              "Common directives: ng-app, ng-model, ng-bind",
              "Creating custom directives",
              "Directive restrictions"
            ],
            "examples": [
              {
                "code": "<div ng-app=\"myApp\" ng-controller=\"myCtrl\">\n  <input ng-model=\"name\">\n</div>",
                "explanation": "Using ng-model directive"
              }
            ],
            "exercises": [
              "Implement ng-repeat with an array",
              "Create a custom directive"
            ]
          },
          {
            "title": "AngularJS Model",
            "content": [
              "The model in AngularJS represents the data shown to users and modified by their interactions. It's stored in plain JavaScript objects and arrays. The ng-model directive creates two-way binding between form elements and models. Models are typically properties defined on scope objects. AngularJS automatically tracks model changes through dirty checking. Models can be validated using built-in and custom validation rules. The framework serializes models into JSON for server communication. Models should contain business data without presentation logic. AngularJS supports nested models through object properties.",
              "Model changes trigger view updates through the digest cycle. The framework provides parsersandformatters pipelines for model transformation. Models can be shared across controllers using services.",
              "AngularJS supports model inheritance through scope prototypal inheritance. Models should be normalized before storage in the backend. The framework provides $watch for observing model changes programmatically.",
              "The ng-model directive",
              "Two-way data binding",
              "Model validation"
            ],
            "examples": [
              {
                "code": "<input ng-model=\"user.name\">\n<p>Hello {{user.name}}!</p>",
                "explanation": "Two-way data binding example"
              }
            ],
            "exercises": [
              "Create a form with model binding",
              "Implement model validation"
            ]
          },
          {
            "title": "AngularJS Data Binding",
            "content": [
              "Data binding in AngularJS automatically synchronizes data between models and views. It supports one-way binding (model to view) and two-way binding. The framework uses {{ }} interpolation for one-way text binding. The ng-bind directive provides alternative one-way binding syntax. Two-way binding with ng-model keeps forms and models in sync.",
              "for creating custom bindings in JavaScript. The framework's binding syntax is declarative and easy to understand.",
              "One-way vs two-way binding",
              "$scope in data binding",
              "Binding best practices"
            ],
            "examples": [
              {
                "code": "<div ng-init=\"firstName='John'\">\n  <p>Name: <span ng-bind=\"firstName\"></span></p>\n</div>",
                "explanation": "One-way binding with ng-bind"
              }
            ],
            "exercises": [
              "Compare ng-bind and {{ }}",
              "Create two-way binding example"
            ]
          },
          {
            "title": "AngularJS Controllers",
            "content": [
              "Controllers are JavaScript constructor functions that set up initial scope state and behavior. They're defined using the module.controller() method. Controllers receive $scope as a dependency for model attachment. ",
              "They should contain presentation logic without DOM manipulation. The controllerAs syntax allows referencing controllers as objects in views. Controllers are instantiated when their DOM elements are compiled.",
              " They can be nested, creating hierarchy through scope inheritance. Controllers should be lean, delegating business logic to services.",
              "They're ideal for wiring up models with views through scope. AngularJS creates a new controller instance for each usage. Controllers can communicate with directives through require. They support dependency injection for service access. Controllers are testable through AngularJS's mock injection. They're destroyed when their DOM elements are removed. The framework supports route controllers for view-specific logic.",
              "Controller syntax",
              "Scope inheritance",
              "Controller best practices"
            ],
            "examples": [
              {
                "code": "app.controller('myCtrl', function($scope) {\n  $scope.cars = ['Ford', 'BMW', 'Volvo'];\n});",
                "explanation": "Controller with array"
              }
            ],
            "exercises": [
              "Create a controller with multiple properties",
              "Implement nested controllers"
            ]
          },
          {
            "title": "AngularJS Scopes",
            "content": [
              "Scopes are JavaScript objects that glue controllers with views through prototypal inheritance. They provide the execution context for expressions.",
              "AngularJS's scope hierarchy mirrors the DOM structure.",
              "$rootScope vs $scope",
              "Scope hierarchy",
              "Scope methods: $watch, $apply"
            ],
            "examples": [
              {
                "code": "app.controller('myCtrl', function($scope) {\n  $scope.$watch('count', function() {\n    // Watcher code\n  });\n});",
                "explanation": "Using $watch"
              }
            ],
            "exercises": [
              "Create a scope watcher",
              "Compare root scope and child scope"
            ]
          },
          {
            "title": "AngularJS Filters",
            "content": [
              "Filters format displayed values in templates without changing underlying data. They're chainable and can accept arguments. AngularJS includes built-in filters like currency, date, and orderBy.",
              "Filters are invoked in templates with the pipe (|) syntax. Custom filters are registered using module.filter().",
              "They're pure functions that return transformed input.",
              ". The framework supports custom comparator in filter predicates. Filters maintain separation between data and presentation layers.",
              "Built-in filters: currency, date, uppercase",
              "Creating custom filters",
              "Chaining filters"
            ],
            "examples": [
              {
                "code": "<p>{{ name | uppercase }}</p>",
                "explanation": "Uppercase filter"
              }
            ],
            "exercises": [
              "Format currency with filters",
              "Create a custom filter"
            ]
          },
          {
            "title": "AngularJS Services",
            "content": [
              "Services are singleton objects that organize business logic and share code. They're instantiated once per application by the injector. AngularJS includes built-in services like httpandtimeout. Services are created using factory(), service(), or provider() methods. ",
              "They support dependency injection for loose coupling. Services are ideal for data access and utility functions. The framework's dependency injection system manages service lifecycle. Services can be mocked for testing purposes.",
              " They're lazily instantiated when first injected. Services follow the single responsibility principle. AngularJS provides decorators for modifying existing services. Services can depend on other services through DI.",
              " They're registered with modules and retrieved by name. The framework's $provide service handles service registration. Services maintain application state across controllers.",
              "Built-in services: $http, $timeout",
              "Creating custom services",
              "Service vs factory"
            ],
            "examples": [
              {
                "code": "app.service('myService', function() {\n  this.myFunc = function() {\n    return 'Hello';\n  };\n});",
                "explanation": "Custom service"
              }
            ],
            "exercises": [
              "Create a service that shares data",
              "Use $timeout in a controller"
            ]
          },
          {
            "title": "AngularJS HTTP",
            "content": [
              "http methods include get(), post(), put(), and delete(). The service automatically transforms request and response data.",
              "http supports progress events for file uploads.",
              "$http service methods",
              "Handling responses",
              "Error handling"
            ],
            "examples": [
              {
                "code": "$http.get('url').then(function(response) {\n  $scope.data = response.data;\n});",
                "explanation": "GET request"
              }
            ],
            "exercises": [
              "Fetch data from a public API",
              "Implement error handling"
            ]
          },
          {
            "title": "AngularJS Tables",
            "content": [
              "AngularJS enhances HTML tables with dynamic data binding. The ng-repeat directive generates table rows from arrays. Tables support sorting through orderBy filter. ",
              ". Filtering can be added with custom predicates. AngularJS provides ng-table for advanced table features. Tables can be styled dynamically with ng-class. The framework supports client-side pagination for tables.",
              "Tables can be created from nested data structures. AngularJS optimizes rendering through track by in ng-repeat.",
              " Tables support row selection through model binding. The framework provides table directives for responsive designs. Tables can be exported using AngularJS filters. ",
              " Performance can be improved with one-time binding. AngularJS supports infinite scroll for large tables. Tables integrate with $http for server-side data.",
              "Displaying data with ng-repeat",
              "Sorting with orderBy",
              "Filtering table data"
            ],
            "examples": [
              {
                "code": "<tr ng-repeat=\"x in names | orderBy:'country'\">\n  <td>{{ x.name }}</td>\n</tr>",
                "explanation": "Sorted table"
              }
            ],
            "exercises": [
              "Create a sortable table",
              "Add search filtering"
            ]
          },
          {
            "title": "AngularJS Select",
            "content": [
              "The select element is enhanced with ng-options for dynamic binding. It supports model binding through ng-model. ng-options provides flexible syntax for option generation. Select can display values from objects or arrays. AngularJS supports option grouping in select elements. ",
              "The framework handles selected state automatically. Select can be combined with filters for search functionality. AngularJS provides ng-change for select event handling. Select supports disabled options through track by. ",
              "The framework maintains model consistency with select values. Select can be styled dynamically with ng-class. AngularJS supports multiple selection with arrays. Select options can be loaded asynchronously. ",
              "The framework provides validation for select elements. Select integrates with other form directives seamlessly.",
              "Select with ng-options",
              "Dynamic dropdowns",
              "Default selection"
            ],
            "examples": [
              {
                "code": "<select ng-model=\"selectedCar\" ng-options=\"x.model for x in cars\">\n</select>",
                "explanation": "Dynamic select"
              }
            ],
            "exercises": [
              "Create a dependent dropdown",
              "Set default selected value"
            ]
          },
          {
            "title": "AngularJS SQL",
            "content": [
              "While AngularJS doesn't directly interact with SQL databases, it works with SQL data through APIs. The framework formats SQL data for display using filters. AngularJS binds SQL query results to views through $http.",
              " It supports sorting and filtering of SQL data client-side. The framework can validate forms against SQL schemas. AngularJS displays SQL dates and numbers with localization. It provides directives for SQL-driven UI components. ",
              "The framework handles SQL pagination through limitTo filter. AngularJS can process SQL joins results into nested objects. It supports transactions through service patterns. The framework provides error handling for SQL operations.",
              " AngularJS can generate SQL queries from models. It supports real-time SQL data through WebSockets. The framework caches SQL responses for performance. AngularJS integrates with ORM libraries for SQL abstraction.",
              "Connecting to databases",
              "Displaying SQL data",
              "CRUD operations"
            ],
            "examples": [
              {
                "code": "$http.get(\"sql_query.php\").then(function(response) {\n  $scope.names = response.data.records;\n});",
                "explanation": "Fetching SQL data"
              }
            ],
            "exercises": [
              "Display data from a SQL query",
              "Implement a simple search"
            ]
          },
          {
            "title": "AngularJS DOM",
            "content": [
              "AngularJS provides directives for DOM manipulation without jQuery. It includes ng-show/ng-hide for visibility control. The framework supports dynamic classes with ng-class. Styles can be bound through ng-style directive. ",
              ". AngularJS handles events with directives like ng-click. The framework prevents direct DOM manipulation in controllers. ",
              " AngularJS provides jqLite for basic DOM operations. It supports dynamic attributes through ng-attr. The framework compiles DOM templates into live views. AngularJS handles SVG DOM elements properly.",
              ". It supports animation hooks for DOM transitions. The framework provides element transclusion for content projection. ",
              " AngularJS manages DOM event listeners automatically. It cleans up DOM elements when scopes are destroyed. The framework optimizes DOM updates through batched rendering.",
              "Directives for DOM manipulation",
              "ng-show/ng-hide",
              "Event directives"
            ],
            "examples": [
              {
                "code": "<button ng-click=\"count = count + 1\">Click</button>",
                "explanation": "Click event"
              }
            ],
            "exercises": [
              "Toggle element visibility",
              "Create click handlers"
            ]
          },
          {
            "title": "AngularJS Events",
            "content": [
              " The framework optimizes event handling through dirty checking. Events can be used for inter-component communication. AngularJS provides $on for event listener registration. The framework supports event namespacing for organization. Events integrate with directives for custom behaviors. AngularJS's event system is lightweight and efficient.",
              "Event directives: ng-click, ng-mouseover",
              "$event object",
              "Custom events"
            ],
            "examples": [
              {
                "code": "<button ng-click=\"myFunc($event)\">Click</button>",
                "explanation": "Event with $event"
              }
            ],
            "exercises": [
              "Create mouseover effects",
              "Prevent default event behavior"
            ]
          },
          {
            "title": "AngularJS Forms",
            "content": [
              "AngularJS enhances HTML forms with two-way data binding. It provides validation states like validanddirty. The framework supports custom validation through directives. Forms can be submitted using ng-submit. AngularJS prevents default form submission behavior.",
              " The framework tracks form control states automatically. AngularJS provides CSS classes for form styling. It supports nested forms through ng-form. The framework enables dynamic form generation. ",
              " AngularJS integrates with form models seamlessly. It provides error messages through ng-messages. The framework supports asynchronous validation. AngularJS prevents submission of invalid forms. It maintains form state across view changes.",
              "Form validation states",
              "ng-submit directive",
              "Form controllers"
            ],
            "examples": [
              {
                "code": "<form name=\"myForm\" ng-submit=\"submit()\">\n  <input name=\"email\" ng-model=\"email\" required>\n</form>",
                "explanation": "Basic form"
              }
            ],
            "exercises": [
              "Create a validated form",
              "Handle form submission"
            ]
          },
          {
            "title": "AngularJS Validation",
            "content": [
              "AngularJS provides client-side validation through directives. It includes validators for required, pattern, and more. The framework tracks validation states on forms and controls. AngularJS supports custom validation through directives. ",
              " It provides visual feedback through CSS classes. The framework validates both synchronous and asynchronous. AngularJS prevents submission of invalid forms. It supports cross-field validation through controllers",
              " The framework provides ng-messages for error display. AngularJS integrates validation with form models. It supports HTML5 validation attributes. The framework provides $error object for validation details.",
              " AngularJS enables validation message customization. It maintains validation state during model updates. The framework supports dynamic validation rule changes.",
              "Built-in validators",
              "Custom validation",
              "Displaying errors"
            ],
            "examples": [
              {
                "code": "<input type=\"email\" name=\"email\" ng-model=\"email\" required>",
                "explanation": "Email validation"
              }
            ],
            "exercises": [
              "Implement password confirmation",
              "Create custom validator"
            ]
          },
          {
            "title": "AngularJS API",
            "content": [
              "AngularJS provides resource for higher-level API abstraction. AngularJS handles API errors through promise rejection. It supports request/response interceptors. ",
              "httpBackend for API mocking. AngularJS supports API versioning through interceptors. It handles API timeouts and cancellation. The framework provides progress events for uploads. AngularJS supports API response transformation. It integrates with OAuth and JWT. The framework enables API request retrying.",
              "Using external APIs",
              "RESTful services",
              "JSON handling"
            ],
            "examples": [
              {
                "code": "$http.get('https://api.example.com/data')\n  .then(function(response) {\n    $scope.apiData = response.data;\n  });",
                "explanation": "API call"
              }
            ],
            "exercises": [
              "Fetch weather data from API",
              "Display API response"
            ]
          },
          {
            "title": "AngularJS Animations",
            "content": [
              "AngularJS provides animation hooks through ngAnimate. It supports CSS and JavaScript animations. The framework animates ng-repeat items automatically. AngularJS provides animation events like enter and leave. It supports staggered animations for sequences. ",
              " The framework integrates with animate.css. AngularJS animates ng-view transitions. It provides $animate service for programmatic control. The framework supports animation callbacks.",
              " AngularJS animates ng-show/ng-hide changes. It provides CSS class-based animation. The framework optimizes animation performance. AngularJS supports animation cancellation. It provides velocity.js integration. ",
              "The framework enables complex animation choreography.",
              "ngAnimate module",
              "CSS transitions",
              "Animation events"
            ],
            "examples": [
              {
                "code": "<div ng-show=\"show\" class=\"fade\">Content</div>",
                "explanation": "Fade animation"
              }
            ],
            "exercises": [
              "Create enter/leave animations",
              "Animate ng-repeat items"
            ]
          },
          {
            "title": "AngularJS Routing",
            "content": [
              "AngularJS provides ngRoute for basic routing. It supports route parameters and query strings. The framework enables deep linking through",
              "routeParams for parameter access. The framework enables multiple named views. AngularJS supports HTML5 mode for clean URLs.",
              "It provides location for URL manipulation. The framework enables route security through resolves. AngularJS supports nested views through UI-Router. It provides route transition animations. The framework enables lazy loading of route components.",
              "ngRoute module",
              "Route configuration",
              "Route parameters"
            ],
            "examples": [
              {
                "code": "app.config(function($routeProvider) {\n  $routeProvider\n    .when('/', {templateUrl: 'home.html'})\n    .when('/about', {templateUrl: 'about.html'});\n});",
                "explanation": "Route configuration"
              }
            ],
            "exercises": [
              "Setup multi-view application",
              "Implement route parameters"
            ]
          }
        ]
      }
    ]
  }
},
  {
    id: "vuejs",
    title: "Vue.js",
    category: "Frontend Development",
    duration: "6 Weeks",
    description: "Create approachable, versatile web interfaces with Vue",
    rating: 4.7,
    icon: <FaVuejs className="text-green-500" size={24} />,
    keywords: ["progressive", "composition-api", "single-file-components"],
  },
  {
    id: "nextjs",
    title: "Next.js",
    category: "Frontend Development",
    duration: "6 Weeks",
    description: "Build server-rendered React applications with ease",
    rating: 4.8,
    icon: <SiNextdotjs className="text-black dark:text-white" size={24} />,
    keywords: ["ssr", "ssg", "vercel", "react"],
  },
  {
    id: "django",
    title: "Django",
    category: "Backend Development",
    duration: "8 Weeks",
    description:
      "Learn Django framework to build powerful web applications with Python",
    rating: 4.6,
    icon: <Server className="text-green-600" size={24} />,
    keywords: ["backend", "python", "web", "framework"],
  },
  {
    id: "nodejs",
    title: "Node.js",
    category: "Backend Development",
    duration: "7 Weeks",
    description:
      "Build scalable server-side applications using JavaScript with Node.js",
    rating: 4.8,
    icon: <Cpu className="text-green-500" size={24} />,
    keywords: ["javascript", "backend", "server", "async","webdevelopment"],
  },
  {
    id: "expressjs",
    title: "Express.js",
    category: "Backend Development",
    duration: "5 Weeks",
    description:
      "Master Express.js to create fast and minimalist web servers with Node.js",
    rating: 4.7,
    icon: <Zap className="text-yellow-500" size={24} />,
    keywords: ["nodejs", "framework", "api", "rest"],
  },
  {
    id: "python",
    title: "Python Programming",
    category: "Programming",
    duration: "10 Weeks",
    description:
      "Learn Python from basics to advanced, including OOP and scripting",
    rating: 4.9,
    icon: <Code2 className="text-blue-500" size={24} />,
    keywords: ["scripting", "automation", "data", "backend"],
  },
  {
    id: "flask",
    title: "Flask",
    category: "Backend Development",
    duration: "6 Weeks",
    description:
      "Build lightweight and modular web applications with Python using Flask",
    rating: 4.5,
    icon: <FlaskConical className="text-gray-600" size={24} />,
    keywords: ["python", "microframework", "api", "web"],
  },
  {
    id: "ruby",
    title: "Ruby",
    category: "Backend Development",
    duration: "8 Weeks",
    description:
      "Write elegant and expressive code with Ruby, a dynamic OOP language",
    rating: 4.4,
    icon: <Gem className="text-red-500" size={24} />,
    keywords: ["scripting", "oop", "web", "automation"],
  },
  {
    id: "php",
    title: "PHP",
    category: "Backend Development",
    duration: "7 Weeks",
    description:
      "Learn PHP for server-side scripting and dynamic web development",
    rating: 4.3,
    icon: <FileCode className="text-purple-500" size={24} />,
    keywords: ["server", "wordpress", "dynamic", "web"],
  },
  {
    id: "svelte",
    title: "Svelte",
    category: "Frontend Development",
    duration: "5 Weeks",
    description: "Build cybernetically enhanced web apps",
    rating: 4.5,
    icon: <SiSvelte className="text-orange-500" size={24} />,
    keywords: ["compiler", "reactive", "no-virtual-dom"],
  },
  {
    id: "laravel",
    title: "Laravel",
    category: "Backend Development",
    duration: "8 Weeks",
    description:
      "Build modern PHP applications with Laravel's elegant syntax and tools",
    rating: 4.7,
    icon: <Box className="text-orange-500" size={24} />,
    keywords: ["php", "mvc", "eloquent", "web"],
  },
  {
    id: "java",
    title: "Java Programming",
    category: "Programming",
    duration: "12 Weeks",
    description:
      "Master Java for enterprise applications, Android, and backend systems",
    rating: 4.8,
    icon: <Coffee className="text-red-700" size={24} />,
    keywords: ["oop", "android", "enterprise", "jvm"],
  },
  {
    id: "rubyonrails",
    title: "Ruby on Rails",
    category: "Backend Development",
    duration: "9 Weeks",
    description:
      "Develop full-stack web applications rapidly with Ruby on Rails",
    rating: 4.6,
    icon: <Gem className="text-red-600" size={24} />, // Using Gem as fallback
    keywords: ["ruby", "mvc", "fullstack", "web"],
  },
  {
    id: "swift",
    title: "Swift",
    category: "Mobile Development",
    duration: "7 Weeks",
    description:
      "Build iOS apps with Swift, Apple's powerful and intuitive programming language",
    rating: 4.8,
    icon: <Apple className="text-red-500" size={24} />,
    // icon: <FaSwift className="text-orange-500" size={24} />, // react-icons alternative
    keywords: ["ios", "apple", "mobile", "xcode"],
  },
  {
    id: "kotlin",
    title: "Kotlin",
    category: "Mobile Development",
    duration: "6 Weeks",
    description:
      "Develop Android apps with Kotlin, a modern language with concise syntax",
    rating: 4.7,
    icon: <SiKotlin className="text-purple-500" size={24} />, // Lucide
    // icon: <SiKotlin className="text-purple-600" size={24} />, // react-icons (from 'simple-icons')
    keywords: ["android", "jetpack", "jvm", "mobile"],
  },
  {
    id: "flutter",
    title: "Flutter",
    category: "Mobile Development",
    duration: "8 Weeks",
    description:
      "Create beautiful native apps for iOS and Android with a single codebase",
    rating: 4.9,
    icon: <SiFlutter className="text-blue-500" size={24} />,
    keywords: ["cross-platform", "dart", "ui", "google"],
  },
  {
    id: "reactnative",
    title: "React Native",
    category: "Mobile Development",
    duration: "7 Weeks",
    description:
      "Build mobile apps using React and JavaScript that run natively on iOS and Android",
    rating: 4.6,
    icon: <FaReact className="text-blue-500" size={24} />, // react-icons
    keywords: ["javascript", "react", "cross-platform", "expo"],
  },
  {
    id: "xamarin",
    title: "Xamarin",
    category: "Mobile Development",
    duration: "6 Weeks",
    description: "Develop iOS and Android apps with C# and .NET using Xamarin",
    rating: 4.3,
    icon: <SiDotnet className="text-indigo-600" size={24} />, // react-icons (from 'simple-icons')
    keywords: ["csharp", "dotnet", "microsoft", "cross-platform"],
  },
  {
    id: "springboot",
    title: "Spring Boot",
    category: "Backend Development",
    duration: "8 Weeks",
    description:
      "Build enterprise Java applications with Spring Boot's powerful framework",
    rating: 4.7,
    icon: <SiSpring className="text-green-600" size={24} />,
    keywords: ["java", "microservices", "rest", "framework"],
  },
  {
    id: "csharp",
    title: "C#",
    category: "Backend Development",
    duration: "7 Weeks",
    description:
      "Master C# for Windows apps, game development, and enterprise solutions",
    rating: 4.6,
    icon: <Brackets className="text-purple-600" size={24} />,
    keywords: ["dotnet", "unity", "windows", "oop"],
  },
  {
    id: "aspnetcore",
    title: "ASP.NET Core",
    category: "Backend Development",
    duration: "7 Weeks",
    description:
      "Develop high-performance web applications with Microsoft's modern framework",
    rating: 4.5,
    icon: <FaMicrosoft className="text-indigo-600" size={24} />,
    keywords: ["csharp", "mvc", "webapi", "microsoft"],
  },
  {
    id: "golang",
    title: "Go (Golang)",
    category: "Backend Development",
    duration: "6 Weeks",
    description:
      "Learn Go for scalable backend systems and cloud-native applications",
    rating: 4.8,
    icon: <SiGo className="text-blue-500" size={24} />,
    keywords: ["backend", "concurrency", "google", "microservices"],
  },
  {
    id: "rust",
    title: "Rust",
    category: "Backend Development",
    duration: "9 Weeks",
    description:
      "Write memory-safe, high-performance systems programming code with Rust",
    rating: 4.9,
    icon: <SiRust className="text-orange-600" size={24} />,
    keywords: ["systems", "performance", "memory-safety", "wasm"],
  },
  {
    id: "sql",
    title: "SQL",
    category: "Databases & Data Handling",
    duration: "5 Weeks",
    description:
      "Master relational database querying with Structured Query Language",
    rating: 4.7,
    icon: <FaDatabase className="text-blue-500" size={24} />,
    keywords: ["queries", "joins", "rdbms", "tables"],
  },
  {
    id: "mysql",
    title: "MySQL",
    category: "Databases & Data Handling",
    duration: "6 Weeks",
    description:
      "Learn the world's most popular open-source relational database",
    rating: 4.6,
    icon: <SiMysql className="text-blue-600" size={24} />,
    keywords: ["oracle", "sql", "innodb", "php"],
  },
  {
    id: "postgresql",
    title: "PostgreSQL",
    category: "Databases & Data Handling",
    duration: "6 Weeks",
    description: "Advanced open-source object-relational database system",
    rating: 4.8,
    icon: <SiPostgresql className="text-blue-700" size={24} />,
    keywords: ["jsonb", "gis", "extensible", "acid"],
  },
  {
    id: "mongodb",
    title: "MongoDB",
    category: "Databases & Data Handling",
    duration: "5 Weeks",
    description: "Build modern applications with document-oriented NoSQL",
    rating: 4.7,
    icon: <SiMongodb className="text-green-500" size={24} />,
    keywords: ["nosql", "json", "scalable", "aggregation"],
  },
  {
    id: "firebase",
    title: "Firebase",
    category: "Databases & Data Handling",
    duration: "4 Weeks",
    description: "Google's mobile platform with realtime database capabilities",
    rating: 4.5,
    icon: <SiFirebase className="text-yellow-500" size={24} />,
    keywords: ["realtime", "google", "serverless", "auth"],
  },
  {
    id: "graphql",
    title: "GraphQL",
    category: "Databases & Data Handling",
    duration: "4 Weeks",
    description: "Query language for APIs and runtime for fulfilling queries",
    rating: 4.7,
    icon: <SiGraphql className="text-pink-600" size={24} />,
    keywords: ["query", "schema", "apollo", "relay"],
  },
  {
    id: "redis",
    title: "Redis",
    category: "Databases & Data Handling",
    duration: "3 Weeks",
    description: "In-memory data structure store used as database/cache",
    rating: 4.6,
    icon: <SiRedis className="text-red-600" size={24} />,
    keywords: ["cache", "key-value", "pubsub", "scalable"],
  },
  {
    id: "docker",
    title: "Docker",
    category: "DevOps & Cloud Computing",
    duration: "4 Weeks",
    description:
      "Containerize applications for consistent deployment across environments",
    rating: 4.8,
    icon: <FaDocker className="text-blue-400" size={24} />,
    keywords: ["containers", "images", "orchestration", "ci/cd"],
  },
  {
    id: "kubernetes",
    title: "Kubernetes",
    category: "DevOps & Cloud Computing",
    duration: "6 Weeks",
    description:
      "Automate deployment, scaling, and management of containerized applications",
    rating: 4.7,
    icon: <SiKubernetes className="text-blue-500" size={24} />,
    keywords: ["k8s", "cluster", "helm", "minikube"],
  },
  {
    id: "aws",
    title: "AWS",
    category: "DevOps & Cloud Computing",
    duration: "8 Weeks",
    description: "Master Amazon Web Services cloud platform and services",
    rating: 4.9,
    icon: <FaAws className="text-orange-500" size={24} />,
    keywords: ["ec2", "s3", "lambda", "cloudformation"],
  },
  {
    id: "azure",
    title: "Azure",
    category: "DevOps & Cloud Computing",
    duration: "7 Weeks",
    description:
      "Build, test, and deploy applications on Microsoft's cloud platform",
    rating: 4.6,
    icon: <FaMicrosoft className="text-blue-600" size={24} />,
    keywords: ["arm", "functions", "devops", "active-directory"],
  },
  {
    id: "gcp",
    title: "Google Cloud",
    category: "DevOps & Cloud Computing",
    duration: "7 Weeks",
    description: "Google's suite of cloud computing services",
    rating: 4.6,
    icon: <SiGooglecloud className="text-blue-400" size={24} />,
    keywords: ["gke", "bigquery", "cloud-run", "firestore"],
  },
  {
    id: "terraform",
    title: "Terraform",
    category: "DevOps & Cloud Computing",
    duration: "5 Weeks",
    description:
      "Infrastructure as Code (IaC) tool for cloud resource provisioning",
    rating: 4.7,
    icon: <SiTerraform className="text-purple-600" size={24} />,
    keywords: ["iac", "hcl", "multi-cloud", "modules"],
  },
  {
    id: "ansible",
    title: "Ansible",
    category: "DevOps & Cloud Computing",
    duration: "4 Weeks",
    description: "Configuration management and IT automation tool",
    rating: 4.5,
    icon: <SiAnsible className="text-red-500" size={24} />,
    keywords: ["yaml", "playbooks", "agentless", "configuration"],
  },
  {
    id: "r",
    title: "R",
    category: "AI/ML & Data Science",
    duration: "5 Weeks",
    description: "Statistical computing and graphics language",
    rating: 4.5,
    icon: <FaRProject className="text-blue-500" size={24} />,
    keywords: ["statistics", "visualization", "analysis"],
  },
  {
    id: "tensorflow",
    title: "TensorFlow",
    category: "AI/ML & Data Science",
    duration: "7 Weeks",
    description: "End-to-end open source ML platform",
    rating: 4.7,
    icon: <SiTensorflow className="text-orange-500" size={24} />,
    keywords: ["neural-networks", "deep-learning", "keras"],
  },
  {
    id: "pytorch",
    title: "PyTorch",
    category: "AI/ML & Data Science",
    duration: "6 Weeks",
    description: "Open source ML framework for Python",
    rating: 4.8,
    icon: <SiPytorch className="text-red-500" size={24} />,
    keywords: ["tensors", "autograd", "research"],
  },
  {
    id: "opencv",
    title: "OpenCV",
    category: "AI/ML & Data Science",
    duration: "5 Weeks",
    description: "Open source computer vision library",
    rating: 4.6,
    icon: <SiOpencv className="text-green-500" size={24} />,
    keywords: ["image-processing", "face-detection", "ai"],
  },
  {
    id: "cplusplus",
    title: "C++",
    category: "Game Development",
    duration: "10 Weeks",
    description: "High-performance systems programming language",
    rating: 4.7,
    icon: <SiCplusplus className="text-blue-600" size={24} />,
    keywords: ["oop", "templates", "stl", "game-dev"],
  },
  {
    id: "solidity",
    title: "Solidity",
    category: "Blockchain & Web3",
    duration: "6 Weeks",
    description: "Smart contract programming for Ethereum",
    rating: 4.5,
    icon: <SiSolidity className="text-gray-700" size={24} />,
    keywords: ["ethereum", "smart-contracts", "web3"],
  },
  {
    id: "web3js",
    title: "Web3.js",
    category: "Blockchain & Web3",
    duration: "4 Weeks",
    description: "Ethereum JavaScript API library",
    rating: 4.4,
    icon: <Link className="text-yellow-500" size={24} />,
    keywords: ["ethereum", "dapps", "blockchain"],
  },
  {
    id: "perl",
    title: "Perl",
    category: "Other Tech Languages",
    duration: "4 Weeks",
    description: "Powerful text processing language",
    rating: 4.0,
    icon: <SiPerl className="text-pink-600" size={24} />,
    keywords: ["regex", "sysadmin", "cgi"],
  },
  {
    id: "scala",
    title: "Scala",
    category: "Other Tech Languages",
    duration: "8 Weeks",
    description: "Functional programming on the JVM",
    rating: 4.4,
    icon: <SiScala className="text-red-600" size={24} />,
    keywords: ["functional", "jvm", "akka", "spark"],
  },
  {
    id: "elixir",
    title: "Elixir",
    category: "Other Tech Languages",
    duration: "6 Weeks",
    description: "Functional language for scalable applications",
    rating: 4.5,
    icon: <SiElixir className="text-purple-500" size={24} />,
    keywords: ["erlang", "phoenix", "otp", "concurrency"],
  },
  {
    id: "clojure",
    title: "Clojure",
    category: "Other Tech Languages",
    duration: "7 Weeks",
    description: "Lisp dialect for the JVM",
    rating: 4.3,
    icon: <SiClojure className="text-green-600" size={24} />,
    keywords: ["lisp", "jvm", "functional", "immutable"],
  },
  {
    id: "haskell",
    title: "Haskell",
    category: "Other Tech Languages",
    duration: "9 Weeks",
    description: "Purely functional programming language",
    rating: 4.5,
    icon: <SiHaskell className="text-red-700" size={24} />,
    keywords: ["functional", "monads", "type-system", "academic"],
  },
  {
    id: "deno",
    title: "Deno",
    category: "Other Tech Languages",
    duration: "3 Weeks",
    description: "Secure JavaScript/TypeScript runtime",
    rating: 4.4,
    icon: <SiDeno className="text-black dark:text-white" size={24} />,
    keywords: ["javascript", "typescript", "node-alternative"],
  },
  {
    id: "julia",
    title: "Julia",
    category: "Other Tech Languages",
    duration: "5 Weeks",
    description: "High-performance technical computing",
    rating: 4.6,
    icon: <SiJulia className="text-purple-700" size={24} />,
    keywords: ["scientific", "numerical", "data-science"],
  },
  {
    id: "qsharp",
    title: "Q#",
    category: "Other Tech Languages",
    duration: "8 Weeks",
    description: "Microsoft's quantum programming language",
    rating: 4.2,
    icon: <FaMicrosoft className="text-blue-800" size={24} />,
    keywords: ["quantum", "qubits", "algorithms"],
  },
  {
    id: "devops-fundamentals",
    title: "DevOps Fundamentals",
    category: "DevOps & Cloud Computing",
    duration: "8 Weeks",
    description: "Learn the core principles of DevOps for efficient software delivery",
    rating: 4.6,
    icon: <FaCogs className="text-purple-600" size={24} />,
    keywords: ["ci/cd", "automation", "infrastructure", "collaboration"],
  },
  {
    id: "microservices",
    title: "Microservices Architecture",
    category: "Backend Development",
    duration: "7 Weeks",
    description: "Design and deploy scalable microservices-based applications",
    rating: 4.7,
    icon: <FaMicrochip className="text-blue-600" size={24} />,
    keywords: ["api-gateway", "service-mesh", "docker", "kubernetes"],
  },
  {
    id: "cybersecurity-advanced",
    title: "Advanced Cybersecurity",
    category: "Other Tech Languages",
    duration: "10 Weeks",
    description: "Master advanced techniques in ethical hacking and threat mitigation",
    rating: 4.8,
    icon: <FaShieldAlt className="text-red-600" size={24} />,
    keywords: ["penetration-testing", "siem", "zero-trust", "malware-analysis"],
  },
  {
    id: "machine-learning",
    title: "Machine Learning with Scikit-learn",
    category: "AI/ML & Data Science",
    duration: "9 Weeks",
    description: "Build predictive models using Scikit-learn and real-world datasets",
    rating: 4.9,
    icon: <FaChartLine className="text-green-600" size={24} />,
    keywords: ["regression", "classification", "clustering", "data-preprocessing"],
  },
  {
    id: "natural-language-processing",
    title: "Natural Language Processing",
    category: "AI/ML & Data Science",
    duration: "8 Weeks",
    description: "Explore NLP techniques for text analysis and language models",
    rating: 4.7,
    icon: <FaComments className="text-indigo-600" size={24} />,
    keywords: ["nlp", "transformers", "sentiment-analysis", "tokenization"],
  },
  {
    id: "computer-vision",
    title: "Computer Vision with OpenCV",
    category: "AI/ML & Data Science",
    duration: "7 Weeks",
    description: "Learn to process and analyze visual data with OpenCV",
    rating: 4.6,
    icon: <FaCamera className="text-teal-600" size={24} />,
    keywords: ["image-processing", "face-detection", "object-recognition", "deep-learning"],
  },
  {
    id: "blockchain-development",
    title: "Blockchain Development",
    category: "Blockchain & Web3",
    duration: "9 Weeks",
    description: "Build decentralized applications using blockchain technology",
    rating: 4.8,
    icon: <FaBitcoin className="text-yellow-600" size={24} />,
    keywords: ["smart-contracts", "ethereum", "hyperledger", "dapps"],
  },
  {
    id: "decentralized-finance",
    title: "Decentralized Finance (DeFi)",
    category: "Blockchain & Web3",
    duration: "8 Weeks",
    description: "Understand and develop DeFi solutions on blockchain networks",
    rating: 4.7,
    icon: <FaChartPie className="text-orange-600" size={24} />,
    keywords: ["defi", "yield-farming", "stablecoins", "liquidity-pools"],
  },
  {
    id: "cloud-security",
    title: "Cloud Security Best Practices",
    category: "DevOps & Cloud Computing",
    duration: "7 Weeks",
    description: "Secure cloud environments across AWS, Azure, and Google Cloud",
    rating: 4.6,
    icon: <FaCloud className="text-blue-500" size={24} />,
    keywords: ["iam", "encryption", "compliance", "cloud-native-security"],
  },
  {
    id: "serverless-computing",
    title: "Serverless Computing",
    category: "DevOps & Cloud Computing",
    duration: "6 Weeks",
    description: "Build and deploy serverless applications using AWS Lambda",
    rating: 4.7,
    icon: <FaServer className="text-gray-600" size={24} />,
    keywords: ["lambda", "api-gateway", "fargate", "event-driven"],
  },
  {
    id: "data-engineering",
    title: "Data Engineering with Apache Spark",
    category: "Databases & Data Handling",
    duration: "10 Weeks",
    description: "Process big data pipelines with Apache Spark and Hadoop",
    rating: 4.8,
    icon: <FaDatabase className="text-indigo-600" size={24} />,
    keywords: ["big-data", "etl", "spark-sql", "data-lakes"],
  },
  {
    id: "time-series-analysis",
    title: "Time Series Analysis",
    category: "AI/ML & Data Science",
    duration: "7 Weeks",
    description: "Analyze and forecast time-based data with Python",
    rating: 4.6,
    icon: <FaClock className="text-purple-600" size={24} />,
    keywords: ["forecasting", "arima", "lstm", "financial-analysis"],
  },
  {
    id: "game-development-unity",
    title: "Game Development with Unity",
    category: "Game Development",
    duration: "9 Weeks",
    description: "Create 2D and 3D games using Unity and C#",
    rating: 4.7,
    icon: <FaGamepad className="text-red-600" size={24} />,
    keywords: ["unity", "c#", "game-design", "asset-pipeline"],
  },
  {
    id: "ar-vr-development",
    title: "AR/VR Development",
    category: "Game Development",
    duration: "8 Weeks",
    description: "Build augmented and virtual reality experiences",
    rating: 4.6,
    icon: <FaVrCardboard className="text-pink-600" size={24} />,
    keywords: ["ar", "vr", "unity", "spatial-computing"],
  },
  {
    id: "iot-fundamentals",
    title: "Internet of Things (IoT) Fundamentals",
    category: "Other Tech Languages",
    duration: "7 Weeks",
    description: "Learn to design and deploy IoT solutions",
    rating: 4.5,
    icon: <FaPlug className="text-green-600" size={24} />,
    keywords: ["sensors", "raspberry-pi", "mqtt", "edge-computing"],
  },
  {
    id: "edge-computing",
    title: "Edge Computing",
    category: "DevOps & Cloud Computing",
    duration: "6 Weeks",
    description: "Optimize data processing at the edge with real-time applications",
    rating: 4.6,
    icon: <FaNetworkWired className="text-teal-600" size={24} />,
    keywords: ["edge-ai", "latency", "device-management", "5g"],
  },
  {
    id: "quantum-computing",
    title: "Quantum Computing with Qiskit",
    category: "Other Tech Languages",
    duration: "10 Weeks",
    description: "Explore quantum algorithms using IBM's Qiskit framework",
    rating: 4.8,
    icon: <SiQiskit className="text-blue-600" size={24} />,
    keywords: ["quantum-gates", "superposition", "entanglement", "qiskit"],
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    category: "AI/ML & Data Science",
    duration: "8 Weeks",
    description: "Create AI models for text, images, and music generation",
    rating: 4.7,
    icon: <FaBrain className="text-purple-600" size={24} />, // Replaced SiGenerativeai with FaBrain
    keywords: ["gan", "vae", "diffusion-models", "creative-ai"],
  },
  {
    id: "ethical-ai",
    title: "Ethical AI Development",
    category: "AI/ML & Data Science",
    duration: "6 Weeks",
    description: "Learn to build fair and responsible AI systems",
    rating: 4.6,
    icon: <FaBalanceScale className="text-gray-600" size={24} />, // Substitute
    keywords: ["bias-mitigation", "fairness", "transparency", "regulation"],
  },
  {
    id: "mobile-security",
    title: "Mobile Security",
    category: "Mobile Development",
    duration: "7 Weeks",
    description: "Secure mobile applications on iOS and Android",
    rating: 4.7,
    icon: <FaKey className="text-red-600" size={24} />,
    keywords: ["app-hardening", "reverse-engineering", "encryption", "jailbreak"],
  },
  {
    id: "network-administration",
    title: "Network Administration",
    category: "Other Tech Languages",
    duration: "8 Weeks",
    description: "Manage and troubleshoot enterprise networks",
    rating: 4.6,
    icon: <FaNetworkWired className="text-blue-600" size={24} />,
    keywords: ["tcp/ip", "routing", "firewalls", "vlan"],
  },
  {
    id: "automation-testing",
    title: "Automation Testing with Selenium",
    category: "Other Tech Languages",
    duration: "6 Weeks",
    description: "Automate web application testing with Selenium",
    rating: 4.5,
    icon: <FaTasks className="text-yellow-600" size={24} />,
    keywords: ["selenium", "testng", "cucumber", "bdd"],
  },
  {
    id: "performance-testing",
    title: "Performance Testing",
    category: "Other Tech Languages",
    duration: "7 Weeks",
    description: "Optimize application performance with JMeter",
    rating: 4.6,
    icon: <FaTachometerAlt className="text-green-600" size={24} />,
    keywords: ["load-testing", "stress-testing", "jmeter", "scalability"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    category: "Frontend Development",
    duration: "8 Weeks",
    description: "Create user-friendly interfaces with Figma and Adobe XD",
    rating: 4.7,
    icon: <FaPalette className="text-pink-600" size={24} />,
    keywords: ["wireframing", "prototyping", "user-research", "design-systems"],
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics",
    category: "Frontend Development",
    duration: "6 Weeks",
    description: "Learn motion design with After Effects",
    rating: 4.5,
    icon: <FaVideo className="text-indigo-600" size={24} />,
    keywords: ["animation", "keyframes", "cinema-4d", "visual-effects"],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "Other Tech Languages",
    duration: "9 Weeks",
    description: "Master SEO, SEM, and social media marketing strategies",
    rating: 4.8,
    icon: <FaBullhorn className="text-orange-600" size={24} />,
    keywords: ["seo", "google-ads", "content-marketing", "analytics"],
  },
  {
    id: "e-commerce-development",
    title: "E-commerce Development",
    category: "Web Development",
    duration: "7 Weeks",
    description: "Build online stores with Shopify and WooCommerce",
    rating: 4.6,
    icon: <FaShoppingCart className="text-teal-600" size={24} />,
    keywords: ["shopify", "woocommerce", "payment-gateways", "cart-management"],
  },
  {
    id: "game-ai",
    title: "Game AI Programming",
    category: "Game Development",
    duration: "8 Weeks",
    description: "Implement AI for game characters and behaviors",
    rating: 4.7,
    icon: <FaBrain className="text-purple-600" size={24} />,
    keywords: ["pathfinding", "behavior-trees", "a-star", "unity-ai"],
  },
  {
    id: "virtualization",
    title: "Virtualization Technologies",
    category: "DevOps & Cloud Computing",
    duration: "6 Weeks",
    description: "Learn VMware and Hyper-V for virtual environments",
    rating: 4.6,
    icon: <FaCube className="text-blue-600" size={24} />,
    keywords: ["vmware", "hyper-v", "virtual-machines", "resource-management"],
  },
  {
    id: "api-design",
    title: "API Design and Development",
    category: "Backend Development",
    duration: "7 Weeks",
    description: "Design RESTful and GraphQL APIs",
    rating: 4.7,
    icon: <FaCode className="text-green-600" size={24} />,
    keywords: ["openapi", "swagger", "rest", "graphql-schema"],
  },
  {
    id: "chatbot-development",
    title: "Chatbot Development",
    category: "AI/ML & Data Science",
    duration: "6 Weeks",
    description: "Build intelligent chatbots with Dialogflow",
    rating: 4.5,
    icon: <SiDialogflow className="text-blue-600" size={24} />,
    keywords: ["nlp", "intent-recognition", "dialogflow", "bot-framework"],
  },
  {
    id: "robotics",
    title: "Introduction to Robotics",
    category: "Other Tech Languages",
    duration: "9 Weeks",
    description: "Explore robotics with ROS and Arduino",
    rating: 4.8,
    icon: <SiRos className="text-red-600" size={24} />,
    keywords: ["ros", "arduino", "sensors", "robot-control"],
  },
  {
    id: "3d-modeling",
    title: "3D Modeling with Blender",
    category: "Game Development",
    duration: "7 Weeks",
    description: "Create 3D models and animations with Blender",
    rating: 4.6,
    icon: <SiBlender className="text-orange-600" size={24} />,
    keywords: ["blender", "rendering", "rigging", "3d-animation"],
  },
  {
    id: "data-visualization",
    title: "Data Visualization with D3.js",
    category: "AI/ML & Data Science",
    duration: "6 Weeks",
    description: "Create interactive data visualizations with D3.js",
    rating: 4.7,
    icon: <SiD3Dotjs className="text-blue-600" size={24} />,
    keywords: ["d3", "svg", "charts", "interactive-graphics"],
  },
  {
    id: "cryptography",
    title: "Cryptography Fundamentals",
    category: "Other Tech Languages",
    duration: "7 Weeks",
    description: "Understand encryption and secure communication",
    rating: 4.6,
    icon: <FaKey className="text-gray-600" size={24} />,
    keywords: ["symmetric-encryption", "asymmetric-encryption", "hashing", "pkcs"],
  },
  {
    id: "low-code-development",
    title: "Low-Code Development",
    category: "Web Development",
    duration: "6 Weeks",
    description: "Build applications with OutSystems and Mendix",
    rating: 4.5,
    icon: <FaLaptopCode className="text-purple-600" size={24} />,
    keywords: ["outsystems", "mendix", "no-code", "rapid-development"],
  },
  {
    id: "full-stack-net",
    title: "Full Stack .NET Development",
    category: "Full Stack Development",
    duration: "10 Weeks",
    description: "Master full-stack development with .NET and ASP.NET Core",
    rating: 4.8,
    icon: <FaCogs className="text-blue-600" size={24} />,
    keywords: ["entity-framework", "blazor", "mvc", "sql-server"],
  },
  {
    id: "mobile-game-development",
    title: "Mobile Game Development",
    category: "Game Development",
    duration: "8 Weeks",
    description: "Develop games for iOS and Android with Cocos2d",
    rating: 4.6,
    icon: <FaGamepad className="text-green-600" size={24} />,
    keywords: ["cocos2d", "mobile-games", "cross-platform", "monetization"],
  },
  {
    id: "distributed-systems",
    title: "Distributed Systems",
    category: "Backend Development",
    duration: "9 Weeks",
    description: "Learn to design scalable distributed architectures",
    rating: 4.7,
    icon: <FaSitemap className="text-teal-600" size={24} />,
    keywords: ["consensus", "paxos", "raft", "sharding"],
  },
  {
    id: "software-architecture",
    title: "Software Architecture",
    category: "Backend Development",
    duration: "8 Weeks",
    description: "Design robust and maintainable software systems",
    rating: 4.8,
    icon: <FaTools className="text-gray-600" size={24} />,
    keywords: ["design-patterns", "microservices", "monolith", "architecture-styles"],
  },
  {
    id: "devsecops",
    title: "DevSecOps Practices",
    category: "DevOps & Cloud Computing",
    duration: "7 Weeks",
    description: "Integrate security into DevOps pipelines",
    rating: 4.6,
    icon: <FaShieldAlt className="text-purple-600" size={24} />,
    keywords: ["security-automation", "sast", "dast", "compliance"],
  },
  {
    id: "big-data-analytics",
    title: "Big Data Analytics",
    category: "Databases & Data Handling",
    duration: "10 Weeks",
    description: "Analyze large datasets with Apache Kafka and Hadoop",
    rating: 4.7,
    icon: <FaChartBar className="text-indigo-600" size={24} />,
    keywords: ["kafka", "hadoop", "data-streaming", "real-time-analytics"],
  },
  {
    id: "web-accessibility",
    title: "Web Accessibility (a11y)",
    category: "Frontend Development",
    duration: "6 Weeks",
    description: "Make websites accessible to all users",
    rating: 4.5,
    icon: <FaEye className="text-green-600" size={24} />,
    keywords: ["wcag", "aria", "screen-readers", "inclusive-design"],
  },
  {
    id: "voice-app-development",
    title: "Voice Application Development",
    category: "AI/ML & Data Science",
    duration: "7 Weeks",
    description: "Build voice-enabled apps with Alexa Skills Kit",
    rating: 4.6,
    icon: <FaMicrophone className="text-blue-600" size={24} />,
    keywords: ["alexa", "voice-ui", "nlp", "speech-recognition"],
  },
  {
    id: "embedded-systems",
    title: "Embedded Systems Programming",
    category: "Other Tech Languages",
    duration: "8 Weeks",
    description: "Program microcontrollers for embedded devices",
    rating: 4.7,
    icon: <FaMicrochip className="text-gray-600" size={24} />,
    keywords: ["microcontrollers", "stm32", "rtos", "hardware-interfacing"],
  },
  {
    id: "digital-forensics",
    title: "Digital Forensics",
    category: "Other Tech Languages",
    duration: "9 Weeks",
    description: "Investigate cybercrimes with forensic techniques",
    rating: 4.8,
    icon: <FaUserSecret className="text-red-600" size={24} />,
    keywords: ["forensic-analysis", "memory-dumps", "evidence-collection", "chain-of-custody"],
  },
  {
    id: "sustainability-tech",
    title: "Sustainability in Technology",
    category: "Other Tech Languages",
    duration: "6 Weeks",
    description: "Learn to design eco-friendly tech solutions",
    rating: 4.6,
    icon: <FaLeaf className="text-green-600" size={24} />,
    keywords: ["green-it", "carbon-footprint", "sustainable-design", "energy-efficiency"],
  },
  {
    id: "metaverse-development",
    title: "Metaverse Development",
    category: "Web Development",
    duration: "8 Weeks",
    description: "Create immersive experiences for the metaverse",
    rating: 4.7,
    icon: <FaGlobe className="text-purple-600" size={24} />,
    keywords: ["vr", "ar", "webxr", "blockchain-integration"],
  },
];

export const categories = [
  "All",
  "Frontend Development",
  "Backend Development",
  "Mobile Development",
  "Databases & Data Handling",
  "DevOps & Cloud Computing",
  "AI/ML & Data Science",
  "Game Development",
  "Blockchain & Web3",
  "Other Tech Languages",
];

// html , css , javascript , react , typescript ,tailwind css , angular ,vuejs , nextjs , django , nodejs , express js , python , ruby , flask , php , svelte , laravel , java , ruby on rails , swift , kotlin , flutter , react native, xamarin , springboot , C# , asp.net core , golang , rust , SQL , MYSQL , postgreSQL , MONGODB , firebase , graphQL , redis , docker  , kubernetes , AWS , Azure , google cloud , terraform , ansible , R , Tenserflow , Pytorch , OpenCV , C++ , solidity , web3.js, perl ,scala , Elixir , clojure , Haskell , Deno , Julia , Q# here all the course i am offering right now , but i want to expand this , give more 50 like these which are demand students can buy the certificates for that courses . */