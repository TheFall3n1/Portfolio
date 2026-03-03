import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { ArrowRight, Terminal, Database, Layout, TrendingUp, Users } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const roles = [
  "Business Analyst",
  "CRM Architect",
  "Data Storyteller",
  "MERN Builder",
  "Systems Thinker"
];

export const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute inset-0 z-0">
        <div className={cn(
          "absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 animate-pulse",
          theme === 'geek' ? "bg-accent-electric" : "bg-accent-blue"
        )} />
        <div className={cn(
          "absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10",
          theme === 'geek' ? "bg-accent-crimson" : "bg-accent-indigo"
        )} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={cn(
            "inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 border",
            theme === 'geek' 
              ? "bg-accent-crimson/10 border-accent-crimson/20 text-accent-crimson" 
              : "bg-accent-blue/10 border-accent-blue/20 text-accent-blue"
          )}>
            {theme === 'geek' ? "Data Alchemist in Human Form" : "Turning operational chaos into structured decisions"}
          </span>

          <h1 className={cn(
            "text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8",
            theme === 'geek' ? "text-white" : "text-ink-light"
          )}>
            Business Analyst who <br />
            <span className={cn(
              "italic",
              theme === 'geek' ? "text-accent-electric" : "text-accent-blue"
            )}>thinks like a Developer.</span>
          </h1>

          <p className={cn(
            "text-lg md:text-xl max-w-3xl mx-auto mb-12",
            theme === 'geek' ? "text-muted-geek" : "text-muted-light"
          )}>
            I turn operational chaos into structured clarity, messy data into executive decisions, and systems into scalable growth engines.
          </p>

          <div className="flex flex-col items-center space-y-6">
            <div className="h-8 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={cn(
                    "text-xl font-mono font-medium",
                    theme === 'geek' ? "text-accent-gold" : "text-accent-indigo"
                  )}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className={cn(
                "px-8 py-4 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300",
                theme === 'geek' 
                  ? "bg-accent-electric text-white hover:bg-accent-crimson shadow-lg shadow-accent-electric/20" 
                  : "bg-accent-blue text-white hover:bg-accent-indigo shadow-lg shadow-accent-blue/20"
              )}>
                <span>View Case Studies</span>
                <ArrowRight size={18} />
              </button>
              
              <button className={cn(
                "px-8 py-4 rounded-full font-semibold border transition-all duration-300",
                theme === 'geek' 
                  ? "border-white/10 text-white hover:bg-white/5" 
                  : "border-black/10 text-ink-light hover:bg-black/5"
              )}>
                Work With Me
              </button>
            </div>

            <button
              onClick={toggleTheme}
              className={cn(
                "mt-4 text-sm font-mono flex items-center space-x-2 opacity-60 hover:opacity-100 transition-opacity",
                theme === 'geek' ? "text-accent-gold" : "text-accent-blue"
              )}
            >
              <Terminal size={14} />
              <span>{theme === 'geek' ? "Deactivate Geek Mode" : "Activate Geek Mode"}</span>
            </button>

            <p className={cn(
              "text-xs font-mono mt-4",
              theme === 'geek' ? "text-muted-geek" : "text-muted-light"
            )}>
              Yes, I use Excel shortcuts. No, I don’t fear messy datasets.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
