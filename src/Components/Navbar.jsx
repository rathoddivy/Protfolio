import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navLinks } from '../constants';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo/Brand */}
        <Link 
          to="/" 
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
        >
          DevPort
        </Link>
        
        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              <Link 
                to={link.path} 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path 
                    ? 'text-indigo-600' 
                    : 'text-gray-600 hover:text-indigo-500'
                }`}
              >
                {link.title}
                {location.pathname === link.path && (
                  <motion.span 
                    layoutId="nav-underline"
                    className="absolute left-0 top-full h-0.5 w-full bg-indigo-600"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <Link
          to="/HireMe"
          className="hidden md:block px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow hover:shadow-md transition-all hover:scale-[1.02]"
        >
          Hire Me
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-indigo-600 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}