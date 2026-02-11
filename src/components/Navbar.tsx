"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ZavisLogoMark = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" className="shrink-0">
    <rect width="24" height="24" rx="6" fill="#00C67E" />
    <path
      d="M6 7.5H18V9.5H10.5L18 16.5V18.5H6V16.5H13.5L6 9.5V7.5Z"
      fill="#fff"
    />
  </svg>
);

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Integrations", href: "#integrations" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Top Banner */}
      <div
        style={{
          width: "100%",
          backgroundColor: "#000",
          color: "#fff",
          textAlign: "center",
          padding: "10px 16px",
          fontFamily: "var(--font-inter)",
          fontSize: 13,
          fontWeight: 500,
        }}
      >
        <span style={{ opacity: 0.7 }}>
          Join 50+ healthcare providers already using Zavis
        </span>
        <span style={{ color: "#00C67E" }}> — </span>
        <span style={{ opacity: 0.7 }}>See why they switched</span>
      </div>

      {/* Main Nav */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          width: "100%",
          backgroundColor: scrolled
            ? "rgba(241,240,236,0.9)"
            : "#F1F0EC",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          transition: "background-color 0.3s, backdrop-filter 0.3s",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 32px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              color: "#1A1A2E",
            }}
          >
            <ZavisLogoMark />
            <span
              style={{
                fontFamily: "var(--font-degular)",
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#1A1A2E",
              }}
            >
              zavis
            </span>
          </a>

          {/* Desktop Links */}
          <div
            className="hidden md:flex"
            style={{ alignItems: "center", gap: 36 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "rgba(0,0,0,0.56)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#demo"
            className="hidden md:flex"
            style={{
              fontFamily: "var(--font-inter)",
              height: 36,
              padding: "0 20px",
              borderRadius: 100,
              backgroundColor: "#00C67E",
              color: "#fff",
              fontSize: 13,
              fontWeight: 600,
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              transition: "background-color 0.2s",
            }}
          >
            Book a Demo
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: 36,
              height: 36,
              gap: 5,
              cursor: "pointer",
              background: "transparent",
              border: "none",
            }}
          >
            <motion.span
              style={{
                display: "block",
                width: 18,
                height: 1.5,
                backgroundColor: "#1A1A2E",
                transformOrigin: "center",
              }}
              animate={
                mobileOpen
                  ? { rotate: 45, y: 3.25 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
            />
            <motion.span
              style={{
                display: "block",
                width: 18,
                height: 1.5,
                backgroundColor: "#1A1A2E",
                transformOrigin: "center",
              }}
              animate={
                mobileOpen
                  ? { rotate: -45, y: -3.25 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
            style={{
              position: "fixed",
              inset: 0,
              top: 100,
              zIndex: 40,
              backgroundColor: "#F1F0EC",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 24,
                gap: 8,
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#1A1A2E",
                    padding: "12px 16px",
                    borderRadius: 8,
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#demo"
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "var(--font-inter)",
                  marginTop: 16,
                  height: 44,
                  borderRadius: 100,
                  backgroundColor: "#00C67E",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Book a Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
