import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartComp AI - Salary Intelligence Platform",
  description: "AI-powered salary intelligence and compensation management",
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
