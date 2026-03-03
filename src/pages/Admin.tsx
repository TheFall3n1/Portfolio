import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { LayoutDashboard, FileText, Briefcase, MessageSquare, Settings, LogOut } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const AdminDashboard = () => {
  const { theme } = useTheme();

  const stats = [
    { label: "Page Visits", value: "1,240", change: "+12%" },
    { label: "Contact Submissions", value: "14", change: "+2" },
    { label: "Blog Engagement", value: "85%", change: "+5%" }
  ];

  return (
    <div className="pt-24 min-h-screen flex">
      {/* Sidebar */}
      <aside className={cn(
        "w-64 border-r hidden lg:block",
        theme === 'geek' ? "bg-card-geek border-white/5" : "bg-white border-black/5"
      )}>
        <div className="p-6 space-y-8">
          <div className="text-xs font-mono uppercase tracking-widest opacity-40">Management</div>
          <nav className="space-y-2">
            {[
              { icon: <LayoutDashboard size={18} />, label: "Overview", active: true },
              { icon: <FileText size={18} />, label: "Blog Posts" },
              { icon: <Briefcase size={18} />, label: "Projects" },
              { icon: <MessageSquare size={18} />, label: "Inquiries" },
              { icon: <Settings size={18} />, label: "Settings" }
            ].map((item, i) => (
              <button
                key={i}
                className={cn(
                  "w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                  item.active
                    ? (theme === 'geek' ? "bg-accent-electric/10 text-accent-electric" : "bg-accent-blue/10 text-accent-blue")
                    : (theme === 'geek' ? "text-muted-geek hover:bg-white/5" : "text-muted-light hover:bg-black/5")
                )}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
          <div className="pt-8 border-t border-black/5 dark:border-white/5">
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-500/10 transition-all">
              <LogOut size={18} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <h1 className={cn(
              "text-3xl font-bold mb-2",
              theme === 'geek' ? "text-white" : "text-ink-light"
            )}>
              Admin Command Center
            </h1>
            <p className={cn(
              "text-sm",
              theme === 'geek' ? "text-muted-geek" : "text-muted-light"
            )}>
              {theme === 'geek' ? "Strategic Oversight: Monitoring System Performance" : "Manage your portfolio content and analytics."}
            </p>
          </div>
          <div className="text-xs font-mono opacity-40">Last updated: Just now</div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "p-8 rounded-3xl border",
                theme === 'geek' ? "bg-card-geek border-white/5" : "bg-white border-black/5 shadow-sm"
              )}
            >
              <div className="text-sm opacity-60 mb-2">{stat.label}</div>
              <div className="flex items-end space-x-3">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-xs font-bold text-green-500 mb-1">{stat.change}</div>
              </div>
              {theme === 'geek' && (
                <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-accent-electric w-3/4" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className={cn(
          "rounded-[2.5rem] border overflow-hidden",
          theme === 'geek' ? "bg-card-geek border-white/5" : "bg-white border-black/5 shadow-sm"
        )}>
          <div className="p-8 border-b border-black/5 dark:border-white/5 flex justify-between items-center">
            <h3 className="font-bold">Recent Inquiries</h3>
            <button className={cn(
              "text-xs font-bold uppercase tracking-widest",
              theme === 'geek' ? "text-accent-electric" : "text-accent-blue"
            )}>View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-xs font-mono uppercase tracking-widest opacity-40">
                  <th className="px-8 py-4">Sender</th>
                  <th className="px-8 py-4">Subject</th>
                  <th className="px-8 py-4">Date</th>
                  <th className="px-8 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { name: "John Doe", sub: "CRM Optimization Project", date: "2 hours ago", status: "New" },
                  { name: "Sarah Smith", sub: "Freelance Inquiry", date: "5 hours ago", status: "Read" },
                  { name: "Tech Corp", sub: "Business Analyst Role", date: "1 day ago", status: "Replied" }
                ].map((row, i) => (
                  <tr key={i} className="border-t border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                    <td className="px-8 py-6 font-medium">{row.name}</td>
                    <td className="px-8 py-6 opacity-60">{row.sub}</td>
                    <td className="px-8 py-6 opacity-60">{row.date}</td>
                    <td className="px-8 py-6">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-bold uppercase",
                        row.status === 'New' ? "bg-green-500/10 text-green-500" : "bg-black/5 dark:bg-white/5 opacity-60"
                      )}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};
