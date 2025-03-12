import "./globals.css";
import { VT323 } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomScrollbar from "./components/CustomScrollbar";
import type React from "react";

const vt323 = VT323({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Colossus 2025 - Retro Space Hackathon",
  description: "Join us for an exciting retro-themed space hackathon event!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${vt323.className} bg-hackathon-darker-blue text-hackathon-light-pink`}
      >
        <CustomScrollbar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
