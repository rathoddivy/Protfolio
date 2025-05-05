import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import { AnimatePresence } from 'framer-motion';
import HireMe from './pages/HireMe'

export default function App() {
  return (
    <AnimatePresence mode='wait'>
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path=  "/HireMe"  element =  {<HireMe />}  />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
       </AnimatePresence>
  )
}