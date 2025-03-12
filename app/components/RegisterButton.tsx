"use client";

import { motion } from "framer-motion";

const RegisterButton = () => {
  return (
    <section id="register" className="py-16 sm:py-20 bg-hackathon-dark-blue">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-2xl sm:text-3xl font-press-start mb-8 text-hackathon-light-pink uppercase"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ready to join the Hackathon?
        </motion.h2>
        <motion.p
          className="text-md sm:text-lg mb-8 text-hackathon-beige font-jetbrains"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Don't miss out on this opportunity to innovate, collaborate, and win
          great prizes!
        </motion.p>
        <motion.a
          href="https://unstop.com/hackathons/colossus-2025"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-hackathon-darker-blue text-hackathon-light-pink px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm font-jetbrains hover:bg-hackathon-lavender transition-all duration-300 border-2 border-hackathon-light-pink hover:text-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Register Now
        </motion.a>
      </div>
    </section>
  );
};

export default RegisterButton;
