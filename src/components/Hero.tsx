"use client";

import { motion } from "framer-motion";

const spring = { type: "spring" as const, damping: 100, stiffness: 240, mass: 2 };

const metrics = [
  { value: "50+", label: "Healthcare Providers" },
  { value: "1M+", label: "Patient Interactions" },
  { value: "40%", label: "Fewer No-Shows" },
  { value: "90%+", label: "Intake Completion" },
];

export default function Hero() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#F1F0EC",
        backgroundImage:
          "radial-gradient(ellipse 800px 400px at 50% 0%, rgba(0,198,126,0.04) 0%, transparent 100%)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 32px 60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.05 }}
          style={{
            fontFamily: "var(--font-degular)",
            fontSize: "clamp(48px, 6vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            color: "#1A1A2E",
            margin: 0,
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          AI-Powered Patient Success Platform
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.15 }}
          style={{
            fontFamily: "var(--font-geist)",
            fontSize: 18,
            fontWeight: 400,
            lineHeight: 1.6,
            color: "rgba(0,0,0,0.6)",
            margin: 0,
            marginTop: 24,
            textAlign: "center",
            maxWidth: 600,
          }}
        >
          Automate patient acquisition, scheduling, intake, and follow-up across
          WhatsApp, voice, and web &mdash; so your team can focus on care.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.25 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginTop: 36,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="#demo"
            style={{
              fontFamily: "var(--font-inter)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: 48,
              padding: "0 28px",
              borderRadius: 8,
              backgroundColor: "#00C67E",
              color: "#fff",
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              border: "none",
              cursor: "pointer",
              transition: "opacity 0.15s ease",
            }}
          >
            Book a Demo
          </a>
          <a
            href="#how-it-works"
            style={{
              fontFamily: "var(--font-inter)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: 48,
              padding: "0 28px",
              borderRadius: 8,
              backgroundColor: "transparent",
              color: "#1A1A2E",
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              border: "1px solid rgba(0,0,0,0.15)",
              cursor: "pointer",
              transition: "border-color 0.15s ease",
            }}
          >
            See How It Works
          </a>
        </motion.div>

        {/* Trust Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.35 }}
          style={{ marginTop: 40, width: "100%" }}
        >
          <div
            className="hero-metrics-grid"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 0,
              maxWidth: 680,
              margin: "0 auto",
            }}
          >
            {metrics.map((metric, i) => (
              <div
                key={metric.label}
                className="hero-metric-item"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                  flex: 1,
                  position: "relative",
                  padding: "0 24px",
                }}
              >
                {/* Vertical divider — skip first item */}
                {i > 0 && (
                  <div
                    className="hero-metric-divider"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 1,
                      height: 36,
                      backgroundColor: "rgba(0,0,0,0.08)",
                    }}
                  />
                )}
                <span
                  style={{
                    fontFamily: "var(--font-degular)",
                    fontSize: 36,
                    fontWeight: 700,
                    lineHeight: 1.1,
                    color: "#1A1A2E",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {metric.value}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 13,
                    fontWeight: 500,
                    lineHeight: 1.3,
                    color: "rgba(0,0,0,0.4)",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Responsive styles for metrics grid */}
      <style jsx global>{`
        @media (max-width: 640px) {
          .hero-metrics-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 28px 0 !important;
            max-width: 400px !important;
          }
          .hero-metric-item {
            padding: 0 16px !important;
          }
          .hero-metric-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
