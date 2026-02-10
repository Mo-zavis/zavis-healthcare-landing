import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Humble — AI For Smart Manufacturing",
  description: "Startup AI Platform For Factories",
  openGraph: {
    title: "Humble — AI For Smart Manufacturing",
    description: "Startup AI Platform For Factories",
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
