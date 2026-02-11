import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zavis — AI Powered Patient Success Platform",
  description: "AI platform for patient acquisition, engagement, scheduling, automation, and care coordination across every channel at scale.",
  openGraph: {
    title: "Zavis — AI Powered Patient Success Platform",
    description: "AI platform for patient acquisition, engagement, scheduling, automation, and care coordination across every channel at scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
