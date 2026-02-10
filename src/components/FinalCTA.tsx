"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} style={{ width: "100%", backgroundColor: "#fafafa", padding: "60px 0 80px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.2 }}
          style={{
            position: "relative",
            backgroundColor: "#000",
            borderRadius: 30,
            padding: "64px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 32,
            overflow: "hidden",
          }}
        >
          {/* Subtle gradient accent */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: 300,
              height: 2,
              background: "linear-gradient(90deg, transparent 0%, #ff4000 50%, transparent 100%)",
            }}
          />

          {/* Smile icon */}
          <svg viewBox="0 0 42 43" width="56" height="57" style={{ opacity: 0.8 }}>
            <path
              d="M 0 22.275 C 0 22.275 8.4 32.775 21 32.775 C 33.6 32.775 42 22.275 42 22.275"
              stroke="white"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          <h2 style={{ fontFamily: "var(--font-degular)", fontSize: 44, fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.052em", color: "#fff", margin: 0, maxWidth: 600 }}>
            Ready to run the numbers for your plant?
          </h2>

          <p style={{ fontFamily: "var(--font-geist)", fontSize: 16, fontWeight: 500, lineHeight: 1.5, color: "rgba(255,255,255,0.5)", margin: 0, maxWidth: 500 }}>
            Start My 24-Hr Build or Book a 15-min Fit Call to get clarity now.
          </p>

          <div className="flex flex-col sm:flex-row items-center" style={{ gap: 12 }}>
            <a
              href="#call"
              style={{
                fontFamily: "var(--font-inter)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 48,
                padding: "0 28px",
                borderRadius: 8,
                backgroundColor: "#ff4000",
                color: "#fff",
                fontSize: 15,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                transition: "filter 0.2s",
              }}
            >
              Start my 24h Build
            </a>
            <a
              href="#fit-test"
              style={{
                fontFamily: "var(--font-inter)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 48,
                padding: "0 28px",
                borderRadius: 8,
                backgroundColor: "transparent",
                color: "#fff",
                fontSize: 15,
                fontWeight: 600,
                border: "1px solid rgba(255,255,255,0.2)",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
            >
              See if You&apos;re a Right Fit
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
