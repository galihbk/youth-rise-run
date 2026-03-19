'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Ticket } from 'lucide-react';

const CategoryCard = ({ km, color, title, earlyBird, normal, bgGradient }: any) => (
  <motion.div
    whileHover={{ scale: 1.05, rotateY: 10 }}
    style={{
      flex: '1',
      minWidth: '300px',
      padding: '3rem 2rem',
      borderRadius: '24px',
      background: bgGradient,
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    <div style={{ 
      fontSize: '5rem', 
      fontWeight: 'bold', 
      marginBottom: '1rem', 
      lineHeight: 1,
      textShadow: '0 4px 10px rgba(0,0,0,0.2)'
    }}>
      {km}
    </div>
    <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', textTransform: 'uppercase' }}>
      KILOMETER
    </div>

    <div className="glass" style={{ width: '100%', padding: '1.5rem', marginTop: 'auto' }}>
      <div style={{ marginBottom: '1rem' }}>
        <p style={{ opacity: 0.8, fontSize: '0.8rem' }}>EARLY BIRD</p>
        <p style={{ fontSize: '1.4rem', fontWeight: 800 }}>{earlyBird}</p>
      </div>
      <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.2)', margin: '1rem 0' }}></div>
      <div>
        <p style={{ opacity: 0.8, fontSize: '0.8rem' }}>NORMAL PRICE</p>
        <p style={{ fontSize: '1.4rem', fontWeight: 800 }}>{normal}</p>
      </div>
    </div>
  </motion.div>
);

export default function Categories() {
  return (
    <section id="categories" style={{ background: '#0f172a' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <p style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '2px', marginBottom: '0.5rem' }}>OPEN RACE CATEGORY</p>
          <h2 style={{ fontSize: '3rem' }}>Pilih Jarakmu</h2>
        </motion.div>

        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <CategoryCard 
            km="5" 
            bgGradient="linear-gradient(180deg, #FFD700 0%, #FFA500 100%)"
            earlyBird="Rp 200.000"
            normal="Rp 220.000"
          />
          <CategoryCard 
            km="10" 
            bgGradient="linear-gradient(180deg, #FF4B2B 0%, #FF416C 100%)"
            earlyBird="Rp 250.000"
            normal="Rp 275.000"
          />
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <p style={{ opacity: 0.6, fontStyle: 'italic' }}>*Semua kategori mendapatkan: Jersey, Medali, Refreshment, & BIB Number</p>
        </div>
      </div>
    </section>
  );
}
