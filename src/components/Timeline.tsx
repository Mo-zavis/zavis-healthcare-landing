"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    label: "DAY 1-2",
    title: "Connect & Configure",
    body: "We plug into your EMR, set up your AI receptionist, and configure patient intake flows for your first department.",
  },
  {
    label: "DAY 3",
    title: "First AI Agent Live",
    body: "Your AI receptionist starts handling calls and WhatsApp messages. Patients book appointments 24/7.",
  },
  {
    label: "DAY 4-10",
    title: "Optimize & Expand",
    body: "Real patient interactions train the system daily. Add follow-up automation, analytics dashboards, and additional departments.",
  },
  {
    label: "DAY 11-14",
    title: "Full Deployment",
    body: "Complete rollout across all configured departments. Staff trained, data flowing, ROI measurable.",
  },
];

function TimelineStep({ step, index }: { step: typeof steps[0]; index: number }) {
  const stepRef = useRef(null);
  const stepInView = useInView(stepRef, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={stepRef}
      initial={{ opacity: 0, y: 30 }}
      animate={stepInView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.1 * index }}
      className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-10 pl-10 md:pl-0 ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Dot */}
      <div
        className="absolute left-[10px] md:left-1/2 md:-translate-x-1/2"
        style={{ top: 6, width: 13, height: 13, borderRadius: "50%", backgroundColor: "#00C67E", zIndex: 10 }}
      />

      {/* Label side */}
      <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}`}>
        <span style={{ fontFamily: "var(--font-inter)", display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#00C67E", marginBottom: 4 }}>
          {step.label}
        </span>
      </div>

      {/* Content side */}
      <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10 md:text-right"}`}>
        <h4 style={{ fontFamily: "var(--font-degular)", fontSize: 24, fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.03em", color: "#fff", margin: "0 0 8px" }}>{step.title}</h4>
        <p style={{ fontFamily: "var(--font-geist)", fontSize: 15, fontWeight: 400, lineHeight: 1.5, color: "rgba(255,255,255,0.5)", margin: 0 }}>{step.body}</p>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} style={{ width: "100%", backgroundColor: "#1A1A2E", color: "#fff", padding: "60px 0 80px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", damping: 100, stiffness: 240, mass: 2, delay: 0.2 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>
            Zero Risk, All Upside
          </p>
          <h2 style={{ fontFamily: "var(--font-degular)", fontSize: 44, fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.052em", color: "#fff", margin: 0 }}>
            Forget 6-month IT projects.
          </h2>
          <p style={{ fontFamily: "var(--font-degular)", fontSize: 18, fontWeight: 400, color: "rgba(255,255,255,0.5)", marginTop: 16 }}>
            What 2 weeks looks like with Zavis
          </p>
        </motion.div>

        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 md:-translate-x-px" style={{ width: 1, backgroundColor: "rgba(255,255,255,0.12)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {steps.map((step, i) => (
              <TimelineStep key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
