"use client";
import { motion, Variants } from "framer-motion";
import { useRef, memo } from "react";

// Define type for team tracks
type TrackType =
  | "education"
  | "agriculture"
  | "fintech"
  | "sustainability"
  | "healthcare";

// Memoize SVG icons to prevent unnecessary re-renders
const TeamIcon = memo(({ type }: { type: string }) => {
  const icons: Record<TrackType, JSX.Element> = {
    education: (
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
    agriculture: (
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
    healthcare: (
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
  };

  const safeType = type.toLowerCase() as TrackType;
  return icons[safeType] || icons.education;
});

// Add display name
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

// Add display name
BackgroundParticles.displayName = "BackgroundParticles";

// Define types for team, card props
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

// Add display name
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

  // Participants data with track type-based mapping for icons
  const participants = [
    {
      name: "Team Infinity",
      teamLead: "Shaik Abdul Khadeer",
      track: "Education",
    },
    {
      name: "Unix",
      teamLead: "Yamuna",
      track: "Education",
    },
    {
      name: "VayuRath",
      teamLead: "Keshav Skanda Sai",
      track: "Agriculture",
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
      track: "Education",
    },
    {
      name: "RDX",
      teamLead: "Pavan singh M.B",
      track: "Agriculture",
    },
    {
      name: "Hackohalics",
      teamLead: "Nithish K",
      track: "Fintech",
    },
    {
      name: "Trinity",
      teamLead: "Harshitha K S",
      track: "Healthcare",
    },
  ];

  return (
    <section
      id="shortlisted"
      className="py-12 md:py-20 bg-hackathon-dark-blue relative overflow-hidden px-4 md:px-0 md:mr-5"
    >
      {/* Moving Announcement Line */}
      <motion.div
        className="absolute top-0 left-0 right-0 text-center text-xs md:text-lg text-hackathon-light-pink font-press-start uppercase py-1 whitespace-nowrap"
        animate={{
          x: ["100%", "-100%"],
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        This is the first set of results, and we will keep releasing results so
        stay updated on email and the website
      </motion.div>

      {/* Optimized background particles */}
      <BackgroundParticles />

      <motion.div
        className="container mx-auto"
        ref={containerRef}
        variants={animations.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
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

// Add display name for main component
ShortlistedParticipants.displayName = "ShortlistedParticipants";

export default ShortlistedParticipants;
