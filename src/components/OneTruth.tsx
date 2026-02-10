"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const tabs = [
  {
    label: "Shop Floor",
    title: "Shop Floor Operations",
    subtitle: "No prompts or \u2018learning AI\u2019\u2014just the next step. Most folks ramp in ~15 minutes.",
    features: [
      { title: "Just Tell Me What\u2019s Next", body: "Clear task lists, not three systems and a whiteboard. Step-by-step work instructions that make sense. No hunting for the right version of the SOP or the traveling paperwork." },
      { title: "Your Setup, Your Way", body: "Document what actually works without writing novels. Access machine manuals instantly when something\u2019s wrong. Share fixes with next shift without explaining everything twice." },
    ],
  },
  {
    label: "Planners",
    title: "Planners & Process Engineers",
    subtitle: "Build and adjust schedules that reflect your actual constraints\u2014not theoretical ones.",
    features: [
      { title: "Scheduling That Adapts", body: "A dynamic engine that understands your exact constraints\u2014tools, crews, materials, deadlines\u2014and adapts in real time. No more fighting with static Gantt charts." },
      { title: "Process Visibility", body: "See what\u2019s actually happening on the floor, not what was planned three weeks ago. Real data, real-time, from the people doing the work." },
    ],
  },
  {
    label: "Quality",
    title: "Quality & Compliance",
    subtitle: "Capture quality data as work happens\u2014not after the fact on paper forms.",
    features: [
      { title: "Built-In Quality Checks", body: "Inspection criteria that match reality, not theory. Operators can\u2019t skip steps. Photos, measurements, and sign-offs captured in the flow of work." },
      { title: "Audit-Ready Always", body: "Every action timestamped, every decision traceable. Pull compliance reports in seconds, not days. No more scrambling before audits." },
    ],
  },
  {
    label: "Plant Ops",
    title: "Plant / Ops Leaders",
    subtitle: "One dashboard that tells the truth about your operation\u2014no spreadsheet archaeology.",
    features: [
      { title: "Real-Time Visibility", body: "See production status, quality metrics, and scheduling accuracy in one place. No more walking the floor to find out what\u2019s happening." },
      { title: "Data-Driven Decisions", body: "Actual cost-per-part, real cycle times, true yield rates. Make investment decisions based on data, not gut feel." },
    ],
  },
  {
    label: "Executive",
    title: "Executive / Management",
    subtitle: "Finally\u2014a technology investment that proves value in days, not fiscal years.",
    features: [
      { title: "Measurable ROI in Weeks", body: "No more million-dollar bets on software that takes two years to implement. See measurable results from the first sprint. Expand only what works." },
      { title: "Strategic Advantage", body: "While competitors spend 18 months on ERP upgrades, you\u2019re iterating daily. Your operations learn and improve every single day." },
    ],
  },
];

const cardShadow = "0px 0.71px 0.71px -0.42px rgba(0,0,0,0.03), 0px 1.81px 1.81px -0.83px rgba(0,0,0,0.03), 0px 3.62px 3.62px -1.25px rgba(0,0,0,0.03), 0px 6.87px 6.87px -1.67px rgba(0,0,0,0.03), 0px 13.65px 13.65px -2.08px rgba(0,0,0,0.03), 0px 30px 30px -2.5px rgba(0,0,0,0.03)";

export default function OneTruth() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} style={{ width: "100%", backgroundColor: "#f6f5f3", padding: "60px 0 80px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.2 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <h2 style={{ fontFamily: "var(--font-degular)", fontSize: 44, fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.052em", color: "#1c1c1c", margin: 0 }}>
            One truth everyone actually trusts:
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.35 }}
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6, marginBottom: 40 }}
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActive(i)}
              style={{
                fontFamily: "var(--font-inter)",
                padding: "10px 16px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                border: "none",
                transition: "all 0.3s",
                backgroundColor: active === i ? "#fff" : "transparent",
                color: active === i ? "#000" : "rgba(0,0,0,0.56)",
                boxShadow: active === i ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
              }}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: "#fff",
              borderRadius: 24,
              padding: "32px",
              boxShadow: cardShadow,
              border: "1px solid rgba(0,0,0,0.12)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-degular)", fontSize: 32, fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.03em", color: "#1c1c1c", margin: 0 }}>
                  {tabs[active].title}
                </h3>
                <p style={{ fontFamily: "var(--font-geist)", fontSize: 15, fontWeight: 500, lineHeight: 1.4, color: "rgba(0,0,0,0.56)", marginTop: 8 }}>
                  {tabs[active].subtitle}
                </p>
              </div>

              {/* Counter */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <button
                  onClick={() => setActive(Math.max(0, active - 1))}
                  style={{ width: 35, height: 35, borderRadius: "50%", backgroundColor: "#000", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", border: "none" }}
                  aria-label="Previous"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M7.5 2.5L4 6L7.5 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 500, color: "rgba(0,0,0,0.32)" }}>
                  {active + 1}/{tabs.length}
                </span>
                <button
                  onClick={() => setActive(Math.min(tabs.length - 1, active + 1))}
                  style={{ width: 35, height: 35, borderRadius: "50%", backgroundColor: "#000", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", border: "none" }}
                  aria-label="Next"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4.5 2.5L8 6L4.5 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>

              {/* Features Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 16 }}>
                {tabs[active].features.map((feat) => (
                  <div key={feat.title} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <h4 style={{ fontFamily: "var(--font-degular)", fontSize: 23, fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.03em", color: "#1c1c1c", margin: 0 }}>
                      {feat.title}
                    </h4>
                    <p style={{ fontFamily: "var(--font-geist)", fontSize: 15, fontWeight: 500, lineHeight: 1.5, color: "rgba(0,0,0,0.56)", margin: 0 }}>
                      {feat.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
