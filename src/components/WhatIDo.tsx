import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Briefcase, Code, GraduationCap } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const services = [
  {
    title: "Business & Analytics",
    icon: <Briefcase size={24} />,
    items: [
      "Process Optimization",
      "CRM Architecture & Tracking Systems",
      "KPI Design & Performance Monitoring",
      "Excel & Power BI Reporting",
      "MIS & Executive Dashboards"
    ]
  },
  {
    title: "Technical Execution",
    icon: <Code size={24} />,
    items: [
      "MERN Stack Development",
      "CRM Integration",
      "Web Performance Optimization",
      "Automation Logic",
      "Scalable System Design"
    ]
  },
  {
    title: "Skill Building & Mentorship",
    icon: <GraduationCap size={24} />,
    items: [
      "Excel & MS Office Foundations",
      "Power BI for Beginners",
      "Corporate Communication Basics",
      "Industry-Ready Thinking for Engineers",
      "How to Think Like a Business Analyst"
    ]
  }
];

export const WhatIDo = () => {
  const { theme } = useTheme();

  return (
    <section className="py-24 bg-opacity-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl font-bold mb-4",
            theme === 'geek' ? "text-white" : "text-ink-light"
          )}>
            What I Actually Help You With
          </h2>
          <p className={cn(
            "text-muted-light max-w-2xl mx-auto",
            theme === 'geek' ? "text-muted-geek" : "text-muted-light"
          )}>
            I believe technical skill is power — but structured thinking is mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "p-8 rounded-3xl border transition-all duration-300",
                theme === 'geek' 
                  ? "bg-card-geek border-white/5 hover:border-accent-electric/20" 
                  : "bg-white border-black/5 hover:border-accent-blue/20 shadow-sm"
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center mb-6",
                theme === 'geek' ? "bg-accent-electric/20 text-accent-electric" : "bg-accent-blue/10 text-accent-blue"
              )}>
                {service.icon}
              </div>
              <h3 className={cn(
                "text-xl font-bold mb-6",
                theme === 'geek' ? "text-white" : "text-ink-light"
              )}>
                {service.title}
              </h3>
              <ul className="space-y-4">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className={cn(
                      "mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0",
                      theme === 'geek' ? "bg-accent-crimson" : "bg-accent-blue"
                    )} />
                    <span className={cn(
                      "text-sm",
                      theme === 'geek' ? "text-muted-geek" : "text-muted-light"
                    )}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
