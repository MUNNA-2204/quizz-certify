import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import hero1 from '../assets/image/hero1.jpg';
import hero2 from '../assets/image/hero2.jpg';
import hero3 from '../assets/image/hero3.jpg';
import hero4 from '../assets/image/hero4.jpg';

const HeroSection = () => {
  const images = [
    { src: hero1, alt: "Online learning", caption: "Start Your Certification Today" },
    { src: hero2, alt: "Exam preparation", caption: "Prove Your Skills" },
    { src: hero3, alt: "Certificate award", caption: "Get Recognized" },
    { src: hero4, alt: "Career growth", caption: "Advance Your Career" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotation with pause on hover
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0.7,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0.7,
      scale: 0.9,
      transition: { duration: 0.5 }
    })
  };

  const dotVariants = {
    inactive: {
      width: 8,
      backgroundColor: '#d1d5db',
      transition: { duration: 0.3 }
    },
    active: {
      width: 24,
      backgroundColor: '#000',
      transition: { duration: 0.3 }
    }
  };

  // Background shapes configuration
  const shapes = [
    { top: '10%', left: '5%', color: 'bg-blue-100', size: 'w-16 h-16', rotate: 12 },
    { bottom: '15%', right: '5%', color: 'bg-yellow-100', size: 'w-20 h-20', rotate: -8 },
    { top: '30%', right: '15%', color: 'bg-pink-100', size: 'w-14 h-14', rotate: 25 },
    { bottom: '20%', left: '10%', color: 'bg-green-100', size: 'w-24 h-24', rotate: -15 },
    { top: '15%', right: '20%', color: 'bg-purple-100', size: 'w-12 h-12', rotate: 30 }
  ];

  return (
    <section className="relative bg-white py-12 md:py-24 overflow-hidden">
      {/* Decorative background shapes - hidden on mobile */}
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-lg ${shape.color} ${shape.size} hidden md:block`}
          style={{
            top: shape.top,
            left: shape.left,
            bottom: shape.bottom,
            right: shape.right,
            rotate: `${shape.rotate}deg`,
            zIndex: 0
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* MOBILE LAYOUT - Vertical stack */}
        <div className="flex flex-col md:hidden items-center">
          {/* Text Content */}
          <div className="w-full space-y-6 text-center mb-8">
            <motion.h1
              className="text-3xl sm:text-4xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Professional <span className="text-blue-600">Certifications</span> for Career Growth
            </motion.h1>
            
            <motion.p
              className="text-base sm:text-lg text-gray-600 px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Get recognized for your skills with our industry-approved certification programs.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg font-medium shadow-md transition text-sm sm:text-base">
                Browse Certifications
              </button>
              <button className="border-2 border-gray-800 hover:bg-gray-100 px-5 py-2 sm:px-6 sm:py-3 rounded-lg font-medium shadow-md transition text-sm sm:text-base">
                How It Works
              </button>
            </motion.div>
          </div>

          {/* Image Carousel */}
          <div className="w-full max-w-md px-2">
            <div
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium text-base sm:text-lg">
                      {images[currentIndex].caption}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-4 gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="h-2 rounded-full focus:outline-none"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <motion.div
                    variants={dotVariants}
                    animate={currentIndex === index ? "active" : "inactive"}
                    className="h-2 rounded-full"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT - Side by side */}
        <div className="hidden md:flex flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-1/2 space-y-6 text-left">
            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Professional <span className="text-blue-600">Certifications</span> for Career Growth
            </motion.h1>
            
            <motion.p
              className="text-lg lg:text-xl text-gray-600 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Get recognized for your skills with our industry-approved certification programs.
            </motion.p>
            
            <motion.div
              className="flex flex-row gap-4 justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition">
                Browse Certifications
              </button>
              <button className="border-2 border-gray-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium shadow-md transition">
                How It Works
              </button>
            </motion.div>
          </div>

          {/* Image Carousel */}
          <div className="w-1/2 flex justify-center">
            <div className="relative aspect-[4/3] w-full max-w-lg">
              <div
                className="relative h-full rounded-xl overflow-hidden shadow-xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <AnimatePresence custom={direction} initial={false}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0"
                  >
                    <img
                      src={images[currentIndex].src}
                      alt={images[currentIndex].alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white font-medium text-lg">
                        {images[currentIndex].caption}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-6 gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className="h-2 rounded-full focus:outline-none"
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <motion.div
                      variants={dotVariants}
                      animate={currentIndex === index ? "active" : "inactive"}
                      className="h-2 rounded-full"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;