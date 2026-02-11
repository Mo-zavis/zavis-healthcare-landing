"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} style={{ width: "100%", backgroundColor: "#F1F0EC", padding: "60px 0 80px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.2 }}
          style={{
            position: "relative",
            backgroundColor: "#1A1A2E",
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
              background: "linear-gradient(90deg, transparent 0%, #00C67E 50%, transparent 100%)",
            }}
          />

          {/* Heart-pulse icon */}
          <svg width="56" height="57" viewBox="0 0 56 57" fill="none" style={{ opacity: 0.8 }}>
            {/* Heart outline */}
            <path
              d="M28 50C28 50 6 36 6 19.5C6 14.5 8.5 9.5 13 7.5C17.5 5.5 22.5 6.5 26 10L28 12.5L30 10C33.5 6.5 38.5 5.5 43 7.5C47.5 9.5 50 14.5 50 19.5C50 36 28 50 28 50Z"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Pulse line through the heart */}
            <path
              d="M10 28.5H20L23 22.5L26.5 34.5L30 22.5L33 28.5H46"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>

          <h2 style={{ fontFamily: "var(--font-degular)", fontSize: 44, fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.052em", color: "#fff", margin: 0, maxWidth: 600 }}>
            Ready to Transform Patient Engagement?
          </h2>

          <p style={{ fontFamily: "var(--font-geist)", fontSize: 16, fontWeight: 500, lineHeight: 1.5, color: "rgba(255,255,255,0.5)", margin: 0, maxWidth: 500 }}>
            Book a demo to see Zavis in action, or start your free pilot to experience the difference.
          </p>

          <div className="flex flex-col sm:flex-row items-center" style={{ gap: 12 }}>
            <a
              href="#demo"
              style={{
                fontFamily: "var(--font-inter)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 48,
                padding: "0 28px",
                borderRadius: 8,
                backgroundColor: "#00C67E",
                color: "#fff",
                fontSize: 15,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                transition: "filter 0.2s",
                textDecoration: "none",
              }}
            >
              Book a Demo
            </a>
            <a
              href="#pilot"
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
                textDecoration: "none",
              }}
            >
              Start Free Pilot
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
