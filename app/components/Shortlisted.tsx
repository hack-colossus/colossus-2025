"use client";
import { motion, Variants } from "framer-motion";
import React, { useRef, memo, JSX } from "react";

// Define type for team tracks
type TrackType =
  | "edutech"
  | "agrictech"
  | "agritech"
  | "fintech"
  | "sustainability"
  | "healthtech"
  | "robotics"
  | "robotics/iot";

// Memoize SVG icons to prevent unnecessary re-renders
const TeamIcon = memo(({ type }: { type: string }) => {
  // Normalize the track type - convert to lowercase and handle variations
  const normalizeTrackType = (track: string): TrackType => {
    const normalized = track.toLowerCase().trim();

    // Handle specific mappings
    if (normalized === "agrictech") return "agritech";
    if (normalized === "robotics/iot") return "robotics";

    return normalized as TrackType;
  };

  const icons: Record<TrackType, JSX.Element> = {
    edutech: (
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 md:w-10 md:h-10 text-hackathon-light-pink"
      >
        <motion.path
          d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"
          fill="currentColor"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </svg>
    ),
    agritech: (
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 md:w-12 md:h-12 text-hackathon-light-pink"
      >
        <motion.path
          d="M12 2C8.13 2 5 5.13 5 9c0 4.84 7 13 7 13s7-8.16 7-13c0-3.87-3.13-7-7-7z"
          fill="currentColor"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </svg>
    ),
    agrictech: (
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 md:w-12 md:h-12 text-hackathon-light-pink"
      >
        <motion.path
          d="M12 2C8.13 2 5 5.13 5 9c0 4.84 7 13 7 13s7-8.16 7-13c0-3.87-3.13-7-7-7z"
          fill="currentColor"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </svg>
    ),
    fintech: (
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 md:w-12 md:h-12 text-hackathon-light-pink"
      >
        <motion.path
          d="M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1zm1 17.93V19h-2v-.07C7.06 16.9 5 14.12 5 12c0-2.12 2.06-4.9 6-5.93V5h2v1.07c3.94 1.03 6 3.81 6 5.93 0 2.12-2.06 4.9-6 5.93z"
          fill="currentColor"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </svg>
    ),
    sustainability: (
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 md:w-12 md:h-12 text-hackathon-light-pink"
      >
        <motion.path
          d="M12 4V2M12 22v-2M4.22 4.22l-1.42-1.42M19.78 19.78l-1.42-1.42M2 12H4M20 12h2M4.22 19.78l-1.42 1.42M19.78 4.22l-1.42 1.42M12 8a4 4 0 100 8 4 4 0 000-8z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </svg>
    ),
    healthtech: (
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 md:w-12 md:h-12 text-hackathon-light-pink"
      >
        <motion.path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="currentColor"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </svg>
    ),
    robotics: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-hackathon-light-pink">
        <motion.path
          d="M9 2H15V4H19C20.11 4 21 4.89 21 6V10C21 11.11 20.11 12 19 12H17V19C17 20.11 16.11 21 15 21H9C7.89 21 7 20.11 7 19V12H5C3.89 12 3 11.11 3 10V6C3 4.89 3.89 4 5 4H9V2M9 6V8H11V6H9M13 6V8H15V6H13M9 10H15V19H9V10Z"
          fill="currentColor"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </svg>
    ),
    "robotics/iot": (
      <svg viewBox="0 0 24 24" className="w-12 h-12 text-hackathon-light-pink">
        <motion.path
          d="M9 2H15V4H19C20.11 4 21 4.89 21 6V10C21 11.11 20.11 12 19 12H17V19C17 20.11 16.11 21 15 21H9C7.89 21 7 20.11 7 19V12H5C3.89 12 3 11.11 3 10V6C3 4.89 3.89 4 5 4H9V2M9 6V8H11V6H9M13 6V8H15V6H13M9 10H15V19H9V10Z"
          fill="currentColor"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </svg>
    ),
  };

  // Normalize type and get the icon
  const normalizedType = normalizeTrackType(type);

  // Use the normalized type or fall back to edutech
  return icons[normalizedType] || icons.edutech;
});

