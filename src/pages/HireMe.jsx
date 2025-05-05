import { motion } from 'framer-motion';
import { FaPaperPlane, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import pdf from '../assets/Rathod DivyRajSinh.pdf'

const HireMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section 
      id="hire-me"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="py-16 px-4 max-w-6xl mx-auto"
    >
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Let's Build Something Amazing Together
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-blue-100 text-lg mb-8"
          >
            I'm currently available for freelance work or full-time positions. If you have a project that needs 
            creative solutions, or if you'd like to discuss potential opportunities, I'd love to hear from you.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
          >
    <a
  href="mailto:divayrajrathod69@gmail.com"
  className="flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
>
  <FaPaperPlane className="text-blue-600" />
  Send Me an Email
</a>
  
            <a
              href= {pdf}
              download
              className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            <a 
              href="https://www.linkedin.com/in/rathod-divyraj-9b3128252/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/rathoddivy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a 
              href="mailto:divayrajrathod69@gmail.com" 
              className="text-white hover:text-blue-200 transition-colors"
              aria-label="Email"
            >
              <SiGmail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HireMe;