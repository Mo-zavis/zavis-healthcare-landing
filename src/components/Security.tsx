"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ── Card Data ── */

const cards = [
  {
    title: "Data Protection",
    description:
      "End-to-end encryption and secure data handling designed for healthcare environments.",
  },
  {
    title: "Access Control",
    description:
      "Role-based permissions and audit logs for complete visibility and control.",
  },
  {
    title: "Compliance Support",
    description:
      "Built to support regulatory compliance requirements in GCC healthcare systems.",
  },
];

const spring = {
  type: "spring" as const,
  damping: 80,
  stiffness: 200,
  mass: 1.5,
};

/* ── Security Card ── */

function SecurityCard({
  card,
  index,
  inView,
}: {
  card: (typeof cards)[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...spring, delay: 0.2 + index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: "clamp(32px, 4vw, 40px)",
        border: `1px solid ${hovered ? "#FDFA7E" : "#E5E7EB"}`,
        boxShadow: hovered
          ? "0px 8px 30px rgba(0,0,0,0.08)"
          : "0px 1px 3px rgba(0,0,0,0.02)",
        transform: hovered ? "translateY(-4px)" : "translateY(0px)",
        transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
        cursor: "default",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-degular)",
          fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
          fontWeight: 600,
          lineHeight: 1.3,
          color: "#171717",
          margin: 0,
          marginBottom: 12,
        }}
      >
        {card.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#374151",
          margin: 0,
        }}
      >
        {card.description}
      </p>
    </motion.div>
  );
}

/* ── Main Section ── */

export default function Security() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        width: "100%",
        backgroundColor: "#FFFFFF",
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
            marginBottom: 48,
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
            Enterprise security
          </p>
          <h2
            style={{
              fontFamily: "var(--font-degular)",
              fontSize: "clamp(1.875rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#171717",
              margin: 0,
            }}
          >
            Designed for healthcare data environments
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 24 }}>
          {cards.map((card, i) => (
            <SecurityCard key={i} card={card} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
