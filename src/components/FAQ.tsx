"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  { question: "We\u2019ve been burned by software before. How do we know this will actually work in our plant?", answer: "Start with one painful process\u2014like scheduling one line or tracking one quality metric. Your operators use real software on Day 3, not after months of meetings. If it doesn\u2019t work, you\u2019ve lost two to four weeks, not two years. No committees, no consultants, no disruption to everything else." },
  { question: "My operators barely use our current systems. Why would they use this?", answer: "Because this is built for how they actually work, not how consultants think they should work. No training manuals\u2014just \u2018here\u2019s your next task\u2019 on a tablet. They can\u2019t skip steps or enter garbage data. Takes about 15 minutes to learn. The interface shows only what matters for that specific task\u2014no hunting through menus or remembering which screen to use." },
  { question: "How do we know which workflow to pick to fix?", answer: "We help you choose based on three criteria: (1) It\u2019s costing you money daily\u2014overtime, rework, delays. (2) You have someone who owns it and wants it fixed. (3) Success is measurable\u2014like \u2018reduce schedule changes from 4 to 1\u2019 or \u2018cut quality escapes by half.\u2019 Common winners: scheduling one constraint resource, tracking one quality metric that\u2019s killing you, or fixing one inventory black hole. The key: pick something painful enough that fixing it in 2 weeks makes you a hero." },
  { question: "Do I need to hire IT people or consultants to make this work?", answer: "No. Humble\u2019s agents handle the technical work\u2014writing code, building integrations, shipping updates overnight. You need one or two Subject Matter Experts who know the process (the people already doing the work) and about 30 minutes a day for feedback during the first sprint. That\u2019s it. No IT project, no consultants, no steering committees. After the first sprint, your team can request changes in plain language\u2014Humble ships them overnight." },
  { question: "How do I justify this to my CEO/Board when we just spent millions on our ERP?", answer: "You\u2019re not replacing anything\u2014you\u2019re fixing one specific problem that\u2019s costing you money today. Frame it as a two to four week experiment to stop the bleeding on whatever\u2019s killing your metrics. \u2018We\u2019re testing a solution for that scheduling chaos that\u2019s costing us $50K/month in overtime. If it works, we expand. If not, we\u2019ve lost nothing.\u2019 The ERP stays running, no disruption. Once they see the first win, expansion sells itself." },
];

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
      <button onClick={() => setOpen(!open)}
        style={{ width: "100%", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, padding: "24px 0", textAlign: "left", cursor: "pointer", background: "transparent", border: "none" }}>
        <span style={{ fontFamily: "var(--font-degular)", fontSize: 20, fontWeight: 500, lineHeight: 1.3, color: "#1c1c1c", paddingRight: 16 }}>{faq.question}</span>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}
          style={{ flexShrink: 0, marginTop: 4, width: 24, height: 24, borderRadius: "50%", backgroundColor: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
    <section ref={ref} style={{ width: "100%", backgroundColor: "#f6f5f3", padding: "60px 0 80px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.2 }} style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(0,0,0,0.32)", marginBottom: 16 }}>FAQ</p>
          <h2 style={{ fontFamily: "var(--font-degular)", fontSize: 44, fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.052em", color: "#1c1c1c", margin: 0 }}>Got Questions</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.35 }}
          style={{ backgroundColor: "#fff", borderRadius: 24, padding: "8px 24px", boxShadow: cardShadow, border: "1px solid rgba(0,0,0,0.12)" }}>
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} />)}
        </motion.div>
      </div>
    </section>
  );
}
