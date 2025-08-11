import React from "react";
import { motion } from "framer-motion";
import { 
  Clock, 
  ArrowRight, Star,
} from "lucide-react";
import { FaCloud, FaDatabase, FaMobileAlt, FaPaintBrush, FaServer } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";

const popularCourses = [
  {
    id: 1,
    icon: <FaPaintBrush className="text-blue-600" size={24} />,
    title: "Frontend Development",
    description: "Master HTML, CSS, and JavaScript core concepts through interactive exercises",
    duration: "8 Weeks",
    category: "Programming",
    rating: 4.7,
    keywords: ["frontend", "web", "javascript"]
  },
  {
    id: 2,
    icon: <FaDatabase className="text-blue-600" size={24} />,
    title: "Database",
    description: "Learn relational database concepts and SQL implementation",
    duration: "6 Weeks",
    category: "Data Science",
    rating: 4.5,
    keywords: ["sql", "backend", "data"]
  },
  {
    id: 3,
    icon: <FaServer className="text-blue-600" size={24} />,
    title: "Backend Development",
    description: "Build modern web applications with React and Redux",
    duration: "12 Weeks",
    category: "Web Development",
    rating: 4.8,
    keywords: ["react", "frontend", "javascript"]
  },
  {
    id: 4,
    icon: <FaMobileAlt className="text-blue-600" size={24} />,
    title: "Mobile Development",
    description: "Essential algorithms and data structures every developer should know",
    duration: "15 Weeks",
    category: "Computer Science",
    rating: 4.6,
    keywords: ["algorithms", "data structures"]
  },
  {
    id: 5,
    icon: <FaCloud className="text-blue-600" size={24} />,
    title: "DevOps & Cloud Computing",
    description: "Learn how to secure applications and protect user data",
    duration: "8 Weeks",
    category: "Security",
    rating: 4.4,
    keywords: ["security", "encryption"]
  },
  {
    id: 6,
    icon: <SiEthereum className="text-blue-600" size={24} />,
    title: "Blockchain & Web3",
    description: "Fundamentals of networking and system administration",
    duration: "8 Weeks",
    category: "DevOps",
    rating: 4.3,
    keywords: ["networking", "cloud"]
  },
];

const FeaturedCourses = () => {
  return (
    <section id="courses" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Popular Courses</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start learning with our most popular courses
          </p>
        </motion.div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {popularCourses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/courses" // Update this to your actual courses page route
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm inline-flex items-center"
          >
            View All Courses
            <ArrowRight size={18} className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const CourseCard = ({ course, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true, margin: "-50px" }}
    className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
  >
    <div className="p-6">
      <div className="flex items-start mb-4">
        <motion.div 
          whileHover={{ rotate: 5, scale: 1.1 }}
          className="bg-blue-50 p-3 rounded-lg mr-4 flex-shrink-0 group-hover:bg-blue-100 transition-colors"
        >
          {course.icon}
        </motion.div>
        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="text-xs font-medium bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
              {course.category}
            </span>
          </div>
          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
            {course.title}
          </h3>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-4">{course.description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                fill={i < Math.floor(course.rating) ? "#F59E0B" : "#E5E7EB"}
                strokeWidth={i < Math.floor(course.rating) ? 0 : 1}
                className="w-4 h-4"
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">{course.rating}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500">
          <Clock size={14} className="mr-1" />
          {course.duration}
        </div>
      </div>
    </div>
  </motion.div>
);

export default FeaturedCourses;