import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import { FiStar, FiBook, FiCode, FiChevronDown, FiChevronRight, FiPlay, FiAward } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const CourseContentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expandedModules, setExpandedModules] = useState({});
  const [activeLesson, setActiveLesson] = useState({ moduleIndex: 0, lessonIndex: 0 });
  const [showQuizButton, setShowQuizButton] = useState(false);

  const course = courses.find(c => c.id === id);

  // Check if there are any lessons to show quiz button
  useEffect(() => {
    if (course) {
      setShowQuizButton(true); // Always show quiz button now
    }
  }, [course]);

  if (!course) return <div className="text-center py-20">Course not found</div>;

  const toggleModule = (moduleIndex) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleIndex]: !prev[moduleIndex]
    }));
  };

  const handleLessonClick = (moduleIndex, lessonIndex) => {
    setActiveLesson({ moduleIndex, lessonIndex });
    if (!expandedModules[moduleIndex]) {
      setExpandedModules(prev => ({ ...prev, [moduleIndex]: true }));
    }
  };

  const handleEnterPlayground = () => {
    navigate(`/playground`, {
      state: {
        lessonTitle: currentLesson.title,
        exercises: currentLesson.exercises || [],
        language: course.category
      }
    });
  };

  const handleTakeQuiz = () => {
    navigate(`/courses/${id}/quiz`);
  };

  const currentLesson = course.content.modules[activeLesson.moduleIndex]?.lessons[activeLesson.lessonIndex];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Sidebar Navigation */}
      <div className="lg:w-1/4">
        <div className="sticky top-4 bg-white rounded-lg shadow p-4 overflow-y-auto max-h-[calc(100vh-2rem)]">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <FiBook className="mr-2" />
            Course Outline
          </h2>
          <nav className="space-y-2">
            {course.content.modules.map((module, moduleIndex) => (
              <div key={moduleIndex}>
                <button
                  onClick={() => toggleModule(moduleIndex)}
                  className="w-full flex justify-between items-center p-2 hover:bg-gray-100 rounded"
                >
                  <span className="font-medium">{module.title}</span>
                  {expandedModules[moduleIndex] ? <FiChevronDown /> : <FiChevronRight />}
                </button>
                
                {expandedModules[moduleIndex] && (
                  <div className="ml-4 mt-1 space-y-1">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <button
                        key={lessonIndex}
                        onClick={() => handleLessonClick(moduleIndex, lessonIndex)}
                        className={`w-full text-left p-2 rounded flex items-center ${
                          activeLesson.moduleIndex === moduleIndex && 
                          activeLesson.lessonIndex === lessonIndex ? 
                          'bg-blue-100 text-blue-800' : 
                          'hover:bg-gray-50'
                        }`}
                      >
                        {lesson.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="lg:w-3/4">
        {/* Course Header */}
        <div className="mb-8 text-center">
          <div className="text-5xl mb-4 mx-auto w-fit">{course.icon}</div>
          <h1 className="text-4xl font-bold">{course.title}</h1>
          <p className="text-xl text-gray-600 mt-2">{course.description}</p>
          <div className="flex justify-center gap-4 mt-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
              {course.duration}
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full flex items-center">
              {course.rating} <FiStar className="ml-1" />
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">
              {course.category}
            </span>
          </div>
        </div>

        {/* Current Lesson Content */}
        {currentLesson && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{currentLesson.title}</h2>
              
              <div className="text-sm text-gray-500 mb-4">
                Module: {course.content.modules[activeLesson.moduleIndex].title}
              </div>
              
              {/* Theory Content */}
              <div className="prose max-w-none mb-6">
                {currentLesson.content.map((paragraph, i) => (
                  <p key={i} className="mb-4">{paragraph}</p>
                ))}
              </div>

              {/* Code Examples */}
              {currentLesson.examples?.map((example, exIndex) => (
                <div key={exIndex} className="mb-6 bg-gray-800 rounded-lg p-4 text-gray-100 overflow-x-auto">
                  <div className="flex items-center mb-2">
                    <FiCode className="mr-2" />
                    <span className="font-mono text-sm">Example {exIndex + 1}</span>
                  </div>
                  <pre className="whitespace-pre-wrap font-mono text-sm">
                    {example.code}
                  </pre>
                  <p className="mt-2 text-gray-300">{example.explanation}</p>
                </div>
              ))}

              {/* Exercises with Practice Button */}
              {currentLesson.exercises?.length > 0 && (
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mt-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center">
                    <FiCode className="mr-2" />
                    Hands-on Exercises
                  </h3>
                  <ul className="list-decimal pl-5 space-y-3 mb-6">
                    {currentLesson.exercises.map((exercise, i) => (
                      <li key={i} className="text-gray-700">{exercise}</li>
                    ))}
                  </ul>

                  <button
                    onClick={handleEnterPlayground}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all duration-200 flex items-center justify-center"
                  >
                    <FiPlay className="mr-2" />
                    Enter Interactive Playground
                  </button>
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    Practice these exercises with AI guidance
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Quiz Button (now always visible) */}
        {showQuizButton && (
          <div className="mt-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg p-6 text-center">
            <div className="flex flex-col items-center">
              <FiAward className="text-white text-4xl mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Test Your Knowledge?</h3>
              <p className="text-purple-100 mb-4">
                Take the quiz to unlock your certificate.
              </p>
              <button
                onClick={handleTakeQuiz}
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200 flex items-center"
              >
                Take Quiz
              </button>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button 
            className={`px-4 py-2 rounded flex items-center ${
              activeLesson.lessonIndex === 0 && activeLesson.moduleIndex === 0 ? 
              'bg-gray-200 text-gray-400' : 
              'bg-gray-200 hover:bg-gray-300'
            }`}
            disabled={activeLesson.lessonIndex === 0 && activeLesson.moduleIndex === 0}
            onClick={() => {
              if (activeLesson.lessonIndex > 0) {
                setActiveLesson(prev => ({ ...prev, lessonIndex: prev.lessonIndex - 1 }));
              } else if (activeLesson.moduleIndex > 0) {
                const prevModule = course.content.modules[activeLesson.moduleIndex - 1];
                setActiveLesson({
                  moduleIndex: activeLesson.moduleIndex - 1,
                  lessonIndex: prevModule.lessons.length - 1
                });
              }
            }}
          >
            Previous
          </button>
          
          <button 
            className={`px-4 py-2 rounded flex items-center ${
              activeLesson.moduleIndex === course.content.modules.length - 1 && 
              activeLesson.lessonIndex === course.content.modules[activeLesson.moduleIndex].lessons.length - 1 ? 
              'bg-gray-200 text-gray-400' : 
              'bg-blue-500 text-white hover:bg-blue-600'
            }`}
            disabled={
              activeLesson.moduleIndex === course.content.modules.length - 1 &&
              activeLesson.lessonIndex === course.content.modules[activeLesson.moduleIndex].lessons.length - 1
            }
            onClick={() => {
              const currentModule = course.content.modules[activeLesson.moduleIndex];
              if (activeLesson.lessonIndex < currentModule.lessons.length - 1) {
                setActiveLesson(prev => ({ ...prev, lessonIndex: prev.lessonIndex + 1 }));
              } else if (activeLesson.moduleIndex < course.content.modules.length - 1) {
                setActiveLesson({
                  moduleIndex: activeLesson.moduleIndex + 1,
                  lessonIndex: 0
                });
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseContentPage;