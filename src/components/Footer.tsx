"use client";

const ZavisLogoMark = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" style={{ flexShrink: 0 }}>
    <rect width="24" height="24" rx="6" fill="#00C67E" />
    <path
      d="M6 7.5H18V9.5H10.5L18 16.5V18.5H6V16.5H13.5L6 9.5V7.5Z"
      fill="#fff"
    />
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

const companyLinks = [
  { label: "About us", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const productLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Integrations", href: "#integrations" },
  { label: "Security", href: "#security" },
];

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#F1F0EC",
        paddingTop: 40,
        paddingBottom: 32,
        borderTop: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div
          className="flex flex-col md:flex-row md:items-start justify-between"
          style={{ gap: 32 }}
        >
          {/* Left: Logo + tagline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <ZavisLogoMark />
              <span
                style={{
                  fontFamily: "var(--font-degular)",
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "#1A1A2E",
                }}
              >
                zavis
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-geist)",
                fontSize: 14,
                fontWeight: 500,
                color: "rgba(0,0,0,0.56)",
                margin: 0,
              }}
            >
              AI Powered Patient Success Platform
            </p>
          </div>

          {/* Right: Link columns */}
          <div className="flex flex-row" style={{ gap: 64 }}>
            {/* Company links */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 13,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "rgba(0,0,0,0.32)",
                }}
              >
                Company
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {companyLinks.map((link) => (
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
            </div>

            {/* Product links */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 13,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "rgba(0,0,0,0.32)",
                }}
              >
                Product
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {productLinks.map((link) => (
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
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col md:flex-row md:items-center justify-between"
          style={{
            gap: 16,
            marginTop: 32,
            paddingTop: 24,
            borderTop: "1px solid rgba(0,0,0,0.08)",
            alignItems: "flex-start",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 13,
              fontWeight: 500,
              color: "rgba(0,0,0,0.32)",
              margin: 0,
            }}
          >
            &copy; 2025 Zavis Healthcare Pvt. Ltd.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <a
              href="https://x.com/zavishealthcare"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(0,0,0,0.32)", transition: "color 0.2s" }}
              aria-label="X (Twitter)"
            >
              <XIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/zavishealthcare/"
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
