import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Amit Raj | AI Engineer · Automation Developer · CV Enthusiast",
  description: "Portfolio of Amit Raj, a dual-degree engineering student pursuing B.Tech in Electronics & Communication Engineering and BS in Data Science & Applications from IIT Madras. Specialized in developing scalable AI tools, browser automation systems, and full-stack applications.",
  keywords: [
    "Amit Raj",
    "IIT Madras",
    "Data Science",
    "Electronics & Communication",
    "AI Engineer",
    "Computer Vision",
    "YOLOv11",
    "Browser Automation",
    "Playwright",
    "FastAPI",
    "Portfolio"
  ],
  authors: [{ name: "Amit Raj" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#F5F3EF] text-black font-sans antialiased selection:bg-[#10B981]/30 selection:text-black">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
