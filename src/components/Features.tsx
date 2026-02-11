"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── SVG Icons ── */

function PhoneIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.5 7C11.5 7 13.5 7 14.5 9.5C15.5 12 14 13.5 13 14.5C12 15.5 12.5 18 15.25 20.75C18 23.5 20.5 24 21.5 23C22.5 22 24 20.5 26.5 21.5C29 22.5 29 24.5 29 24.5L29 28C29 30 27.5 33 22 33C16 33 10 27 8 22C6 17 7 11 9.5 8.5C10.2 7.8 11 7 11.5 7Z"
        stroke="#00C67E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M25 7C27.5 7.5 30 9 31.5 11" stroke="#00C67E" strokeWidth="2" strokeLinecap="round" />
      <path d="M25 12C26.5 12.3 28 13.2 29 14.5" stroke="#00C67E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChatCheckIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 10C8 8.89543 8.89543 8 10 8H30C31.1046 8 32 8.89543 32 10V26C32 27.1046 31.1046 28 30 28H16L10 33V28H10C8.89543 28 8 27.1046 8 26V10Z"
        stroke="#00C67E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15 18L18.5 21.5L25.5 14.5" stroke="#00C67E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CalendarClockIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="10" width="20" height="20" rx="2" stroke="#00C67E" strokeWidth="2" />
      <path d="M7 16H27" stroke="#00C67E" strokeWidth="2" />
      <path d="M13 7V11" stroke="#00C67E" strokeWidth="2" strokeLinecap="round" />
      <path d="M21 7V11" stroke="#00C67E" strokeWidth="2" strokeLinecap="round" />
      <circle cx="29" cy="27" r="7" stroke="#00C67E" strokeWidth="2" />
      <path d="M29 24V27.5L31 29" stroke="#00C67E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChainLinkIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 23L23 17"
        stroke="#00C67E"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M22 26L25.5 22.5C27.5 20.5 27.5 17.5 25.5 15.5L24.5 14.5C22.5 12.5 19.5 12.5 17.5 14.5L14 18"
        stroke="#00C67E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 14L14.5 17.5C12.5 19.5 12.5 22.5 14.5 24.5L15.5 25.5C17.5 27.5 20.5 27.5 22.5 25.5L26 22"
        stroke="#00C67E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BarChartIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 32H32" stroke="#00C67E" strokeWidth="2" strokeLinecap="round" />
      <rect x="12" y="20" width="4" height="12" rx="1" stroke="#00C67E" strokeWidth="2" />
      <rect x="19" y="14" width="4" height="18" rx="1" stroke="#00C67E" strokeWidth="2" />
      <rect x="26" y="8" width="4" height="24" rx="1" stroke="#00C67E" strokeWidth="2" />
      <path d="M12 12L19.5 9L30 6" stroke="#00C67E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27 6H30.5V9.5" stroke="#00C67E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CycleArrowsIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M28 14C26 10.5 22.5 8.5 18.5 9C13.5 9.7 10 14 10 19"
        stroke="#00C67E"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 26C14 29.5 17.5 31.5 21.5 31C26.5 30.3 30 26 30 21"
        stroke="#00C67E"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M10 15V19.5H14.5" stroke="#00C67E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 25V20.5H25.5" stroke="#00C67E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Feature Data ── */

const features = [
  {
    title: "AI Receptionist",
    body: "24/7 AI agent that greets patients, answers questions, collects intake data, and books appointments \u2014 handling 10x the call volume.",
    icon: PhoneIcon,
  },
  {
    title: "WhatsApp Native",
    body: "Scheduling, intake forms, payment links, lab results, and refill alerts \u2014 all through the channel patients already use daily.",
    icon: ChatCheckIcon,
  },
  {
    title: "Smart Scheduling",
    body: "AI scheduling that understands availability, capacity, and patient preferences. Automated reminders cut no-shows by 40%.",
    icon: CalendarClockIcon,
  },
  {
    title: "EMR Integration",
    body: "Bidirectional sync with M@DAS, Practo, Unite, Helix. Patient data flows seamlessly \u2014 no manual re-entry, no data silos.",
    icon: ChainLinkIcon,
  },
  {
    title: "Analytics Dashboard",
    body: "Response times, booking rates, campaign ROI, CSAT scores \u2014 real-time insights that drive better decisions.",
    icon: BarChartIcon,
  },
  {
    title: "Care Coordination",
    body: "Automated follow-ups, cycle reminders, discharge care plans. Every patient touchpoint \u2014 timely, personalized, tracked.",
    icon: CycleArrowsIcon,
  },
];

const cardShadow =
  "0px 1px 1px -0.5px rgba(0,0,0,0.02), 0px 2px 2px -1px rgba(0,0,0,0.02), 0px 4px 4px -1.5px rgba(0,0,0,0.02), 0px 8px 8px -2px rgba(0,0,0,0.02), 0px 16px 16px -2.5px rgba(0,0,0,0.02)";

/* ── Feature Card ── */

function FeatureCard({
  feature,
  index,
  inView,
}: {
  feature: (typeof features)[0];
  index: number;
  inView: boolean;
}) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        type: "spring",
        damping: 80,
        stiffness: 200,
        mass: 1.5,
        delay: 0.2 + index * 0.08,
      }}
      style={{
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 32,
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: cardShadow,
      }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          backgroundColor: "#E6F9F0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <Icon />
      </div>
      <h4
        style={{
          fontFamily: "var(--font-degular)",
          fontSize: 22,
          fontWeight: 600,
          color: "#1A1A2E",
          margin: 0,
          marginBottom: 8,
          lineHeight: 1.3,
        }}
      >
        {feature.title}
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
        {feature.body}
      </p>
    </motion.div>
  );
}

/* ── Main Section ── */

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      style={{ width: "100%", backgroundColor: "#F1F0EC", padding: "80px 0" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            damping: 100,
            stiffness: 240,
            mass: 2,
            delay: 0.1,
          }}
          style={{
            textAlign: "center",
            marginBottom: 48,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
              marginBottom: 16,
            }}
          >
            Platform
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
              marginBottom: 16,
            }}
          >
            Everything Your Practice Needs
          </h3>
          <p
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: 17,
              fontWeight: 400,
              color: "rgba(0,0,0,0.6)",
              lineHeight: 1.5,
              margin: 0,
              maxWidth: 600,
            }}
          >
            One platform for patient acquisition, engagement, scheduling, and care coordination.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
