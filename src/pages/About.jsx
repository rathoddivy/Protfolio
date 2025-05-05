import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaServer, FaGraduationCap, FaUserTie } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiPostman, SiGithub } from 'react-icons/si';
import { AiOutlineTool } from 'react-icons/ai';

export default function About() {
  const skills = [
    { icon: <FaReact className="w-6 h-6 text-blue-500" />, name: "React" },
    { icon: <SiTailwindcss className="w-6 h-6 text-cyan-500" />, name: "Tailwind CSS" },
    { icon: <FaNodeJs className="w-6 h-6 text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="w-6 h-6 text-gray-500" />, name: "Express" },
    { icon: <SiMongodb className="w-6 h-6 text-green-600" />, name: "MongoDB" },
    { icon: <FaServer className="w-6 h-6 text-purple-500" />, name: "REST APIs" },
    { icon: <SiHtml5 className="w-6 h-6 text-orange-500" />, name: "HTML5" },
    { icon: <SiCss3 className="w-6 h-6 text-blue-400" />, name: "CSS3" },
    { icon: <SiJavascript className="w-6 h-6 text-yellow-400" />, name: "JavaScript" },
    { icon: <SiPostman className="w-6 h-6 text-orange-500" />, name: "Postman" },
    { icon: <SiGithub className="w-6 h-6 text-gray-800 dark:text-gray-200" />, name: "GitHub" },
    { icon: <AiOutlineTool className="w-6 h-6 text-red-500" />, name: "AI Tools" }
  ];

  // ... rest of your component code remains the same ...


  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 px-4 max-w-6xl mx-auto"
    >
      {/* Section Header */}
      <motion.div
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto"></div>
      </motion.div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Introduction */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                <FaUserTie className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Who I Am</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a dedicated MERN stack developer with a Bachelor's degree in Computer Applications from Monark University. 
              With over 2 years of hands-on experience in web development, I specialize in creating robust, 
              scalable applications using modern technologies. My journey in tech began with a fascination for 
              problem-solving and has evolved into a passion for building digital solutions that make an impact.
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
              or mentoring aspiring developers.
            </p>
          </div>

          {/* Education */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-4">
                <FaGraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-gray-600 dark:text-gray-400">Monark University | Completed</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  Specialized in Web Development and Database Management
                </p>
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
          className="space-y-8"
        >
          {/* Skills */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">My Technical Toolkit</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  {skill.icon}
                  <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* What I Can Do */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Professional Capabilities</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <p className="ml-3 text-gray-600 dark:text-gray-300">
                  Architect and develop responsive single-page applications (SPAs) with React.js, implementing state management and component-based architecture
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <p className="ml-3 text-gray-600 dark:text-gray-300">
                  Design and implement RESTful APIs using Node.js and Express, ensuring security, scalability, and optimal performance
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <p className="ml-3 text-gray-600 dark:text-gray-300">
                  Optimize application performance through code splitting, lazy loading, and efficient database queries
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <p className="ml-3 text-gray-600 dark:text-gray-300">
                  Collaborate using Git version control and agile methodologies to deliver high-quality software
                </p>
              </div>
            </div>
          </div>

          {/* Looking For */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">Career Aspirations</h3>
            <p className="text-blue-100">
              I'm actively seeking challenging opportunities as a frontend or full-stack developer in innovative tech companies. 
              I'm particularly interested in roles that allow me to work with cutting-edge technologies, 
              contribute to meaningful projects, and grow alongside talented teams. My goal is to join an organization 
              where I can apply my technical expertise while continuously learning and taking on increasing responsibility. 
              I thrive in collaborative environments that value clean code, continuous improvement, and user-centric design.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}