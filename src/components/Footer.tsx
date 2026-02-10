"use client";

const HumbleLogoMark = () => (
  <svg viewBox="0 0 24 10.909" width="20" height="9" style={{ flexShrink: 0 }}>
    <path d="M 6.545 0 L 10.909 0 L 10.909 4.364 L 6.545 4.364 Z M 4.364 6.545 L 4.364 4.364 L 6.545 4.364 L 6.545 6.545 L 10.909 6.545 L 10.909 4.364 L 13.091 4.364 L 13.091 6.545 L 17.455 6.545 L 17.455 4.364 L 13.091 4.364 L 13.091 0 L 17.455 0 L 17.455 4.364 L 19.636 4.364 L 19.636 6.545 L 17.455 6.545 L 17.455 10.909 L 13.091 10.909 L 13.091 6.545 L 10.909 6.545 L 10.909 10.909 L 6.545 10.909 L 6.545 6.545 L 4.364 6.545 Z M 0 4.364 L 4.364 4.364 L 4.364 0 L 0 0 Z M 19.636 0 L 24 0 L 24 4.364 L 19.636 4.364 Z" fill="currentColor" />
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor">
    <path d="M 12.09 18 L 7.743 11.528 L 2.302 18 L 0 18 L 6.722 10.007 L 0 0 L 5.91 0 L 10.007 6.1 L 15.139 0 L 17.441 0 L 11.031 7.623 L 18 18 Z M 9.453 8.568 L 8.774 7.571 L 4.846 1.825 L 3.296 1.825 L 13.103 16.175 L 14.653 16.175 Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
    <circle cx="2.5" cy="2.5" r="2" />
    <rect x="0.5" y="6.5" width="4" height="13" rx="0.5" />
    <path d="M6.5 6.5H10.5V8C11.5 6.8 13 6 15 6C17.5 6 19.5 7.5 19.5 11V19.5H15.5V12C15.5 10 14.5 9 13 9C11.5 9 10.5 10.2 10.5 12V19.5H6.5V6.5Z" />
  </svg>
);

const footerLinks = [
  { label: "About us", href: "#about" },
];

export default function Footer() {
  return (
    <footer style={{ width: "100%", backgroundColor: "#fafafa", paddingTop: 40, paddingBottom: 32, borderTop: "1px solid rgba(0,0,0,0.12)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div className="flex flex-col md:flex-row md:items-center justify-between" style={{ gap: 32, alignItems: "flex-start" }}>
          {/* Left: Logo + tagline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <HumbleLogoMark />
              <span style={{ fontFamily: "var(--font-degular)", fontSize: 16, fontWeight: 700, letterSpacing: "-0.03em", color: "#000" }}>
                humble
              </span>
            </div>
            <p style={{ fontFamily: "var(--font-geist)", fontSize: 14, fontWeight: 500, color: "rgba(0,0,0,0.56)", margin: 0 }}>
              On Demand Factory OS, Delivered Overnight
            </p>
          </div>

          {/* Right: Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(0,0,0,0.32)" }}>
              Company
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{ fontFamily: "var(--font-inter)", fontSize: 14, fontWeight: 500, color: "rgba(0,0,0,0.56)", textDecoration: "none", transition: "color 0.2s" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between" style={{ gap: 16, marginTop: 32, paddingTop: 24, borderTop: "1px solid rgba(0,0,0,0.12)", alignItems: "flex-start" }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, fontWeight: 500, color: "rgba(0,0,0,0.32)", margin: 0 }}>
            &copy; 2025 Humble Operations Corp.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <a
              href="https://x.com/humbleopscorp"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(0,0,0,0.32)", transition: "color 0.2s" }}
              aria-label="X (Twitter)"
            >
              <XIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/humbleops/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(0,0,0,0.32)", transition: "color 0.2s" }}
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
