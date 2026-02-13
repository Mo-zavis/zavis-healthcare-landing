"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      style={{
        width: "100%",
        background: "linear-gradient(135deg, #F5F7FA 0%, #EEF1FA 100%)",
      }}
    >
      {/* Responsive padding via className + inline fallback */}
      <div className="finalcta-section-pad">
        <div
          className="finalcta-container"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <div
            className="finalcta-grid"
            style={{
              maxWidth: 900,
              margin: "0 auto",
              alignItems: "center",
            }}
          >
            {/* Left — Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "spring",
                damping: 100,
                stiffness: 240,
                mass: 2,
                delay: 0.2,
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-degular)",
                  fontSize: "clamp(1.875rem, 4vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: "#171717",
                  margin: 0,
                  marginBottom: 16,
                }}
              >
                Start seeing impact quickly
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  color: "#374151",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Our team supports configuration and rollout so you can begin
                automating patient engagement workflows without disrupting
                operations.
              </p>
            </motion.div>

            {/* Right — Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "spring",
                damping: 100,
                stiffness: 240,
                mass: 2,
                delay: 0.35,
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <a
                href="#demo"
                style={{
                  fontFamily: "var(--font-inter)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1rem 2.25rem",
                  borderRadius: 9999,
                  backgroundColor: "#FFFFFF",
                  color: "#000000",
                  fontSize: 16,
                  fontWeight: 500,
                  textDecoration: "none",
                  border: "1px solid transparent",
                  cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Book a Demo
              </a>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "#6B7280",
                  textAlign: "center",
                  margin: 0,
                }}
              >
                30-minute walkthrough of ZAVIS for your operations
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx global>{`
        .finalcta-section-pad {
          padding: 80px 0;
        }
        .finalcta-container {
          padding: 0 24px;
        }
        .finalcta-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 768px) {
          .finalcta-section-pad {
            padding: 128px 0;
          }
          .finalcta-container {
            padding: 0 48px;
          }
          .finalcta-grid {
            grid-template-columns: 1.5fr 1fr;
            gap: 48px;
          }
        }
      `}</style>
    </section>
  );
}
