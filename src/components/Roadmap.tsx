"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  { label: "Week 1", body: "Launch your first custom workflow and lock a clean data backbone\u2014live on the floor, no rip-and-replace." },
  { label: "Month 1", body: "Add three high-leverage workflows and connect what\u2019s already in place; spreadsheets fade, one source of truth emerges." },
  { label: "Quarter 1", body: "Run dynamic, shift-level planning in minutes\u2014constraints respected, change windows honored, audit trail by default." },
  { label: "Year 1", body: "You\u2019re not drafting an AI plan \u2014 you\u2019re operating one on a foundation built in weeks, phasing out legacy pieces on your timeline." },
];

const cardShadow = "0px 0.71px 0.71px -0.42px rgba(0,0,0,0.03), 0px 1.81px 1.81px -0.83px rgba(0,0,0,0.03), 0px 3.62px 3.62px -1.25px rgba(0,0,0,0.03), 0px 6.87px 6.87px -1.67px rgba(0,0,0,0.03), 0px 13.65px 13.65px -2.08px rgba(0,0,0,0.03), 0px 30px 30px -2.5px rgba(0,0,0,0.03)";

function MilestoneCard({ m, index }: { m: typeof milestones[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.1 * index }}
      style={{ backgroundColor: "#fff", borderRadius: 24, padding: 24, display: "flex", flexDirection: "column", gap: 16, boxShadow: cardShadow, border: "1px solid rgba(0,0,0,0.12)" }}>
      <div style={{ fontFamily: "var(--font-inter)", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "fit-content", padding: "6px 12px", borderRadius: 6, backgroundColor: "#000", color: "#fff", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
        {m.label}
      </div>
      <p style={{ fontFamily: "var(--font-geist)", fontSize: 15, fontWeight: 500, lineHeight: 1.5, color: "rgba(0,0,0,0.56)", margin: 0 }}>{m.body}</p>
    </motion.div>
  );
}

export default function Roadmap() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} style={{ width: "100%", backgroundColor: "#fafafa", padding: "60px 0 80px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.2 }} style={{ textAlign: "center", marginBottom: 16 }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(0,0,0,0.32)", marginBottom: 16 }}>Roadmap</p>
          <h2 style={{ fontFamily: "var(--font-degular)", fontSize: 44, fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.052em", color: "#1c1c1c", margin: 0 }}>Your Roadmap to Full Capability, Accelerated</h2>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.3 }}
          style={{ fontFamily: "var(--font-geist)", textAlign: "center", maxWidth: 700, margin: "0 auto 48px", fontSize: 16, fontWeight: 500, lineHeight: 1.5, color: "rgba(0,0,0,0.56)" }}>
          The tools that kept plants predictable for 40 years were built for static workflows &mdash; and they&apos;re slowing your ability to react to today&apos;s pace of change. The next decade belongs to operations that learn every day and adapt in hours. Humble gets you there iteratively, on top of what you already run.
        </motion.p>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4">
          {milestones.map((m, i) => <MilestoneCard key={m.label} m={m} index={i} />)}
        </div>
      </div>
    </section>
  );
}
