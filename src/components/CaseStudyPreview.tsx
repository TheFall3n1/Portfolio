import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { ArrowRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const cases = [
  {
    title: "Complaint Tracking System",
    result: "60% faster resolution",
    desc: "Redesigned operational workflows and implemented a custom CRM module.",
    tools: ["Excel", "Process Mapping", "CRM"]
  },
  {
    title: "₹5Cr Pharma Project",
    result: "KPI-aligned execution",
    desc: "Managed large-scale delivery with 100% stakeholder satisfaction.",
    tools: ["Project Mgmt", "MIS", "Stakeholder Mgmt"]
  },
  {
    title: "Website Speed Boost",
    result: "40% performance gain",
    desc: "Optimized full-stack architecture reducing bounce rates by 20%.",
    tools: ["React", "Node.js", "Performance Audit"]
  }
];

export const CaseStudyPreview = () => {
  const { theme } = useTheme();

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className={cn(
              "text-3xl font-bold mb-4",
              theme === 'geek' ? "text-white" : "text-ink-light"
            )}>
              Real Problems. Structured Solutions.
            </h2>
            <p className={cn(
              "text-muted-light",
              theme === 'geek' ? "text-muted-geek" : "text-muted-light"
            )}>
              {theme === 'geek' ? "Battle Summary: Strategic Victories" : "Case studies of measurable business impact."}
            </p>
          </div>
          <button className={cn(
            "text-sm font-semibold flex items-center space-x-2 group",
            theme === 'geek' ? "text-accent-electric" : "text-accent-blue"
          )}>
            <span>View All Case Studies</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl border transition-all duration-500",
                theme === 'geek' 
                  ? "bg-card-geek border-white/5 hover:border-accent-electric/30" 
                  : "bg-white border-black/5 hover:border-accent-blue/30 shadow-sm"
              )}
            >
              <div className="p-8">
                <div className={cn(
                  "text-xs font-mono mb-4",
                  theme === 'geek' ? "text-accent-gold" : "text-accent-indigo"
                )}>
                  {item.result}
                </div>
                <h3 className={cn(
                  "text-xl font-bold mb-4 group-hover:text-accent-blue transition-colors",
                  theme === 'geek' ? "text-white group-hover:text-accent-electric" : "text-ink-light"
                )}>
                  {item.title}
                </h3>
                <p className={cn(
                  "text-sm mb-6 line-clamp-2",
                  theme === 'geek' ? "text-muted-geek" : "text-muted-light"
                )}>
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tools.map((tool, i) => (
                    <span key={i} className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider",
                      theme === 'geek' ? "bg-white/5 text-muted-geek" : "bg-black/5 text-muted-light"
                    )}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div className={cn(
                "absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500",
                theme === 'geek' ? "bg-accent-electric" : "bg-accent-blue"
              )} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
