"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect",
    body: "We plug into your existing EMR — M@DAS, Practo, Unite, Helix — and configure your communication channels.",
  },
  {
    number: "02",
    title: "Configure",
    body: "Set up your AI receptionist, define scheduling rules, and customize patient intake flows for your first department.",
  },
  {
    number: "03",
    title: "Go Live",
    body: "Your AI agent starts handling real patient calls and WhatsApp messages. Appointments booked 24/7, data flowing clean.",
  },
];

const cardShadow =
  "0px 1px 1px -0.5px rgba(0,0,0,0.02), 0px 2px 2px -1px rgba(0,0,0,0.02), 0px 4px 4px -1.5px rgba(0,0,0,0.02), 0px 8px 8px -2px rgba(0,0,0,0.02), 0px 16px 16px -2.5px rgba(0,0,0,0.02)";

function StepCard({ step, index, inView }: { step: (typeof steps)[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        type: "spring",
        damping: 80,
        stiffness: 200,
        mass: 1.5,
        delay: 0.3 + index * 0.12,
      }}
      style={{
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 32,
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: cardShadow,
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-degular)",
          fontSize: 48,
          fontWeight: 700,
          color: "#00C67E",
          margin: 0,
          marginBottom: 16,
          lineHeight: 1,
        }}
      >
        {step.number}
      </p>
      <h4
        style={{
          fontFamily: "var(--font-degular)",
          fontSize: 24,
          fontWeight: 600,
          color: "#1A1A2E",
          margin: 0,
          marginBottom: 8,
          lineHeight: 1.2,
        }}
      >
        {step.title}
      </h4>
      <p
        style={{
          fontFamily: "var(--font-geist)",
          fontSize: 15,
          fontWeight: 400,
          color: "rgba(0,0,0,0.6)",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {step.body}
      </p>
    </motion.div>
  );
}

export default function MeetHumble() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} style={{ width: "100%", backgroundColor: "#F1F0EC", padding: "80px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.1 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 16,
            marginBottom: 48,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 13,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "rgba(0,0,0,0.4)",
              margin: 0,
            }}
          >
            How It Works
          </p>
          <h3
            style={{
              fontFamily: "var(--font-degular)",
              fontSize: 44,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#1A1A2E",
              margin: 0,
            }}
          >
            Go Live in 72 Hours
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
