import React from 'react';

export const OFFICIAL_GOOGLE_MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111955.9278502912!2d76.93417009726564!3d28.730818300000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07df3a2a1373%3A0xdffeb297af285ab3!2sAi%20Software%20Technology!5e0!3m2!1sen!2sin!4v1793559709261!5m2!1sen!2sin';

interface GoogleMapEmbedProps {
  className?: string;
}

export default function GoogleMapEmbed({ className = '' }: GoogleMapEmbedProps) {
  return (
    <div
      className={`glass-card rounded-2xl overflow-hidden border border-white/[0.08] bg-dark-600 w-full ${className}`}
    >
      <iframe
        src={OFFICIAL_GOOGLE_MAP_EMBED_URL}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="AI Software Technology - Google Maps Location"
        className="w-full h-[320px] sm:h-[350px] md:h-[420px] lg:h-[450px] block"
      />
    </div>
  );
}
