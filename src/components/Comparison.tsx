"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const rows = [
  {
    dimension: "Time to first value",
    col1: "3\u20136 months implementation",
    col2: "Immediate but unscalable",
    col3: "2\u20134 weeks, limited scope",
    zavis: "Live in 72 hours",
  },
  {
    dimension: "Patient channels",
    col1: "Email + portal only",
    col2: "Phone + in-person",
    col3: "Web chat only",
    zavis: "WhatsApp, Voice, SMS, Web \u2014 unified",
  },
  {
    dimension: "After-hours coverage",
    col1: "None or expensive",
    col2: "Voicemail",
    col3: "Basic scripted responses",
    zavis: "Full AI agent \u2014 books, answers, triages",
  },
  {
    dimension: "EMR integration",
    col1: "Heavy custom work",
    col2: "Manual sync",
    col3: "Rarely available",
    zavis: "Native \u2014 M@DAS, Practo, Unite, Helix",
  },
  {
    dimension: "Patient intake",
    col1: "Portal forms (low completion)",
    col2: "Paper forms \u2192 manual entry",
    col3: "Not supported",
    zavis: "WhatsApp intake \u2014 90%+ completion",
  },
  {
    dimension: "Follow-up automation",
    col1: "Basic email sequences",
    col2: "Staff-dependent",
    col3: "Template-only",
    zavis: "Personalized journeys per visit type",
  },
  {
    dimension: "Analytics depth",
    col1: "Marketing metrics only",
    col2: "Spreadsheet-based",
    col3: "Chat metrics only",
    zavis: "Full funnel \u2014 calls to revenue",
  },
  {
    dimension: "Cost model",
    col1: "Per-seat licensing + setup",
    col2: "Headcount cost",
    col3: "Per-conversation pricing",
    zavis: "Predictable monthly \u2014 scales with you",
  },
];

const cardShadow =
  "0px 0.71px 0.71px -0.42px rgba(0,0,0,0.03), 0px 1.81px 1.81px -0.83px rgba(0,0,0,0.03), 0px 3.62px 3.62px -1.25px rgba(0,0,0,0.03), 0px 6.87px 6.87px -1.67px rgba(0,0,0,0.03), 0px 13.65px 13.65px -2.08px rgba(0,0,0,0.03), 0px 30px 30px -2.5px rgba(0,0,0,0.03)";

const thStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter)",
  textAlign: "left",
  padding: 20,
  fontSize: 12,
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  color: "rgba(0,0,0,0.32)",
  borderBottom: "1px solid rgba(0,0,0,0.08)",
};

