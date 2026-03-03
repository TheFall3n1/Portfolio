import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Terminal, Sun, Moon, Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Projects', path: '/projects' },
    { name: 'Insights', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b",
      theme === 'geek' 
        ? "bg-bg-geek/80 border-white/10 backdrop-blur-md" 
        : "bg-bg-light/80 border-black/5 backdrop-blur-md"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className={cn(
              "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300",
              theme === 'geek' ? "bg-accent-electric group-hover:bg-accent-crimson" : "bg-accent-blue group-hover:bg-accent-indigo"
            )}>
              <span className="text-white font-bold text-sm">CV</span>
            </div>
            <span className={cn(
              "font-semibold tracking-tight hidden sm:block",
              theme === 'geek' ? "text-ink-geek" : "text-ink-light"
            )}>
              Chaitanya Vishwakarma
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors relative py-1",
                  location.pathname === link.path
                    ? (theme === 'geek' ? "text-accent-electric" : "text-accent-blue")
                    : (theme === 'geek' ? "text-muted-geek hover:text-ink-geek" : "text-muted-light hover:text-ink-light")
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className={cn(
                      "absolute bottom-0 left-0 right-0 h-0.5 rounded-full",
                      theme === 'geek' ? "bg-accent-electric" : "bg-accent-blue"
                    )}
                  />
                )}
              </Link>
            ))}
            
            <button
              onClick={toggleTheme}
              className={cn(
                "p-2 rounded-full transition-all duration-300 flex items-center space-x-2 text-xs font-mono",
                theme === 'geek' 
                  ? "bg-white/10 text-accent-electric hover:bg-white/20" 
                  : "bg-black/5 text-accent-blue hover:bg-black/10"
              )}
            >
              {theme === 'geek' ? (
                <>
                  <Terminal size={16} />
                  <span>Geek Mode</span>
                </>
              ) : (
                <>
                  <Sun size={16} />
                  <span>Light Mode</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2">
              {theme === 'geek' ? <Terminal size={20} /> : <Sun size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "md:hidden border-b",
            theme === 'geek' ? "bg-bg-geek border-white/10" : "bg-bg-light border-black/5"
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === link.path
                    ? (theme === 'geek' ? "bg-accent-electric/20 text-accent-electric" : "bg-accent-blue/10 text-accent-blue")
                    : (theme === 'geek' ? "text-muted-geek hover:bg-white/5" : "text-muted-light hover:bg-black/5")
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};
