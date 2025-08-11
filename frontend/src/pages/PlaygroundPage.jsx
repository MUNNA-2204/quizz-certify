import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FiCode,
  FiPlay,
  FiArrowLeft,
  FiCheckCircle,
  FiAlertTriangle,
  FiLoader,
  FiMenu,
} from "react-icons/fi";
import MonacoEditorWrapper from "../components/MonacoEditorWrapper";

export default function PlaygroundPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const abortControllerRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [activeExercise, setActiveExercise] = useState(0);
  const [output, setOutput] = useState("");
  const [code, setCode] = useState(() => {
    const saved = localStorage.getItem(`code-${state?.title}-${activeExercise}`);
    return saved || "// Type your code here";
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!state?.exercises?.length) {
      navigate("/courses", { replace: true });
    }
  }, [state, navigate]);

  const analyzeCode = async () => {
    if (!code.trim() || isLoading) return;

    setIsLoading(true);
    setOutput("");

    if (abortControllerRef.current) abortControllerRef.current.abort();

    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      const response = await fetch("http://localhost:3001/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code,
          exercise: state.exercises[activeExercise] || "No exercise provided",
        }),
        signal: controller.signal,
      });

      if (!response.ok) throw new Error("Analysis failed");

      const { result } = await response.json();
      setOutput(result);
    } catch (error) {
      if (error.name !== "AbortError") {
        setOutput(`⚠️ ${error.message || "Failed to analyze code"}`);
      }
    } finally {
      if (abortControllerRef.current === controller) abortControllerRef.current = null;
      setIsLoading(false);
    }
  };

  const handleExerciseChange = (index) => {
    if (abortControllerRef.current) abortControllerRef.current.abort();
    setActiveExercise(index);
    const savedCode =
      localStorage.getItem(`code-${state?.title}-${index}`) ||
      "// Type your code here";
    setCode(savedCode);
    setOutput("");
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 sm:gap-2 text-blue-600 hover:text-blue-800 transition-colors px-2 sm:px-3 py-1 rounded-lg hover:bg-blue-50"
          >
            <FiArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-sm sm:text-base hidden sm:inline">Back to Lesson</span>
            <span className="text-sm sm:text-base sm:hidden">Back</span>
          </button>
          <h1 className="text-lg sm:text-2xl font-bold text-gray-800">
            <span className="hidden sm:inline">Playground: </span>
            <span className="text-blue-600">{state?.title || "Untitled"}</span>
          </h1>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-2 rounded-lg"
        >
          <FiMenu className="h-4 w-4" />
          <span>Exercises</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
            <div className="w-4/5 h-full bg-white overflow-y-auto p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <FiCode className="h-5 w-5 text-blue-500" />
                  <span>Exercises</span>
                </h2>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500 hover:text-gray-700">
                  ✕
                </button>
              </div>
              <ul className="space-y-2">
                {state?.exercises?.map((exercise, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleExerciseChange(index)}
                      className={`w-full text-left p-3 rounded-lg transition-all flex items-start gap-3 ${
                        activeExercise === index
                          ? "bg-blue-50 border border-blue-200"
                          : "hover:bg-gray-50 border border-transparent"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          activeExercise === index ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-gray-800">Exercise {index + 1}</p>
                        <p className="text-sm text-gray-600 line-clamp-2">{exercise}</p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="hidden lg:block lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <FiCode className="h-5 w-5 text-blue-500" />
              <span>Exercises</span>
            </h2>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              {state?.exercises?.length || 0} items
            </span>
          </div>
          <ul className="space-y-2">
            {state?.exercises?.map((exercise, index) => (
              <li key={index}>
                <button
                  onClick={() => handleExerciseChange(index)}
                  className={`w-full text-left p-3 rounded-lg transition-all flex items-start gap-3 ${
                    activeExercise === index
                      ? "bg-blue-50 border border-blue-200"
                      : "hover:bg-gray-50 border border-transparent"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      activeExercise === index ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-800">Exercise {index + 1}</p>
                    <p className="text-sm text-gray-600 line-clamp-2">{exercise}</p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2 space-y-3 sm:space-y-4">
          <div className="lg:hidden bg-white rounded-xl shadow-sm border border-gray-200 p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center">
                {activeExercise + 1}
              </div>
              <h3 className="font-medium text-gray-800">Exercise {activeExercise + 1}</h3>
            </div>
            <p className="text-sm text-gray-700">
              {state?.exercises?.[activeExercise] || "No exercise provided"}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-200 gap-2 sm:gap-0">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full flex items-center">
                  <FiCode className="mr-1" />
                  Code
                </span>
                <span className="text-xs text-gray-500">
                  {code.length} chars • {code.split("\n").length} lines
                </span>
              </div>
              <button
                onClick={analyzeCode}
                disabled={isLoading}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 rounded-lg transition-all text-sm sm:text-base ${
                  isLoading
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-md"
                }`}
              >
                {isLoading ? (
                  <>
                    <FiLoader className="h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <FiPlay className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Run Analysis</span>
                  </>
                )}
              </button>
            </div>
            <MonacoEditorWrapper
              value={code}
              onChange={(newCode) => {
                setCode(newCode);
                localStorage.setItem(`code-${state?.title}-${activeExercise}`, newCode);
              }}
              height="50vh"
            />
          </div>

          {output && (
            <div
              className={`rounded-xl shadow-sm border ${
                output.includes("Error")
                  ? "bg-red-50 border-red-200"
                  : "bg-green-50 border-green-200"
              }`}
            >
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 border-b">
                <div className="flex items-center gap-2">
                  {output.includes("Error") ? (
                    <FiAlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                  ) : (
                    <FiCheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                  )}
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {output.includes("Error") ? "Needs Improvement" : "Analysis Complete"}
                  </h3>
                </div>
                <span className="text-xs bg-white/50 px-2 py-1 rounded-full">
                  {new Date().toLocaleTimeString()}
                </span>
              </div>
              <div className="p-3 sm:p-4">
                <pre className="text-xs sm:text-sm text-gray-700 whitespace-pre-wrap font-sans">
                  {output}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}