import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-dark-500 flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Ambient glow */}
          <div className="absolute w-72 h-72 rounded-full bg-primary-500/15 blur-[100px]"></div>
          <div className="absolute w-56 h-56 rounded-full bg-accent-500/10 blur-[80px] translate-x-12 translate-y-8"></div>

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative mb-6 flex flex-col items-center"
          >
            <img
              src="https://i.ibb.co/GvYrMC4M/Chat-GPT-Image-Oct-30-2026-07-57-59-PM.png"
              onError={(e) => {
                e.currentTarget.src = '/logo.png';
              }}
              alt="AI Software Technology — A Brand of Digi India Solutions"
              width="64"
              height="64"
              loading="eager"
              decoding="async"
              className="h-16 w-auto object-contain mb-3"
            />
            <span className="font-heading font-bold text-white text-sm tracking-wide">AI SOFTWARE TECHNOLOGY</span>
            <span className="text-[10px] text-accent-400 tracking-widest uppercase mt-0.5">A Brand of Digi India Solutions</span>
          </motion.div>

          {/* Loading bar */}
          <div className="w-48 h-1 rounded-full bg-white/[0.06] overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-xs text-white/30 font-body tracking-widest uppercase"
          >
            Your Business. Our Technology. Let&apos;s Build Together.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}