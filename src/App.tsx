import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SpaceBackground from './components/SpaceBackground';

function App() {
  return (
    <AnimatePresence>
      <div className="relative text-white">
        <SpaceBackground />
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Projects />
        <Achievements />
        <Skills />
        <Contact />
      </div>
    </AnimatePresence>
  );
}

export default App;