'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Instagram, Phone } from 'lucide-react';

export default function Hero() {
  const ticketUrl = "https://event.bibsport.id/d/youth-raise-run-purbalingga-2026";

  return (
    <section className="hero" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      background: 'var(--gradient-main)',
      position: 'relative',
      overflow: 'hidden',
      padding: '2rem 1rem',
      textAlign: 'center'
    }}>
      {/* Animated background elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          filter: 'blur(80px)',
          zIndex: 0
        }}
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.1)',
          filter: 'blur(100px)',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* SEO Heading */}
          <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
            Youth Rise Run Purbalingga 2026 - Run For Always Young
          </h1>

          <div style={{ marginBottom: '2rem' }}>
            <img 
              src="/logo-3.png" 
              alt="Youth Rise Run Purbalingga 2026 Official Logo" 
              style={{ 
                maxWidth: 'min(500px, 90vw)', 
                height: 'auto',
                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
              }} 
            />
          </div>

          <p style={{ 
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', 
            fontWeight: 500, 
            fontStyle: 'italic',
            marginBottom: '2.5rem',
            opacity: 0.95
          }}>
            "Run For Always Young"
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a 
              href={ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontSize: '1.2rem', padding: '1.2rem 3rem' }}
            >
              Daftar Sekarang
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating Info Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          display: 'flex',
          gap: '2rem',
          fontSize: '0.9rem',
          fontWeight: 600,
          opacity: 0.8,
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Calendar size={18} /> 07 JUNI 2026
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin size={18} /> PURBALINGGA, JAWA TENGAH
        </span>
      </motion.div>
    </section>
  );
}
