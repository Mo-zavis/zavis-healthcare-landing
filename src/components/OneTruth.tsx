"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const tabs = [
  {
    label: "Front Desk",
    title: "Front Desk & Reception",
    subtitle: "No more juggling phones, WhatsApp, and paper forms \u2014 everything in one view.",
    features: [
      { title: "Instant Patient Intake", body: "Patients fill forms on WhatsApp before they arrive. Demographics, ID photos, insurance details \u2014 all captured automatically. No clipboard, no waiting room bottleneck." },
      { title: "Smart Queue Management", body: "Real-time queue updates sent to patients. Department routing happens automatically. Walk-ins and appointments merge seamlessly." },
    ],
  },
  {
    label: "Doctors",
    title: "Doctors & Clinicians",
    subtitle: "Spend time with patients, not screens.",
    features: [
      { title: "Pre-Visit Intelligence", body: "See complete patient context before they walk in \u2014 previous visits, medications, chief complaints, and AI-summarized intake notes." },
      { title: "Follow-Up Automation", body: "Post-visit care plans trigger automatically. Medication reminders, test result notifications, and check-in messages \u2014 all handled by Zavis." },
    ],
  },
  {
    label: "Patients",
    title: "Patient Experience",
    subtitle: "Healthcare that meets patients where they already are \u2014 on WhatsApp.",
    features: [
      { title: "Book in 30 Seconds", body: "No app downloads, no portals. Patients book, reschedule, or ask questions right from WhatsApp \u2014 24/7, with instant AI responses." },
      { title: "Never Miss a Follow-Up", body: "Cycle-based reminders for fertility, prescription refill alerts for pharmacy, discharge follow-ups for hospitals \u2014 all automated, all personalized." },
    ],
  },
  {
    label: "Admin",
    title: "Admin & Operations",
    subtitle: "Finally \u2014 clean data and zero manual re-entry.",
    features: [
      { title: "Unified Patient Records", body: "Every interaction across every channel feeds into one clean record. No duplicate entries, no data silos, no reconciliation headaches." },
      { title: "Revenue Cycle Clarity", body: "Track payments, insurance claims, and outstanding balances in real time. Automated payment reminders reduce collection cycles." },
    ],
  },
  {
    label: "Management",
    title: "Management & Leadership",
    subtitle: "Make decisions from data, not gut feel.",
    features: [
      { title: "Real-Time Analytics", body: "Conversation heatmaps, first response times, AI agent close rates, CSAT scores \u2014 all in one dashboard." },
      { title: "Growth Intelligence", body: "Campaign ROI tracking, rebook conversion rates, department-level performance \u2014 see exactly where to invest next." },
    ],
  },
];

const cardShadow = "0px 0.71px 0.71px -0.42px rgba(0,0,0,0.03), 0px 1.81px 1.81px -0.83px rgba(0,0,0,0.03), 0px 3.62px 3.62px -1.25px rgba(0,0,0,0.03), 0px 6.87px 6.87px -1.67px rgba(0,0,0,0.03), 0px 13.65px 13.65px -2.08px rgba(0,0,0,0.03), 0px 30px 30px -2.5px rgba(0,0,0,0.03)";

export default function OneTruth() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} style={{ width: "100%", backgroundColor: "#E9E8E4", padding: "60px 0 80px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.2 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <h2 style={{ fontFamily: "var(--font-degular)", fontSize: 44, fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.052em", color: "#1A1A2E", margin: 0 }}>
            One platform every team trusts
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
                color: active === i ? "#1A1A2E" : "rgba(0,0,0,0.56)",
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
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-degular)", fontSize: 32, fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.03em", color: "#1A1A2E", margin: 0 }}>
                  {tabs[active].title}
                </h3>
                <p style={{ fontFamily: "var(--font-geist)", fontSize: 15, fontWeight: 400, lineHeight: 1.4, color: "rgba(0,0,0,0.56)", marginTop: 8 }}>
                  {tabs[active].subtitle}
                </p>
              </div>

              {/* Counter */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <button
                  onClick={() => setActive(Math.max(0, active - 1))}
                  style={{ width: 35, height: 35, borderRadius: "50%", backgroundColor: "#1A1A2E", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", border: "none" }}
                  aria-label="Previous"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M7.5 2.5L4 6L7.5 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 500, color: "rgba(0,0,0,0.32)" }}>
                  {active + 1}/{tabs.length}
                </span>
                <button
                  onClick={() => setActive(Math.min(tabs.length - 1, active + 1))}
                  style={{ width: 35, height: 35, borderRadius: "50%", backgroundColor: "#1A1A2E", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", border: "none" }}
                  aria-label="Next"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4.5 2.5L8 6L4.5 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>

              {/* Features Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 16 }}>
                {tabs[active].features.map((feat) => (
                  <div key={feat.title} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <h4 style={{ fontFamily: "var(--font-degular)", fontSize: 23, fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.03em", color: "#1A1A2E", margin: 0 }}>
                      {feat.title}
                    </h4>
                    <p style={{ fontFamily: "var(--font-geist)", fontSize: 15, fontWeight: 400, lineHeight: 1.5, color: "rgba(0,0,0,0.56)", margin: 0 }}>
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
