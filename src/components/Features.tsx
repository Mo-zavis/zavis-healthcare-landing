"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const featureImages: Record<string, string> = {
  "Your 24/7 AI Front Desk": "/assets/ai-receptionist.png",
  "Meet Patients on WhatsApp": "/assets/whatsapp-booking.png",
};

const VideoPlaceholder = ({ label }: { label: string }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      minHeight: 300,
      backgroundColor: "#e8e6e3",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        style={{ opacity: 0.2 }}
      >
        <polygon
          points="5 3 19 12 5 21 5 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      <p
        style={{
          fontFamily: "var(--font-inter)",
          color: "rgba(0,0,0,0.2)",
          fontSize: 12,
          fontWeight: 500,
          marginTop: 6,
        }}
      >
        {label}
      </p>
    </div>
  </div>
);

const features = [
  {
    tag: "AI Receptionist",
    title: "Your 24/7 AI Front Desk",
    subtitle: "Never miss a patient call again",
    body: "Zavis\u2019s AI receptionist greets every patient, answers common questions, collects demographics and ID photos, and creates appointments \u2014 all without human intervention. Handle 10x the call volume with the same team.",
    greenBg: false,
  },
  {
    tag: "WhatsApp Native",
    title: "Meet Patients on WhatsApp",
    subtitle: "The channel 2 billion people already use",
    body: "Scheduling, intake forms, payment links, lab results, prescription refills \u2014 all delivered through WhatsApp. No app downloads, no patient portals. Just instant, intelligent conversations that feel personal.",
    greenBg: true,
  },
  {
    tag: "Smart Scheduling",
    title: "Intelligent Appointment Engine",
    subtitle: "Zero double-bookings, zero no-shows",
    body: "AI-powered scheduling that understands doctor availability, department capacity, procedure duration, and patient preferences. Automated reminders cut no-shows by up to 40%. Waitlist management fills cancellations instantly.",
    greenBg: false,
  },
  {
    tag: "EMR Integration",
    title: "Connects to Everything You Run",
    subtitle: "M@DAS, Practo, Unite, Helix \u2014 and more",
    body: "Zavis plugs into your existing EMR in days, not months. Bi-directional sync means patient data flows seamlessly. No manual re-entry, no data silos, no middleware nightmares.",
    greenBg: false,
  },
  {
    tag: "Analytics & Insights",
    title: "Your Practice\u2019s Command Center",
    subtitle: "From gut feel to data-driven decisions",
    body: "Conversation heatmaps show peak hours. First response times track team performance. AI agent close rates measure automation ROI. CSAT scores and campaign analytics round out the picture \u2014 all real-time, all actionable.",
    greenBg: true,
  },
  {
    tag: "Care Coordination",
    title: "Automated Patient Journeys",
    subtitle: "From first contact to lifetime loyalty",
    body: "Discharge follow-ups, cycle-based reminders, prescription refill alerts, satisfaction surveys \u2014 Zavis orchestrates the entire patient journey. Every touchpoint is timely, personalized, and tracked.",
    greenBg: false,
  },
];

const cardShadow =
  "0px 0.84px 0.84px -0.31px rgba(0,0,0,0.02), 0px 1.99px 1.99px -0.63px rgba(0,0,0,0.02), 0px 3.63px 3.63px -0.94px rgba(0,0,0,0.02), 0px 6.04px 6.04px -1.25px rgba(0,0,0,0.02), 0px 9.75px 9.75px -1.56px rgba(0,0,0,0.02), 0px 15.96px 15.96px -1.88px rgba(0,0,0,0.02), 0px 27.48px 27.48px -2.19px rgba(0,0,0,0.02), 0px 50px 50px -2.5px rgba(0,0,0,0.02)";

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isGreen = feature.greenBg;
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        type: "spring",
        damping: 100,
        stiffness: 240,
        mass: 2,
      }}
      style={{
        backgroundColor: isGreen ? "#00C67E" : "#fff",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: cardShadow,
        border: isGreen ? "none" : "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div
        className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"}`}
        style={{ width: "100%" }}
      >
        <div
          style={{
            flex: "1 1 50%",
            minHeight: 300,
            overflow: "hidden",
            position: "relative",
          }}
        >
          {featureImages[feature.title] ? (
            <Image
              src={featureImages[feature.title]}
              alt={feature.title}
              fill
              style={{ objectFit: "cover" }}
            />
          ) : (
            <VideoPlaceholder label={feature.title} />
          )}
        </div>

        <div
          style={{
            flex: "1 1 50%",
            padding: "40px 40px 44px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 12,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: isGreen ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.32)",
              margin: "0 0 14px",
            }}
          >
            {feature.tag}
          </p>
          <h3
            style={{
              fontFamily: "var(--font-degular)",
              fontSize: 32,
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              color: isGreen ? "#fff" : "#1A1A2E",
              margin: "0 0 8px",
            }}
          >
            {feature.title}
          </h3>
          <p
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: 15,
              fontWeight: 600,
              color: isGreen ? "#fff" : "#1A1A2E",
              margin: "0 0 12px",
            }}
          >
            {feature.subtitle}
          </p>
          <p
            style={{
              fontFamily: "var(--font-geist)",
              fontSize: 15,
              fontWeight: 500,
              lineHeight: 1.5,
              color: isGreen ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.56)",
              margin: 0,
            }}
          >
            {feature.body}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      style={{ width: "100%", backgroundColor: "#F1F0EC", padding: "60px 0 80px" }}
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
            delay: 0.2,
          }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 13,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "rgba(0,0,0,0.32)",
              marginBottom: 16,
            }}
          >
            Zavis Platform
          </p>
          <h3
            style={{
              fontFamily: "var(--font-degular)",
              fontSize: 44,
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.052em",
              color: "#1A1A2E",
              margin: 0,
            }}
          >
            Everything Your Practice Needs, Built In
          </h3>
        </motion.div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
