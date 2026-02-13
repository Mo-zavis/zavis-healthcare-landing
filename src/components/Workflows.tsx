"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Workflow Data ── */

const workflows = [
  {
    title: "Streamline front office operations",
    description:
      "Handle incoming calls, schedule appointments, answer common questions, and collect intake information — all without increasing staff workload.",
    bullets: [
      "24/7 call answering and appointment booking",
      "Automated intake and eligibility verification",
      "Smart escalation to staff when needed",
    ],
  },
  {
    title: "Simplify back office coordination",
    description:
      "Automate payment reminders, insurance follow-ups, and administrative tasks so your team can focus on complex cases.",
    bullets: [
      "Automated payment collection and reminders",
      "Insurance verification workflows",
      "Post-visit documentation follow-up",
    ],
  },
  {
    title: "Grow your practice",
    description:
      "Reactivate inactive patients, generate reviews, and run targeted outreach campaigns to fill your schedule.",
    bullets: [
      "Patient recall and reactivation campaigns",
      "Automated review generation",
      "Targeted outreach for specific services",
    ],
  },
];

const spring = {
  type: "spring" as const,
  damping: 80,
  stiffness: 200,
  mass: 1.5,
};

/* ── Single Workflow Row ── */

function WorkflowRow({
  workflow,
  index,
}: {
  workflow: (typeof workflows)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 1;

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2"
      style={{
        gap: 64,
        alignItems: "center",
        marginBottom: index < workflows.length - 1 ? 80 : 0,
      }}
    >
      {/* Text side */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ ...spring, delay: 0.1 }}
        style={{ order: isEven ? 2 : 1 }}
        className={isEven ? "md:order-2" : "md:order-1"}
      >
        <h3
          style={{
            fontFamily: "var(--font-degular)",
            fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
            fontWeight: 600,
            lineHeight: 1.3,
            color: "#171717",
            margin: 0,
            marginBottom: 16,
          }}
        >
          {workflow.title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.7,
            color: "#374151",
            margin: 0,
            marginBottom: 24,
          }}
        >
          {workflow.description}
        </p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {workflow.bullets.map((bullet, i) => (
            <li
              key={i}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 15,
                lineHeight: 1.6,
                color: "#374151",
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
              }}
            >
              <span
                style={{
                  color: "#2D8585",
                  fontWeight: 700,
                  flexShrink: 0,
                  lineHeight: 1.6,
                }}
              >
                ✓
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Visual side */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ ...spring, delay: 0.25 }}
        style={{ order: isEven ? 1 : 2 }}
        className={isEven ? "md:order-1" : "md:order-2"}
      >
        <div
          style={{
            borderRadius: 16,
            backgroundColor: "#F3F4F6",
            aspectRatio: "16 / 10",
            border: "1px solid #E5E7EB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 14,
              color: "#6B7280",
              fontWeight: 400,
            }}
          >
            Workflow illustration
          </span>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Main Section ── */

export default function Workflows() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#FFFFFF",
        padding: "clamp(80px, 10vw, 128px) 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...spring, delay: 0.1 }}
          style={{
            textAlign: "center",
            maxWidth: 800,
            margin: "0 auto 64px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#6B7280",
              margin: 0,
              marginBottom: 16,
            }}
          >
            How it works
          </p>
          <h2
            style={{
              fontFamily: "var(--font-degular)",
              fontSize: "clamp(1.875rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#171717",
              margin: 0,
              marginBottom: 16,
            }}
          >
            Workflows reflect real clinic operations
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              fontWeight: 400,
              lineHeight: 1.6,
              color: "#374151",
              margin: 0,
            }}
          >
            Our workflows aren&apos;t idealized chatbot scripts — they&apos;re
            built for how healthcare actually operates.
          </p>
        </motion.div>

        {/* Workflow rows */}
        {workflows.map((wf, i) => (
          <WorkflowRow key={i} workflow={wf} index={i} />
        ))}
      </div>
    </section>
  );
}
