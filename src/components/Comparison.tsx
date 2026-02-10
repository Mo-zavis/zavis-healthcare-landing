"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const rows = [
  { dimension: "Time to first value", bigBox: "5\u20139 months (design \u2192 build \u2192 UAT)", diy: "3\u20136 months", statusQuo: "\u221e", humble: "Day 3: First working software" },
  { dimension: "Delivery cadence", bigBox: "Big-bang phases", diy: "Sprints if you have dev capacity", statusQuo: "None", humble: "Daily releases; test on the floor tomorrow" },
  { dimension: "Floor adoption", bigBox: "Assumed; training late", diy: "Heavy citizen-dev effort", statusQuo: "Workarounds persist", humble: "Co-designed with operators, tested daily" },
  { dimension: "Change cost", bigBox: "High after \u201cscope freeze\u201d", diy: "Medium\u2013high", statusQuo: "Hidden (workarounds)", humble: "Low \u2014 overnight changes included" },
  { dimension: "Data quality", bigBox: "Backfilled after go-live", diy: "Inconsistent unless standardized", statusQuo: "Tribal knowledge only", humble: "Clean from Day 1 (doing work captures data)" },
  { dimension: "Fit to your 5% edge cases", bigBox: "Not possible", diy: "Possible with time", statusQuo: "Spreadsheet patches", humble: "First-class in workflow logic" },
  { dimension: "Integration approach", bigBox: "Heavy upfront API work", diy: "Fixed API Integrations", statusQuo: "Manual re-entry", humble: "Any machine or system \u2014 AI-coded in minutes" },
  { dimension: "Who builds & iterates", bigBox: "Consultants/config for months", diy: "Your team designs & maintains", statusQuo: "Workarounds on paper/Excel", humble: "Humble + your Subject Matter Experts" },
  { dimension: "Cash at risk", bigBox: "Locked licenses & services", diy: "Internal headcount cost", statusQuo: "Rising opportunity cost", humble: "Paid First Sprint, 100% refund if we miss" },
];

const cardShadow = "0px 0.71px 0.71px -0.42px rgba(0,0,0,0.03), 0px 1.81px 1.81px -0.83px rgba(0,0,0,0.03), 0px 3.62px 3.62px -1.25px rgba(0,0,0,0.03), 0px 6.87px 6.87px -1.67px rgba(0,0,0,0.03), 0px 13.65px 13.65px -2.08px rgba(0,0,0,0.03), 0px 30px 30px -2.5px rgba(0,0,0,0.03)";
const thStyle: React.CSSProperties = { fontFamily: "var(--font-inter)", textAlign: "left", padding: 20, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "rgba(0,0,0,0.32)", borderBottom: "1px solid rgba(0,0,0,0.12)" };

export default function Comparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} style={{ width: "100%", backgroundColor: "#fafafa", padding: "60px 0 80px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.2 }} style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(0,0,0,0.32)", marginBottom: 16 }}>Comparison</p>
          <h3 style={{ fontFamily: "var(--font-degular)", fontSize: 44, fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.052em", color: "#1c1c1c", margin: 0 }}>Why Humble Is Safer &mdash; and Beats the Alternatives</h3>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.35 }} style={{ backgroundColor: "#fff", borderRadius: 24, overflow: "hidden", boxShadow: cardShadow, border: "1px solid rgba(0,0,0,0.12)" }}>
          <div className="hidden md:block" style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ ...thStyle, width: "16%" }}></th>
                  <th style={{ ...thStyle, width: "20%" }}><div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8 }}><svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="rgba(0,0,0,0.08)" /></svg><span>Big Box MES/ERP/etc</span></div></th>
                  <th style={{ ...thStyle, width: "20%" }}><div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8 }}><svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="rgba(0,0,0,0.08)" /></svg><span>DIY Low-Code</span></div></th>
                  <th style={{ ...thStyle, width: "22%" }}><div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8 }}><svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="rgba(0,0,0,0.08)" /></svg><span>Status Quo (Do Nothing)</span></div></th>
                  <th style={{ ...thStyle, width: "22%", color: "#ff4000" }}><div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8 }}><svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="rgba(255,64,0,0.1)" stroke="#ff4000" strokeWidth="1.5" /></svg><span>With Humble</span></div></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < rows.length - 1 ? "1px solid rgba(0,0,0,0.12)" : "none" }}>
                    <td style={{ padding: 20, fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600, color: "#1c1c1c" }}>{row.dimension}</td>
                    <td style={{ padding: 20, fontFamily: "var(--font-geist)", fontSize: 14, fontWeight: 500, color: "rgba(0,0,0,0.56)" }}>{row.bigBox}</td>
                    <td style={{ padding: 20, fontFamily: "var(--font-geist)", fontSize: 14, fontWeight: 500, color: "rgba(0,0,0,0.56)" }}>{row.diy}</td>
                    <td style={{ padding: 20, fontFamily: "var(--font-geist)", fontSize: 14, fontWeight: 500, color: "rgba(0,0,0,0.56)" }}>{row.statusQuo}</td>
                    <td style={{ padding: 20, fontFamily: "var(--font-geist)", fontSize: 14, fontWeight: 600, color: "#1c1c1c" }}>{row.humble}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden" style={{ padding: 16, display: "flex", flexDirection: "column", gap: 16 }}>
            {rows.map((row, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 8, paddingBottom: 16, borderBottom: i < rows.length - 1 ? "1px solid rgba(0,0,0,0.12)" : "none" }}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600, color: "#1c1c1c", margin: 0 }}>{row.dimension}</p>
                <p style={{ fontFamily: "var(--font-geist)", fontSize: 13, fontWeight: 500, color: "rgba(0,0,0,0.56)", margin: 0 }}><span style={{ color: "rgba(0,0,0,0.32)" }}>Big Box:</span> {row.bigBox}</p>
                <p style={{ fontFamily: "var(--font-geist)", fontSize: 13, fontWeight: 500, color: "rgba(0,0,0,0.56)", margin: 0 }}><span style={{ color: "rgba(0,0,0,0.32)" }}>DIY:</span> {row.diy}</p>
                <p style={{ fontFamily: "var(--font-geist)", fontSize: 13, fontWeight: 500, color: "rgba(0,0,0,0.56)", margin: 0 }}><span style={{ color: "rgba(0,0,0,0.32)" }}>Status Quo:</span> {row.statusQuo}</p>
                <p style={{ fontFamily: "var(--font-geist)", fontSize: 13, fontWeight: 600, color: "#1c1c1c", margin: 0 }}><span style={{ color: "#ff4000" }}>Humble:</span> {row.humble}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.5 }} style={{ marginTop: 32, textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-geist)", fontSize: 16, fontWeight: 500, lineHeight: 1.5, color: "rgba(0,0,0,0.56)", maxWidth: 700, margin: "0 auto" }}>
            Result: You don&apos;t gamble quarters of budget on assumptions. You validate in days&mdash;with your people on the floor (and agents doing the glue work).
          </p>
        </motion.div>
      </div>
    </section>
  );
}
