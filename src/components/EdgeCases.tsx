"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const edgeCases = [
  { category: "MES", problem: "Machine capability degrades mid-run. First 500 parts at 100% speed, next 300 at 70% speed due to tooling wear. System expects uniform cycle time. Your actual costs and scheduling are now fiction.", solution: "Track variable run rates within single work orders. Automatically adjust scheduling when equipment degrades. Real cost-per-part based on actual machine performance, not theoretical standards." },
  { category: "WMS", problem: "Customer returns partial shipment - some parts damaged, some wrong, some fine but need rework. System can only receive all or nothing. You\u2019re tracking three different dispositions on paper while inventory is completely wrong.", solution: "Receive returns with multiple dispositions in one transaction. Route damaged to scrap, wrong parts to return vendor, good parts to rework queue. Inventory stays accurate through the entire mess." },
  { category: "ERP / Costing", problem: "Customer returns material for credit, but it\u2019s already partially processed. ERP can\u2019t handle partial returns with value-add. You track it offline, miss the credit, or just eat the cost.", solution: "Define reverse workflows with partial processing states. Calculate accurate credits including your value-add. Handle the messy reality of customer changes." },
  { category: "QMS", problem: "Customer spec says \u00b10.005\" but their receiving inspects to \u00b10.003\". You know this. Your operators know this. The system doesn\u2019t. Quality passes parts that will get rejected.", solution: "Capture real customer requirements, not just paper specs. Track internal knowledge like \u201cCustomer X always measures differently.\u201d Build inspection criteria that match reality, not theory." },
  { category: "Spreadsheets", problem: "Prototype runs with borrowed inventory. R&D \u201cborrows\u201d parts without paperwork. Inventory counts never match. Finance asks why. You point to seventeen spreadsheets.", solution: "Create exception workflows for prototypes and R&D pulls. Track borrowed inventory properly. Stop explaining the same variances every month." },
  { category: "Paper", problem: "Swing shift has different procedures that work better. Day shift doesn\u2019t know. Night shift does their own thing. Three ways to make the same part, all undocumented.", solution: "Capture each shift\u2019s actual method. Compare performance data. Promote best practices across shifts\u2014or keep variations when they make sense for different crews." },
];

const cardShadow = "0px 0.71px 0.71px -0.42px rgba(0,0,0,0.03), 0px 1.81px 1.81px -0.83px rgba(0,0,0,0.03), 0px 3.62px 3.62px -1.25px rgba(0,0,0,0.03), 0px 6.87px 6.87px -1.67px rgba(0,0,0,0.03), 0px 13.65px 13.65px -2.08px rgba(0,0,0,0.03), 0px 30px 30px -2.5px rgba(0,0,0,0.03)";

function EdgeCaseCard({ ec, index }: { ec: typeof edgeCases[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.1 * (index % 2) }}
      style={{ backgroundColor: "#fff", borderRadius: 24, padding: 32, display: "flex", flexDirection: "column", gap: 20, boxShadow: cardShadow, border: "1px solid rgba(0,0,0,0.12)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <span style={{ fontFamily: "var(--font-inter)", display: "inline-block", width: "fit-content", padding: "4px 10px", borderRadius: 4, backgroundColor: "rgba(0,0,0,0.04)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(0,0,0,0.4)" }}>
          {ec.category}
        </span>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(0,0,0,0.32)", margin: 0 }}>Today</p>
        <p style={{ fontFamily: "var(--font-geist)", fontSize: 15, lineHeight: 1.5, color: "#1c1c1c", fontWeight: 500, fontStyle: "italic", margin: 0 }}>&ldquo;{ec.problem}&rdquo;</p>
      </div>
      <div style={{ width: "100%", height: 1, backgroundColor: "rgba(0,0,0,0.12)" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#ff4000", margin: 0 }}>With Humble</p>
        <p style={{ fontFamily: "var(--font-geist)", fontSize: 15, fontWeight: 500, lineHeight: 1.5, color: "rgba(0,0,0,0.56)", margin: 0 }}>{ec.solution}</p>
      </div>
    </motion.div>
  );
}

export default function EdgeCases() {
  const sectionRef = useRef(null);
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });
  return (
    <section ref={sectionRef} style={{ width: "100%", backgroundColor: "#f6f5f3", padding: "60px 0 0" }}>
      <div style={{
        width: "100%",
        height: 300,
        background: "linear-gradient(180deg, #87CEEB 0%, #90c695 40%, #5a8a5e 60%, #3d6b42 100%)",
        borderRadius: "0 0 24px 24px",
        marginBottom: 48,
      }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
          {edgeCases.map((ec, i) => <EdgeCaseCard key={i} ec={ec} index={i} />)}
        </div>
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.2 }}
          style={{
            backgroundColor: "#1e1e1e",
            borderRadius: 24,
            padding: "48px 40px",
            textAlign: "center",
            marginTop: 48,
            marginBottom: 80,
          }}
        >
          <h4 style={{
            fontFamily: "var(--font-degular)",
            fontSize: 28,
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            margin: 0,
          }}>
            Conventional ERPs/MES/etc force you to ignore the 5% edge cases&mdash;or patch with spreadsheets.
          </h4>
          <p style={{
            fontFamily: "var(--font-degular)",
            fontSize: 20,
            fontWeight: 700,
            lineHeight: 1.3,
            color: "#ffffff",
            margin: "16px 0 0",
          }}>
            But Your Edge Cases <em>ARE</em> YOUR BUSINESS. Humble makes them standard work.
          </p>
          <p style={{
            fontFamily: "var(--font-geist)",
            fontSize: 16,
            fontWeight: 500,
            color: "rgba(255,255,255,0.5)",
            margin: "8px 0 0",
          }}>
            The Factory OS That Grows With You
          </p>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#22c55e",
              color: "#ffffff",
              fontFamily: "var(--font-geist)",
              fontSize: 15,
              fontWeight: 600,
              borderRadius: 8,
              padding: "0 28px",
              height: 44,
              marginTop: 24,
              textDecoration: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            See if You&apos;re a Right Fit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
