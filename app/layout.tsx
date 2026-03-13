import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rolling Well Conference 2026 — Gaming for Health & Wellbeing",
  description:
    "A two-day workshop exploring tabletop role-playing games as tools for wellbeing, social connection and personal growth. July 29–30, 2026 at The Amelia Scott, Royal Tunbridge Wells.",
  openGraph: {
    title: "Rolling Well Conference 2026",
    description:
      "Join practitioners, researchers and community organisers to explore TTRPGs in wellbeing-focused contexts. The Amelia Scott, Tunbridge Wells, 29–30 July 2026.",
    type: "website",
    url: "https://rollingwell.org.uk",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
