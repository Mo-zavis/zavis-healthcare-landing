"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Metric Data ── */

const metrics = [
  { label: "Response Time", value: "Under 60 seconds" },
  { label: "Automation Rate", value: "70% of inquiries" },
  { label: "Staff Workload", value: "Reduced by 40%" },
];

const spring = {
  type: "spring" as const,
  damping: 80,
  stiffness: 200,
  mass: 1.5,
};

/* ── Main Section ── */

export default function Proof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        width: "100%",
        background: "linear-gradient(135deg, #1E6E6E 0%, #2D8585 100%)",
        padding: "clamp(80px, 10vw, 128px) 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...spring, delay: 0.1 }}
          style={{
            textAlign: "center",
            marginBottom: 64,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Eyebrow — dark bg variant with yellow background and dot */}
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#21323B",
              backgroundColor: "#FDFA7E",
              padding: "6px 14px",
              borderRadius: 100,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#21323B",
                flexShrink: 0,
              }}
            />
            Early results
          </span>
          <h2
            style={{
              fontFamily: "var(--font-degular)",
              fontSize: "clamp(1.875rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            Pilot partners seeing impact
          </h2>
        </motion.div>

        {/* 2-column grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr]"
          style={{ gap: 64, alignItems: "start" }}
        >
          {/* Left — Testimonial card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...spring, delay: 0.2 }}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 24,
              padding: "clamp(40px, 5vw, 48px)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(20px, 2.5vw, 24px)",
                fontWeight: 400,
                lineHeight: 1.6,
                color: "#FFFFFF",
                margin: 0,
                marginBottom: 32,
              }}
            >
              &ldquo;ZAVIS handles our patient conversations so our front desk
              can focus on in-person care. We&apos;re booking more appointments
              without adding staff.&rdquo;
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                fontWeight: 600,
                color: "#FFFFFF",
                margin: 0,
                marginBottom: 8,
              }}
            >
              Operations Director
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 400,
                color: "rgba(255,255,255,0.7)",
                margin: 0,
              }}
            >
              Multi-location Specialty Clinic, UAE
            </p>
          </motion.div>

          {/* Right — Case metrics card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...spring, delay: 0.35 }}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 24,
              padding: "clamp(40px, 5vw, 48px)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-degular)",
                fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
                fontWeight: 600,
                lineHeight: 1.3,
                color: "#FFFFFF",
                margin: 0,
                marginBottom: 32,
              }}
            >
              Pilot results
            </h3>
            {metrics.map((metric, i) => (
              <div
                key={i}
                style={{
                  marginBottom: i < metrics.length - 1 ? 24 : 0,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.7)",
                    margin: 0,
                    marginBottom: 8,
                  }}
                >
                  {metric.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 24,
                    fontWeight: 600,
                    color: "#FFFFFF",
                    margin: 0,
                  }}
                >
                  {metric.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
