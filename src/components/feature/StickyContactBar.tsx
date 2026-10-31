import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function StickyContactBar() {
  const [visible, setVisible] = useState(true);
  const [minimized, setMinimized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > 400) {
        setVisible(current < lastScroll || current < 100);
      } else {
        setVisible(true);
      }
      lastScroll = current;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        aria-label="Show contact bar"
        className="fixed top-20 right-4 z-40 px-3 py-1.5 rounded-full bg-dark-500/90 backdrop-blur-xl border border-white/[0.08] text-white/50 hover:text-accent-400 text-[10px] font-medium transition-all duration-300 cursor-pointer flex items-center gap-1.5 shadow-lg"
      >
        <i className="ri-customer-service-2-line text-accent-400 text-xs"></i>
        <span className="hidden sm:inline">Quick Contact</span>
      </button>
    );
  }

  return (
    <>
      {/* Top micro bar - desktop only */}
      <div
        className={`hidden lg:block fixed top-0 left-0 right-0 z-[51] bg-dark-600/95 backdrop-blur-xl border-b border-white/[0.04] transition-transform duration-300 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-10 h-8 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-5 text-white/40">
            <a
              href="tel:+919990390519"
              className="flex items-center gap-1.5 hover:text-accent-400 transition-colors"
            >
              <i className="ri-phone-fill text-accent-400 text-xs"></i>
              <span>+91 9990390519</span>
            </a>
            <span className="text-white/10">|</span>
            <a
              href="mailto:aisoftwaretechnology2026@gmail.com"
              className="flex items-center gap-1.5 hover:text-accent-400 transition-colors"
            >
              <i className="ri-mail-fill text-primary-400 text-xs"></i>
              <span>aisoftwaretechnology2026@gmail.com</span>
            </a>
            <span className="text-white/10">|</span>
            <span className="flex items-center gap-1 text-white/35">
              <i className="ri-building-2-line text-accent-400 text-xs"></i>
              <span>AI Software Technology — A Brand of Digi India Solutions</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919990390519?text=Hi%20AI%20Software%20Technology%2C%20I%27m%20interested%20in%20your%20software%20development%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <i className="ri-whatsapp-fill text-xs"></i>
              <span>WhatsApp</span>
            </a>
            <span className="text-white/10">|</span>
            <button
              onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-1 text-accent-400 hover:text-accent-300 font-medium transition-colors cursor-pointer"
            >
              <i className="ri-calendar-check-line text-xs"></i>
              <span>Get Free Consultation</span>
            </button>
            <button
              onClick={() => setMinimized(true)}
              aria-label="Minimize bar"
              className="text-white/20 hover:text-white/50 transition-colors cursor-pointer ml-1"
            >
              <i className="ri-close-line text-xs"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile bottom sticky CTA bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-dark-500/95 backdrop-blur-2xl border-t border-white/[0.06] px-3 py-2 safe-area-bottom">
        <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
          <a
            href="tel:+919990390519"
            className="flex flex-col items-center justify-center py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white/60 active:bg-accent-500/10 active:text-accent-400 transition-all"
          >
            <i className="ri-phone-fill text-accent-400 text-base"></i>
            <span className="text-[9px] font-medium mt-0.5">Call Now</span>
          </a>
          <a
            href="https://wa.me/919990390519?text=Hi%20AI%20Software%20Technology%2C%20I%27m%20interested%20in%20your%20software%20development%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 rounded-xl bg-emerald-500/8 border border-emerald-500/15 text-emerald-400 active:bg-emerald-500/15 transition-all"
          >
            <i className="ri-whatsapp-fill text-base"></i>
            <span className="text-[9px] font-medium mt-0.5">WhatsApp</span>
          </a>
          <button
            onClick={() => { navigate('/calculators'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex flex-col items-center justify-center py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white/60 active:bg-primary-500/10 transition-all cursor-pointer"
          >
            <i className="ri-calculator-line text-primary-400 text-base"></i>
            <span className="text-[9px] font-medium mt-0.5">Estimate</span>
          </button>
          <button
            onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex flex-col items-center justify-center py-1.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold transition-all cursor-pointer"
          >
            <i className="ri-send-plane-fill text-base"></i>
            <span className="text-[9px] font-semibold mt-0.5">Get Quote</span>
          </button>
        </div>
      </div>
    </>
  );
}