'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Instagram, Phone, Clock } from 'lucide-react';

const InfoCard = ({ icon: Icon, title, content, sub }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass" 
    style={{ 
      padding: '2rem', 
      flex: '1', 
      minWidth: '280px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'center',
      textAlign: 'center'
    }}
  >
    <div style={{ 
      width: '60px', 
      height: '60px', 
      borderRadius: '50%', 
      background: 'var(--gradient-main)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: 'white',
      marginBottom: '0.5rem'
    }}>
      <Icon size={30} />
    </div>
    <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>{title}</h3>
    <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>{content}</p>
    {sub && <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>{sub}</p>}
  </motion.div>
);

export default function EventInfo() {
  return (
    <section id="info" style={{ background: '#0a0e14' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Informasi Event</h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--primary)', margin: '0 auto' }}></div>
        </motion.div>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <InfoCard 
            icon={Calendar} 
            title="Waktu & Tanggal" 
            content="Minggu, 07 Juni 2026" 
            sub="Start 06:00 WIB"
          />
          <InfoCard 
            icon={Clock} 
            title="Registrasi" 
            content="25 Mar - 16 Mei 2026" 
            sub="Segera Amankan Slotmu!"
          />
          <InfoCard 
            icon={MapPin} 
            title="Lokasi" 
            content="Politeknik Madyathika" 
            sub={
              <a 
                href="https://maps.app.goo.gl/y51PhzQXEH5hj8FG6" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--primary)', textDecoration: 'underline' }}
              >
                Lihat di Google Maps
              </a>
            }
          />
        </div>
      </div>
    </section>
  );
}