export default function Comparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      ref={ref}
      style={{
        width: "100%",
        backgroundColor: "#F1F0EC",
        padding: "60px 0 80px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            damping: 100,
            stiffness: 240,
            mass: 2,
            delay: 0.2,
          }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 13,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "rgba(0,0,0,0.32)",
              marginBottom: 16,
            }}
          >
            Comparison
          </p>
          <h3
            style={{
              fontFamily: "var(--font-degular)",
              fontSize: 44,
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.052em",
              color: "#1A1A2E",
              margin: 0,
            }}
          >
            Why Zavis Outperforms the Alternatives
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            damping: 100,
            stiffness: 240,
            mass: 2,
            delay: 0.35,
          }}
          style={{
            backgroundColor: "#fff",
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: cardShadow,
            border: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          {/* Desktop table */}
          <div className="hidden md:block" style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ ...thStyle, width: "16%" }}></th>
                  <th style={{ ...thStyle, width: "18%" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: 8,
                      }}
                    >
                      <svg width="32" height="32" viewBox="0 0 32 32">
                        <circle
                          cx="16"
                          cy="16"
                          r="16"
                          fill="rgba(0,0,0,0.08)"
                        />
                      </svg>
                      <span>Traditional CRM</span>
                    </div>
                  </th>
                  <th style={{ ...thStyle, width: "18%" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: 8,
                      }}
                    >
                      <svg width="32" height="32" viewBox="0 0 32 32">
                        <circle
                          cx="16"
                          cy="16"
                          r="16"
                          fill="rgba(0,0,0,0.08)"
                        />
                      </svg>
                      <span>Manual Process</span>
                    </div>
                  </th>
                  <th style={{ ...thStyle, width: "18%" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: 8,
                      }}
                    >
                      <svg width="32" height="32" viewBox="0 0 32 32">
                        <circle
                          cx="16"
                          cy="16"
                          r="16"
                          fill="rgba(0,0,0,0.08)"
                        />
                      </svg>
                      <span>Generic Chatbot</span>
                    </div>
                  </th>
                  <th style={{ ...thStyle, width: "22%", color: "#00C67E" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: 8,
                      }}
                    >
                      <svg width="32" height="32" viewBox="0 0 32 32">
                        <circle
                          cx="16"
                          cy="16"
                          r="16"
                          fill="rgba(0,198,126,0.1)"
                          stroke="#00C67E"
                          strokeWidth="1.5"
                        />
                      </svg>
                      <span>With Zavis</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom:
                        i < rows.length - 1
                          ? "1px solid rgba(0,0,0,0.08)"
                          : "none",
                    }}
                  >
                    <td
                      style={{
                        padding: 20,
                        fontFamily: "var(--font-inter)",
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#1A1A2E",
                      }}
                    >
                      {row.dimension}
                    </td>
                    <td
                      style={{
                        padding: 20,
                        fontFamily: "var(--font-geist)",
                        fontSize: 14,
                        fontWeight: 500,
                        color: "rgba(0,0,0,0.56)",
                      }}
                    >
                      {row.col1}
                    </td>
                    <td
                      style={{
                        padding: 20,
                        fontFamily: "var(--font-geist)",
                        fontSize: 14,
                        fontWeight: 500,
                        color: "rgba(0,0,0,0.56)",
                      }}
                    >
                      {row.col2}
                    </td>
                    <td
                      style={{
                        padding: 20,
                        fontFamily: "var(--font-geist)",
                        fontSize: 14,
                        fontWeight: 500,
                        color: "rgba(0,0,0,0.56)",
                      }}
                    >
                      {row.col3}
                    </td>
                    <td
                      style={{
                        padding: 20,
                        fontFamily: "var(--font-geist)",
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#1A1A2E",
                      }}
                    >
                      {row.zavis}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div
            className="md:hidden"
            style={{
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {rows.map((row, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  paddingBottom: 16,
                  borderBottom:
                    i < rows.length - 1
                      ? "1px solid rgba(0,0,0,0.08)"
                      : "none",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#1A1A2E",
                    margin: 0,
                  }}
                >
                  {row.dimension}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-geist)",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "rgba(0,0,0,0.56)",
                    margin: 0,
                  }}
                >
                  <span style={{ color: "rgba(0,0,0,0.32)" }}>
                    Traditional CRM:
                  </span>{" "}
                  {row.col1}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-geist)",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "rgba(0,0,0,0.56)",
                    margin: 0,
                  }}
                >
                  <span style={{ color: "rgba(0,0,0,0.32)" }}>Manual:</span>{" "}
                  {row.col2}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-geist)",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "rgba(0,0,0,0.56)",
                    margin: 0,
                  }}
                >
                  <span style={{ color: "rgba(0,0,0,0.32)" }}>Chatbot:</span>{" "}
                  {row.col3}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-geist)",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#1A1A2E",
                    margin: 0,
                  }}
                >
                  <span style={{ color: "#00C67E" }}>Zavis:</span> {row.zavis}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            damping: 100,
            stiffness: 240,
            mass: 2,
            delay: 0.5,
          }}
          style={{ marginTop: 32, textAlign: "center" }}
        >
          <p
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: 16,
              fontWeight: 500,
              lineHeight: 1.5,
              color: "rgba(0,0,0,0.56)",
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            Result: You don&apos;t choose between patient experience and
            efficiency. Zavis delivers both &mdash; with measurable ROI from
            week one.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
