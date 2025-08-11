import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import { useEffect } from "react";
import { auth } from "/firebase-config"; // Adjust path as needed
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import WhyUs from "./components/WhyUs";
import TrustIndicators from "./components/TrustIndicators";
import Testimonials from "./components/Testimonals";
import FeaturedCourses from "./components/FeaturedCourses";
import LearningPathways from "./components/LearningPathways";
import AllCourses from "./pages/AllCourses";
import CourseContentPage from "./pages/CourseContentPage";
import AuthPage from "./pages/AuthPage";
import CTA from "./components/CTA";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PlaygroundPage from "./pages/PlaygroundPage";
import QuizPage from "./pages/QuizPage";

<ToastContainer position="bottom-right" autoClose={3000} />;
const AppLayout = ({ children }) => {
  const location = useLocation();
  const isCoursePage = location.pathname.startsWith("/course/");

  return (
    <>
      {!isCoursePage && <Navbar />}
      {children}
    </>
  );
};

const App = () => {
  // Firebase connection check
  useEffect(() => {
    // This will attempt to get the current user (checks auth connection)
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("Firebase connected successfully! User:", user.email);
      } else {
        console.log("Firebase connected successfully! No user logged in.");
      }
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <TrustIndicators />
                <HowItWorks />
                <FeaturedCourses />
                <Testimonials />
                <WhyUs />
                <LearningPathways />
                <CTA/>
                <ToastContainer
                  position="top-right"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={true}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                  toastStyle={{
                    marginTop: "70px", // Below navbar
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  }}
                />
              </>
            }
          />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/courses/:id/quiz" element={<QuizPage />} />
          <Route path="/learn/:id" element={<CourseContentPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
