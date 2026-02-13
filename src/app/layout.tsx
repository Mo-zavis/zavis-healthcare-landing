import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZAVIS — Operational Engagement for Healthcare",
  description: "Healthcare customer engagement platform coordinating conversations, workflows, and follow-ups across voice, messaging, scheduling, and payments.",
  openGraph: {
    title: "ZAVIS — Operational Engagement for Healthcare",
    description: "Healthcare customer engagement platform coordinating conversations, workflows, and follow-ups across voice, messaging, scheduling, and payments.",
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
