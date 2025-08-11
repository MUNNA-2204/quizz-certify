import { useState } from 'react';
import { courses } from '../data/courses'; // Your courses data
import { FiArrowRight, FiSearch, FiBookOpen } from 'react-icons/fi';
import { motion } from 'framer-motion'; // For animations

const CTA = () => {
  const [userQuestion, setUserQuestion] = useState('');
  const [suggestedCourses, setSuggestedCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Predefined sample questions with keywords
  const sampleQuestions = [
    { text: "What's the difference between React and Angular?", keywords: ["react", "angular", "frontend"] },
    { text: "How do I start with backend development?", keywords: ["backend", "server", "nodejs"] },
    { text: "What are the best practices for API design?", keywords: ["api", "backend", "express"] },
    { text: "How can I build RESTful APIs with Node.js?", keywords: ["nodejs", "api", "rest", "backend"] }
  ];

  // Function to match courses based on keywords
  const getSuggestedCourses = (questionKeywords) => {
    const keywords = Array.isArray(questionKeywords) 
      ? questionKeywords 
      : questionKeywords.toLowerCase().split(/\W+/).filter(Boolean);

    const scoredCourses = courses.map(course => {
      const courseKeywords = course.keywords || [];
      const matches = keywords.filter(kw => 
        courseKeywords.some(ckw => ckw.toLowerCase().includes(kw)) ||
        course.category.toLowerCase().includes(kw) ||
        course.title.toLowerCase().includes(kw)
      ).length;
      return { ...course, score: matches };
    });

    const matchedCourses = scoredCourses
      .filter(c => c.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    return matchedCourses.length > 0 
      ? matchedCourses 
      : courses.sort((a, b) => (b.rating || 0) - (a.rating || 0)).slice(0, 3);
  };

  const handleQuestionSubmit = (e, question = userQuestion) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    const predefinedQuestion = sampleQuestions.find(q => q.text === question);
    const keywords = predefinedQuestion ? predefinedQuestion.keywords : question;
    const matchedCourses = getSuggestedCourses(keywords);
    setSuggestedCourses(matchedCourses);
    setIsLoading(false);
  };

  const handleSampleQuestionClick = (question) => {
    setUserQuestion(question.text);
    handleQuestionSubmit({ preventDefault: () => {} }, question.text);
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Form and Questions */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 tracking-tight"
            >
              Need Clarity on Coding?
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-8"
            >
              Select a question or type your own—we’ll recommend the perfect courses to level up your skills.
            </motion.p>

            <form onSubmit={handleQuestionSubmit} className="mb-10">
              <div className="relative flex items-center rounded-lg shadow-lg bg-gray-700 overflow-hidden">
                <input
                  type="text"
                  value={userQuestion}
                  onChange={(e) => setUserQuestion(e.target.value)}
                  placeholder="Ask a programming question..."
                  className="flex-grow px-5 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  required
                  minLength={5}
                />
                <button 
                  type="submit" 
                  className="bg-indigo-600 hover:bg-indigo-700 px-6 py-4 text-white font-medium transition-all duration-200 flex items-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading...
                    </span>
                  ) : (
                    <FiSearch className="text-xl" />
                  )}
                </button>
              </div>
            </form>

            <div className="text-sm text-gray-400">
              <p className="mb-3 font-medium">Explore these questions:</p>
              <div className="flex flex-wrap gap-3">
                {sampleQuestions.map((question, i) => (
                  <motion.button
                    key={i}
                    onClick={() => handleSampleQuestionClick(question)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full text-sm font-medium shadow-md transition-colors duration-200"
                  >
                    {question.text}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Course Suggestions */}
          <div>
            {suggestedCourses.length > 0 ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 rounded-xl p-6 shadow-xl"
              >
                <h3 className="text-2xl font-semibold mb-5 flex items-center text-white">
                  <FiBookOpen className="mr-2 text-indigo-400" /> Recommended Courses
                </h3>
                <div className="space-y-4">
                  {suggestedCourses.map(course => (
                    <motion.a
                      key={course.id}
                      href={`/learn/${course.id}`}
                      whileHover={{ y: -2 }}
                      className="block bg-gray-700 hover:bg-gray-600 rounded-lg p-4 shadow-md transition-all duration-200 border border-gray-600"
                    >
                      <div className="flex items-center">
                        <span className="text-2xl mr-4">{course.icon || '📘'}</span>
                        <div>
                          <h5 className="text-lg font-semibold text-white">{course.title}</h5>
                          <p className="text-sm text-gray-300">
                            {course.duration || 'N/A'} • {course.rating ? `${course.rating} ★` : 'N/A'} • {course.category}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
                <a 
                  href="/courses" 
                  className="mt-6 inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-200"
                >
                  See All Courses <FiArrowRight className="ml-2" />
                </a>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 rounded-xl p-8 text-center border-2 border-dashed border-gray-600 shadow-lg"
              >
                <span className="text-5xl mb-4 block">📚</span>
                <h3 className="text-xl font-semibold text-white mb-2">Your Learning Path Awaits</h3>
                <p className="text-gray-300">
                  Pick a question or ask your own to unlock tailored course recommendations.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;