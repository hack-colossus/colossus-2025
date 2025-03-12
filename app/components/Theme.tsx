"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

const Theme = () => {
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

  // Updated theme data based on the image plus Open Innovation
  const themes = [
    {
      title: "ROBOTICS",
      description:
        "Build innovative robotic solutions using hardware and software integration to solve real-world challenges in automation and interaction.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-12 h-12 text-hackathon-light-pink"
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
      title: "IOT",
      description:
        "Create connected device ecosystems that gather, analyze, and act on data to enable smart environments and automated decision-making systems.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-12 h-12 text-hackathon-light-pink"
        >
          <motion.path
            d="M16.6,5.82L15.54,6.95L16.88,8.29L15.47,9.71L13.41,7.65L16.61,4.46C16.07,4.36 15.5,4.44 15,4.72C13.67,5.41 13.25,7.08 13.94,8.41C14,8.54 14.07,8.67 14.16,8.78L5.71,17.22C5.03,17.9 5.03,19 5.71,19.68C6.39,20.36 7.5,20.36 8.18,19.68L16.61,11.25C16.73,11.34 16.86,11.41 16.99,11.47C18.32,12.15 19.99,11.74 20.68,10.4C20.96,9.9 21.04,9.33 20.94,8.79L17.74,11.98L15.68,9.92L17.09,8.5L18.43,9.84L19.56,8.78L16.6,5.82M11.12,10.24L13.11,12.23L8.35,16.98L6.36,15L11.12,10.24M7.06,16.28L9.05,18.27L8.84,18.48C8.54,18.78 8.05,18.78 7.76,18.48C7.46,18.19 7.46,17.7 7.76,17.4L7.06,16.28Z"
            fill="currentColor"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
      ),
    },
    {
      title: "AI & ML",
      description:
        "Develop intelligent applications using artificial intelligence and machine learning to process data, recognize patterns, and provide meaningful insights.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-12 h-12 text-hackathon-light-pink"
        >
          <motion.path
            d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z M19,7C18.4,7 18,6.6 18,6C18,5.4 18.4,5 19,5C19.6,5 20,5.4 20,6C20,6.6 19.6,7 19,7M15,7C14.4,7 14,6.6 14,6C14,5.4 14.4,5 15,5C15.6,5 16,5.4 16,6C16,6.6 15.6,7 15,7M7,8C5.9,8 5,7.1 5,6C5,4.9 5.9,4 7,4C8.1,4 9,4.9 9,6C9,7.1 8.1,8 7,8Z"
            fill="currentColor"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
      ),
    },
    {
      title: "BLOCKCHAIN",
      description:
        "Build decentralized applications using blockchain technology to create secure, transparent, and immutable systems for finance, supply chain, and beyond.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-12 h-12 text-hackathon-light-pink"
        >
          <motion.path
            d="M12,1L21,5V11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1M12,3.18L5,6.3V11.22C5,15.54 8.25,19.82 12,20.82C15.75,19.82 19,15.54 19,11.22V6.3L12,3.18M11,14H13V16H11V14M11,10H13V13H11V10M11,7H13V9H11V7Z"
            fill="currentColor"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
      ),
    },
    {
      title: "OPEN INNOVATION",
      description:
        "Collaborate across disciplines to create novel solutions to complex problems through shared knowledge, diverse perspectives, and community-driven approaches.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-12 h-12 text-hackathon-light-pink"
        >
          <motion.path
            d="M12,6C13.11,6 14,6.9 14,8C14,9.11 13.11,10 12,10C10.89,10 10,9.11 10,8C10,6.9 10.89,6 12,6M17,5C17.56,5 18,5.45 18,6C18,6.56 17.56,7 17,7C16.44,7 16,6.56 16,6C16,5.45 16.44,5 17,5M7,5C7.56,5 8,5.45 8,6C8,6.56 7.56,7 7,7C6.44,7 6,6.56 6,6C6,5.45 6.44,5 7,5M19,12C20.1,12 21,12.9 21,14C21,15.1 20.1,16 19,16C17.9,16 17,15.1 17,14C17,12.9 17.9,12 19,12M5,12C6.1,12 7,12.9 7,14C7,15.1 6.1,16 5,16C3.9,16 3,15.1 3,14C3,12.9 3.9,12 5,12M12,16C13.11,16 14,16.9 14,18C14,19.11 13.11,20 12,20C10.89,20 10,19.11 10,18C10,16.9 10.89,16 12,16M12,8C12,8 16,10.37 16,13.75C16,14.83 15.33,15.67 14.33,15.94C14.16,13.77 13.16,11.31 12,10.25C10.84,11.31 9.84,13.77 9.67,15.94C8.67,15.67 8,14.83 8,13.75C8,10.37 12,8 12,8Z"
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
      id="themes"
      className="py-20 bg-hackathon-dark-blue relative overflow-hidden mr-5"
    >
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
          Hackathon Tracks
          <motion.span
            className="absolute -right-6 -top-4 text-2xl text-hackathon-lavender"
            variants={floatingAnimation}
            animate="animate"
          >
            ✧
          </motion.span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              className="bg-hackathon-darker-blue p-4 sm:p-6 rounded-lg flex flex-col items-center relative border-2 border-hackathon-beige"
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

              <motion.div
                className="w-16 h-16 mb-4 flex items-center justify-center"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                {theme.icon}
              </motion.div>

              <motion.h3
                className="text-xl font-bold mb-4 text-hackathon-lavender font-press-start text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {theme.title}
              </motion.h3>

              <motion.p
                className="text-hackathon-beige text-center font-jetbrains text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {theme.description}
              </motion.p>

              <motion.div
                className="w-full h-1 bg-gradient-to-r from-transparent via-hackathon-lavender to-transparent mt-4 rounded-full"
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

export default Theme;
