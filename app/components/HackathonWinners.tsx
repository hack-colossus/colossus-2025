"use client";
import React, { useRef, memo } from "react";
import { motion } from "framer-motion";

/* ─────────────────────────  DATA  ────────────────────────── */

const topThree = [
  {
    icon: "🥇",
    label: "Winning Team",
    team: "The Phoenix (HC14)",
    track: "EduTech",
  },
  {
    icon: "🥈",
    label: "1st Runner-Up",
    team: "Cryptobulls (FT05)",
    track: "FinTech",
  },
  {
    icon: "🥉",
    label: "2nd Runner-Up",
    team: "TeamMLFS (HC09)",
    track: "HealthTech",
  },
];

const constellation = [
  {
    icon: "🏅",
    label: "Best Business Model",
    team: "FinPlay (FT07)",
    track: "FinTech",
  },
  {
    icon: "🏅",
    label: "Best Use of Technology",
    team: "Team Elevate (RI04)",
    track: "Robotics/IoT",
  },
  {
    icon: "🏅",
    label: "Social Impact Award",
    team: "CreatX (AG03)",
    track: "AgriTech",
  },
  {
    icon: "🏅",
    label: "Best UI/UX Design",
    team: "C2Squad (HC04)",
    track: "HealthTech",
  },
];

/* ───────────────────────  ANIMATIONS  ─────────────────────── */

const animations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  },
  title: {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 10 },
    },
  },
  card: {
    hidden: { opacity: 0, scale: 0.92, y: 18 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 12 },
    },
    hover: {
      scale: 1.02,
      y: -3,
      boxShadow: "0 6px 15px rgba(0,0,0,.15)",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  },
};

/* ───────────────────────  COMPONENT  ─────────────────────── */

const HackathonWinners = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="winners"
      className="py-12 px-4 md:px-8 bg-hackathon-dark-blue overflow-hidden"
    >
      <motion.div
        ref={containerRef}
        className="max-w-7xl mx-auto"
        variants={animations.container}
        initial="hidden"
        animate="visible"
      >
        {/* Section Title */}
        <motion.h2
          variants={animations.title}
          className="text-3xl md:text-4xl font-press-start text-center mb-12 text-hackathon-light-pink uppercase"
        >
          🏆 Hackathon Winners
        </motion.h2>

        {/* Top-Three Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {topThree.map(({ icon, label, team, track }) => (
            <motion.div
              key={team}
              variants={animations.card}
              whileHover="hover"
              className="bg-hackathon-darker-blue rounded-lg border border-hackathon-beige shadow-lg p-5"
            >
              <div className="flex items-start space-x-3 mb-4">
                <span className="text-4xl">{icon}</span>
                <h3 className="text-xl font-jetbrains text-hackathon-beige">
                  {label}
                </h3>
              </div>

              <p className="text-hackathon-beige font-bold mb-1">{team}</p>
              <p className="text-hackathon-light-pink text-sm">{track}</p>
            </motion.div>
          ))}
        </div>

        {/* Constellation Prizes */}
        <motion.h3
          variants={animations.title}
          className="text-2xl font-press-start text-hackathon-beige text-center mb-6"
        >
          🏅 Constellation Prize Winners
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {constellation.map(({ icon, label, team, track }) => (
            <motion.div
              key={team}
              variants={animations.card}
              whileHover="hover"
              className="bg-hackathon-darker-blue rounded-lg border border-hackathon-beige shadow-md p-5"
            >
              <div className="flex items-center mb-3 space-x-2">
                <span className="text-2xl">{icon}</span>
                <h4 className="text-base font-medium text-hackathon-beige">
                  {label}
                </h4>
              </div>

              <p className="text-hackathon-beige font-semibold">{team}</p>
              <p className="text-hackathon-light-pink text-sm">{track}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default memo(HackathonWinners);
