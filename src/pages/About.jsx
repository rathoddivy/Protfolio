import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaServer, FaGraduationCap, FaUserTie } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiPostman, SiGithub } from 'react-icons/si';
import { AiOutlineTool } from 'react-icons/ai';

export default function About() {
  const skills = [
    { icon: <FaReact className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />, name: "React" },
    { icon: <SiTailwindcss className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />, name: "Tailwind" },
    { icon: <FaNodeJs className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />, name: "Express" },
    { icon: <SiMongodb className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />, name: "MongoDB" },
    { icon: <FaServer className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />, name: "REST APIs" },
    { icon: <SiHtml5 className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />, name: "HTML5" },
    { icon: <SiCss3 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />, name: "CSS3" },
    { icon: <SiJavascript className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />, name: "JavaScript" },
    { icon: <SiPostman className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />, name: "Postman" },
    { icon: <SiGithub className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 dark:text-gray-200" />, name: "GitHub" },
    { icon: <AiOutlineTool className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />, name: "AI Tools" }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-12 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      {/* Section Header */}
      <motion.div
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto"></div>
      </motion.div>

      {/* Main Content - Changed to single column on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Column - Introduction */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3 sm:mr-4">
                <FaUserTie className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Who I Am</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a dedicated MERN stack developer with a Bachelor's degree in Computer Applications. 
              With over 2 years of experience, I specialize in creating robust, scalable applications 
              using modern technologies. My journey in tech began with a fascination for problem-solving 
              and has evolved into a passion for building digital solutions.
            </p>
          </div>

          {/* Education */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-3 sm:mr-4">
                <FaGraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-bold text-sm sm:text-base text-gray-800 dark:text-gray-200">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Monark University | Completed</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Skills */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Skills */}
          <div className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-white">My Technical Toolkit</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  {skill.icon}
                  <span className="mt-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* What I Can Do */}
          <div className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-white">Professional Capabilities</h3>
            <div className="space-y-3">
              {[
                "Architect and develop responsive single-page applications (SPAs) with React.js",
                "Design and implement RESTful APIs using Node.js and Express",
                "Optimize application performance through efficient techniques",
                "Collaborate using Git version control and agile methodologies"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <p className="ml-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Looking For */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5 sm:p-6 rounded-xl shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">Career Aspirations</h3>
            <p className="text-xs sm:text-sm text-blue-100">
              I'm actively seeking challenging opportunities as a frontend or full-stack developer. 
              I thrive in collaborative environments that value clean code and user-centric design.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}