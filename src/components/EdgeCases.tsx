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
      initial={{ opacity: 0, y: 20 }}
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
        borderRadius: 20,
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: 18,
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {/* Category badge */}
      <span
        style={{
          fontFamily: "var(--font-inter)",
          display: "inline-block",
          width: "fit-content",
          padding: "5px 12px",
          borderRadius: 6,
          backgroundColor: "rgba(0,0,0,0.04)",
          fontSize: 12,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "rgba(0,0,0,0.5)",
        }}
      >
        {ec.category}
      </span>

      {/* The Problem section */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 12,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "rgba(0,0,0,0.3)",
            margin: 0,
          }}
        >
          Today
        </p>
        <p
          style={{
            fontFamily: "var(--font-geist)",
            fontSize: 15,
            lineHeight: 1.6,
            color: "rgba(0,0,0,0.7)",
            fontWeight: 400,
            fontStyle: "italic",
            margin: 0,
          }}
        >
          &ldquo;{ec.problem}&rdquo;
        </p>
      </div>

      {/* Divider */}
      <div
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "rgba(0,0,0,0.06)",
        }}
      />

      {/* The Solution section */}
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
            fontWeight: 400,
            lineHeight: 1.6,
            color: "rgba(0,0,0,0.6)",
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
  const headerInView = useInView(sectionRef, { once: true, margin: "-60px" });
  const closingRef = useRef(null);
  const closingInView = useInView(closingRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      style={{ width: "100%", backgroundColor: "#E9E8E4", padding: "80px 0" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            damping: 100,
            stiffness: 240,
            mass: 2,
          }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 13,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "rgba(0,0,0,0.4)",
              marginBottom: 16,
            }}
          >
            Challenges
          </p>
          <h3
            style={{
              fontFamily: "var(--font-degular)",
              fontSize: 44,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              color: "#1A1A2E",
              margin: "0 0 16px",
            }}
          >
            Problems You Know Too Well
          </h3>
          <p
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: 17,
              fontWeight: 400,
              lineHeight: 1.5,
              color: "rgba(0,0,0,0.6)",
              margin: 0,
              maxWidth: 560,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Every healthcare provider faces these. Zavis solves them from day
            one.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
          {edgeCases.map((ec, i) => (
            <EdgeCaseCard key={i} ec={ec} index={i} />
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          ref={closingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={closingInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            damping: 100,
            stiffness: 240,
            mass: 2,
            delay: 0.2,
          }}
          style={{
            textAlign: "center",
            marginTop: 64,
          }}
        >
          <h4
            style={{
              fontFamily: "var(--font-degular)",
              fontSize: 28,
              fontWeight: 600,
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
              color: "#1A1A2E",
              margin: "0 auto",
              maxWidth: 600,
            }}
          >
            Stop choosing between patient experience{" "}
            <span
              style={{
                color: "#00C67E",
                textDecoration: "underline",
                textDecorationColor: "#00C67E",
                textUnderlineOffset: "4px",
                textDecorationThickness: "2px",
              }}
            >
              and
            </span>{" "}
            operational efficiency.
          </h4>
        </motion.div>
      </div>
    </section>
  );
}
