"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const navItems = [
    "About",
    "Schedule",
    "Themes",
    // "Speakers",
    // "Sponsors",
    "Previous Hackathon",
    "FAQ",
  ];

  const handleNavItemClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    item: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile menu after click
    setMenuOpen(false);
  };

  // Logo animation variants with letter animation
  const logoVariants = {
    hover: {
      scale: 1.05,
      textShadow: "0 0 12px rgb(255, 180, 211, 0.9)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    initial: { y: 0 },
    hover: (i: number) => ({
      y: [0, -10, 0],
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        repeat: 0,
        ease: "easeInOut",
      },
    }),
  };

  // Nav item animations
  const itemVariants = {
    hover: {
      scale: 1.1,
      color: "#c9a0dc", // hackathon-lavender
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 8,
      },
    },
  };

  // Floating cursor spotlight effect
  const spotlightVariants = {
    animate: ({ x, y }: { x: number; y: number }) => ({
      x: x - 150,
      y: y - 150,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    }),
  };

  // Mobile menu variants
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        staggerChildren: 0.1,
        staggerDirection: 1,
        when: "beforeChildren",
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: -10,
      x: -20,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.3, type: "spring" },
    },
  };

  // Header background animation variants
  const headerVariants = {
    initial: { y: -100 },
    animate: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    scrolled: {
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.4 },
    },
  };

  // Fancy hover effect for the entire nav
  const navContainerVariants = {
    hover: {
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  return (
    <>
      {/* Cursor spotlight effect */}
      <motion.div
        className="fixed w-96 h-96 rounded- pointer-events-none z-40 opacity-20 bg-gradient-radial from-hackathon-light-pink to-transparent hidden md:block"
        variants={spotlightVariants}
        animate="animate"
        custom={mousePosition}
      />

      <motion.header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-hackathon-dark-blue/80 backdrop-blur-md"
            : "bg-transparent"
        }`}
        initial="initial"
        animate={["animate", isScrolled ? "scrolled" : ""]}
        variants={headerVariants}
      >
        <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
          <motion.div
            whileHover="hover"
            variants={logoVariants}
            className="relative"
          >
            <Link
              href="/"
              className="text-md font-press-start text-hackathon-light-pink relative z-10 tracking-wider"
            >
              {Array.from("Colossus 2025").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </Link>
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-hackathon-dark-blue via-hackathon-light-pink to-hackathon-lavender rounded-lg opacity-30 blur-md"
              animate={{
                opacity: [0.2, 0.3, 0.2],
                scale: [0.9, 1.01, 0.9],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul
            className="hidden md:flex space-x-8"
            variants={navContainerVariants}
            whileHover="hover"
          >
            {navItems.map((item) => (
              <motion.li
                key={item}
                onHoverStart={() => setHoveredItem(item)}
                onHoverEnd={() => setHoveredItem(null)}
                variants={itemVariants}
                whileHover="hover"
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-jetbrains text-hackathon-beige hover:text-hackathon-lavender transition-colors duration-300 relative"
                  onClick={(e) => handleNavItemClick(e, item)}
                >
                  {item}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-hackathon-light-pink"
                    animate={{
                      width: hoveredItem === item ? "100%" : "0%",
                    }}
                    initial={{ width: "0%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <AnimatePresence>
                    {hoveredItem === item && (
                      <motion.span
                        className="absolute -inset-1 bg-hackathon-lavender/10 rounded-md -z-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile Hamburger Menu Button */}
          <motion.div className="md:hidden " whileTap={{ scale: 0.9 }}>
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  // X icon for closing menu
                  <motion.svg
                    key="close"
                    className="w-8 h-8 text-hackathon-light-pink"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </motion.svg>
                ) : (
                  // Hamburger icon for opening menu
                  <motion.svg
                    key="menu"
                    className="w-8 h-8 text-hackathon-light-pink"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    whileHover={{
                      scale: 1.05,
                      transition: {
                        yoyo: Infinity,
                        duration: 0.3,
                      },
                    }}
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16"
                      animate={{ y: [0, -1, 0] }}
                      transition={{
                        delay: 0,
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: 0.5,
                      }}
                    />
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 12h16"
                      animate={{ y: [0, 1, 0] }}
                      transition={{
                        delay: 0.2,
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: 0.5,
                      }}
                    />
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 18h16"
                      animate={{ y: [0, -1, 0] }}
                      transition={{
                        delay: 0.4,
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: 0.5,
                      }}
                    />
                  </motion.svg>
                )}
              </AnimatePresence>

              <motion.span
                className="absolute inset-0 rounded-full bg-hackathon-lavender/20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.button>
          </motion.div>
        </nav>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="md:hidden bg-hackathon-dark-blue/95 backdrop-blur-md overflow-hidden mr-5"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <ul className="flex flex-col space-y-6 p-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item}
                    variants={menuItemVariants}
                    custom={index}
                    whileHover={{ x: 15, color: "#c9a0dc" }}
                    className="text-xs border-b border-hackathon-lavender/20 pb-3 font-jetbrains"
                  >
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="block text-xl font-medium text-hackathon-beige hover:text-hackathon-lavender transition-all duration-300"
                      onClick={(e) => handleNavItemClick(e, item)}
                    >
                      <motion.span className="inline-block">{item}</motion.span>
                      <motion.div
                        className="w-2 h-2 rounded-full bg-hackathon-light-pink inline-block ml-3"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.2,
                          repeat: Infinity,
                        }}
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
