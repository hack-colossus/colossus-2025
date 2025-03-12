"use client";

import { useEffect, useRef, useState } from "react";

const CustomScrollbar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");
  const prevScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setScrollPercentage((scrolled / scrollHeight) * 100);

      // Determine scroll direction by comparing current scrollY with the previous value
      if (scrolled > prevScrollYRef.current) {
        setScrollDirection("down");
      } else if (scrolled < prevScrollYRef.current) {
        setScrollDirection("up");
      }
      prevScrollYRef.current = scrolled;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define dot positions (each dot is at a fixed percentage along the container)
  // Only show those dots that are below the Pac-Man's current position.
  const dotPositions = [...Array(20)].map((_, index) => (index + 1) * 5);
  const visibleDotPositions = dotPositions.filter(
    (pos) => pos > scrollPercentage
  );

  return (
    <div
      className="fixed w-4 bg-retro-black"
      style={{
        top: 0,
        bottom: 0,
        right: "calc(0px + env(safe-area-inset-right))",
        zIndex: 50, // Higher z-index to ensure it's above hero section
      }}
    >
      {/* Background line */}
      <div className="absolute left-1/2 h-full w-0.5 bg-retro-pink transform -translate-x-1/2" />

      {/* Pac-Man positioned based on scrollPercentage and rotated based on scrollDirection */}
      <div
        className="absolute w-6 h-6 bg-retro-pink rounded-full animate-chomp flex items-center justify-center"
        style={{
          top: `${scrollPercentage}%`,
          left: "50%",
          transform: `translate(-50%, -50%) rotate(${
            scrollDirection === "down" ? "90deg" : "-90deg"
          })`,
        }}
      >
        {/* A small "eye" for Pac-Man */}
        <div className="w-1 h-1 bg-retro-black rounded-full" />
      </div>

      {/* Render only the dots that Pac-Man has not yet "eaten" */}
      {visibleDotPositions.map((pos, index) => (
        <div
          key={index}
          className="absolute left-1/2 w-2 h-2 bg-retro-blue rounded-full transform -translate-x-1/2"
          style={{ top: `${pos}%` }}
        />
      ))}
    </div>
  );
};

export default CustomScrollbar;
