"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const spring = { type: "spring" as const, damping: 100, stiffness: 240, mass: 2 };

const VideoPlaceholder = ({ label }: { label: string }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      backgroundColor: "#E9E8E4",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.2 }}>
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
          fontSize: 13,
          fontWeight: 500,
          marginTop: 8,
        }}
      >
        {label}
      </p>
    </div>
  </div>
);

const ImagePlaceholder = ({ label, style }: { label: string; style?: React.CSSProperties }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      backgroundColor: "#E6F9F0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 16,
      ...style,
    }}
  >
    <div style={{ textAlign: "center" }}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.2 }}>
        <rect x="2" y="2" width="20" height="20" rx="2" stroke="#00C67E" strokeWidth="1.5" />
        <circle cx="8.5" cy="8.5" r="2" stroke="#00C67E" strokeWidth="1.5" />
        <path d="M2 17L7 12L12 17" stroke="#00C67E" strokeWidth="1.5" strokeLinejoin="round" />
        <path
          d="M12 14L16 10L22 16"
          stroke="#00C67E"
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

export default function Hero() {
  return (
    <section style={{ width: "100%", backgroundColor: "#F1F0EC", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-[42%_32%_26%]"
          style={{ alignItems: "center", paddingTop: 60, paddingBottom: 32 }}
        >
          {/* LEFT column — Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.1 }}
          >
            <h1
              className="text-center lg:text-left"
              style={{
                fontFamily: "var(--font-degular)",
                fontSize: "clamp(44px, 5vw, 64px)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.05em",
                color: "#1A1A2E",
                margin: 0,
              }}
            >
              The AI-Powered Patient Success Platform
              <span style={{ color: "#00C67E" }}>.</span>
            </h1>
          </motion.div>

          {/* CENTER column — Platform Preview illustration */}
          <motion.div
            className="hidden lg:flex"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...spring, delay: 0.2 }}
            style={{ justifyContent: "center", padding: "0 16px" }}
          >
            <div style={{ width: "100%", aspectRatio: "3/4", borderRadius: 16, overflow: "hidden" }}>
              <Image
                src="/assets/platform-preview.png"
                alt="Zavis AI Healthcare Platform"
                width={384}
                height={512}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT column — Subtitle, body, nothing else */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.3 }}
            className="mt-6 lg:mt-0"
          >
            <div
              className="text-center lg:text-left"
              style={{ display: "flex", flexDirection: "column", gap: 24 }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-degular)",
                  fontSize: 22,
                  fontWeight: 600,
                  lineHeight: 1.3,
                  letterSpacing: "-0.02em",
                  color: "#1A1A2E",
                  margin: 0,
                }}
              >
                Every Patient Interaction.
                <br />
                Every Channel.
                <br />
                <span style={{ color: "#00C67E" }}>Fully Automated.</span>
              </h2>
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
                From the first call to follow-up care, Zavis handles scheduling,
                intake, engagement, and coordination &mdash; powered by AI that
                understands healthcare.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.35 }}
          style={{ display: "flex", justifyContent: "center", paddingBottom: 48 }}
        >
          <a
            href="#demo"
            style={{
              fontFamily: "var(--font-inter)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: 52,
              padding: "0 36px",
              borderRadius: 100,
              backgroundColor: "#1A1A2E",
              color: "#fff",
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Book a Demo
          </a>
        </motion.div>
      </div>

      {/* Landscape gradient + laptop mockup */}
      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <div
          className="h-[300px] lg:h-[500px]"
          style={{
            position: "relative",
            width: "100%",
            background:
              "linear-gradient(180deg, #E6F9F0 0%, #8DFFB9 25%, #00C67E 50%, #00A368 75%, #1A1A2E 100%)",
          }}
        >
          {/* Left decorative pillar */}
          <div
            className="hidden lg:block"
            style={{
              position: "absolute",
              bottom: 0,
              left: "5%",
              width: 100,
              height: "60%",
              backgroundColor: "#00C67E",
              borderRadius: "12px 12px 0 0",
            }}
          />
          {/* Right decorative pillar */}
          <div
            className="hidden lg:block"
            style={{
              position: "absolute",
              bottom: 0,
              right: "5%",
              width: 100,
              height: "60%",
              backgroundColor: "#00C67E",
              borderRadius: "12px 12px 0 0",
            }}
          />
        </div>

        {/* Laptop mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 80, stiffness: 400, mass: 2, delay: 0.15 }}
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 900,
            margin: "0 auto",
            borderRadius: "24px 24px 0 0",
            overflow: "hidden",
            border: "3px solid #1A1A2E",
            borderBottom: "none",
          }}
          className="-mt-[200px] lg:-mt-[360px]"
        >
          <div style={{ width: "100%", aspectRatio: "16/10", position: "relative" }}>
            <Image
              src="/assets/hero-dashboard.png"
              alt="Zavis Healthcare Dashboard"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
