"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
    tag: "Production-Grade Operational Software",
    title: "Custom Software That Codes Itself",
    subtitle: "Describe it today, operators use it tomorrow",
    body: "Not templates or drag-and-drop. Humble generates actual software from your descriptions\u2014complex forms, multi-step procedures, validation logic, custom reports. Need to track cavity-specific defects with photo documentation? Every workflow, dashboard, and process is real code, built exactly for your operation.",
    orangeBg: false,
  },
  {
    tag: "Minimal Work Screens",
    title: "An Interface Everyone Can Use",
    subtitle: "Teams typically ramp in about 15 minutes",
    body: "Because Humble is generated from your own process, each screen shows only what matters for that role, station, or step. The best interface is almost no interface\u2014do the work and the system quietly guides the next action, checks what\u2019s critical, and records the data. Adoption sticks across operators, planners, quality, maintenance, and leadership.",
    orangeBg: true,
  },
  {
    tag: "Living Schedule That Adapts",
    title: "Scheduling That Knows Your Reality",
    subtitle: "No more Excel tetris",
    body: "A dynamic engine that understands your exact constraints\u2014tools, crews, materials, deadlines\u2014and adapts in real time. It isn\u2019t just a plan; it\u2019s a live, self-optimizing response system, tuned daily by frontline feedback.",
    orangeBg: false,
  },
  {
    tag: "AI-Ready Clean Data Backbone",
    title: "A Perfect, Iterative Data Foundation",
    subtitle: "Your factory becomes instantly AI-ready",
    body: "Because Humble refines each component with your users every 24 hours, data entry becomes friction-free and error-proof. The result is a pristine, real-time data stream\u2014exactly what serious optimization and AI initiatives demand.",
    orangeBg: false,
  },
  {
    tag: "Deep Operational Intelligence",
    title: "Your Company\u2019s Searchable Brain",
    subtitle: "Ask anything about your operation and get researched answers",
    body: "\u201cWhy did yield drop yesterday?\u201d triggers analysis across thousands of data points. \u201cWhat\u2019s our real unit cost?\u201d pulls from actual run data, not estimates. Every SOP, manual, and piece of tribal knowledge becomes instantly searchable institutional memory.",
    orangeBg: true,
  },
  {
    tag: "Connect to Anything",
    title: "Universal Integration Into Your Architecture",
    subtitle: "No middleware, no consultants, just describe what you need",
    body: "Drop in equipment manuals, API docs, or database schemas\u2014Humble writes the integration code. That 1990s German sensor, the proprietary lab system, even Bob\u2019s macro-heavy Excel\u2014all connected.",
    orangeBg: false,
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
  const isOrange = feature.orangeBg;
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
        backgroundColor: isOrange ? "#ff4000" : "#fff",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: cardShadow,
        border: isOrange ? "none" : "1px solid rgba(0,0,0,0.12)",
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
          }}
        >
          <VideoPlaceholder label={feature.title} />
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
              color: isOrange ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.32)",
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
              color: isOrange ? "#fff" : "#1c1c1c",
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
              color: isOrange ? "#fff" : "#1c1c1c",
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
              color: isOrange ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.56)",
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
      style={{ width: "100%", backgroundColor: "#fafafa", padding: "60px 0 80px" }}
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
            Humble Platform
          </p>
          <h3
            style={{
              fontFamily: "var(--font-degular)",
              fontSize: 44,
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.052em",
              color: "#1c1c1c",
              margin: 0,
            }}
          >
            Every Humble Instance Includes
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
