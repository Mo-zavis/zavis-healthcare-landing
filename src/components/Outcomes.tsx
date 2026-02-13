"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* -- Metric Data -- */

const metrics = [
  {
    title: "Faster Access",
    description:
      "Reduce time from inquiry to booked appointment by handling conversations instantly.",
  },
  {
    title: "Lower Workload",
    description:
      "Automate routine follow-ups, reminders, and scheduling to reduce manual coordination.",
  },
  {
    title: "Better Utilization",
    description:
      "Fill schedule gaps and reduce no-shows with automated recall and confirmation flows.",
  },
  {
    title: "Consistent Follow-Through",
    description:
      "Ensure post-visit instructions, payments, and reviews happen without staff chasing patients.",
  },
];

/* -- Spring config -- */

const spring = {
  type: "spring" as const,
  damping: 100,
  stiffness: 240,
  mass: 2,
};

/* -- Metric Card -- */

function MetricCard({
  metric,
  index,
  inView,
}: {
  metric: (typeof metrics)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      className="outcomes-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...spring, delay: 0.2 + index * 0.1 }}
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: 16,
        padding: 32,
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-degular)",
          fontSize: 20,
          fontWeight: 600,
          color: "#171717",
          margin: 0,
          marginBottom: 16,
          lineHeight: 1.3,
        }}
      >
        {metric.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 16,
          fontWeight: 400,
          color: "#374151",
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {metric.description}
      </p>
    </motion.div>
  );
}

/* -- Main Section -- */

export default function Outcomes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="outcomes-section"
      style={{
        width: "100%",
        backgroundColor: "#FFFFFF",
        padding: "80px 0",
      }}
    >
      <style>{`
        @media (min-width: 1024px) {
          .outcomes-section { padding: 128px 0 !important; }
          .outcomes-card { padding: 40px !important; }
        }
      `}</style>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...spring, delay: 0.1 }}
          style={{
            textAlign: "center",
            maxWidth: 800,
            margin: "0 auto",
            marginBottom: 64,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.05em",
              color: "#6B7280",
              display: "inline-block",
              marginBottom: 24,
              textTransform: "lowercase",
            }}
          >
            Operational impact
          </span>
          <h2
            style={{
              fontFamily: "var(--font-degular)",
              fontSize: "clamp(1.875rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              color: "#171717",
              margin: 0,
            }}
          >
            Measurable outcomes for your operations
          </h2>
        </motion.div>

        {/* Cards Grid - 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {metrics.map((metric, i) => (
            <MetricCard
              key={metric.title}
              metric={metric}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
