import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { CaseStudies } from './pages/CaseStudies';
import { Projects } from './pages/Projects';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { AdminDashboard } from './pages/Admin';
import { GeekCursor } from './components/GeekCursor';

export default function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <div className="min-h-screen selection:bg-accent-blue/30">
        <GeekCursor />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </AnimatePresence>
        
        <footer className="py-12 border-t border-black/5 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm opacity-60">
              © {new Date().getFullYear()} Chaitanya Vishwakarma. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm font-medium">
              <a href="https://www.linkedin.com/in/cv1108" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-accent-blue transition-colors">Twitter</a>
              <a href="#" className="hover:text-accent-blue transition-colors">GitHub</a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
