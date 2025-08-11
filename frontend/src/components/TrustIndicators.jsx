import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookText, Users, Smile, ArrowUpRight } from "lucide-react";

const Counter = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const increment = target / (duration * 60);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000/60);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <motion.span 
      className="tabular-nums"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {count}{target === 90 ? "%" : "+"}
    </motion.span>
  );
};

const TrustIndicators = () => {
  return (
    <section className="bg-white py-20 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header with decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-blue-600 font-medium mb-4 tracking-widest text-xs uppercase">
            TRUSTED METRICS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="relative inline-block">
              <span className="relative z-10">Our Learning Impact</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-100 z-0 opacity-80 -mb-1"></span>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Transparent results that speak for themselves
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 text-center border border-gray-200 shadow-sm hover:shadow-md transition-all"
          >
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookText className="text-blue-600" size={28} strokeWidth={1.5} />
            </div>
            <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              <Counter target={100} duration={1.5} />
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Courses Available</h3>
            <p className="text-gray-500 mb-4 text-sm">
              Comprehensive theoretical coverage across multiple disciplines
            </p>
            <div className="text-xs font-medium text-blue-600 flex items-center justify-center">
              <ArrowUpRight size={14} className="mr-1" />
              <span>Updated weekly</span>
            </div>
          </motion.div>

          {/* Learners */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 text-center border border-gray-200 shadow-sm hover:shadow-md transition-all"
          >
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-blue-600" size={28} strokeWidth={1.5} />
            </div>
            <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              <Counter target={500} duration={2} />
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Active Learners</h3>
            <p className="text-gray-500 mb-4 text-sm">
              Community of professionals from 30+ countries
            </p>
            <div className="text-xs font-medium text-blue-600 flex items-center justify-center">
              <ArrowUpRight size={14} className="mr-1" />
              <span>45% growth this quarter</span>
            </div>
          </motion.div>

          {/* Satisfaction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 text-center border border-gray-200 shadow-sm hover:shadow-md transition-all"
          >
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Smile className="text-blue-600" size={28} strokeWidth={1.5} />
            </div>
            <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              <Counter target={90} duration={2.5} />
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Satisfaction Rate</h3>
            <p className="text-gray-500 mb-4 text-sm">
              Learners report immediate knowledge applicability
            </p>
            <div className="text-xs font-medium text-blue-600 flex items-center justify-center">
              <ArrowUpRight size={14} className="mr-1" />
              <span>94% would recommend</span>
            </div>
          </motion.div>
        </div>

        {/* Verification Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-sm">
            Metrics updated {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustIndicators;
