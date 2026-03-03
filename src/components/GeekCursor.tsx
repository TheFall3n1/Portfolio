import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const GeekCursor = () => {
  const { theme } = useTheme();
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    if (theme !== 'geek') return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [theme]);

  if (theme !== 'geek') return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-screen"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
      style={{
        background: 'radial-gradient(circle, rgba(99,102,241,0.8) 0%, transparent 70%)',
        boxShadow: '0 0 20px rgba(99,102,241,0.4)',
      }}
    />
  );
};
