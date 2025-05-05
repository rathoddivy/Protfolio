import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center m-10 bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 blur-md"></div>
            <div className="relative flex items-center justify-center rounded-full w-full h-full bg-white border-4 border-white shadow-lg">
              <span className="text-6xl">🤖</span> {/* Developer emoji */}
            </div>
          </div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">MERN Stack</span> Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10"
          >
            I craft <span className="font-semibold text-gray-800">high-performance web applications</span> with modern technologies and pixel-perfect design.
          </motion.p>
        </motion.div>

        {/* Rest of your existing code remains the same */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            to="/projects"
            className="relative px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            to="/contact"
            className="relative px-8 py-4 rounded-lg bg-white text-gray-800 font-medium border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-indigo-200"
          >
            <span className="relative z-10">Let's Connect</span>
            <div className="absolute inset-0 bg-gray-50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 flex justify-center space-x-6"
        >
          {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind' , 'Html/Css' , 'Javascript'].map((tech) => (
            <span 
              key={tech}
              className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}