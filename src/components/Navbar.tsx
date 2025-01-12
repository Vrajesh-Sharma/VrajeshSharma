import { motion } from 'framer-motion';
import { Home, User, GraduationCap, Trophy, Code, Mail, Briefcase } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-8 top-1/2 -translate-y-1/2 z-50"
    >
      <div className="bg-gray-800/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-700/50">
        <ul className="space-y-4">
          {navItems.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`group relative flex p-2 rounded-lg transition-colors ${
                  activeSection === id ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'
                }`}
              >
                <Icon size={20} />
                <span className="fixed left-[4.5rem] bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm">
                  {label}
                </span>
                {activeSection === id && (
                  <motion.div
                    layoutId="active"
                    className="absolute inset-0 bg-cyan-400/10 rounded-lg"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}