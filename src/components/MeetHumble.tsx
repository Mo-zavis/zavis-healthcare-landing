"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const VideoPlaceholder = ({ label }: { label: string }) => (
  <div style={{ width: "100%", height: "100%", backgroundColor: "#e8e6e3", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div style={{ textAlign: "center" }}>
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.2 }}>
        <polygon points="5 3 19 12 5 21 5 3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      <p style={{ fontFamily: "var(--font-inter)", color: "rgba(0,0,0,0.2)", fontSize: 13, fontWeight: 500, marginTop: 8 }}>{label}</p>
    </div>
  </div>
);

const cardShadow = "0px 0.71px 0.71px -0.42px rgba(0,0,0,0.03), 0px 1.81px 1.81px -0.83px rgba(0,0,0,0.03), 0px 3.62px 3.62px -1.25px rgba(0,0,0,0.03), 0px 6.87px 6.87px -1.67px rgba(0,0,0,0.03), 0px 13.65px 13.65px -2.08px rgba(0,0,0,0.03), 0px 30px 30px -2.5px rgba(0,0,0,0.03)";

export default function MeetHumble() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} style={{ width: "100%", backgroundColor: "#F1F0EC", padding: "60px 0 80px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.2 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 24 }}
        >
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#00C67E", margin: 0 }}>
            Meet Zavis
          </p>
          <h3 style={{ fontFamily: "var(--font-degular)", fontSize: 44, fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.052em", color: "#1A1A2E", margin: 0 }}>
            Your 24/7 AI Healthcare Assistant,<br />Always On.
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.35 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, marginTop: 32 }}
        >
          <p style={{ fontFamily: "var(--font-geist)", fontSize: 16, fontWeight: 500, lineHeight: 1.5, color: "rgba(0,0,0,0.56)", textAlign: "center", margin: 0, maxWidth: 700 }}>
            Zavis doesn&apos;t replace your team &mdash; it supercharges them. Every missed call becomes a booked appointment. Every WhatsApp message gets an instant, intelligent response. Every patient interaction is captured, organized, and actionable.
          </p>
          <p style={{ fontFamily: "var(--font-geist)", fontSize: 16, fontWeight: 500, lineHeight: 1.5, color: "rgba(0,0,0,0.56)", textAlign: "center", margin: 0, maxWidth: 700 }}>
            No rip-and-replace. Zavis plugs into your existing EMR, works alongside your staff, and starts delivering value from day one. Start with one department, prove the ROI, expand when ready.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", damping: 80, stiffness: 300, mass: 2, delay: 0.5 }}
          style={{ marginTop: 48, borderRadius: 24, overflow: "hidden", backgroundColor: "#fff", boxShadow: cardShadow, border: "3px solid #1A1A2E" }}
        >
          <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
            <VideoPlaceholder label="Platform Overview" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
