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
    <section ref={ref} style={{ width: "100%", backgroundColor: "#fafafa", padding: "60px 0 80px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.2 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 24 }}
        >
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#ff4000", margin: 0 }}>
            Meet Humble
          </p>
          <h3 style={{ fontFamily: "var(--font-degular)", fontSize: 44, fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.052em", color: "#1c1c1c", margin: 0 }}>
            Your On Demand Factory Software,<br />Delivered Overnight.
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.35 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, marginTop: 32 }}
        >
          <p style={{ fontFamily: "var(--font-geist)", fontSize: 16, fontWeight: 500, lineHeight: 1.5, color: "rgba(0,0,0,0.56)", textAlign: "center", margin: 0, maxWidth: 700 }}>
            Your ERP stays running. Your MES keeps humming. Humble connects them all. Or retires them. Your choice.
          </p>
          <p style={{ fontFamily: "var(--font-geist)", fontSize: 16, fontWeight: 500, lineHeight: 1.5, color: "rgba(0,0,0,0.56)", textAlign: "center", margin: 0, maxWidth: 700 }}>
            Not another rip-and-replace nightmare. Humble works alongside your existing systems, fixing your biggest pain first&mdash;whether that&apos;s scheduling chaos, quality tracking, or black holes in your data. Start small, prove value, expand when ready.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", damping: 80, stiffness: 300, mass: 2, delay: 0.5 }}
          style={{ marginTop: 48, borderRadius: 24, overflow: "hidden", backgroundColor: "#fff", boxShadow: cardShadow, border: "3px solid #1e1e1e" }}
        >
          <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
            <VideoPlaceholder label="Product Demo" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
