"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  Variants,
} from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";

// Define interfaces for type safety
interface TimeLeft {
  days: number;
  hours: number;
  mins: number;
  secs: number;
}

interface Particle {
  key: number;
  size: number;
  left: string;
  top: string;
  animationDuration: number;
  animationDelay: number;
}

interface ParticleData {
  animationDuration: number;
  animationDelay: number;
}

const Hero: React.FC = () => {
  // Countdown state - only update when seconds change
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });
  const [isEventPassed, setIsEventPassed] = useState<boolean>(false);

  // Target date: April 5, 2025, 12:00 PM
  const targetDate = new Date("2025-04-05T12:00:00");

  // Update countdown timer
  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft | null => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setIsEventPassed(true);
        return null;
      }

      // Calculate remaining time
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, mins, secs };
    };

    const interval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (newTimeLeft) {
        setTimeLeft(newTimeLeft);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Mouse position tracking - only for desktop
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Logo tilt effect based on mouse position - only for desktop
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  // Smooth spring effect for rotation with reduced stiffness
  const springRotateX = useSpring(rotateX, { stiffness: 50, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 50, damping: 30 });

  // Track mouse movement - only for desktop and reduced sensitivity
  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if (isMobile) return;
    if (!containerRef.current) return;

    const rect: DOMRect = containerRef.current.getBoundingClientRect();
    const centerX: number = rect.left + rect.width / 2;
    const centerY: number = rect.top + rect.height / 2;

    // Reduce sensitivity by dividing by 1.5
    mouseX.set((e.clientX - centerX) / 1.5);
    mouseY.set((e.clientY - centerY) / 1.5);
  };

  const containerRef = useRef<HTMLDivElement>(null);

  // Pre-compute random particle positions for better performance
  const particles: Particle[] = useMemo(() => {
    // Reduce number of particles for mobile
    const count = isMobile ? 15 : 30;

    return [...Array(count)].map((_, i) => ({
      key: i,
      size: Math.random() * 4 + 2,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: 3 + Math.random() * 2,
      animationDelay: Math.random() * 2, // Randomize delays to prevent synchronized animations
    }));
  }, [isMobile]);

  // Simplified animation variants with reduced complexity
  const backgroundParticleVariants = {
    animate: (data: ParticleData) => ({
      y: [0, -15, 0],
      opacity: [0.2, 0.5, 0.2],
      transition: {
        duration: data.animationDuration,
        repeat: Infinity,
        delay: data.animationDelay,
        ease: "easeInOut",
      },
    }),
  } as Variants;

  // Simplified floating animation for title - optimized for performance
  const titleAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    },
  };

  // Format time unit to always show two digits
  const formatTimeUnit = (unit: number): string => {
    return unit.toString().padStart(2, "0");
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-hackathon-dark-blue to-hackathon-darker-blue relative overflow-hidden py-16"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Animated background particles - reduced count and optimized */}
      {particles.map((particle) => (
        <motion.div
          key={particle.key}
          className="absolute rounded-full bg-hackathon-light-pink opacity-20"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
            willChange: "transform, opacity", // Hardware acceleration hint
          }}
          custom={particle}
          variants={backgroundParticleVariants}
          animate="animate"
        />
      ))}

      {/* Main content */}
      <div className="text-center w-full max-w-5xl mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Logo container with 3D effect */}
        <motion.div
          className="mb-6 md:mb-8 relative"
          style={
            isMobile
              ? {}
              : {
                  rotateX: springRotateX,
                  rotateY: springRotateY,
                  transformPerspective: 1000,
                  willChange: "transform", // Hardware acceleration hint
                }
          }
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Glow effect behind logo - static on mobile */}
          <motion.div
            className="absolute inset-0 bg-hackathon-purple rounded-full filter blur-xl"
            animate={
              isMobile
                ? { opacity: [0.7, 0.9, 0.7] }
                : {
                    scale: [1, 1.05, 1],
                    opacity: [0.7, 1, 0.7],
                  }
            }
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />

          {/* Logo - simplified for mobile */}
          <div className="relative">
            <motion.svg
              width={isMobile ? "150" : "200"}
              height={isMobile ? "150" : "200"}
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              whileHover={isMobile ? {} : { rotate: 360 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              {/* Outer circle */}
              <circle
                cx="100"
                cy="100"
                r="95"
                stroke="#E4C1F9"
                strokeWidth="3"
              />

              {/* Inner circle with glow */}
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="#251941"
                stroke="#A78BFA"
                strokeWidth="2"
              />

              {/* C letter for Colossus */}
              <path
                d="M70 70C70 70 55 85 55 100C55 115 70 130 70 130"
                stroke="#FF8FA3"
                strokeWidth="5"
                strokeLinecap="round"
              />

              {/* Simplified circuit paths */}
              <path
                d="M100 40C120 50 140 70 140 100C140 130 120 150 100 160"
                stroke="#A78BFA"
                strokeWidth="2"
                strokeDasharray="4 2"
              />

              <path
                d="M130 70C130 70 145 85 145 100C145 115 130 130 130 130"
                stroke="#FF8FA3"
                strokeWidth="5"
                strokeLinecap="round"
              />

              {/* Year 2025 */}
              <text
                x="100"
                y="110"
                fontFamily="monospace"
                fontSize="16"
                fill="#FF8FA3"
                textAnchor="middle"
              >
                2025
              </text>
            </motion.svg>
          </div>
        </motion.div>

        {/* Optimized title animation - using two groups instead of per-character animation */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-press-start mb-4 md:mb-6 text-hackathon-light-pink"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.span
            className="inline-block"
            animate={titleAnimation}
            style={{ willChange: "transform" }} // Hardware acceleration hint
          >
            Colossus
          </motion.span>{" "}
          <motion.span
            className="inline-block text-hackathon-lavender"
            animate={titleAnimation}
            transition={{ delay: 0.2 }}
            style={{ willChange: "transform" }} // Hardware acceleration hint
          >
            2025
          </motion.span>
        </motion.h1>

        <motion.div
          className="w-16 h-1 bg-gradient-to-r from-transparent via-hackathon-lavender to-transparent mb-4 md:mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        <motion.p
          className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-hackathon-beige font-jetbrains max-w-2xl px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Join us for{" "}
          <span className="text-hackathon-lavender font-bold">24 hours</span> of
          coding, innovation, and fun!
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {!isEventPassed && (
            <motion.a
              href="https://unstop.com/hackathons/colossus-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-hackathon-purple text-hackathon-light-pink px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-hackathon-lavender transition-all duration-300 font-jetbrains"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(167, 139, 250, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.a>
          )}

          <motion.a
            href="#themes"
            className="inline-block border-2 border-hackathon-lavender text-hackathon-lavender px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-hackathon-lavender hover:text-hackathon-dark-blue transition-all duration-300 font-jetbrains"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(167, 139, 250, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Tracks
          </motion.a>
        </motion.div>

        {/* Countdown timer or registration closed message */}
        {isEventPassed ? (
          <motion.div
            className="mt-8 md:mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-hackathon-darker-blue border border-hackathon-lavender rounded-lg px-8 py-4">
              <p className="text-xl md:text-2xl text-hackathon-light-pink font-press-start">
                Registrations Closed
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="mt-8 md:mt-12 flex flex-wrap gap-3 md:gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINS", value: timeLeft.mins },
              { label: "SECS", value: timeLeft.secs },
            ].map((unit) => (
              <div key={unit.label} className="text-center">
                <motion.div
                  className="w-14 sm:w-16 h-14 sm:h-16 bg-hackathon-darker-blue border border-hackathon-lavender rounded flex items-center justify-center text-hackathon-light-pink text-xl sm:text-2xl font-press-start"
                  whileHover={{ scale: isMobile ? 1 : 1.1 }}
                >
                  {formatTimeUnit(unit.value)}
                </motion.div>
                <div className="text-xs mt-1 text-hackathon-beige font-jetbrains">
                  {unit.label}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Reduced decorative elements - less on mobile */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute bottom-10 left-10 text-4xl text-hackathon-lavender opacity-70"
            animate={titleAnimation}
          >
            ✦
          </motion.div>
          <motion.div
            className="absolute top-10 right-10 text-3xl text-hackathon-light-pink opacity-70"
            animate={titleAnimation}
            transition={{ delay: 0.5 }}
          >
            ✧
          </motion.div>
        </>
      )}
    </section>
  );
};

export default Hero;
