/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import { VT323 } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomScrollbar from "./components/CustomScrollbar";
import type React from "react";

const vt323 = VT323({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Colossus 2.O",
  description: "Join us for an exciting retro-themed space hackathon event!",
  keywords:
    "hackathon, space, retro, coding, programming, tech event, coding challenge, events, hackathons, space hackathon, retro hackathon",
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    title: "Colossus 2.O | Retro-Themed Space Hackathon",
    description: "Join us for an exciting retro-themed space hackathon event!",
    images: [
      {
        url: "/images/og-image.jpg", // Create and add a shareable image
        width: 1200,
        height: 630,
        alt: "Colossus 2.O Hackathon",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Colossus 2.O | Retro-Themed Space Hackathon",
    description: "Join us for an exciting retro-themed space hackathon event!",
    images: ["/images/twitter-image.jpg"],
  },
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Colossus 2.O Hackathon",
              description:
                "Join us for an exciting retro-themed space hackathon event!",
              // Add more event details like date, location, etc.
            }),
          }}
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
