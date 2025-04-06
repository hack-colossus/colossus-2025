"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

const ShortlistedParticipants = () => {
  const containerRef = useRef(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  // Glow effect animation for cards
  const glowAnimation = {
    animate: {
      boxShadow: [
        "0px 0px 0px rgba(90, 60, 190, 0)",
        "0px 0px 20px rgba(90, 60, 190, 0.5)",
        "0px 0px 0px rgba(90, 60, 190, 0)",
      ],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  // Floating animation for the stars
  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  // Sample shortlisted participants data
  const participants = [
    {
      name: "Team Quantum Coders",
      members: ["Alex Chen", "Priya Sharma", "Carlos Rodriguez"],
      track: "AI & ML",
      project: "Neural Network for Climate Prediction",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-10 h-10 text-hackathon-light-pink"
        >
          <motion.path
            d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z"
            fill="currentColor"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
      ),
    },
    {
      name: "Circuit Breakers",
      members: ["Jamie Wilson", "Maya Patel", "Liam Johnson"],
      track: "ROBOTICS",
      project: "Autonomous Waste Sorting Robot",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-10 h-10 text-hackathon-light-pink"
        >
          <motion.path
            d="M7,3H17V5H19V8H16.5L13,12H11L7.5,8H5V5H7V3M5,9H7.5L11,13H13L16.5,9H19V21H5V9Z"
            fill="currentColor"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
      ),
    },
    {
      name: "Circuit Breakers",
      members: ["Jamie Wilson", "Maya Patel", "Liam Johnson"],
      track: "ROBOTICS",
      project: "Autonomous Waste Sorting Robot",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-10 h-10 text-hackathon-light-pink"
        >
          <motion.path
            d="M7,3H17V5H19V8H16.5L13,12H11L7.5,8H5V5H7V3M5,9H7.5L11,13H13L16.5,9H19V21H5V9Z"
            fill="currentColor"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
      ),
    },
    {
      name: "Circuit Breakers",
      members: ["Jamie Wilson", "Maya Patel", "Liam Johnson"],
      track: "ROBOTICS",
      project: "Autonomous Waste Sorting Robot",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-10 h-10 text-hackathon-light-pink"
        >
          <motion.path
            d="M7,3H17V5H19V8H16.5L13,12H11L7.5,8H5V5H7V3M5,9H7.5L11,13H13L16.5,9H19V21H5V9Z"
            fill="currentColor"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="shortlisted"
      className="py-20 bg-hackathon-dark-blue relative overflow-hidden mr-5"
    >
      {/* Moving Announcement Line */}
      <motion.div
        className="absolute top-0 left-0 right-0 text-center text-lg text-hackathon-light-pink font-press-start uppercase"
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

      {/* Animated background particles */}
      {[...Array(20)].map((_, i) => (
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

      <motion.div
        className="container mx-auto px-4"
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center text-hackathon-light-pink uppercase relative font-press-start"
          variants={titleVariants}
        >
          {/* Decorative stars */}
          <motion.span
            className="absolute -left-6 -top-6 text-4xl text-hackathon-lavender"
            variants={floatingAnimation}
            animate="animate"
          >
            ✦
          </motion.span>
          Shortlisted Teams
          <motion.span
            className="absolute -right-6 -top-4 text-2xl text-hackathon-lavender"
            variants={floatingAnimation}
            animate="animate"
          >
            ✧
          </motion.span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {participants.map((team, index) => (
            <motion.div
              key={index}
              className="bg-hackathon-darker-blue p-6 rounded-lg flex flex-col relative border-2 border-hackathon-beige h-full"
              variants={cardVariants}
              whileHover="hover"
              animate="animate"
              custom={index}
            >
              {/* Glow effect behind the card */}
              <motion.div
                className="absolute inset-0 rounded-lg"
                variants={glowAnimation}
                animate="animate"
              />

              <div className="flex items-center mb-4">
                <motion.div
                  className="mr-3"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  {team.icon}
                </motion.div>

                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <h3 className="text-lg font-bold text-hackathon-lavender font-press-start">
                    {team.name}
                  </h3>
                  <span className="text-xs inline-block bg-hackathon-light-pink bg-opacity-20 text-hackathon-light-pink px-2 py-1 rounded-full mt-1">
                    {team.track}
                  </span>
                </motion.div>
              </div>

              <motion.div
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <h4 className="text-hackathon-beige text-sm font-bold mb-2 font-jetbrains">
                  PROJECT
                </h4>
                <p className="text-hackathon-beige font-jetbrains text-sm">
                  {team.project}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <h4 className="text-hackathon-beige text-sm font-bold mb-2 font-jetbrains">
                  TEAM MEMBERS
                </h4>
                <ul className="text-hackathon-beige font-jetbrains text-sm">
                  {team.members.map((member, midx) => (
                    <li key={midx} className="mb-1 flex items-center">
                      <span className="text-hackathon-light-pink mr-2">◆</span>
                      {member}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="w-full h-1 bg-gradient-to-r from-transparent via-hackathon-lavender to-transparent mt-auto pt-4 rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.7 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ShortlistedParticipants;
