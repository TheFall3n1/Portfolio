import React from 'react';
import { Hero } from '../components/Hero';
import { Metrics } from '../components/Metrics';
import { WhatIDo } from '../components/WhatIDo';
import { CaseStudyPreview } from '../components/CaseStudyPreview';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Home = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-x-hidden"
    >
      <Hero />
      
      <section className="py-24 border-y border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className={cn(
                "text-4xl font-bold mb-8 tracking-tight",
                theme === 'geek' ? "text-white" : "text-ink-light"
              )}>
                Structured Thinking. <br />
                Technical Execution. <br />
                <span className={theme === 'geek' ? "text-accent-electric" : "text-accent-blue"}>Measurable Impact.</span>
              </h2>
              <div className="space-y-6 text-lg">
                <p className={theme === 'geek' ? "text-muted-geek" : "text-muted-light"}>
                  I started in operations and CRM, managing teams, resolving real-world inefficiencies, and tracking performance at scale.
                </p>
                <p className={theme === 'geek' ? "text-muted-geek" : "text-muted-light"}>
                  Over time, I evolved into a Business Analyst who understands not just reports — but the systems behind them.
                </p>
                <p className={theme === 'geek' ? "text-muted-geek" : "text-muted-light"}>
                  From managing ₹5Cr+ pharmaceutical projects to improving complaint resolution by 60%, I operate where business logic meets technical precision.
                </p>
              </div>
              <div className="mt-10 flex items-center space-x-4">
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl",
                  theme === 'geek' ? "bg-accent-electric text-white" : "bg-accent-blue text-white"
                )}>
                  !
                </div>
                <p className={cn(
                  "text-xl font-medium",
                  theme === 'geek' ? "text-white" : "text-ink-light"
                )}>
                  I don’t just build dashboards. <br />
                  <span className="italic">I build clarity.</span>
                </p>
              </div>
            </div>
            <div className="relative">
              <div className={cn(
                "aspect-square rounded-3xl overflow-hidden border-8",
                theme === 'geek' ? "border-white/5 bg-card-geek" : "border-black/5 bg-white"
              )}>
                <img 
                  src="https://picsum.photos/seed/business/800/800" 
                  alt="Business Analysis" 
                  className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className={cn(
                  "absolute -bottom-6 -left-6 p-6 rounded-2xl border shadow-xl",
                  theme === 'geek' ? "bg-bg-geek border-white/10" : "bg-white border-black/5"
                )}
              >
                <div className="text-3xl font-bold text-accent-blue mb-1">60%</div>
                <div className="text-xs font-mono uppercase tracking-wider opacity-60">Resolution Improvement</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Metrics />
      <WhatIDo />
      <CaseStudyPreview />

      {/* Geek Mode Strip */}
      <section className={cn(
        "py-20 text-center",
        theme === 'geek' ? "bg-accent-electric/10" : "bg-accent-blue/5"
      )}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className={cn(
            "text-2xl font-bold mb-4",
            theme === 'geek' ? "text-white" : "text-ink-light"
          )}>
            There’s Also a Geek Version of Me.
          </h2>
          <p className={cn(
            "mb-8",
            theme === 'geek' ? "text-muted-geek" : "text-muted-light"
          )}>
            When Geek Mode is activated, the interface shifts darker, metrics turn into power stats, and data becomes "alchemy".
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={cn(
              "px-6 py-3 rounded-full font-semibold border transition-all",
              theme === 'geek' ? "border-accent-electric text-accent-electric" : "border-accent-blue text-accent-blue"
            )}
          >
            Back to Top to Toggle
          </button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className={cn(
            "text-4xl font-bold mb-8",
            theme === 'geek' ? "text-white" : "text-ink-light"
          )}>
            Let’s Build Something Structured.
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className={cn(
              "px-8 py-4 rounded-full font-semibold text-white",
              theme === 'geek' ? "bg-accent-electric" : "bg-accent-blue"
            )}>
              Work With Me
            </button>
            <button className={cn(
              "px-8 py-4 rounded-full font-semibold border",
              theme === 'geek' ? "border-white/10 text-white" : "border-black/10 text-ink-light"
            )}>
              Download Resume
            </button>
          </div>
          <p className={cn(
            "text-sm font-mono opacity-60",
            theme === 'geek' ? "text-muted-geek" : "text-muted-light"
          )}>
            Clean systems. Clear decisions. Calm execution.
          </p>
        </div>
      </section>
    </motion.div>
  );
};
