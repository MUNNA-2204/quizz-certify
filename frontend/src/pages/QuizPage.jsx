import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses.jsx';
import { FiArrowLeft, FiClock, FiAward, FiBarChart2, FiRefreshCw, FiCheck, FiAlertTriangle } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { auth } from '/firebase-config'; // Adjust path based on your project structure
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const timerRef = useRef(null);
  const [user, setUser] = useState(null); // Start with null, update async
  const [loading, setLoading] = useState(true);
  const [quizState, setQuizState] = useState({
    currentQuestionIndex: 0,
    selectedOption: null,
    score: 0,
    showResults: false,
    isCompleted: false,
    timeLeft: 600,
    lastUpdate: Date.now(),
    hasSeenRules: false,
    certificateRequested: false
  });
  const [showRules, setShowRules] = useState(false); // Controlled by user state
  const course = courses.find(c => c.id === id);
  const questions = course?.quiz || [];

  // Quiz rules configuration
  const quizRules = [
    "You have 10 minutes to complete the quiz",
    "There are no back buttons - answer carefully",
    "Switching tabs will automatically submit your quiz",
    "Your progress is not saved if you refresh the page",
    "To unlock the certificate you have to score at least 70%"
  ];

  // Sync with localStorage after user is available
  useEffect(() => {
    const storageKey = `quizState_${id}_${auth.currentUser?.uid || 'guest'}`;
    const savedState = localStorage.getItem(storageKey);
    if (savedState) {
      setQuizState(prev => ({
        ...prev,
        ...JSON.parse(savedState),
        lastUpdate: Date.now()
      }));
    }
  }, [id]);

  // Auth state listener
  useEffect(() => {
    let unsubscribe;
    try {
      unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user);
        setLoading(false);
        if (!user) {
          toast.info('Please sign in to take this quiz', { autoClose: 3000 });
          navigate('/auth', { state: { fromQuiz: id } });
        } else {
          setShowRules(!localStorage.getItem(`quizState_${id}_${user.uid}`)?.hasSeenRules);
          const storageKey = `quizState_${id}_${user.uid}`;
          const savedState = localStorage.getItem(storageKey);
          if (savedState) {
            setQuizState(prev => ({
              ...prev,
              ...JSON.parse(savedState),
              lastUpdate: Date.now()
            }));
          }
        }
      });
    } catch (error) {
      console.error('Auth state listener error:', error);
      setLoading(false);
    }
    return () => unsubscribe && unsubscribe();
  }, [id, navigate]);

  // Save state to localStorage
  useEffect(() => {
    if (user?.uid) {
      const storageKey = `quizState_${id}_${user.uid}`;
      localStorage.setItem(storageKey, JSON.stringify(quizState));
    }
  }, [quizState, id, user?.uid]);

  // Timer logic
  useEffect(() => {
    if (showRules || quizState.isCompleted || quizState.showResults) return;

    const updateTimer = () => {
      setQuizState(prev => {
        const newTimeLeft = prev.timeLeft - 1;
        if (newTimeLeft <= 0) {
          if (user?.uid) localStorage.removeItem(`quizState_${id}_${user.uid}`);
          return {
            ...prev,
            timeLeft: 0,
            showResults: true,
            isCompleted: true,
            lastUpdate: Date.now()
          };
        }
        return {
          ...prev,
          timeLeft: newTimeLeft,
          lastUpdate: Date.now()
        };
      });
    };

    timerRef.current = setInterval(updateTimer, 1000);
    return () => clearInterval(timerRef.current);
  }, [showRules, quizState.isCompleted, quizState.showResults, id, user?.uid]);

  // Tab visibility handler
  useEffect(() => {
    if (showRules) return;
    
    const handleVisibilityChange = () => {
      if (document.hidden && !quizState.isCompleted && !quizState.showResults) {
        handleAutoSubmit();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [quizState.isCompleted, quizState.showResults, showRules]);

  // Certificate request
  useEffect(() => {
    if (quizState.showResults && (quizState.score / questions.length) * 100 >= 70 && !quizState.certificateRequested && user) {
      requestCertificate();
    }
  }, [quizState.showResults, quizState.score, quizState.certificateRequested, questions.length, user]);

  const handleStartQuiz = () => {
    setShowRules(false);
    setQuizState(prev => ({
      ...prev,
      hasSeenRules: true,
      lastUpdate: Date.now()
    }));
  };

  const handleOptionSelect = (index) => {
    setQuizState(prev => ({
      ...prev,
      selectedOption: index,
      lastUpdate: Date.now()
    }));
  };

  const handleNextQuestion = () => {
    const isCorrect = quizState.selectedOption === questions[quizState.currentQuestionIndex]?.answer;
    
    setQuizState(prev => {
      const newState = {
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        selectedOption: null,
        score: isCorrect ? prev.score + 1 : prev.score,
        lastUpdate: Date.now()
      };

      if (newState.currentQuestionIndex >= questions.length) {
        newState.showResults = true;
        newState.isCompleted = true;
        if (user?.uid) localStorage.removeItem(`quizState_${id}_${user.uid}`);
      }

      return newState;
    });
  };

  const handleAutoSubmit = () => {
    const isCorrect = quizState.selectedOption === questions[quizState.currentQuestionIndex]?.answer;
    
    setQuizState({
      ...quizState,
      showResults: true,
      isCompleted: true,
      score: isCorrect ? quizState.score + 1 : quizState.score,
      timeLeft: 0,
      lastUpdate: Date.now()
    });
    
    if (user?.uid) localStorage.removeItem(`quizState_${id}_${user.uid}`);
  };

  const handleBackToCourse = () => {
    if (user?.uid) localStorage.removeItem(`quizState_${id}_${user.uid}`);
    navigate(`/learn/${id}`);
  };

  const handleRestartQuiz = () => {
    if (user?.uid) localStorage.removeItem(`quizState_${id}_${user.uid}`);
    setQuizState({
      currentQuestionIndex: 0,
      selectedOption: null,
      score: 0,
      showResults: false,
      isCompleted: false,
      timeLeft: 600,
      lastUpdate: Date.now(),
      hasSeenRules: true,
      certificateRequested: false
    });
    setShowRules(false);
  };

  const requestCertificate = async () => {
    if (!user?.uid || !user.email) {
      toast.error('User data unavailable for certificate request', { autoClose: 3000 });
      return;
    }
    try {
      const response = await fetch('http://localhost:3001/certificate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.uid,
          courseId: id,
          email: user.email,
          score: Math.round((quizState.score / questions.length) * 100),
        }),
      });
      const data = await response.json();
      if (data.message === 'Certificate sent') {
        toast.success('Certificate sent to your email!', { autoClose: 3000 });
        setQuizState(prev => ({ ...prev, certificateRequested: true }));
      } else {
        toast.error('Failed to send certificate', { autoClose: 3000 });
      }
    } catch (error) {
      console.error('Certificate request failed:', error);
      toast.error('Error requesting certificate', { autoClose: 3000 });
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Determine content based on state
  let content = null;
  if (!course) {
    content = (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md w-full mx-4 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h2>
          <button
            onClick={() => navigate('/courses')}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-all shadow-md"
          >
            Browse Courses
          </button>
        </div>
      </div>
    );
  } else if (questions.length === 0) {
    content = (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md w-full mx-4 border border-gray-100">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
            <FiAward className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">No Quiz Available</h1>
          <p className="text-gray-600 mb-6">This course doesn't have any quiz questions yet.</p>
          <button
            onClick={handleBackToCourse}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-all shadow-md"
          >
            Back to Course
          </button>
        </div>
      </div>
    );
  } else if (loading) {
    content = (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading quiz...</p>
        </div>
      </div>
    );
  } else if (!user) {
    content = null; // Redirect handled in auth useEffect
  } else if (showRules) {
    content = (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-md w-full mx-4 border border-gray-100 mt-12 sm:mt-0"
        >
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full mb-4 mx-auto">
              <FiCheck className="text-blue-600 text-2xl" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Quiz Rules</h1>
            <p className="text-gray-600">Please review these rules before starting</p>
          </div>

          <ul className="space-y-3 mb-8 px-2 sm:px-0">
            {quizRules.map((rule, index) => (
              <motion.li 
                key={index} 
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 mt-1 mr-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <FiCheck className="text-green-500 text-xs" />
                  </div>
                </div>
                <span className="text-gray-700 text-sm sm:text-base">{rule}</span>
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-col space-y-3 px-2 sm:px-0">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleStartQuiz}
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-all font-medium shadow-md text-sm sm:text-base"
            >
              Start Quiz
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleBackToCourse}
              className="w-full py-3 px-6 bg-white text-gray-800 rounded-lg hover:bg-gray-50 transition-all border border-gray-200 text-sm sm:text-base"
            >
              Back to Course
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  } else if (quizState.showResults) {
    content = (
      <motion.div
        key="results"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
      >
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full mb-4 mx-auto">
              <FiBarChart2 className="text-blue-600 text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Quiz Results</h2>
            <p className="text-gray-600">
              You scored {quizState.score} out of {questions.length} questions
            </p>
          </div>

          {/* Score Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Your Score</span>
              <span className="text-sm font-bold text-blue-600">
                {Math.round((quizState.score / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(quizState.score / questions.length) * 100}%` }}
                transition={{ duration: 1, type: 'spring' }}
                className={`h-2.5 rounded-full ${
                  (quizState.score / questions.length) * 100 >= 70 
                    ? 'bg-gradient-to-r from-green-500 to-green-600' 
                    : 'bg-gradient-to-r from-blue-500 to-blue-600'
                }`}
              ></motion.div>
            </div>
            {(quizState.score / questions.length) * 100 >= 70 ? (
              <div className="mt-2 text-sm text-green-600 font-medium flex items-center justify-center">
                <FiCheck className="mr-1" /> Congratulations! You passed the quiz
              </div>
            ) : (
              <div className="mt-2 text-sm text-red-600 font-medium flex items-center justify-center">
                <FiAlertTriangle className="mr-1" /> Keep practicing to improve your score
              </div>
            )}
          </div>

          {/* Questions Review */}
          <div className="space-y-4 mb-8">
            {questions.map((question, index) => {
              const userAnswer = quizState.selectedOptions?.[index] ?? quizState.selectedOption;
              const isCorrect = question.answer === userAnswer;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-lg border ${
                    isCorrect !== undefined && isCorrect
                      ? 'bg-green-50 border-green-200'
                      : 'bg-red-50 border-red-200'
                  }`}
                >
                  <div className="font-medium text-gray-900 mb-2">
                    {index + 1}. {question.question}
                  </div>
                  <div className="text-sm text-gray-700 mb-1">
                    <span className="font-semibold">Your answer:</span> {question.options[userAnswer] || 'Not answered'}
                  </div>
                  <div className="text-sm text-gray-700 mb-1">
                    <span className="font-semibold">Correct answer:</span> {question.options[question.answer]}
                  </div>
                  {question.explanation && (
                    <div className="text-sm text-gray-600 mt-2">
                      <span className="font-semibold">Explanation:</span> {question.explanation}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleRestartQuiz}
              className="flex items-center justify-center px-6 py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-50 transition-all border border-gray-200 shadow-sm"
            >
              <FiRefreshCw className="mr-2" />
              Retake Quiz
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleBackToCourse}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-all shadow-md"
            >
              Back to Course
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  } else {
    content = (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <motion.button
              whileHover={{ x: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleBackToCourse}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
            >
              <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Course</span>
            </motion.button>
            
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <FiClock className="text-gray-500 mr-2" />
              <span className={`font-medium ${
                quizState.timeLeft <= 60 ? 'text-red-600' : 'text-gray-700'
              }`}>
                {formatTime(quizState.timeLeft)}
              </span>
              {quizState.timeLeft <= 60 && (
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-2"
                >
                  <FiAlertTriangle className="text-red-500 animate-pulse" />
                </motion.div>
              )}
            </div>
          </div>

          {/* Quiz Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title} Quiz</h1>
            <div className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              Question {quizState.currentQuestionIndex + 1} of {questions.length}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`question-${quizState.currentQuestionIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                {/* Question */}
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {questions[quizState.currentQuestionIndex].question}
                </h3>

                {/* Options */}
                <div className="space-y-3 mb-8">
                  {questions[quizState.currentQuestionIndex].options.map((option, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleOptionSelect(index)}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                        quizState.selectedOption === index
                          ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 shadow-sm'
                          : 'border-gray-200 hover:border-blue-300 text-gray-800 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 flex-shrink-0 ${
                          quizState.selectedOption === index 
                            ? 'border-blue-500 bg-blue-500 text-white'
                            : 'border-gray-300'
                        }`}>
                          {quizState.selectedOption === index && (
                            <FiCheck className="text-xs" />
                          )}
                        </div>
                        <span>{option}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Next Button */}
                <motion.button
                  whileHover={{ scale: quizState.selectedOption !== null ? 1.02 : 1 }}
                  whileTap={{ scale: quizState.selectedOption !== null ? 0.98 : 1 }}
                  onClick={handleNextQuestion}
                  disabled={quizState.selectedOption === null}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all shadow-md ${
                    quizState.selectedOption === null
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:opacity-90'
                  }`}
                >
                  {quizState.currentQuestionIndex === questions.length - 1
                    ? 'Submit Quiz'
                    : 'Next Question'}
                </motion.button>

                {/* Progress Indicator */}
                <div className="mt-6">
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Progress</span>
                    <span>
                      {quizState.currentQuestionIndex + 1}/{questions.length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${((quizState.currentQuestionIndex + 1) / questions.length) * 100}%`,
                      }}
                      transition={{ duration: 0.5 }}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <>
      <ToastContainer />
      {content}
    </>
  );
};

export default QuizPage;