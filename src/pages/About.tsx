import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const About = () => {
  const { theme } = useTheme();

  const timeline = [
    {
      period: "The Beginning",
      title: "Operations Floor",
      desc: "I didn’t begin my journey inside a strategy room. I began in operations — where systems break, complaints surface, and decisions affect real people."
    },
    {
      period: "The Shift",
      title: "CRM & Project Management",
      desc: "From coordinating field teams to managing ₹5Cr+ pharmaceutical projects, I saw patterns in data and behavior. I moved from reporting numbers to understanding what creates them."
    },
    {
      period: "The Edge",
      title: "Business Analysis",
      desc: "Most analysts know tools. I understand environments. I’ve led 40+ professionals and optimized systems that people can actually use."
    },
    {
      period: "The Technical Layer",
      title: "Computer Science Foundation",
      desc: "When I design dashboards, I understand the database. When I suggest process changes, I understand automation. That bridge is my leverage."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <h1 className={cn(
            "text-5xl md:text-6xl font-bold mb-6 tracking-tight",
            theme === 'geek' ? "text-white" : "text-ink-light"
          )}>
            Structured thinking didn’t <br />
            start with dashboards. <br />
            <span className={theme === 'geek' ? "text-accent-electric" : "text-accent-blue"}>It started with observation.</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l border-black/5 dark:border-white/5"
              >
                <div className={cn(
                  "absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full",
                  theme === 'geek' ? "bg-accent-electric" : "bg-accent-blue"
                )} />
                <span className={cn(
                  "text-xs font-mono uppercase tracking-widest mb-2 block",
                  theme === 'geek' ? "text-accent-gold" : "text-accent-indigo"
                )}>
                  {item.period}
                </span>
                <h3 className={cn(
                  "text-2xl font-bold mb-4",
                  theme === 'geek' ? "text-white" : "text-ink-light"
                )}>
                  {item.title}
                </h3>
                <p className={cn(
                  "text-lg leading-relaxed",
                  theme === 'geek' ? "text-muted-geek" : "text-muted-light"
                )}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            <div className={cn(
              "p-8 rounded-3xl border",
              theme === 'geek' ? "bg-card-geek border-white/5" : "bg-white border-black/5 shadow-sm"
            )}>
              <h3 className={cn(
                "text-xl font-bold mb-6",
                theme === 'geek' ? "text-white" : "text-ink-light"
              )}>
                How I Help Others Level Up
              </h3>
              <ul className="space-y-4">
                {[
                  "Excel beyond formulas",
                  "Power BI beyond visuals",
                  "Corporate communication basics",
                  "Structured analytical thinking",
                  "How to think like a Business Analyst"
                ].map((skill, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className={cn(
                      "w-1.5 h-1.5 rounded-full",
                      theme === 'geek' ? "bg-accent-crimson" : "bg-accent-blue"
                    )} />
                    <span className={cn(
                      "text-sm",
                      theme === 'geek' ? "text-muted-geek" : "text-muted-light"
                    )}>
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={cn(
              "p-8 rounded-3xl border relative overflow-hidden group",
              theme === 'geek' ? "bg-accent-electric/10 border-accent-electric/20" : "bg-accent-blue/5 border-accent-blue/10"
            )}>
              <div className={cn(
                "text-sm font-mono mb-4",
                theme === 'geek' ? "text-accent-gold" : "text-accent-blue"
              )}>
                Personality Layer
              </div>
              <p className={cn(
                "text-sm italic",
                theme === 'geek' ? "text-muted-geek" : "text-muted-light"
              )}>
                "I appreciate discipline. I admire resilience. I value focus. Systems evolve. People evolve. And so do I."
              </p>
              {theme === 'geek' && (
                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <img src="https://picsum.photos/seed/anime/200/200" alt="Anime Accent" className="w-32 h-32" referrerPolicy="no-referrer" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
