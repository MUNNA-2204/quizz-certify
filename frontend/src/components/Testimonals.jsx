import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Quote, User, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Frontend Developer",
    content: "The React course completely transformed my skills. Landed a promotion within 2 months!",
    rating: 5,
    avatar: <User className="text-blue-600" size={20} />
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Analyst",
    content: "Best investment in my career. The Python courses are incredibly thorough with real-world projects.",
    rating: 5,
    avatar: <User className="text-blue-600" size={20} />
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "UI Designer",
    content: "Finally found a design course that focuses on practical applications rather than just theory.",
    rating: 4,
    avatar: <User className="text-blue-600" size={20} />
  },
  {
    id: 4,
    name: "David Wilson",
    role: "DevOps Engineer",
    content: "The cloud computing path helped me transition from system admin to DevOps in 6 months.",
    rating: 5,
    avatar: <User className="text-blue-600" size={20} />
  },
  {
    id: 5,
    name: "Emma Garcia",
    role: "Backend Developer",
    content: "Database design course filled all the gaps in my self-taught knowledge. Highly recommend!",
    rating: 5,
    avatar: <User className="text-blue-600" size={20} />
  },
  {
    id: 6,
    name: "James Lee",
    role: "Fullstack Developer",
    content: "Took 3 courses simultaneously. The learning platform makes it easy to manage multiple courses.",
    rating: 4,
    avatar: <User className="text-blue-600" size={20} />
  },
  {
    id: 7,
    name: "Olivia Martin",
    role: "Product Manager",
    content: "Even as a non-technical PM, the fundamentals courses helped me communicate better with my team.",
    rating: 4,
    avatar: <User className="text-blue-600" size={20} />
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const controls = useAnimation();
  const carouselRef = useRef(null);
  const [autoRotate, setAutoRotate] = useState(true);

  // Auto-rotate effect
  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [autoRotate, currentIndex]);

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    controls.start({
      x: -100,
      opacity: 0,
      transition: { duration: 0 }
    }).then(() => {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.5 }
      });
    });
  };

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    controls.start({
      x: 100,
      opacity: 0,
      transition: { duration: 0 }
    }).then(() => {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.5 }
      });
    });
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 50) {
      handlePrev();
    } else if (info.offset.x < -50) {
      handleNext();
    }
  };

  const handleHoverStart = () => setAutoRotate(false);
  const handleHoverEnd = () => setAutoRotate(true);

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Students Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join 10,000+ satisfied learners worldwide
          </p>
        </motion.div>

        {/* Desktop View (3 testimonials with arrows) */}
        <div className="hidden md:block relative">
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
          >
            <ChevronLeft className="text-blue-600" size={24} />
          </button>

          <div className="grid grid-cols-3 gap-8">
            {[
              testimonials[currentIndex % testimonials.length],
              testimonials[(currentIndex + 1) % testimonials.length],
              testimonials[(currentIndex + 2) % testimonials.length]
            ].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 h-full"
              >
                <Quote className="text-gray-300 mb-4" size={24} />
                <p className="text-gray-700 mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        fill={i < testimonial.rating ? "#F59E0B" : "#E5E7EB"}
                        strokeWidth={0}
                        className="w-4 h-4"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
          >
            <ChevronRight className="text-blue-600" size={24} />
          </button>
        </div>

        {/* Mobile Carousel */}
        <div 
          className="md:hidden relative"
          onMouseEnter={handleHoverStart}
          onMouseLeave={handleHoverEnd}
          onTouchStart={handleHoverStart}
          onTouchEnd={handleHoverEnd}
        >
          <motion.div
            ref={carouselRef}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            animate={controls}
            className="bg-gray-50 p-6 rounded-xl border border-gray-200 mx-4"
          >
            <Quote className="text-gray-300 mb-4" size={24} />
            <p className="text-gray-700 mb-6">{testimonials[currentIndex].content}</p>
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                {testimonials[currentIndex].avatar}
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
              </div>
              <div className="ml-auto flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fill={i < testimonials[currentIndex].rating ? "#F59E0B" : "#E5E7EB"}
                    strokeWidth={0}
                    className="w-4 h-4"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mobile Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
          >
            <ChevronLeft className="text-blue-600" size={20} />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
          >
            <ChevronRight className="text-blue-600" size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setDirection(index > currentIndex ? 'right' : 'left');
                }}
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-blue-600 w-4' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;