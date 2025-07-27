import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Initializing portfolio...",
    "Loading dynamic visuals...",
    "Crafting user experience...",
    "Almost there...",
    "Welcome to my portfolio!"
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setLoading(false), 1000);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [loadingTexts.length]);

  if (!loading) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] bg-gray-50 dark:bg-gray-900 flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Subtle Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/3 left-1/5 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/5 w-48 h-48 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 0.9, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </div>

        {/* Main Loading Content */}
        <div className="relative z-10 text-center">
          {/* Logo and Title */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="flex items-center justify-center space-x-4 mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-2xl flex items-center justify-center shadow-neon"
                animate={{
                  rotate: [0, 360],
                  boxShadow: [
                    "0 0 30px rgba(0, 212, 255, 0.5)",
                    "0 0 50px rgba(0, 212, 255, 0.8)",
                    "0 0 30px rgba(0, 212, 255, 0.5)"
                  ]
                }}
                transition={{
                  rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                  boxShadow: { duration: 2, repeat: Infinity }
                }}
              >
                <FaCode className="text-primary text-2xl" />
              </motion.div>
              
              <motion.h1
                className="text-4xl md:text-6xl font-bold gradient-text-neon"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Sahlaan
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Full Stack Developer
            </motion.p>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            className="mb-8 min-h-[2rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentText}
                className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium tracking-tight"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                {loadingTexts[currentText]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Progress Circle */}
          <motion.div
            className="w-32 h-32 mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut' }}
          >
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="fill-none stroke-gray-200 dark:stroke-gray-700"
                cx="50"
                cy="50"
                r="45"
                strokeWidth="5"
              />
              <motion.circle
                className="fill-none stroke-blue-500 dark:stroke-blue-400"
                cx="50"
                cy="50"
                r="45"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ strokeDasharray: '283', strokeDashoffset: '283' }}
                animate={{ strokeDashoffset: 283 * (1 - progress / 100) }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
              <motion.text
                x="50"
                y="55"
                textAnchor="middle"
                className="fill-blue-600 dark:fill-blue-400 text-xl font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
              >
                {Math.round(progress)}%
              </motion.text>
            </svg>
          </motion.div>

          {/* Loading Animation */}
          <motion.div
            className="flex items-center justify-center space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full"
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;