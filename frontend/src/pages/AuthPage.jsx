import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from 'firebase-config';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup 
} from 'firebase/auth';
import { doc, setDoc, updateDoc, getFirestore } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AuthPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const db = getFirestore();

  const storeUserData = async (userId, userData) => {
    try {
      await setDoc(doc(db, 'users', userId), {
        ...userData,
        createdAt: new Date(),
        lastLogin: new Date(),
      }, { merge: true }); // Merge to avoid overwriting existing data
    } catch (err) {
      console.error("Error storing user data:", err);
      throw err; // Propagate error to caller
    }
  };

  const updateLastLogin = async (userId) => {
    try {
      await updateDoc(doc(db, 'users', userId), {
        lastLogin: new Date(),
      });
    } catch (err) {
      console.error("Error updating last login:", err);
    }
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    const toastId = toast.loading(isLogin ? 'Logging in...' : 'Creating account...');

    try {
      if (isLogin) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        await updateLastLogin(userCredential.user.uid); // Update last login
        toast.update(toastId, {
          render: 'Welcome back!',
          type: 'success',
          isLoading: false,
          autoClose: 2000,
          icon: '👋'
        });
      } else {
        if (!name.trim()) throw new Error('Name is required');
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await storeUserData(userCredential.user.uid, {
          name: name.trim(),
          email: email,
        });
        toast.update(toastId, {
          render: `Welcome, ${name.split(' ')[0]}!`,
          type: 'success',
          isLoading: false,
          autoClose: 2500,
          icon: '🎉'
        });
      }
      navigate('/');
    } catch (err) {
      const errorMessage = err.code === 'auth/wrong-password'
        ? 'Incorrect password'
        : err.message.replace('Firebase: ', '') || 'Authentication failed';
      toast.update(toastId, {
        render: errorMessage,
        type: 'error',
        isLoading: false,
        autoClose: 3000,
        icon: '❌'
      });
    }
  };

  const handleGoogleLogin = async () => {
    const toastId = toast.loading('Signing in with Google...');
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const { uid, displayName, email } = result.user;
      await storeUserData(uid, {
        name: displayName || '',
        email: email || '',
      });
      await updateLastLogin(uid); // Update last login
      toast.update(toastId, {
        render: `Hi ${displayName || ''}!`,
        type: 'success',
        isLoading: false,
        autoClose: 2000,
        icon: '🖐️'
      });
      navigate('/');
    } catch (err) {
      toast.update(toastId, {
        render: 'Google sign-in failed',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
        icon: '⚠️'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-white p-4"
    >
      <div className="max-w-md w-full bg-white rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <div className="text-center py-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <h1 className="text-3xl font-bold">Welcome</h1>
          <p className="mt-2">{isLogin ? 'Login to your account' : 'Create your account'}</p>
        </div>
        <div className="flex justify-center mb-6 mt-4">
          <button
            onClick={() => { setIsLogin(false); setError(''); }}
            className={`px-4 py-2 rounded-l-md focus:outline-none transition-colors duration-300 ${
              !isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => { setIsLogin(true); setError(''); }}
            className={`px-4 py-2 rounded-r-md focus:outline-none transition-colors duration-300 ${
              isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Login
          </button>
        </div>
        {error && (
          <div className="mx-6 mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
            {error}
          </div>
        )}
        <div className="px-8 pb-8">
          <form onSubmit={handleAuth} className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FaUser className="absolute left-3 top-3 text-gray-400" />
              </div>
            )}
            <div className="relative">
              <input
                type="email"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            </div>
            <div className="relative">
              <input
                type="password"
                required
                minLength={6}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                placeholder="Password (min 6 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className="absolute left-3 top-3 text-gray-400" />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md hover:opacity-90 transition-opacity duration-300 transform hover:scale-105"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-2 bg-white text-gray-500 text-sm">Or continue with</span>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <FaGoogle className="text-red-500 mr-2" /> Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </motion.div>
  );
}