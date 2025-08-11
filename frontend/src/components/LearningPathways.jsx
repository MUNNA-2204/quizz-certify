import { motion } from "framer-motion";
import { 
  Code, Database, Atom, Network, 
  ChevronRight, BookText 
} from "lucide-react";

const pathways = [
  {
    icon: <Code className="text-blue-600" size={20} />,
    title: "Frontend Developer",
    description: "Master modern web development",
    courses: 6,
    duration: "6-8 months",
    skills: ["HTML/CSS", "JavaScript", "React", "UI Principles"],
    color: "bg-blue-50"
  },
  {
    icon: <Database className="text-blue-600" size={20} />,
    title: "Backend Specialist",
    description: "Build robust server-side systems",
    courses: 5,
    duration: "5-7 months", 
    skills: ["Node.js", "SQL", "APIs", "Authentication"],
    color: "bg-purple-50"
  },
  {
    icon: <Atom className="text-blue-600" size={20} />,
    title: "Fullstack Mastery",
    description: "End-to-end development skills",
    courses: 8,
    duration: "8-10 months",
    skills: ["React", "Express", "DB Design", "Deployment"],
    color: "bg-amber-50"
  },
  {
    icon: <Network className="text-blue-600" size={20} />,
    title: "DevOps Fundamentals",
    description: "Infrastructure and deployment",
    courses: 4,
    duration: "4-6 months",
    skills: ["Docker", "AWS", "CI/CD", "Monitoring"],
    color: "bg-emerald-50"
  }
];

const LearningPathways = () => {
  return (
    <section className="py-16 bg-white" id="pathways">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 mb-4">
            <BookText className="mr-2" size={18} />
            <span className="text-sm font-medium">Structured Learning</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 text-transparent">
              Career-Focused  
            </span>
            Pathways
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Guided roadmaps to take you from beginner to job-ready
          </p>
        </motion.div>

        {/* Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pathways.map((pathway, index) => (
            <motion.div
              key={pathway.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl ${pathway.color} border border-gray-200 hover:shadow-lg transition-all`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  {pathway.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{pathway.title}</h3>
                  <p className="text-gray-600">{pathway.description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-5">
                {pathway.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="text-xs bg-white px-3 py-1 rounded-full shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <span className="block">{pathway.courses} courses</span>
                  <span>{pathway.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPathways;