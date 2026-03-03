import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Mail, Linkedin, Twitter, Github, Send, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactForm = z.infer<typeof contactSchema>;

export const Contact = () => {
  const { theme } = useTheme();
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        alert("Message sent successfully! It has been stored in the local database.");
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-center">
          <h1 className={cn(
            "text-5xl font-bold mb-6 tracking-tight",
            theme === 'geek' ? "text-white" : "text-ink-light"
          )}>
            Let’s Build Something <br />
            <span className={theme === 'geek' ? "text-accent-electric" : "text-accent-blue"}>Structured.</span>
          </h1>
          <p className={cn(
            "text-xl max-w-2xl mx-auto",
            theme === 'geek' ? "text-muted-geek" : "text-muted-light"
          )}>
            Whether you need analytical clarity, a scalable CRM system, or a technical partner who understands business — I'm here to help.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={cn(
                "p-8 rounded-3xl border",
                theme === 'geek' ? "bg-card-geek border-white/5" : "bg-white border-black/5 shadow-sm"
              )}>
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center mb-6",
                  theme === 'geek' ? "bg-accent-electric/20 text-accent-electric" : "bg-accent-blue/10 text-accent-blue"
                )}>
                  <Mail size={20} />
                </div>
                <h4 className="font-bold mb-2">Email</h4>
                <p className="text-sm opacity-60">chaitanya.v.0312@gmail.com</p>
              </div>
              <div className={cn(
                "p-8 rounded-3xl border",
                theme === 'geek' ? "bg-card-geek border-white/5" : "bg-white border-black/5 shadow-sm"
              )}>
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center mb-6",
                  theme === 'geek' ? "bg-accent-electric/20 text-accent-electric" : "bg-accent-blue/10 text-accent-blue"
                )}>
                  <MapPin size={20} />
                </div>
                <h4 className="font-bold mb-2">Location</h4>
                <p className="text-sm opacity-60">India (Remote Friendly)</p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className={cn("text-xs font-mono uppercase tracking-widest", theme === 'geek' ? "text-muted-geek" : "text-muted-light")}>Connect with me</h4>
              <div className="flex space-x-4">
                {[
                  { icon: <Linkedin size={24} />, link: "https://www.linkedin.com/in/cv1108" },
                  { icon: <Twitter size={24} />, link: "#" },
                  { icon: <Github size={24} />, link: "#" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300",
                      theme === 'geek' 
                        ? "bg-white/5 border-white/10 text-white hover:bg-accent-electric hover:border-accent-electric" 
                        : "bg-white border-black/5 text-ink-light hover:bg-accent-blue hover:text-white"
                    )}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className={cn(
              "p-8 rounded-3xl border italic",
              theme === 'geek' ? "bg-accent-crimson/5 border-accent-crimson/10" : "bg-accent-orange/5 border-accent-orange/10"
            )}>
              <p className={cn(
                "text-sm",
                theme === 'geek' ? "text-muted-geek" : "text-muted-light"
              )}>
                "Clean systems. Clear decisions. Calm execution."
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className={cn(
            "p-8 md:p-12 rounded-[2.5rem] border",
            theme === 'geek' ? "bg-card-geek border-white/5" : "bg-white border-black/5 shadow-sm"
          )}>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase mb-2 opacity-60">Name</label>
                  <input 
                    {...register("name")}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border outline-none transition-all",
                      theme === 'geek' ? "bg-bg-geek border-white/10 focus:border-accent-electric" : "bg-bg-light border-black/10 focus:border-accent-blue"
                    )}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-2 opacity-60">Email</label>
                  <input 
                    {...register("email")}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border outline-none transition-all",
                      theme === 'geek' ? "bg-bg-geek border-white/10 focus:border-accent-electric" : "bg-bg-light border-black/10 focus:border-accent-blue"
                    )}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase mb-2 opacity-60">Subject</label>
                <input 
                  {...register("subject")}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border outline-none transition-all",
                    theme === 'geek' ? "bg-bg-geek border-white/10 focus:border-accent-electric" : "bg-bg-light border-black/10 focus:border-accent-blue"
                  )}
                />
                {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold uppercase mb-2 opacity-60">Message</label>
                <textarea 
                  {...register("message")}
                  rows={5}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border outline-none transition-all resize-none",
                    theme === 'geek' ? "bg-bg-geek border-white/10 focus:border-accent-electric" : "bg-bg-light border-black/10 focus:border-accent-blue"
                  )}
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
              </div>
              <button 
                type="submit"
                className={cn(
                  "w-full py-4 rounded-xl font-bold text-white flex items-center justify-center space-x-2 transition-all",
                  theme === 'geek' ? "bg-accent-electric hover:bg-accent-crimson" : "bg-accent-blue hover:bg-accent-indigo"
                )}
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};
