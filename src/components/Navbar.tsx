"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Who it's for", href: "#who-its-for" },
  { label: "Services", href: "#services" },
  { label: "Workflows", href: "#workflows" },
  { label: "Security", href: "#security" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
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
      {/* Floating Navbar */}
      <nav
        style={{
          position: "fixed",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          width: "calc(100% - 40px)",
          maxWidth: 1400,
          zIndex: 50,
          borderRadius: 50,
          backgroundColor: scrolled
            ? "rgba(26, 26, 26, 0.95)"
            : "rgba(26, 26, 26, 0.6)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)"
            : "none",
          transition:
            "background-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <div
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
          }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-degular)",
                fontSize: "1.25rem",
                fontWeight: 600,
                fontStyle: "italic",
                color: "#FFFFFF",
                letterSpacing: "-0.01em",
              }}
            >
              ZAVIS
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div
            className="hidden lg:flex"
            style={{
              alignItems: "center",
              gap: 32,
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 14,
                  fontWeight: 400,
                  color: "rgba(255, 255, 255, 0.85)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#demo"
            className="hidden lg:flex"
            style={{
              fontFamily: "var(--font-inter)",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.5rem 1.25rem",
              borderRadius: 50,
              backgroundColor: "#FFFFFF",
              color: "#000000",
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(255, 255, 255, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Book a Demo
          </a>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              gap: 5,
              cursor: "pointer",
              background: "transparent",
              border: "none",
              padding: 0,
            }}
          >
            <motion.span
              style={{
                display: "block",
                width: 20,
                height: 1.5,
                backgroundColor: "#FFFFFF",
                borderRadius: 1,
                transformOrigin: "center",
              }}
              animate={
                mobileOpen
                  ? { rotate: 45, y: 3.25 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.25 }}
            />
            <motion.span
              style={{
                display: "block",
                width: 20,
                height: 1.5,
                backgroundColor: "#FFFFFF",
                borderRadius: 1,
                transformOrigin: "center",
              }}
              animate={
                mobileOpen
                  ? { rotate: -45, y: -3.25 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden"
            style={{
              position: "fixed",
              top: 92,
              left: 16,
              right: 16,
              zIndex: 49,
              backgroundColor: "rgba(26, 26, 26, 0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: 20,
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 16px 48px rgba(0, 0, 0, 0.4)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "8px 0",
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 18,
                    fontWeight: 400,
                    color: "rgba(255, 255, 255, 0.85)",
                    padding: "14px 24px",
                    textDecoration: "none",
                    display: "block",
                    transition: "background-color 0.15s ease, color 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.06)";
                    e.currentTarget.style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)";
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div style={{ padding: "8px 24px 16px" }}>
                <a
                  href="#demo"
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: "var(--font-inter)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 48,
                    borderRadius: 50,
                    backgroundColor: "#FFFFFF",
                    color: "#000000",
                    fontSize: 15,
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
            onClick={() => setMobileOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 48,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          />
        )}
      </AnimatePresence>

      {/* Mobile responsive overrides */}
      <style jsx global>{`
        @media (max-width: 1023px) {
          nav[style] {
            top: 16px !important;
            width: calc(100% - 32px) !important;
          }
          nav[style] > div {
            height: 56px !important;
          }
        }
      `}</style>
    </>
  );
}
