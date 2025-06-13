import { TempoInit } from "@/components/tempo-init";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unlock Global Business Opportunities | E-Residency Experts",
  description:
    "Simplify your international business journey with our comprehensive e-residency guidance. Expert consultations, AI-powered support, and seamless application process.",
  keywords:
    "e-residency, digital nomad, international business, remote work, global entrepreneurship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script src="https://api.tempo.new/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />

      <head></head>
      <body className={inter.className}>
        <TempoInit />

        {children}
      </body>
    </html>
  );
}
