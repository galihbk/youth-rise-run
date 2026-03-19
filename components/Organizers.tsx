'use client';

import { motion } from 'framer-motion';

export default function Organizers() {
  const logos = [
    { name: "MAHDA", role: "Organized by" },
    { name: "POLITEKNIK MADYATHIKA", role: "Main Partner" },
    { name: "BPC HIPMI PURBALINGGA", role: "Collaborator" },
    { name: "PEMERINTAH KAB. PURBALINGGA", role: "Supporting Partner" }
  ];

  return (
    <section id="organizers" style={{ background: '#0f172a', padding: '4rem 0' }}>
      <div className="container">
        <center>
          <p style={{ opacity: 0.6, fontSize: '0.9rem', marginBottom: '2rem', letterSpacing: '2px' }}>SUPPORTED & ORGANIZED BY</p>
        </center>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '4rem', 
          alignItems: 'center',
          opacity: 0.7
        }}>
          {logos.map((logo, i) => (
            <motion.div 
              key={i} 
              whileHover={{ opacity: 1, scale: 1.1 }}
              style={{ textAlign: 'center' }}
            >
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800 }}>{logo.name}</h4>
              <p style={{ fontSize: '0.7rem', opacity: 0.6 }}>{logo.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
