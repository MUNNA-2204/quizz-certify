import { motion } from "framer-motion";
import { 
  Zap, Clock, Code, BadgePercent, BookOpen, 
  Award, Tag 
} from "lucide-react";

const features = [
  {
    icon: <BadgePercent className="text-blue-600" size={20} />,
    title: "Budget Certifications",
    description: "Professional credentials at lowest cost",
    color: "bg-blue-50",
    animationDelay: 0.1,
    highlight: true
  },
  {
    icon: <Zap className="text-blue-600" size={20} />,
    title: "Instant Access",
    description: "Start learning immediately",
    color: "bg-purple-50",
    animationDelay: 0.2
  },
  {
    icon: <Award className="text-blue-600" size={20} />,
    title: "Recognized Certs",
    description: "Valued by employers",
    color: "bg-amber-50",
    animationDelay: 0.3
  },
  {
    icon: <Clock className="text-blue-600" size={20} />,
    title: "Fast Learning",
    description: "Certify in weeks",
    color: "bg-emerald-50",
    animationDelay: 0.4
  },
  {
    icon: <Code className="text-blue-600" size={20} />,
    title: "Hands-On Exams",
    description: "Practical assessments",
    color: "bg-rose-50",
    animationDelay: 0.5
  },
  {
    icon: <BookOpen className="text-blue-600" size={20} />,
    title: "Lifetime Validity",
    description: "Never expires",
    color: "bg-indigo-50",
    animationDelay: 0.6
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-20px" }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.span
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-3 px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-blue-100 text-blue-800"
          >
            Smart Certification
          </motion.span>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 px-4"
          >
            <span className="bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 text-transparent block md:inline">
              Premium Certificates,
            </span>{' '}
            <span className="bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400 text-transparent block md:inline">
              Unbeatable Price
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2"
          >
            Get certified without financial stress
          </motion.p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: feature.animationDelay,
                type: "spring",
                stiffness: feature.highlight ? 80 : 100,
                damping: 10
              }}
              viewport={{ once: true, margin: "-30px" }}
              whileHover={{ 
                y: feature.highlight ? -6 : -4,
                transition: { duration: 0.3 }
              }}
              className={`p-4 md:p-5 rounded-xl ${feature.color} border ${
                feature.highlight 
                  ? 'border-blue-200 shadow-sm md:shadow-md' 
                  : 'border-gray-100'
              } hover:shadow-sm md:hover:shadow-md transition-all relative overflow-hidden`}
            >
              {feature.highlight && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.2 }}
                  transition={{ delay: 0.7 }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent -z-1"
                />
              )}
              
              <div className="flex items-start gap-3 md:gap-4 relative z-10">
                <motion.div 
                  whileHover={{ rotate: feature.highlight ? 12 : 8, scale: 1.05 }}
                  className={`p-2 md:p-3 rounded-lg ${
                    feature.highlight ? 'bg-white shadow-sm' : 'bg-white'
                  } flex-shrink-0`}
                >
                  {feature.icon}
                </motion.div>
                <div>
                  <h3 className={`text-lg md:text-xl font-bold mb-1 ${
                    feature.highlight ? 'text-gray-900' : 'text-gray-900'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>

              {feature.highlight && (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] md:text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full shadow flex items-center"
                >
                  <Tag className="w-3 h-3 md:w-3.5 md:h-3.5 mr-0.5" />
                  <span className="hidden sm:inline">Best</span> Value
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;