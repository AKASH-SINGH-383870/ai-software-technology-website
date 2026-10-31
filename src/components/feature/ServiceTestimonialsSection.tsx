import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  getPublishedServiceTestimonials,
  ServiceTestimonialItem,
} from '@/data/serviceTestimonials';

interface ServiceTestimonialsSectionProps {
  serviceSlug: string;
  serviceName: string;
}

export const ServiceTestimonialsSection: React.FC<ServiceTestimonialsSectionProps> = ({
  serviceSlug,
  serviceName,
}) => {
  const prefersReducedMotion = useReducedMotion();

  const [cardsPerView, setCardsPerView] = useState<number>(3);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Only verified, approved testimonials (`status: "published"`) are shown on the live website
  const publishedReviews: ServiceTestimonialItem[] = getPublishedServiceTestimonials(serviceSlug);

  // Responsive cardsPerView: Desktop (>= 1024px) = 3, Tablet (>= 768px) = 2, Mobile (< 768px) = 1
  useEffect(() => {
    const updateCardsPerView = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const totalPages = Math.max(1, Math.ceil(publishedReviews.length / cardsPerView));

  useEffect(() => {
    setCurrentPage(0);
  }, [serviceSlug, cardsPerView, publishedReviews.length]);

  const handleNext = useCallback(() => {
    if (totalPages <= 1) return;
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handlePrev = useCallback(() => {
    if (totalPages <= 1) return;
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Smooth auto-slide every 6.5 seconds unless paused, reduced-motion enabled, or single page
  useEffect(() => {
    if (prefersReducedMotion || isPaused || totalPages <= 1 || publishedReviews.length === 0) {
      return;
    }
    const timer = window.setInterval(() => {
      handleNext();
    }, 6500);
    return () => window.clearInterval(timer);
  }, [prefersReducedMotion, isPaused, totalPages, publishedReviews.length, handleNext]);

  // Rule: If no genuine reviews are available, hide the testimonial carousel until feedback is provided.
  if (publishedReviews.length === 0) {
    return null;
  }

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  // Touch swipe handlers on mobile/tablet
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const startIndex = currentPage * cardsPerView;
  const visibleReviews = publishedReviews.slice(startIndex, startIndex + cardsPerView);

  // Adaptive grid columns so if fewer than 3 genuine reviews are available, there are no empty cards or half-row gaps
  const getGridColsClass = (count: number) => {
    if (count === 1) {
      return 'grid-cols-1 max-w-xl mx-auto';
    }
    if (count === 2) {
      return 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto';
    }
    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  };

  return (
    <section
      className="py-16 md:py-24 bg-dark-600 relative overflow-hidden"
      aria-label={`Client Feedback for ${serviceName}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Heading — Preserving Existing Design */}
        <div className="text-center mb-12">
          <div className="section-tag mx-auto">
            <i className="ri-chat-quote-line"></i> Client Feedback
          </div>
          <h2 className="section-title text-white">
            What Clients Say About Our <span className="text-gradient">{serviceName}</span>
          </h2>
        </div>

        {/* Live Testimonial Carousel */}
        <div
          className="relative outline-none"
          tabIndex={totalPages > 1 ? 0 : -1}
          role="region"
          aria-roledescription="carousel"
          aria-label={`${serviceName} client testimonials`}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${serviceSlug}-${currentPage}-${cardsPerView}`}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className={`grid ${getGridColsClass(visibleReviews.length)} gap-6 items-stretch`}
            >
              {visibleReviews.map((t) => {
                const subtitleParts = [t.designation, t.companyName].filter(
                  (part): part is string => Boolean(part && part.trim().length > 0)
                );

                return (
                  <div
                    key={t.id}
                    className="glass-card rounded-2xl p-7 h-full flex flex-col justify-between border border-white/[0.06] hover:border-primary-500/30 transition-all duration-300"
                  >
                    <div>
                      {/* Star Rating, when provided by the client */}
                      {typeof t.rating === 'number' && t.rating > 0 && (
                        <div
                          className="flex gap-1 mb-4"
                          aria-label={`Rated ${t.rating} out of 5 stars`}
                        >
                          {Array.from({ length: t.rating }).map((_, j) => (
                            <i
                              key={j}
                              className="ri-star-fill text-amber-400 text-sm"
                              aria-hidden="true"
                            ></i>
                          ))}
                        </div>
                      )}

                      {/* Genuine Client Feedback */}
                      <p className="text-sm text-white/55 leading-relaxed mb-6 italic">
                        &ldquo;{t.feedback}&rdquo;
                      </p>
                    </div>

                    {/* Client Avatar (Initials or Approved Profile Image) + Client Name + Designation | Company Name */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05] mt-auto">
                      {t.avatarUrl ? (
                        <img
                          src={t.avatarUrl}
                          alt={t.clientName}
                          loading="lazy"
                          className="w-10 h-10 rounded-full object-cover flex-shrink-0 border border-white/10"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center font-heading font-bold text-white text-xs flex-shrink-0">
                          {t.initials}
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="font-heading text-sm font-semibold text-white truncate">
                          {t.clientName}
                        </div>
                        {subtitleParts.length > 0 && (
                          <div className="text-xs text-white/35 truncate">
                            {subtitleParts.join(' | ')}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls: Previous / Dots / Next (shown when more than 1 slide of published reviews exists) */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonials"
                className="w-10 h-10 rounded-xl glass-card border border-white/10 hover:border-primary-500/40 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer"
              >
                <i className="ri-arrow-left-s-line text-xl"></i>
              </button>

              <div
                className="flex items-center gap-2"
                role="tablist"
                aria-label="Testimonial slides"
              >
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    role="tab"
                    aria-selected={currentPage === idx}
                    aria-label={`Go to testimonial slide ${idx + 1} of ${totalPages}`}
                    onClick={() => setCurrentPage(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentPage === idx
                        ? 'w-8 bg-gradient-to-r from-primary-500 to-accent-500'
                        : 'w-2.5 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonials"
                className="w-10 h-10 rounded-xl glass-card border border-white/10 hover:border-primary-500/40 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer"
              >
                <i className="ri-arrow-right-s-line text-xl"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonialsSection;
