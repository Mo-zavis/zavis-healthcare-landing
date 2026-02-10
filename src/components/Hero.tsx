"use client";

import { motion } from "framer-motion";

const spring = { type: "spring" as const, damping: 100, stiffness: 240, mass: 2 };

const VideoPlaceholder = ({ label }: { label: string }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      backgroundColor: "#e8e6e3",
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
      backgroundColor: "#f0ede9",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 16,
      ...style,
    }}
  >
    <div style={{ textAlign: "center" }}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.15 }}>
        <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8.5" cy="8.5" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 17L7 12L12 17" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path
          d="M12 14L16 10L22 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      <p
        style={{
          fontFamily: "var(--font-inter)",
          color: "rgba(0,0,0,0.15)",
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
    <section style={{ width: "100%", backgroundColor: "#fafafa", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-[42%_32%_26%]"
          style={{ alignItems: "center", paddingTop: 60, paddingBottom: 32 }}
        >
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
                color: "#1e1e1e",
                margin: 0,
              }}
            >
              Your Factory&apos;s Next 10 Years of Productivity
              <span style={{ color: "#ff4000" }}>.</span>
            </h1>
          </motion.div>

          <motion.div
            className="hidden lg:flex"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...spring, delay: 0.2 }}
            style={{ justifyContent: "center", padding: "0 16px" }}
          >
            <div style={{ width: "100%", aspectRatio: "3/4" }}>
              <ImagePlaceholder label="Illustration" />
            </div>
          </motion.div>

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
                  color: "#1e1e1e",
                  margin: 0,
                }}
              >
                Your Factory Is Stuck in Yesterday&apos;s Tools —{" "}
                <span style={{ color: "#ff4000" }}>Set It Free in a Week.</span>
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
                Ditch spreadsheets and rigid software modules. You explain the pain, Humble listens
                to your operators, agents write the code, and{" "}
                <strong style={{ color: "#1e1e1e" }}>ship a live Factory OS in 24 hours.</strong>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.35 }}
          style={{ display: "flex", justifyContent: "center", paddingBottom: 48 }}
        >
          <a
            href="#call"
            style={{
              fontFamily: "var(--font-inter)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: 52,
              padding: "0 36px",
              borderRadius: 100,
              backgroundColor: "#1e1e1e",
              color: "#fff",
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Start my 24h Build
          </a>
        </motion.div>
      </div>

      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <div
          className="h-[300px] lg:h-[500px]"
          style={{
            position: "relative",
            width: "100%",
            background:
              "linear-gradient(180deg, #7EC8E3 0%, #A8D5A2 35%, #5B8C5A 55%, #3A6B3E 70%, #2D5A2F 100%)",
          }}
        >
          <div
            className="hidden lg:block"
            style={{
              position: "absolute",
              bottom: 0,
              left: "5%",
              width: 100,
              height: "60%",
              backgroundColor: "#ff4000",
              borderRadius: "12px 12px 0 0",
            }}
          />
          <div
            className="hidden lg:block"
            style={{
              position: "absolute",
              bottom: 0,
              right: "5%",
              width: 100,
              height: "60%",
              backgroundColor: "#ff4000",
              borderRadius: "12px 12px 0 0",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 80, stiffness: 400, mass: 2, delay: 0.15 }}
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 900,
            margin: "0 auto",
            marginTop: -360,
            borderRadius: "24px 24px 0 0",
            overflow: "hidden",
            border: "3px solid #1e1e1e",
            borderBottom: "none",
          }}
          className="-mt-[200px] lg:-mt-[360px]"
        >
          <div style={{ width: "100%", aspectRatio: "16/10" }}>
            <VideoPlaceholder label="Hero Video" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
