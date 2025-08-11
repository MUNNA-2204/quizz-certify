import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, FileCheck2, Award } from "lucide-react";

const steps = [
  {
    icon: <BookOpen size={24} strokeWidth={2} className="text-blue-600" />,
    title: "Enroll a Course",
    description: "Choose your desired course and start learning instantly.",
  },
  {
    icon: <GraduationCap size={24} strokeWidth={2} className="text-blue-600" />,
    title: "Learn the concepts",
    description: "Go through the theoretical content to enhance your knowledge.",
  },
  {
    icon: <FileCheck2 size={24} strokeWidth={2} className="text-blue-600" />,
    title: "Take the Certification Exam",
    description: "Test your knowledge with a quiz and pass the required criteria.",
  },
  {
    icon: <Award size={24} strokeWidth={2} className="text-blue-600" />,
    title: "Earn Your Certificate",
    description: "Get a professional certificate after a small fee.",
  },
];

const HowItWorks = () => {
  return (
    <section id="works" className="relative bg-white py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 
            className="text-4xl text-gray-900 font-extrabold mx-auto md:text-6xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto mt-4 text-base text-gray-600 leading-relaxed md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Start your learning journey in just a few simple steps
          </motion.p>
        </div>
        
        <div className="relative mt-12 lg:mt-20">
          <div className="relative grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-4 gap-x-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-50 border-2 border-blue-100 rounded-full shadow-sm">
                  {step.icon}
                </div>
                <h3 className="mt-6 text-xl text-gray-900 font-semibold leading-tight md:mt-10">
                  {step.title}
                </h3>
                <p className="mt-4 text-base text-gray-600 md:text-lg">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;