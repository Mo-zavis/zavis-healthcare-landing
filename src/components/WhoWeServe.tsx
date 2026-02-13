"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* -- Card Data -- */

const cards = [
  {
    title: "Hospital & Health System Groups",
    description:
      "Managing appointment flow and patient follow-ups across sites is complex. We centralize engagement and automate routine coordination.",
    bullets: [
      "Multi-site operation coordination",
      "Centralized patient engagement",
    ],
  },
  {
    title: "Multi-Location Specialty Networks",
    description:
      "High patient volume requires consistent workflows. We ensure every location follows the same engagement standards.",
    bullets: [
      "Consistent cross-location workflows",
      "Scalable engagement automation",
    ],
  },
  {
    title: "High-Growth Outpatient Clinics",
    description:
      "Growing without adding headcount means smarter operations. We handle engagement so your teams can focus on care.",
    bullets: [
      "Scale operations without hiring",
      "Focus staff on patient care",
    ],
  },
];

/* -- Spring config -- */

const spring = {
  type: "spring" as const,
  damping: 100,
  stiffness: 240,
  mass: 2,
};

/* -- ICP Card -- */

function ICPCard({
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
      className="who-we-serve-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...spring, delay: 0.2 + index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        backgroundColor: "#FFFFFF",
        border: `1px solid ${hovered ? "#FDFA7E" : "#E5E7EB"}`,
        borderRadius: 16,
        padding: 32,
        transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
        boxShadow: hovered
          ? "0 10px 30px -5px rgba(30,110,110,0.3)"
          : "none",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        overflow: "hidden",
      }}
    >
      {/* Yellow accent bar on hover */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 4,
          height: "100%",
          background: "linear-gradient(180deg, #FDFA7E 0%, #F0ED4E 100%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          borderRadius: "16px 0 0 16px",
        }}
      />
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
        {card.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 16,
          fontWeight: 400,
          color: "#374151",
          lineHeight: 1.7,
          margin: 0,
          marginBottom: 24,
        }}
      >
        {card.description}
      </p>
      <ul
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 16,
          color: "#374151",
          lineHeight: 1.7,
          margin: 0,
          paddingLeft: 20,
          listStyleType: "disc",
        }}
      >
        {card.bullets.map((bullet) => (
          <li key={bullet} style={{ marginBottom: 12 }}>
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* -- Main Section -- */

export default function WhoWeServe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="who-we-serve-section"
      style={{
        width: "100%",
        background: "linear-gradient(135deg, #F5F7FA 0%, #EEF1FA 100%)",
        padding: "80px 0",
      }}
    >
      <style>{`
        @media (min-width: 1024px) {
          .who-we-serve-section { padding: 128px 0 !important; }
          .who-we-serve-card { padding: 40px !important; }
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
            Who we serve
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
            Built for high-volume healthcare operations
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 18,
              fontWeight: 400,
              color: "#6B7280",
              lineHeight: 1.7,
              margin: 0,
              marginTop: 16,
            }}
          >
            We work with organizations managing complex patient engagement
            across multiple locations in the GCC region.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <ICPCard key={card.title} card={card} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
