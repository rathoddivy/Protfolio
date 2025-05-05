import { motion } from 'framer-motion';
import { FaCode, FaServer, FaTools } from 'react-icons/fa';

export default function Skills() {
  const skills = {
    frontend: [
      { name: "HTML5", level: 95, color: "from-orange-500 to-orange-600" },
      { name: "CSS3", level: 90, color: "from-blue-500 to-blue-600" },
      { name: "JavaScript", level: 85, color: "from-yellow-400 to-yellow-500" },
      { name: "React", level: 80, color: "from-cyan-500 to-blue-600" },
      { name: "Tailwind CSS", level: 75, color: "from-cyan-400 to-blue-500" }
    ],
    backend: [
      { name: "Node.js", level: 80, color: "from-green-500 to-green-600" },
      { name: "Express", level: 75, color: "from-gray-500 to-gray-600" },
      { name: "MongoDB", level: 70, color: "from-green-600 to-green-700" },
      { name: "SQL", level: 65, color: "from-blue-400 to-blue-500" }
    ],
    tools: [
      { name: "Git", level: 85, color: "from-red-500 to-orange-500" },
      { name: "VS Code", level: 90, color: "from-blue-500 to-blue-600" },
      { name: "Figma", level: 70, color: "from-purple-500 to-pink-500" },
      { name: "Postman", level: 75, color: "from-orange-500 to-orange-600" }
    ]
  };

  const categoryIcons = {
    frontend: <FaCode className="w-5 h-5" />,
    backend: <FaServer className="w-5 h-5" />,
    tools: <FaTools className="w-5 h-5" />
  };

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
          My Skills
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto"></div>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, skillsList], index) => (
          <motion.div
            key={category}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                {categoryIcons[category]}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white capitalize">
                {category} Skills
              </h3>
            </div>

            <div className="space-y-5">
              {skillsList.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                      className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-xl shadow-lg"
      >
        <h3 className="text-xl font-semibold mb-4 text-white">Beyond Technical Skills</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {['Problem Solving', 'Team Collaboration', 'Agile Methodology', 'Continuous Learning'].map((skill) => (
            <div key={skill} className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <p className="text-blue-100 text-center">{skill}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}