import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2 mb-1"
          >
            <a
              href="tel:+919990390519"
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#07111F] border border-white/[0.12] text-white text-xs font-semibold shadow-lg hover:border-accent-400/40 transition-all duration-200 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-line text-accent-400 text-base"></i>
              +91 9990390519
            </a>
            <button
              onClick={() => {
                setOpen(false);
                navigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-semibold shadow-[0_8px_25px_rgba(31,60,255,0.4)] hover:shadow-[0_12px_35px_rgba(0,194,255,0.5)] transition-all duration-200 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-calendar-check-line text-base"></i>
              Get Free Consultation
            </button>
            <button
              onClick={() => {
                setOpen(false);
                navigate('/calculators');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#07111F] border border-white/[0.12] text-white text-xs font-semibold shadow-lg hover:border-primary-400/40 transition-all duration-200 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-calculator-line text-primary-400 text-base"></i>
              Cost Calculator
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2.5">
        {/* Direct Floating WhatsApp Button */}
        <a
          href="https://wa.me/919990390519?text=Hello%20AI%20Software%20Technology%2C%20I%20would%20like%20to%20discuss%20a%20software%20project."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp (+91 9990390519)"
          className="w-[52px] h-[52px] rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-[0_8px_30px_rgba(16,185,129,0.45)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.65)] hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <i className="ri-whatsapp-line text-2xl"></i>
        </a>

        {/* Quick Actions Toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Quick Actions"
          className={`w-[52px] h-[52px] rounded-2xl flex items-center justify-center transition-all duration-300 cursor-pointer shadow-[0_8px_30px_rgba(31,60,255,0.5)] ${
            open
              ? 'bg-[#07111F] border border-white/[0.15] text-white rotate-45'
              : 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-[0_12px_40px_rgba(0,194,255,0.6)] hover:scale-105'
          }`}
        >
          <i className={`${open ? 'ri-close-line' : 'ri-customer-service-2-line'} text-xl`}></i>
        </button>
      </div>
    </div>
  );
}