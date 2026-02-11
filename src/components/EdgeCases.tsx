"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const edgeCases = [
  {
    category: "Scheduling",
    problem:
      "Patients call during peak hours and get voicemail. They hang up, book with a competitor. Your front desk is overwhelmed, and your no-show rate keeps climbing because reminder calls happen when staff remembers.",
    solution:
      "AI receptionist handles unlimited concurrent calls. Patients book 24/7 via WhatsApp or voice. Automated reminders cut no-shows by up to 40%. Your front desk focuses on in-person care.",
  },
  {
    category: "Patient Intake",
    problem:
      "New patients arrive and spend 20 minutes filling paper forms. Data gets manually entered \u2014 often with errors. Insurance details are missing. The doctor\u2019s running behind before the first appointment even starts.",
    solution:
      "Patients complete digital intake on WhatsApp before arrival. Demographics, ID photos, insurance cards \u2014 all captured and verified automatically. Zero manual entry, zero waiting room bottleneck.",
  },
  {
    category: "Follow-Ups",
    problem:
      "Post-discharge follow-ups depend on someone remembering to call. Fertility patients miss cycle windows because reminders weren\u2019t sent. Pharmacy patients run out of medication because refill alerts don\u2019t exist.",
    solution:
      "Automated care journeys trigger based on visit type. Discharge follow-ups, cycle-based reminders, refill alerts \u2014 all personalized, all on time, all tracked for compliance.",
  },
  {
    category: "Records & EMR",
    problem:
      "Patient data lives in three systems that don\u2019t talk to each other. Front desk enters demographics into the EMR. Billing enters payments into their system. Marketing has a separate CRM. Nobody has the full picture.",
    solution:
      "Zavis syncs bidirectionally with your EMR \u2014 M@DAS, Practo, Unite, Helix. One patient record across all touchpoints. No duplicate entries, no data silos, no reconciliation.",
  },
  {
    category: "Communication",
    problem:
      "Patients WhatsApp the clinic but nobody monitors it consistently. Email goes unread. SMS feels impersonal. Each channel is a separate silo with no shared context about the patient.",
    solution:
      "Every channel \u2014 WhatsApp, voice, SMS, web \u2014 feeds into one unified inbox. AI handles routine queries instantly. Complex cases route to the right person with full context preserved.",
  },
  {
    category: "Analytics",
    problem:
      "You know you\u2019re busy, but you can\u2019t quantify it. How many patients called and didn\u2019t book? What\u2019s your average response time? Which campaigns actually drive appointments? The data exists somewhere, in theory.",
    solution:
      "Real-time dashboards with conversation heatmaps, response times, booking conversion rates, campaign ROI, and CSAT scores. Make decisions from data, not gut feel.",
  },
];

const cardShadow =
  "0px 0.71px 0.71px -0.42px rgba(0,0,0,0.03), 0px 1.81px 1.81px -0.83px rgba(0,0,0,0.03), 0px 3.62px 3.62px -1.25px rgba(0,0,0,0.03), 0px 6.87px 6.87px -1.67px rgba(0,0,0,0.03), 0px 13.65px 13.65px -2.08px rgba(0,0,0,0.03), 0px 30px 30px -2.5px rgba(0,0,0,0.03)";

function EdgeCaseCard({
  ec,
  index,
}: {
  ec: (typeof edgeCases)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        type: "spring",
        damping: 100,
        stiffness: 240,
        mass: 2,
        delay: 0.1 * (index % 2),
      }}
      style={{
        backgroundColor: "#fff",
        borderRadius: 24,
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        boxShadow: cardShadow,
        border: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <span
          style={{
            fontFamily: "var(--font-inter)",
            display: "inline-block",
            width: "fit-content",
            padding: "4px 10px",
            borderRadius: 4,
            backgroundColor: "rgba(0,0,0,0.04)",
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "rgba(0,0,0,0.4)",
          }}
        >
          {ec.category}
        </span>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 12,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "rgba(0,0,0,0.32)",
            margin: 0,
          }}
        >
          Today
        </p>
        <p
          style={{
            fontFamily: "var(--font-geist)",
            fontSize: 15,
            lineHeight: 1.5,
            color: "#1A1A2E",
            fontWeight: 500,
            fontStyle: "italic",
            margin: 0,
          }}
        >
          &ldquo;{ec.problem}&rdquo;
        </p>
      </div>
      <div
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "rgba(0,0,0,0.08)",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 12,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#00C67E",
            margin: 0,
          }}
        >
          With Zavis
        </p>
        <p
          style={{
            fontFamily: "var(--font-geist)",
            fontSize: 15,
            fontWeight: 500,
            lineHeight: 1.5,
            color: "rgba(0,0,0,0.56)",
            margin: 0,
          }}
        >
          {ec.solution}
        </p>
      </div>
    </motion.div>
  );
}

export default function EdgeCases() {
  const sectionRef = useRef(null);
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });
  return (
    <section
      ref={sectionRef}
      style={{ width: "100%", backgroundColor: "#E9E8E4", padding: "60px 0 0" }}
    >
      <div
        style={{
          width: "100%",
          height: 300,
          background:
            "linear-gradient(180deg, #E6F9F0 0%, #8DFFB9 40%, #00C67E 60%, #00A368 100%)",
          borderRadius: "0 0 24px 24px",
          marginBottom: 48,
        }}
      />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
          {edgeCases.map((ec, i) => (
            <EdgeCaseCard key={i} ec={ec} index={i} />
          ))}
        </div>
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            damping: 100,
            stiffness: 240,
            mass: 2,
            delay: 0.2,
          }}
          style={{
            backgroundColor: "#1A1A2E",
            borderRadius: 24,
            padding: "48px 40px",
            textAlign: "center",
            marginTop: 48,
            marginBottom: 80,
          }}
        >
          <h4
            style={{
              fontFamily: "var(--font-degular)",
              fontSize: 28,
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              margin: 0,
            }}
          >
            Traditional healthcare systems force you to choose &mdash; patient
            experience or operational efficiency.
          </h4>
          <p
            style={{
              fontFamily: "var(--font-degular)",
              fontSize: 20,
              fontWeight: 700,
              lineHeight: 1.3,
              color: "#ffffff",
              margin: "16px 0 0",
            }}
          >
            Zavis delivers both. Every interaction automated. Every patient
            delighted.
          </p>
          <p
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: 16,
              fontWeight: 500,
              color: "rgba(255,255,255,0.5)",
              margin: "8px 0 0",
            }}
          >
            AI Powered Patient Success Platform
          </p>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#00C67E",
              color: "#ffffff",
              fontFamily: "var(--font-geist)",
              fontSize: 15,
              fontWeight: 600,
              borderRadius: 8,
              padding: "0 28px",
              height: 44,
              marginTop: 24,
              textDecoration: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            Book a Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