TeamIcon.displayName = "TeamIcon";

// Memoized background particles component for better performance
const BackgroundParticles = memo(() => {
  return (
    <>
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-hackathon-light-pink opacity-20"
          style={{
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * -100 - 50],
            x: [0, Math.random() * 40 - 20],
            opacity: [0.2, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </>
  );
});

BackgroundParticles.displayName = "BackgroundParticles";

// Define types for team and card props
interface Team {
  name: string;
  teamLead: string;
  track: string;
}

interface TeamCardProps {
  team: Team;
  index: number;
  cardVariants: Variants;
  glowAnimation: Variants;
}

// Memoized team card component
const TeamCard = memo(
  ({ team, index, cardVariants, glowAnimation }: TeamCardProps) => {
    return (
      <motion.div
        className="bg-hackathon-darker-blue p-4 md:p-6 rounded-lg flex flex-col relative border-2 border-hackathon-beige h-full"
        variants={cardVariants}
        whileHover="hover"
        animate="animate"
        custom={index}
        layout
      >
        {/* Glow effect behind the card */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          variants={glowAnimation}
          animate="animate"
        />

        <div className="flex items-center mb-3 md:mb-4">
          <motion.div
            className="mr-2 md:mr-3 flex-shrink-0"
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <TeamIcon type={team.track} />
          </motion.div>

          <motion.div
            className="flex-1 min-w-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <h3 className="text-base md:text-lg font-bold text-hackathon-lavender font-press-start truncate">
              {team.name}
            </h3>
            <span className="text-xs inline-block bg-hackathon-light-pink bg-opacity-20 text-hackathon-light-pink px-2 py-1 rounded-full mt-1 truncate max-w-full">
              {team.track}
            </span>
          </motion.div>
        </div>

        <motion.div
          className="mb-3 md:mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          <h4 className="text-hackathon-beige text-xs md:text-sm font-bold mb-1 md:mb-2 font-jetbrains">
            TEAM LEAD
          </h4>
          <p className="text-hackathon-beige font-jetbrains text-xs md:text-sm truncate">
            {team.teamLead}
          </p>
        </motion.div>

        <motion.div
          className="w-full h-1 bg-gradient-to-r from-transparent via-hackathon-lavender to-transparent mt-auto pt-2 md:pt-4 rounded-full"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.7 }}
          transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
        />
      </motion.div>
    );
  }
);

TeamCard.displayName = "TeamCard";

const ShortlistedParticipants = () => {
  const containerRef = useRef(null);

  // Simplified and optimized animation variants
  const animations = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    },
    title: {
      hidden: { opacity: 0, y: -30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 10,
        },
      },
    },
    card: {
      hidden: { opacity: 0, scale: 0.9, y: 30 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 70,
          damping: 10,
        },
      },
      hover: {
        scale: 1.03,
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
        y: -5,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 15,
        },
      },
    },
    glow: {
      animate: {
        boxShadow: [
          "0px 0px 0px rgba(90, 60, 190, 0)",
          "0px 0px 15px rgba(90, 60, 190, 0.4)",
          "0px 0px 0px rgba(90, 60, 190, 0)",
        ],
        transition: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        },
      },
    },
    float: {
      animate: {
        y: [0, -8, 0],
        transition: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        },
      },
    },
  };

  // Participants data with corrected track names
  const participants = [
    {
      name: "Team Infinity",
      teamLead: "Shaik Abdul Khadeer",
      track: "EduTech",
    },
    {
      name: "Unix",
      teamLead: "Yamuna",
      track: "EduTech",
    },

    {
      name: "Tech Creators",
      teamLead: "KATHIRVEL M",
      track: "Fintech",
    },
    {
      name: "Titans",
      teamLead: "S.Mohanakumar",
      track: "Fintech",
    },
    {
      name: "Tech Titans",
      teamLead: "Prashanth J",
      track: "Sustainability",
    },
    {
      name: "Squad Coders",
      teamLead: "Shreya B Yadav",
      track: "EduTech",
    },
    {
      name: "RDX",
      teamLead: "Pavan singh M.B",
      track: "AgriTech",
    },
    {
      name: "Hackohalics",
      teamLead: "Nithish K",
      track: "Fintech",
    },
    {
      name: "Trinity",
      teamLead: "Harshitha K S",
      track: "HealthTech",
    },
    {
      name: "Innov8ors",
      teamLead: "Vaibhav V Ron ",
      track: "HealthTech",
    },
    
    {
      name: "CREATOR-X",
      teamLead: "SHUBHAM JHA",
      track: "AgriTech",
    },
    {
      name: "Sheroes",
      teamLead: "Amulya K C",
      track: "HealthTech",
    },
    {
      name: "AgriTech Hacker",
      teamLead: "Bindhushree SM",
      track: "Sustainability",
    },
    {
      name: "EliteHub",
      teamLead: "Rishabh Prajapati",
      track: "Robotics/IOT",
    },
    {
      name: "Codecrew",
      teamLead: "Vinayakumar Hiremath",
      track: "Fintech",
    },
    {
      name: "C2Squad",
      teamLead: "Ajay Rajan A",
      track: "HealthTech",
    },
    {
      name: "CodeNinjas",
      teamLead: "Deeksha H S",
      track: "HealthTech",
    },
    {
      name: "GlitchX",
      teamLead: "Samiksha Krishnasamy",
      track: "EduTech",
    },
    {
      name: "Code crusaders",
      teamLead: "Likhita.B",
      track: "HealthTech",
    },
    {
      name: "Data pirates",
      teamLead: "Navya T",
      track: "Sustainability",
    },
    {
      name: "Custom verse",
      teamLead: "Abhi Balyan",
      track: "Robotics/IOT",
    },
    {
      name: "BYTE ME",
      teamLead: "Akash Madbal",
      track: "EduTech",
    },
    {
      name: "TEAM RICE",
      teamLead: "Samarth Shrikrishna Gurlhosur ",
      track: "EduTech",
    },
    {
      name: "Innovators",
      teamLead: "Pandurang",
      track: "Robotics/IOT",
    },
    {
      name: "The Chronicles",
      teamLead: "Moneesh S",
      track: "EduTech",
    },
    {
      name: "Code-Crusaders",
      teamLead: "Yashin Ilahi Mulla",
      track: "Robotics/IOT",
    },
    {
      name: "VayuRath",
      teamLead: "Keshav Skanda Sai",
      track: "AgriTech",
    },
    {
      name: "CocoCoders",
      teamLead: "Rohan Jaiswal",
      track: "HealthTech",
    },
    {
      name: "FOURCAST",
      teamLead: "MADHUMITHA N",
      track: "HealthTech",
    },
    {
      name: "2Builds",
      teamLead: "Afreen Hossain",
      track: "HealthTech",
    },
    {
      name: "CryptoBulls",
      teamLead: "Devesh Mamadapur",
      track: "Fintech",
    },
    {
      name: "The Optimizers",
      teamLead: "Md Asif Ali",
      track: "EduTech",
    },
    {
      name: "Innovative thinkers",
      teamLead: "Raghavendra.V",
      track: "AgriTech",
    },
    {
      name: "AIagnostic",
      teamLead: "Bhavana Ramakrishna",
      track: "HealthTech",
    },
    {
      name: "Team Elevate",
      teamLead: "Vaibhav S",
      track: "Robotics/IOT",
    },
    {
      name: "Syntax Squad",
      teamLead: "Sai Kishan S",
      track: "Robotics/IOT",
    },
    {
      name: "Team_MLFS",
      teamLead: "Lohith R Gowda",
      track: "HealthTech",
    },
    {
      name: "Techno Tribe",
      teamLead: "Srujan S",
      track: "HealthTech",
    },
    {
      name: "Papz",
      teamLead: "Sameer S Katte",
      track: "HealthTech",
    },
    {
      name: "Revolutionary Hackers",
      teamLead: "Rakesh",
      track: "Robotics/IOT",
    },
    {
      name: "Simple_Engineers",
      teamLead: "Yuvaraj K",
      track: "AgriTech",
    },
    {
      name: "Pixelated",
      teamLead: "Anvitha Anant Rao",
      track: "HealthTech",
    },
    {
      name: "The Calm hustlers",
      teamLead: "Nidhi D Gowda",
      track: "Sustainability",
    },
    {
      name: "HackHers",
      teamLead: "Supreetha M",
      track: "Fintech",
    },
    {
      name: "Team Kisan",
      teamLead: "P Mohan",
      track: "AgriTech",
    },
    {
      name: "SPAN",
      teamLead: "M Naveen",
      track: "Fintech",
    },
    {
      name: "IntoTheVoid",
      teamLead: "Pratik",
      track: "Sustainability",
    },
    {
      name: "Bullish Bytes",
      teamLead: "Anshula C",
      track: "Fintech",
    },
    {
      name: "Pixel Pirates",
      teamLead: "Md Danish Ali",
      track: "AgriTech",
    },
    {
      name: "AIagonstic",
      teamLead: "Bhavana Ramakrishna",
      track: "HealthTech",
    },
    {
      name: "Cookie Byte",
      teamLead: "Ruchitha K R",
      track: "AgriTech",
    },
    {
      name: "Pillagers",
      teamLead: "Aditya Holla",
      track: "Robotics/IOT",
    },
    {
      name: "Ctrl+Alt+Elite",
      teamLead: "Adit Kadagadakai",
      track: "EduTech",
    },
    {
      name: "Syntax Squad",
      teamLead: "Rishika Yashwini",
      track: "Fintech",
    },
    {
      name: "The Phoenix",
      teamLead: "Bhanushri Jaisimha",
      track: "HealthTech",
    },
    {
      name: "F Cube",
      teamLead: "Rahul Guggilla",
      track: "Fintech",
    },
    {
      name: "ByteForce",
      teamLead: "Meet Pandya",
      track: "Robotics/IOT",
    },
    {
      name: "VANGODS",
      teamLead: "G Pavan Sai",
      track: "EduTech",
    },
    {
      name: "Spaghetti Coders",
      teamLead: "Rishika Nayana Shakthi",
      track: "Fintech",
    },
    {
      name: "LGTM",
      teamLead: "Gagan R H",
      track: "Sustainability",
    },
    {
      name: "CodeStorm",
      teamLead: "Sameer Singh",
      track: "HealthTech",
    },
  ];

  return (
    <section
      id="shortlisted"
      className="py-12 md:py-20 bg-hackathon-dark-blue relative overflow-hidden px-4 md:px-0 md:mr-5 mr-3"
    >
      {/* Optimized background particles */}
      <BackgroundParticles />

      {/* Changed from whileInView + viewport to animate so animation triggers immediately */}
      <motion.div
        className="container mx-auto"
        ref={containerRef}
        variants={animations.container}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-hackathon-light-pink uppercase relative font-press-start"
          variants={animations.title}
        >
          {/* Decorative stars */}
          <motion.span
            className="absolute -left-4 -top-4 text-2xl md:text-4xl text-hackathon-lavender hidden sm:inline"
            variants={animations.float}
            animate="animate"
          >
            ✦
          </motion.span>
          Shortlisted Teams
          <motion.span
            className="absolute -right-4 -top-3 text-xl md:text-2xl text-hackathon-lavender hidden sm:inline"
            variants={animations.float}
            animate="animate"
          >
            ✧
          </motion.span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
          {participants.map((team, index) => (
            <TeamCard
              key={team.name}
              team={team}
              index={index}
              cardVariants={animations.card}
              glowAnimation={animations.glow}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

ShortlistedParticipants.displayName = "ShortlistedParticipants";

export default ShortlistedParticipants;
