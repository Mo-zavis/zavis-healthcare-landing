"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* -- SVG Icons -- */

function ChatBubbleIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x={3} y={4} width={18} height={18} rx={2} />
      <line x1={16} y1={2} x2={16} y2={6} />
      <line x1={8} y1={2} x2={8} y2={6} />
      <line x1={3} y1={10} x2={21} y2={10} />
    </svg>
  );
}

function CreditCardIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x={1} y={4} width={22} height={16} rx={2} />
      <line x1={1} y1={10} x2={23} y2={10} />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/* -- Service Data -- */

const services = [
  {
    icon: ChatBubbleIcon,
    title: "Engagement Inbox",
    description:
      "Unified conversations across voice and messaging with intelligent routing and staff summaries.",
    features: [
      "Omnichannel conversation management",
      "Smart escalation to staff",
    ],
  },
  {
    icon: CalendarIcon,
    title: "Scheduling & Intake",
    description:
      "Automated booking flows with eligibility screening and digital form collection.",
    features: [
      "AI-powered scheduling automation",
      "Pre-visit intake workflows",
    ],
  },
  {
    icon: CreditCardIcon,
    title: "Payments & Reviews",
    description:
      "Automated payment collection, deposit reminders, and post-visit feedback requests.",
    features: [
      "Payment link generation and follow-up",
      "Review and feedback collection",
    ],
  },
  {
    icon: PhoneIcon,
    title: "Outreach & Recall",
    description:
      "Patient reactivation campaigns, follow-up reminders, and population-based outreach.",
    features: [
      "Automated recall campaigns",
      "Post-visit follow-up sequences",
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

/* -- Service Card -- */

function ServiceCard({
  service,
  index,
  inView,
}: {
  service: (typeof services)[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      className="core-services-card"
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

      {/* Icon */}
      <div
        style={{
          width: 48,
          height: 48,
          marginBottom: 24,
          color: "#171717",
        }}
      >
        <Icon />
      </div>

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
        {service.title}
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
        {service.description}
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
        {service.features.map((feature) => (
          <li key={feature} style={{ marginBottom: 12 }}>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* -- Main Section -- */

export default function CoreServices() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="core-services-section"
      style={{
        width: "100%",
        background: "linear-gradient(135deg, #F5F7FA 0%, #EEF1FA 100%)",
        padding: "80px 0",
      }}
    >
      <style>{`
        @media (min-width: 1024px) {
          .core-services-section { padding: 128px 0 !important; }
          .core-services-card { padding: 40px !important; }
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
            Full engagement lifecycle
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
            From first contact to post-visit follow-up
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
            We coordinate the full patient engagement journey so your teams can
            focus on care delivery.
          </p>
        </motion.div>

        {/* Cards Grid - 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
