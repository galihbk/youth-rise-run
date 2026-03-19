'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" style={{ background: '#0a0e14' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '3rem', lineHeight: 1.1, marginBottom: '2rem' }}>
              Tentang <span className="text-gradient">Youth Rise Run</span>
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.8, marginBottom: '1.5rem' }}>
              Youth Rise Run Purbalingga 2026 diselenggarakan bukan hanya sebagai ajang olahraga, melainkan sebuah gerakan untuk memotivasi generasi muda agar bangkit, aktif, dan sehat.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.8 }}>
              Kegiatan ini dirancang sebagai lari santai yang menyatukan unsur kebugaran, kebersamaan, dan kesenangan tanpa tekanan kompetisi berlebihan. Dengan tema "Run for Always Young", kami mengajak masyarakat untuk menjaga semangat jiwa muda dan optimisme.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass"
            style={{ padding: '3rem' }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Tujuan Kegiatan</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                "Membangun ketangguhan fisik dan mental pemuda di tengah krisis.",
                "Mengampanyekan aksi ramah lingkungan (sustainable running event).",
                "Mendukung ekonomi UMKM lokal melalui keterlibatan dalam event.",
                "Meningkatkan kesadaran masyarakat terhadap gaya hidup sehat."
              ].map((text, i) => (
                <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--gradient-main)', flexShrink: 0, marginTop: '4px' }}></div>
                  <span style={{ fontSize: '1rem', opacity: 0.9 }}>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
