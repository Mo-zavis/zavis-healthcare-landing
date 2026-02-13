"use client";

const productLinks = [
  { label: "Services", href: "#services" },
  { label: "Workflows", href: "#workflows" },
  { label: "Integrations", href: "#integrations" },
  { label: "Security", href: "#security" },
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Careers", href: "#careers" },
];

const legalLinks = [
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
  { label: "Security", href: "#security-legal" },
];

function FooterLinkColumn({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: 14,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: "rgba(255, 255, 255, 0.7)",
          marginBottom: 24,
        }}
      >
        {heading}
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              color: "rgba(255, 255, 255, 0.7)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#171717",
        color: "#FFFFFF",
        padding: "128px 0",
      }}
    >
      <div
        className="footer-container"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* 4-column grid */}
        <div className="footer-grid" style={{ marginBottom: 64 }}>
          {/* Column 1 — Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-degular)",
                fontSize: "2rem",
                fontWeight: 600,
                fontStyle: "italic",
                color: "#FFFFFF",
                marginBottom: 16,
              }}
            >
              ZAVIS
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 15,
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Operational engagement platform for healthcare. Coordinate patient
              conversations, workflows, and follow-ups across every touchpoint.
            </p>
          </div>

          {/* Column 2 — Product */}
          <FooterLinkColumn heading="Product" links={productLinks} />

          {/* Column 3 — Company */}
          <FooterLinkColumn heading="Company" links={companyLinks} />

          {/* Column 4 — Legal */}
          <FooterLinkColumn heading="Legal" links={legalLinks} />
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: 48,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 14,
              color: "rgba(255, 255, 255, 0.7)",
              margin: 0,
            }}
          >
            &copy; 2026 ZAVIS Healthcare Technology. All rights reserved.
          </p>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx global>{`
        .footer-container {
          padding: 0 24px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
        }
        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (min-width: 1024px) {
          .footer-container {
            padding: 0 48px;
          }
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
