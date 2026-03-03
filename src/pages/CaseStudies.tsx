import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const cases = [
  {
    title: "Complaint Tracking System",
    client: "Operations Team",
    problem: "Operational chaos with untracked complaints and slow resolution times.",
    action: "Redesigned operational workflows and implemented a custom CRM module for real-time tracking.",
    result: "60% improvement in resolution efficiency and 100% tracking accuracy.",
    metrics: "60% Faster Resolution",
    tools: ["Excel", "Process Mapping", "CRM Architecture"],
    geekTitle: "Battle Summary: The Great System Restoration"
  },
  {
    title: "₹5Cr+ Pharma Projects",
    client: "Pharmaceutical Stakeholders",
    problem: "Complex project delivery across 40+ team members with high stakes.",
    action: "Implemented KPI-aligned execution frameworks and stakeholder-ready MIS reporting.",
    result: "100% delivery discipline and improved stakeholder trust.",
    metrics: "₹5Cr+ Managed",
    tools: ["Project Management", "MIS", "Stakeholder Management"],
    geekTitle: "Battle Summary: Strategic Resource Allocation"
  },
  {
    title: "E-commerce Performance Optimization",
    client: "Retail Client",
    problem: "High bounce rates (20%+) due to slow website performance.",
    action: "Full-stack optimization using MERN, reducing load times and improving SEO.",
    result: "40% speed improvement and 20% bounce rate reduction.",
    metrics: "40% Speed Boost",
    tools: ["React", "Node.js", "Performance Audit"],
    geekTitle: "Battle Summary: Speed of the Wind Optimization"
  }
];

export const CaseStudies = () => {
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
            Real Problems. <br />
            <span className={theme === 'geek' ? "text-accent-electric" : "text-accent-blue"}>Structured Solutions.</span>
          </h1>
          <p className={cn(
            "text-xl max-w-2xl",
            theme === 'geek' ? "text-muted-geek" : "text-muted-light"
          )}>
            A deep dive into how I turn business challenges into measurable technical victories.
          </p>
        </header>

        <div className="space-y-24">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "p-8 md:p-12 rounded-[2.5rem] border overflow-hidden relative group",
                theme === 'geek' ? "bg-card-geek border-white/5" : "bg-white border-black/5 shadow-sm"
              )}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className={cn(
                    "text-xs font-mono uppercase tracking-widest mb-4",
                    theme === 'geek' ? "text-accent-gold" : "text-accent-indigo"
                  )}>
                    {theme === 'geek' ? item.geekTitle : `Case Study: ${item.title}`}
                  </div>
                  <h2 className={cn(
                    "text-3xl font-bold mb-8",
                    theme === 'geek' ? "text-white" : "text-ink-light"
                  )}>
                    {item.title}
                  </h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className={cn("text-sm font-bold uppercase mb-2", theme === 'geek' ? "text-muted-geek" : "text-muted-light")}>The Problem</h4>
                      <p className={theme === 'geek' ? "text-ink-geek" : "text-ink-light"}>{item.problem}</p>
                    </div>
                    <div>
                      <h4 className={cn("text-sm font-bold uppercase mb-2", theme === 'geek' ? "text-muted-geek" : "text-muted-light")}>The Action</h4>
                      <p className={theme === 'geek' ? "text-ink-geek" : "text-ink-light"}>{item.action}</p>
                    </div>
                    <div>
                      <h4 className={cn("text-sm font-bold uppercase mb-2", theme === 'geek' ? "text-muted-geek" : "text-muted-light")}>The Result</h4>
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className={theme === 'geek' ? "text-accent-electric" : "text-accent-blue"} size={20} />
                        <p className="font-medium">{item.result}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div className={cn(
                    "p-8 rounded-3xl mb-8 flex flex-col items-center justify-center text-center",
                    theme === 'geek' ? "bg-accent-electric/10" : "bg-accent-blue/5"
                  )}>
                    <div className={cn(
                      "text-5xl font-bold mb-2",
                      theme === 'geek' ? "text-accent-electric" : "text-accent-blue"
                    )}>
                      {item.metrics.split(' ')[0]}
                    </div>
                    <div className={cn(
                      "text-sm font-mono uppercase tracking-wider",
                      theme === 'geek' ? "text-muted-geek" : "text-muted-light"
                    )}>
                      {item.metrics.split(' ').slice(1).join(' ')}
                    </div>
                  </div>

                  <div>
                    <h4 className={cn("text-sm font-bold uppercase mb-4", theme === 'geek' ? "text-muted-geek" : "text-muted-light")}>Tools Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {item.tools.map((tool, i) => (
                        <span key={i} className={cn(
                          "px-4 py-2 rounded-xl text-xs font-semibold",
                          theme === 'geek' ? "bg-white/5 text-ink-geek" : "bg-black/5 text-ink-light"
                        )}>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {theme === 'geek' && (
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <div className="text-8xl font-bold">0{index + 1}</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
