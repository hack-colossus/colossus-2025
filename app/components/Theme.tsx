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

  // Floating animation for the decorative stars
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

  // Updated theme data with new hackathon tracks and appropriate icons
  const themes = [
    {
      title: "HEALTHTECH",
      description:
        "Focuses on integrating advanced technologies with healthcare to improve patient care, diagnostics, medical management, and overall accessibility of health services.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-12 h-12 text-hackathon-light-pink"
        >
          <motion.path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
               2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 
               14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 
               11.54L12 21.35z"
            fill="currentColor"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
      ),
    },
    {
      title: "AGRITECH",
      description:
        "Aims to revolutionize agriculture by leveraging technology to enhance productivity, optimize resource usage, ensure food security, and create sustainable farming practices.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-12 h-12 text-hackathon-light-pink"
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
    },
    {
      title: "FINTECH",
      description:
        "Drives innovation in financial services by utilizing technology to enhance security, accessibility, efficiency, and transparency in banking, payments, investments, and economic management.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-12 h-12 text-hackathon-light-pink"
        >
          <motion.path
            d="M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 
               12 1zm1 17.93V19h-2v-.07C7.06 16.9 5 14.12 5 12c0-2.12 2.06-4.9 
               6-5.93V5h2v1.07c3.94 1.03 6 3.81 6 5.93 0 2.12-2.06 4.9-6 5.93z"
            fill="currentColor"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
      ),
    },
    {
      title: "ROBOTICS/IoT",
      description:
        "Explores automation, smart systems, and connected devices to improve efficiency, accuracy, and decision-making in various industries, enabling intelligent and autonomous operations.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-12 h-12 text-hackathon-light-pink"
        >
          <motion.path
            d="M9 2H15V4H19C20.11 4 21 4.89 21 6V10C21 11.11 20.11 12 19 
               12H17V19C17 20.11 16.11 21 15 21H9C7.89 21 7 20.11 7 19V12H5C3.89 
               12 3 11.11 3 10V6C3 4.89 3.89 4 5 4H9V2M9 6V8H11V6H9M13 6V8H15V6H13M9 
               10H15V19H9V10Z"
            fill="currentColor"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
      ),
    },
    {
      title: "SUSTAINABILITY",
      description:
        "Focuses on developing eco-friendly technologies and strategies that promote environmental conservation, renewable energy, waste reduction, and long-term resilience.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-12 h-12 text-hackathon-light-pink"
        >
          <motion.path
            d="M12 4V2M12 22v-2M4.22 4.22l-1.42-1.42M19.78 19.78l-1.42-1.42M2 
               12H4M20 12h2M4.22 19.78l-1.42 1.42M19.78 4.22l-1.42 1.42M12 8a4 4 0 
               100 8 4 4 0 000-8z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
      ),
    },
    {
      title: "EDUTECH",
      description:
        "Enhances education through technology-driven solutions that improve learning experiences, accessibility, personalization, and engagement in knowledge acquisition.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-12 h-12 text-hackathon-light-pink"
        >
          <motion.path
            d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM11 12.14L4.84 9.24 11 6.34l6.16 2.9L11 12.14zM11 14.86l7.16-3.09L11 8.68v6.18z"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
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
