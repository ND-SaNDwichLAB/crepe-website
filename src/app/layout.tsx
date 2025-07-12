import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crepe - Mobile Screen Data Collector",
  description: "Crepe is an Android mobile data collector that scrapes screen information from apps like Instagram, Uber, and web browsers for research purposes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 