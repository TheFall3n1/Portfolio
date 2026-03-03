import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Search, ArrowRight, Calendar, Clock } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const posts = [
  {
    title: "Excel for Beginners: Beyond the Basics",
    excerpt: "Why most people struggle with Excel and how to master the shortcuts that actually matter.",
    date: "March 1, 2026",
    readTime: "5 min read",
    tag: "Tutorial"
  },
  {
    title: "The Power BI Roadmap for 2026",
    excerpt: "A structured guide to becoming a data storyteller using Power BI foundations.",
    date: "Feb 24, 2026",
    readTime: "8 min read",
    tag: "Data"
  },
  {
    title: "Corporate Survival Guide: Communication",
    excerpt: "How to handle stakeholder expectations and deliver MIS reports that directors actually understand.",
    date: "Feb 15, 2026",
    readTime: "6 min read",
    tag: "Career"
  },
  {
    title: "CRM Explained Simply",
    excerpt: "Why CRM architecture is the backbone of any scalable growth engine.",
    date: "Feb 08, 2026",
    readTime: "7 min read",
    tag: "Business"
  }
];

export const Blog = () => {
  const { theme } = useTheme();

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
            "text-5xl font-bold mb-6 tracking-tight",
            theme === 'geek' ? "text-white" : "text-ink-light"
          )}>
            Insights & <br />
            <span className={theme === 'geek' ? "text-accent-electric" : "text-accent-blue"}>Strategic Thinking.</span>
          </h1>
          <p className={cn(
            "text-xl max-w-2xl",
            theme === 'geek' ? "text-muted-geek" : "text-muted-light"
          )}>
            Professional insights on data, business analysis, and corporate survival — with a touch of micro-humor.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3 space-y-12">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div className="flex items-center space-x-4 text-xs font-mono uppercase tracking-widest">
                    <span className={theme === 'geek' ? "text-accent-gold" : "text-accent-blue"}>{post.tag}</span>
                    <span className="opacity-40">•</span>
                    <div className="flex items-center space-x-1 opacity-60">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                    <span className="opacity-40">•</span>
                    <div className="flex items-center space-x-1 opacity-60">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <h2 className={cn(
                  "text-3xl font-bold mb-4 group-hover:text-accent-blue transition-colors",
                  theme === 'geek' ? "text-white group-hover:text-accent-electric" : "text-ink-light"
                )}>
                  {post.title}
                </h2>
                <p className={cn(
                  "text-lg mb-6 max-w-3xl",
                  theme === 'geek' ? "text-muted-geek" : "text-muted-light"
                )}>
                  {post.excerpt}
                </p>
                <div className={cn(
                  "flex items-center space-x-2 text-sm font-bold",
                  theme === 'geek' ? "text-accent-electric" : "text-accent-blue"
                )}>
                  <span>Read Full Insight</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="mt-12 h-px w-full bg-black/5 dark:bg-white/5" />
              </motion.article>
            ))}
          </div>

          <aside className="space-y-12">
            <div>
              <h4 className={cn("text-xs font-mono uppercase tracking-widest mb-6", theme === 'geek' ? "text-muted-geek" : "text-muted-light")}>Search</h4>
              <div className={cn(
                "flex items-center px-4 py-3 rounded-xl border",
                theme === 'geek' ? "bg-white/5 border-white/10" : "bg-black/5 border-black/5"
              )}>
                <Search size={18} className="opacity-40 mr-3" />
                <input 
                  type="text" 
                  placeholder="Topics, tools, keywords..." 
                  className="bg-transparent border-none outline-none text-sm w-full"
                />
              </div>
            </div>

            <div>
              <h4 className={cn("text-xs font-mono uppercase tracking-widest mb-6", theme === 'geek' ? "text-muted-geek" : "text-muted-light")}>Popular Topics</h4>
              <div className="flex flex-wrap gap-2">
                {["Excel", "Power BI", "CRM", "MERN", "Business Analysis", "Corporate Tips"].map(tag => (
                  <span key={tag} className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors",
                    theme === 'geek' ? "bg-white/5 hover:bg-white/10 text-muted-geek" : "bg-black/5 hover:bg-black/10 text-muted-light"
                  )}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className={cn(
              "p-8 rounded-3xl border",
              theme === 'geek' ? "bg-accent-electric/5 border-accent-electric/10" : "bg-accent-blue/5 border-accent-blue/10"
            )}>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-sm mb-6 opacity-60">Get structured insights delivered to your inbox.</p>
              <input 
                type="email" 
                placeholder="email@example.com" 
                className={cn(
                  "w-full px-4 py-3 rounded-xl mb-4 text-sm border",
                  theme === 'geek' ? "bg-bg-geek border-white/10" : "bg-white border-black/10"
                )}
              />
              <button className={cn(
                "w-full py-3 rounded-xl text-sm font-bold text-white",
                theme === 'geek' ? "bg-accent-electric" : "bg-accent-blue"
              )}>
                Subscribe
              </button>
            </div>
          </aside>
        </div>
      </div>
    </motion.div>
  );
};
