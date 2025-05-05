import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import logo from '../assets/logo.png'


export default function ProjectCard({ project }) {
  return (


    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300  hover:shadow-xl border border-gray-100 dark:border-gray-700"
    >


      {/* Project Image with Gradient Overlay */}
      <div className="relative h-48  overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex space-x-3">
            <a
              href='https://github.com/rathoddivy/E-commerce-App-Using-ReactJS'
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-1.5 bg-white text-gray-800 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              <FiGithub className="mr-1.5" /> Code
            </a>


            
            {project.demo && (
              <a
                href='https://github.com/rathoddivy/E-commerce-App-Using-ReactJS'
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-1.5 bg-indigo-600 text-white rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors"
              >
                <FiExternalLink className="mr-1.5" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom Links (visible on mobile) */}
        <div className="flex space-x-4 md:hidden pt-2 border-t border-gray-100 dark:border-gray-700">
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <FiGithub className="mr-1.5" /> Code
          </a>


          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              <FiExternalLink className="mr-1.5" /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}   

