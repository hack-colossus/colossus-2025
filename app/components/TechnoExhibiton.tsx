"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

const TechnoExhibition = () => {
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

  // Glow and pulse animations
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

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  // Floating animation for decorative elements
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

  // Exhibition themes from the image
  const exhibitionThemes = [
    "AI, Data Science & Block Chain",
    "Cyber & Network Security",
    "Smart Technology & 5G/6G Communication",
    "Electrical Vehicle Technology",
    "Sustainable and Infrastructure Technologies",
    "Smart Materials and Additive Manufacturing",
    "Renewable Energy",
    "Drone and related Technology",
    "IoT, Sensors & its Applications",
    "Innovative Health Care Systems",
    "Augmented Reality/Virtual Reality & Image Processing",
    "Innovative Projects for Social Relevance",
  ];

  return (
    <section id="techno-exhibition" className="py-20 bg-hackathon-darker-blue relative overflow-hidden">
      {/* Animated background particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-hackathon-lavender opacity-20"
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
        <motion.div className="text-center mb-16" variants={titleVariants}>
          <motion.div
            className="inline-block relative"
            variants={floatingAnimation}
            animate="animate"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-hackathon-light-pink uppercase font-press-start relative inline-block">
              <motion.span
                className="absolute -left-6 -top-6 text-4xl text-hackathon-lavender"
                variants={floatingAnimation}
                animate="animate"
              >
                ✦
              </motion.span>
              Next Level
              <motion.span
                className="absolute -right-6 -top-4 text-2xl text-hackathon-lavender"
                variants={floatingAnimation}
                animate="animate"
              >
                ✧
              </motion.span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="mt-4 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.h3 
              className="text-5xl font-bold text-hackathon-lavender font-press-start tracking-tight"
              variants={pulseAnimation}
              animate="animate"
            >
              9<sup>th</sup> NATIONAL TECHNO-EXHIBITION
            </motion.h3>
          </motion.div>
          
          <motion.p 
            className="text-xl text-hackathon-beige font-jetbrains"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span className="text-hackathon-light-pink font-bold">INSPIRE, ASPIRE & ACHIEVE</span>
            <br />
            Sunday, 13<sup>th</sup> April 2025
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Exhibition Info Card */}
          <motion.div
            className="bg-hackathon-dark-blue p-6 rounded-lg border-2 border-hackathon-lavender relative overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Glow effect behind the card */}
            <motion.div
              className="absolute inset-0 rounded-lg"
              variants={glowAnimation}
              animate="animate"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative z-10"
            >
              <h3 className="text-2xl font-bold text-hackathon-light-pink font-press-start mb-4">
                HACKATHON TO EXHIBITION
              </h3>
              
              <div className="bg-hackathon-darker-blue p-4 rounded mb-4">
                <h4 className="text-xl text-hackathon-lavender font-bold mb-2 font-jetbrains">
                  TOP 15 TEAMS QUALIFY
                </h4>
                <p className="text-hackathon-beige font-jetbrains">
                  The top 15 contestants from our hackathon will automatically qualify 
                  to compete in the National Techno-Exhibition to be held the next day. 
                  This is your chance to showcase your innovative projects to a national audience!
                </p>
              </div>
              
              <div className="bg-hackathon-darker-blue p-4 rounded mb-4">
                <h4 className="text-xl text-hackathon-lavender font-bold mb-2 font-jetbrains">
                  WIN ATTRACTIVE PRIZES
                </h4>
                <p className="text-hackathon-beige font-jetbrains">
                  Total prize pool up to 2.75 LAKHS with theme-wise prizes.
                  Demonstrate your learning experience and technical aptitude on a national platform.
                </p>
              </div>
              
              <div className="bg-hackathon-darker-blue p-4 rounded">
                <h4 className="text-xl text-hackathon-lavender font-bold mb-2 font-jetbrains">
                  EVENT DETAILS
                </h4>
                <ul className="text-hackathon-beige font-jetbrains space-y-2">
                  <li>
                    <span className="text-hackathon-light-pink">Date:</span> Sunday, 13th April 2025
                  </li>
                  <li>
                    <span className="text-hackathon-light-pink">Venue:</span> Dr. Ambedkar Institute of Technology Campus, 
                    Outer Ring Road, Mallathahalli, Bengaluru - 560 056
                  </li>
                  <li>
                    <span className="text-hackathon-light-pink">Registration Fee:</span> Free for the selected contestants
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Exhibition Themes Card */}
          <motion.div
            className="bg-hackathon-dark-blue p-6 rounded-lg border-2 border-hackathon-lavender relative"
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Glow effect behind the card */}
            <motion.div
              className="absolute inset-0 rounded-lg"
              variants={glowAnimation}
              animate="animate"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative z-10"
            >
              <h3 className="text-2xl font-bold text-hackathon-light-pink font-press-start mb-4">
                EXHIBITION THEMES
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {exhibitionThemes.map((theme, index) => (
                  <motion.div
                    key={index}
                    className="bg-hackathon-darker-blue p-3 rounded flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index + 0.5 }}
                  >
                    <div className="mr-2 text-hackathon-light-pink font-bold">{index + 1}.</div>
                    <div className="text-hackathon-beige font-jetbrains">{theme}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Contact Information */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.a
            href="https://drait.edu.in/events/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-4 bg-hackathon-darker-blue text-hackathon-light-pink border-2 border-hackathon-lavender rounded-lg font-press-start text-lg relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(154, 130, 236, 0.7)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated border effect */}
            <motion.span
              className="absolute inset-0 rounded-lg pointer-events-none"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(154, 130, 236, 0.7)",
                  "0 0 0 10px rgba(154, 130, 236, 0)",
                ],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
            
            <span className="relative z-10">
              Know More
            </span>
            
            {/* Background glow effect on hover */}
            <motion.div 
              className="absolute inset-0 bg-hackathon-lavender opacity-0 group-hover:opacity-20"
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechnoExhibition;