"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const clientLogos = [
  { src: "/images/clients/neurosolution-center-dubai.png", alt: "NeuroSolution Center Dubai" },
  { src: "/images/clients/flowspace-logo.png", alt: "Flowspace" },
  { src: "/images/clients/kent-healthcare.png", alt: "Kent Healthcare" },
  { src: "/images/clients/client-logo-1.png", alt: "Client" },
  { src: "/images/clients/client-image-3157.png", alt: "Client" },
  { src: "/images/clients/client-image-3161.png", alt: "Client" },
  { src: "/images/clients/client-image-3162.png", alt: "Client" },
  { src: "/images/clients/client-image-3163.png", alt: "Client" },
  { src: "/images/clients/main-logo.png", alt: "Client" },
];

const springTransition = {
  type: "spring" as const,
  damping: 30,
  stiffness: 150,
  mass: 1,
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Duplicate logos for seamless infinite scroll
  const allLogos = [...clientLogos, ...clientLogos];

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1E6E6E 0%, #2D8585 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 120,
        paddingBottom: 140,
        overflow: "hidden",
      }}
    >
      {/* Content Container */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ ...springTransition, delay: 0 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            background: "rgba(255, 255, 255, 0.18)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            color: "rgba(255, 255, 255, 0.9)",
            padding: "8px 16px",
            borderRadius: 50,
            border: "1px solid rgba(255, 255, 255, 0.25)",
            marginBottom: 24,
            fontFamily: "var(--font-inter)",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              flexShrink: 0,
            }}
          />
          Operational Engagement for Healthcare
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ ...springTransition, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-degular)",
            fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
            fontWeight: 500,
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
            color: "#FFFFFF",
            textShadow: "0 2px 20px rgba(0, 0, 0, 0.3)",
            maxWidth: 900,
            margin: "0 auto",
            marginBottom: 24,
          }}
        >
          Turn every patient interaction into action.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ ...springTransition, delay: 0.2 }}
          className="hero-subhead"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 18,
            color: "rgba(255, 255, 255, 0.95)",
            maxWidth: "55ch",
            margin: "0 auto 40px",
            lineHeight: 1.7,
            textShadow: "0 2px 15px rgba(0, 0, 0, 0.25)",
          }}
        >
          Healthcare customer engagement platform coordinating conversations,
          workflows, and follow-ups across voice, messaging, scheduling, and
          payments.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ ...springTransition, delay: 0.3 }}
        >
          <a
            href="#demo"
            style={{
              fontFamily: "var(--font-inter)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem 2.25rem",
              borderRadius: 9999,
              backgroundColor: "#FFFFFF",
              color: "#000000",
              fontSize: 16,
              fontWeight: 500,
              textDecoration: "none",
              border: "none",
              cursor: "pointer",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Book a Demo
          </a>
        </motion.div>
      </div>

      {/* Logo Ticker */}
      <div
        className="hero-ticker-container"
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: 1200,
          overflow: "hidden",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div
          className="hero-ticker-track"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 64,
            width: "max-content",
            animation: "ticker-scroll 40s linear infinite",
          }}
        >
          {allLogos.map((logo, index) => (
            <img
              key={`${logo.src}-${index}`}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="hero-ticker-logo"
              style={{
                height: 40,
                width: "auto",
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
                opacity: 0.5,
                transition: "opacity 0.3s ease",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.5";
              }}
            />
          ))}
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx global>{`
        @media (min-width: 768px) {
          .hero-subhead {
            font-size: 20px !important;
          }
          .hero-ticker-logo {
            height: 50px !important;
          }
          .hero-ticker-container {
            bottom: 48px !important;
          }
        }
        @media (min-width: 1024px) {
          .hero-ticker-container {
            bottom: auto !important;
            position: absolute !important;
          }
        }
        .hero-ticker-track:hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}
