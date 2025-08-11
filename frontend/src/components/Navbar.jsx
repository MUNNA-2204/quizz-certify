import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { auth } from 'firebase-config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);

  // Check auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    const toastId = toast.loading('Logging out...');
    try {
      await signOut(auth);
      toast.update(toastId, {
        render: 'Logged out successfully',
        type: 'info',
        isLoading: false,
        autoClose: 2000,
        icon: '👋'
      });
    } catch (err) {
      toast.update(toastId, {
        render: 'Logout failed',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
        icon: '❌'
      });
    }
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg py-2"
            : "bg-white/95 backdrop-blur-sm py-3"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div className="flex-shrink-0 flex items-center" whileHover={{ scale: 1.05 }}>
              <Link to="/">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  CertifyPro
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                {navItems.map((item) => (
                  <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                    <Link
                      to={item.href}
                      className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 h-0.5 bg-blue-600 w-0 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Auth Button (Desktop) */}
                {user ? (
                  <motion.button
                    className="ml-4 bg-gradient-to-r from-red-500 to-red-400 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLogout}
                  >
                    Log Out
                  </motion.button>
                ) : (
                  <Link to="/auth">
                    <motion.button
                      className="ml-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Sign Up
                    </motion.button>
                  </Link>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
                whileTap={{ scale: 0.9 }}
                aria-label="Menu"
              >
                <svg
                  className={`h-6 w-6 transition-transform duration-200 ${
                    isOpen ? "transform rotate-90" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-white shadow-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <motion.div
                    key={`mobile-${item.name}`}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                  >
                    <Link
                      to={item.href}
                      className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Auth Button (Mobile) */}
                {user ? (
                  <motion.button
                    className="w-full mt-2 bg-gradient-to-r from-red-500 to-red-400 text-white px-6 py-3 rounded-lg font-semibold shadow-md"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setIsOpen(false);
                      handleLogout();
                    }}
                  >
                    Log Out
                  </motion.button>
                ) : (
                  <Link to="/auth" onClick={() => setIsOpen(false)}>
                    <motion.button
                      className="w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-lg font-semibold shadow-md"
                      whileTap={{ scale: 0.95 }}
                    >
                      Sign Up
                    </motion.button>
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Responsive spacer */}
      <div
        className={`${
          isOpen ? "h-[calc(16rem+16px)]" : "h-16"
        } md:h-20 transition-all duration-300`}
      ></div>
    </>
  );
};

export default Navbar;