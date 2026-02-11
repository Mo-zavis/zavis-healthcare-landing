"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  { label: "Week 1", body: "AI receptionist live \u2014 handling calls, booking appointments, capturing patient data on WhatsApp. Zero missed calls, zero manual intake." },
  { label: "Month 1", body: "Three departments connected. Automated follow-ups running. EMR sync active. Staff spending 60% less time on admin tasks." },
  { label: "Quarter 1", body: "Full patient journey automated \u2014 from first contact to post-visit care. Analytics driving decisions. No-shows down 40%." },
  { label: "Year 1", body: "You\u2019re not planning a digital transformation \u2014 you\u2019re running one. Multi-location, multi-channel, fully automated patient engagement at scale." },
];

const cardShadow = "0px 0.71px 0.71px -0.42px rgba(0,0,0,0.03), 0px 1.81px 1.81px -0.83px rgba(0,0,0,0.03), 0px 3.62px 3.62px -1.25px rgba(0,0,0,0.03), 0px 6.87px 6.87px -1.67px rgba(0,0,0,0.03), 0px 13.65px 13.65px -2.08px rgba(0,0,0,0.03), 0px 30px 30px -2.5px rgba(0,0,0,0.03)";

function MilestoneCard({ m, index }: { m: typeof milestones[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.1 * index }}
      style={{ backgroundColor: "#fff", borderRadius: 24, padding: 24, display: "flex", flexDirection: "column", gap: 16, boxShadow: cardShadow, border: "1px solid rgba(0,0,0,0.06)" }}>
      <div style={{ fontFamily: "var(--font-inter)", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "fit-content", padding: "6px 12px", borderRadius: 6, backgroundColor: "#1A1A2E", color: "#fff", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
        {m.label}
      </div>
      <p style={{ fontFamily: "var(--font-geist)", fontSize: 15, fontWeight: 400, lineHeight: 1.5, color: "rgba(0,0,0,0.56)", margin: 0 }}>{m.body}</p>
    </motion.div>
  );
}

export default function Roadmap() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} style={{ width: "100%", backgroundColor: "#F1F0EC", padding: "60px 0 80px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.2 }} style={{ textAlign: "center", marginBottom: 16 }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(0,0,0,0.32)", marginBottom: 16 }}>Growth Path</p>
          <h2 style={{ fontFamily: "var(--font-degular)", fontSize: 44, fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.052em", color: "#1A1A2E", margin: 0 }}>Your Path to Full Patient Engagement</h2>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.3 }}
          style={{ fontFamily: "var(--font-geist)", textAlign: "center", maxWidth: 700, margin: "0 auto 48px", fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: "rgba(0,0,0,0.56)" }}>
          Healthcare providers who digitize patient touchpoints see 30% higher retention and 40% fewer no-shows. Zavis gets you there iteratively &mdash; no big-bang rollout, no disruption to current operations.
        </motion.p>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4">
          {milestones.map((m, i) => <MilestoneCard key={m.label} m={m} index={i} />)}
        </div>
      </div>
    </section>
  );
}
