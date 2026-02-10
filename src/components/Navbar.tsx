"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HumbleLogoMark = () => (
  <svg viewBox="0 0 24 10.909" width="24" height="11" className="shrink-0">
    <path d="M 6.545 0 L 10.909 0 L 10.909 4.364 L 6.545 4.364 Z M 4.364 6.545 L 4.364 4.364 L 6.545 4.364 L 6.545 6.545 L 10.909 6.545 L 10.909 4.364 L 13.091 4.364 L 13.091 6.545 L 17.455 6.545 L 17.455 4.364 L 13.091 4.364 L 13.091 0 L 17.455 0 L 17.455 4.364 L 19.636 4.364 L 19.636 6.545 L 17.455 6.545 L 17.455 10.909 L 13.091 10.909 L 13.091 6.545 L 10.909 6.545 L 10.909 10.909 L 6.545 10.909 L 6.545 6.545 L 4.364 6.545 Z M 0 4.364 L 4.364 4.364 L 4.364 0 L 0 0 Z M 19.636 0 L 24 0 L 24 4.364 L 19.636 4.364 Z" fill="currentColor" />
  </svg>
);

const navLinks = [
  { label: "60-Second Fit Test", href: "#fit-test" },
  { label: "Pricing", href: "#pricing" },
  { label: "Security", href: "#security" },
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
    return () => { document.body.style.overflow = ""; };
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
        <span style={{ opacity: 0.7 }}>(HyperLaunch slots fill fast</span>
        <span style={{ color: "#ff4000" }}> — </span>
        <span style={{ opacity: 0.7 }}>3 left this month)</span>
      </div>

      {/* Main Nav */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          width: "100%",
          backgroundColor: scrolled ? "rgba(255,255,255,0.9)" : "#fafafa",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: "1px solid rgba(0,0,0,0.12)",
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
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "#000" }}>
            <HumbleLogoMark />
            <span style={{ fontFamily: "var(--font-degular)", fontSize: 20, fontWeight: 700, letterSpacing: "-0.03em", color: "#000" }}>
              humble
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: 36 }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 500, color: "rgba(0,0,0,0.56)", textDecoration: "none" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#call"
            className="hidden md:flex"
            style={{
              fontFamily: "var(--font-inter)",
              height: 36,
              padding: "0 20px",
              borderRadius: 100,
              backgroundColor: "#000",
              color: "#fff",
              fontSize: 13,
              fontWeight: 600,
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            Book a Call
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
              style={{ display: "block", width: 18, height: 1.5, backgroundColor: "#000", transformOrigin: "center" }}
              animate={mobileOpen ? { rotate: 45, y: 3.25 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              style={{ display: "block", width: 18, height: 1.5, backgroundColor: "#000", transformOrigin: "center" }}
              animate={mobileOpen ? { rotate: -45, y: -3.25 } : { rotate: 0, y: 0 }}
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
              backgroundColor: "#fafafa",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", padding: 24, gap: 8 }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#000",
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
                href="#call"
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "var(--font-inter)",
                  marginTop: 16,
                  height: 44,
                  borderRadius: 8,
                  backgroundColor: "#000",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
