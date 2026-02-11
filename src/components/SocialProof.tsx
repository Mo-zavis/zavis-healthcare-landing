"use client";

import { motion } from "framer-motion";

const spring = { type: "spring" as const, damping: 100, stiffness: 240, mass: 2 };

const partners = [
  "Partner",
  "Partner",
  "Partner",
  "Partner",
  "Partner",
  "Partner",
];

export default function SocialProof() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#E9E8E4",
        padding: "32px 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >
        {/* Trust label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ ...spring, delay: 0.05 }}
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 14,
            fontWeight: 500,
            lineHeight: 1.4,
            color: "rgba(0,0,0,0.4)",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            margin: 0,
          }}
        >
          Trusted by leading healthcare providers across India and the Middle East
        </motion.p>

        {/* Logo placeholders */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ ...spring, delay: 0.15 }}
          className="social-proof-logos"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          {partners.map((label, i) => (
            <div
              key={i}
              style={{
                width: 120,
                height: 40,
                borderRadius: 8,
                border: "1px solid rgba(0,0,0,0.06)",
                backgroundColor: "rgba(255,255,255,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "rgba(0,0,0,0.2)",
                  letterSpacing: "0.02em",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Responsive: 3x2 grid on mobile */}
      <style jsx global>{`
        @media (max-width: 640px) {
          .social-proof-logos {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 12px !important;
            max-width: 400px !important;
          }
          .social-proof-logos > div {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
