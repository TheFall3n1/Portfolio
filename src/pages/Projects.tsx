import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const projects = [
  {
    title: "Infoला Platform",
    category: "Product",
    desc: "A comprehensive information platform designed for community engagement and resource sharing.",
    image: "https://picsum.photos/seed/info/600/400",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "Strategic Discord Bot",
    category: "Experimental",
    desc: "Automated workflow bot for community management and data tracking within Discord.",
    image: "https://picsum.photos/seed/bot/600/400",
    tags: ["Node.js", "Discord.js", "Automation"],
    link: "#"
  },
  {
    title: "Secure E-commerce System",
    category: "Web",
    desc: "Full-stack e-commerce platform with secure payment integration and performance optimization.",
    image: "https://picsum.photos/seed/shop/600/400",
    tags: ["MERN", "Stripe", "Redux"],
    link: "#"
  },
  {
    title: "CRM Optimization Tool",
    category: "CRM",
    desc: "Custom dashboard for tracking sales performance and customer interactions.",
    image: "https://picsum.photos/seed/crm/600/400",
    tags: ["Power BI", "Excel", "Data Viz"],
    link: "#"
  },
  {
    title: "Portfolio Redesign",
    category: "Web",
    desc: "High-performance personal branding site with dual-mode interface and motion design.",
    image: "https://picsum.photos/seed/portfolio/600/400",
    tags: ["React", "Framer Motion", "Tailwind"],
    link: "#"
  }
];

const categories = ["All", "Web", "Data", "CRM", "Product", "Experimental"];

export const Projects = () => {
  const { theme } = useTheme();
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(p => filter === "All" || p.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h1 className={cn(
              "text-5xl font-bold mb-6 tracking-tight",
              theme === 'geek' ? "text-white" : "text-ink-light"
            )}>
              Projects & <br />
              <span className={theme === 'geek' ? "text-accent-electric" : "text-accent-blue"}>Products.</span>
            </h1>
            <p className={cn(
              "text-xl max-w-xl",
              theme === 'geek' ? "text-muted-geek" : "text-muted-light"
            )}>
              A collection of technical builds, data experiments, and business tools.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300",
                  filter === cat
                    ? (theme === 'geek' ? "bg-accent-electric text-white" : "bg-accent-blue text-white")
                    : (theme === 'geek' ? "bg-white/5 text-muted-geek hover:bg-white/10" : "bg-black/5 text-muted-light hover:bg-black/10")
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={cn(
                  "rounded-3xl border overflow-hidden group",
                  theme === 'geek' ? "bg-card-geek border-white/5" : "bg-white border-black/5 shadow-sm"
                )}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <button className="p-3 bg-white rounded-full text-black hover:bg-accent-blue hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </button>
                    <button className="p-3 bg-white rounded-full text-black hover:bg-accent-blue hover:text-white transition-colors">
                      <Github size={20} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className={cn(
                    "text-[10px] font-mono uppercase tracking-widest mb-2",
                    theme === 'geek' ? "text-accent-gold" : "text-accent-indigo"
                  )}>
                    {project.category}
                  </div>
                  <h3 className={cn(
                    "text-xl font-bold mb-3",
                    theme === 'geek' ? "text-white" : "text-ink-light"
                  )}>
                    {project.title}
                  </h3>
                  <p className={cn(
                    "text-sm mb-6 line-clamp-2",
                    theme === 'geek' ? "text-muted-geek" : "text-muted-light"
                  )}>
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className={cn(
                        "text-[10px] font-bold px-2 py-1 rounded-md",
                        theme === 'geek' ? "bg-white/5 text-muted-geek" : "bg-black/5 text-muted-light"
                      )}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
