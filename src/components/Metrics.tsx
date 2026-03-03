import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const stats = [
  {
    label: "Projects Managed",
    value: "₹5Cr+",
    sub: "100% Delivery Discipline",
    geekLabel: "Equivalent Exchange: Data in → Insight out"
  },
  {
    label: "Team Members Led",
    value: "40+",
    sub: "Across Pharma & Operations",
    geekLabel: "Shadow Clone: Replicating systems efficiently"
  },
  {
    label: "Complaint Resolution",
    value: "60%",
    sub: "Efficiency Improvement",
    geekLabel: "Total Concentration: Excel Breathing First Form"
  },
  {
    label: "Performance Optimization",
    value: "40%",
    sub: "Website Speed Boost",
    geekLabel: "Alchemy of Data → Business Gold"
  },
  {
    label: "Community Members",
    value: "500+",
    sub: "Engaged at DevFest",
    geekLabel: "Strategic Mind like a Butler"
  }
];

export const Metrics = () => {
  const { theme } = useTheme();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-3xl font-bold mb-4",
            theme === 'geek' ? "text-white" : "text-ink-light"
          )}>
            Impact, Not Just Activity.
          </h2>
          <div className={cn(
            "w-20 h-1 mx-auto rounded-full",
            theme === 'geek' ? "bg-accent-electric" : "bg-accent-blue"
          )} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "p-8 rounded-2xl border transition-all duration-300 group",
                theme === 'geek' 
                  ? "bg-card-geek border-white/5 hover:border-accent-electric/30" 
                  : "bg-white border-black/5 hover:border-accent-blue/30 shadow-sm hover:shadow-md"
              )}
            >
              <div className={cn(
                "text-4xl font-bold mb-2",
                theme === 'geek' ? "text-accent-electric" : "text-accent-blue"
              )}>
                {stat.value}
              </div>
              <div className={cn(
                "text-sm font-semibold mb-1",
                theme === 'geek' ? "text-ink-geek" : "text-ink-light"
              )}>
                {stat.label}
              </div>
              <div className={cn(
                "text-xs mb-4",
                theme === 'geek' ? "text-muted-geek" : "text-muted-light"
              )}>
                {stat.sub}
              </div>

              {theme === 'geek' && (
                <div className="mt-4 pt-4 border-t border-white/5">
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-accent-electric"
                    />
                  </div>
                  <div className="text-[10px] font-mono text-accent-gold italic opacity-0 group-hover:opacity-100 transition-opacity">
                    {stat.geekLabel}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
