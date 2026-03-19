"use client";

import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0a0e14",
        padding: "4rem 0 2rem",
        borderTop: "1px solid var(--card-border)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "4rem",
            marginBottom: "4rem",
          }}
        >
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <img
                src="/logo-2.png"
                alt="Youth Rise Run"
                style={{ height: "60px", width: "auto" }}
              />
            </div>
            <p style={{ opacity: 0.6, lineHeight: 1.6 }}>
              Event lari terbesar di Purbalingga yang mengajak generasi muda
              untuk terus aktif, sehat, dan bersemangat.
            </p>
          </div>

          <div>
            <h4 style={{ marginBottom: "1.5rem" }}>Pintasan</h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                opacity: 0.7,
              }}
            >
              <li>
                <a href="#about" style={{ transition: "color 0.3s" }}>
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#categories" style={{ transition: "color 0.3s" }}>
                  Kategori Lari
                </a>
              </li>
              <li>
                <a href="#info" style={{ transition: "color 0.3s" }}>
                  Informasi Event
                </a>
              </li>
              <li>
                <a href="https://event.bibsport.id/d/youth-raise-run-purbalingga-2026">
                  Link Pendaftaran
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: "1.5rem" }}>Kontak</h4>
            <div
              style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem" }}
            >
              <a
                href="https://www.instagram.com/youthriserunpurbalingga"
                target="_blank"
                className="text-gradient"
              >
                <Instagram size={24} />
              </a>
            </div>
            <p style={{ opacity: 0.8, fontWeight: 600 }}>Catur (Admin)</p>
            <p style={{ opacity: 0.6 }}>+62 831-1629-2211</p>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            opacity: 0.4,
            fontSize: "0.8rem",
          }}
        >
          &copy; 2026 Youth Rise Run Purbalingga. All rights reserved. Organized
          by MAHDA.
        </div>
      </div>
    </footer>
  );
}
