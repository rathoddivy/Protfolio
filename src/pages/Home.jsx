import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          {/* Profile Picture */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 blur-md"></div>
            <div className="relative flex items-center justify-center rounded-full w-full h-full bg-white dark:bg-gray-800 border-4 border-white dark:border-gray-800 shadow-lg">
              <span className="text-4xl sm:text-6xl">🤖</span>
            </div>
          </div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">MERN Stack</span> Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10"
          >
            I craft <span className="font-semibold text-gray-800 dark:text-gray-100">high-performance web applications</span> with modern technologies.
          </motion.p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
        >
          <Link
            to="/projects"
            className="relative px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="relative z-10">View My Work</span>
          </Link>

          <Link
            to="/contact"
            className="relative px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-medium text-sm sm:text-base border-2 border-gray-200 dark:border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-indigo-200"
          >
            <span className="relative z-10">Let's Connect</span>
          </Link>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-2 sm:gap-3 px-2"
        >
          {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'HTML/CSS', 'JavaScript'].map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white dark:bg-gray-700 rounded-full text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}