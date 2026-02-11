"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does it take to set up Zavis?",
    answer: "Most practices are live within 72 hours. Day 1-2 we connect to your EMR and configure your AI receptionist. Day 3 your first AI agent starts handling real patient interactions. No lengthy implementation cycles, no months of configuration. If your EMR is one we integrate with natively (M@DAS, Practo, Unite, Helix), setup is even faster.",
  },
  {
    question: "Will patients actually use WhatsApp to book appointments?",
    answer: "In India and the Middle East, WhatsApp has 95%+ penetration. Patients already message clinics on WhatsApp \u2014 they just don\u2019t get consistent responses. Zavis makes that channel instant and intelligent. We see 90%+ intake form completion rates on WhatsApp versus 30-40% on traditional patient portals. Patients don\u2019t need to download an app, create an account, or remember a password.",
  },
  {
    question: "Does Zavis replace our EMR?",
    answer: "No \u2014 Zavis works alongside your existing EMR. We integrate bidirectionally with M@DAS, Practo, Unite, Helix, and others. Patient data flows seamlessly between systems. Think of Zavis as the intelligent layer on top of your EMR that handles everything patient-facing \u2014 communications, scheduling, intake, follow-ups \u2014 while your EMR remains the clinical record of truth.",
  },
  {
    question: "What about patient data privacy and security?",
    answer: "Zavis is built healthcare-first, which means privacy and compliance are foundational, not bolted on. All patient data is encrypted in transit and at rest. We follow HIPAA-aligned practices and support data residency requirements. Your patient data never trains AI models. We provide full audit trails for every patient interaction.",
  },
  {
    question: "How do you handle complex scheduling \u2014 multiple doctors, departments, procedure types?",
    answer: "Zavis\u2019s scheduling engine understands doctor availability, department capacity, procedure duration, buffer times, and equipment requirements. It handles multi-step procedures (like fertility treatment cycles), department routing for hospitals, and even waitlist management to fill last-minute cancellations. The AI learns your specific patterns \u2014 if Dr. Sharma always runs 10 minutes over, Zavis accounts for that.",
  },
];

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
      <button onClick={() => setOpen(!open)}
        style={{ width: "100%", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, padding: "24px 0", textAlign: "left", cursor: "pointer", background: "transparent", border: "none" }}>
        <span style={{ fontFamily: "var(--font-degular)", fontSize: 20, fontWeight: 500, lineHeight: 1.3, color: "#1A1A2E", paddingRight: 16 }}>{faq.question}</span>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}
          style={{ flexShrink: 0, marginTop: 4, width: 24, height: 24, borderRadius: "50%", backgroundColor: "#1A1A2E", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2.5V9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M2.5 6H9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.44, 0, 0.56, 1] }} style={{ overflow: "hidden" }}>
            <p style={{ fontFamily: "var(--font-geist)", paddingBottom: 24, fontSize: 15, fontWeight: 500, lineHeight: 1.6, color: "rgba(0,0,0,0.56)", maxWidth: 900, margin: 0 }}>{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const cardShadow = "0px 0.71px 0.71px -0.42px rgba(0,0,0,0.03), 0px 1.81px 1.81px -0.83px rgba(0,0,0,0.03), 0px 3.62px 3.62px -1.25px rgba(0,0,0,0.03), 0px 6.87px 6.87px -1.67px rgba(0,0,0,0.03), 0px 13.65px 13.65px -2.08px rgba(0,0,0,0.03), 0px 30px 30px -2.5px rgba(0,0,0,0.03)";
  return (
    <section ref={ref} style={{ width: "100%", backgroundColor: "#E9E8E4", padding: "60px 0 80px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.2 }} style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(0,0,0,0.32)", marginBottom: 16 }}>FAQ</p>
          <h2 style={{ fontFamily: "var(--font-degular)", fontSize: 44, fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.052em", color: "#1A1A2E", margin: 0 }}>Got Questions</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.35 }}
          style={{ backgroundColor: "#fff", borderRadius: 24, padding: "8px 24px", boxShadow: cardShadow, border: "1px solid rgba(0,0,0,0.08)" }}>
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} />)}
        </motion.div>
      </div>
    </section>
  );
}
