"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface CountingNumberProps {
  target: number;
  duration?: number;
}

const CountingNumber = ({ target, duration = 2 }: CountingNumberProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1
        );

        setCount(Math.floor(progress * target));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
};

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    }),
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const statsContainerRef = useRef(null);
  const statsInView = useInView(statsContainerRef, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-10 sm:py-20 bg-[#1a1a2e] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl sm:text-4xl mb-12 text-center font-press-start text-hackathon-lavender"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          >
            About{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            className="relative inline-block"
          >
            <span className="relative z-10">Colossus 2025</span>
            {/* Removed the underline element */}
          </motion.span>
        </motion.h2>

        {/* About College Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* College Image */}
          <motion.div
            className="h-full"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/clg_pic.jpg"
                alt="Dr. Ambedkar Institute of Technology"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/80 to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.div>
          </motion.div>

          {/* College Description - Redesigned Card */}
          <motion.div
            className="bg-gradient-to-br from-[#2d2b55] to-[#1f1d40] p-6 sm:p-8 rounded-lg h-full flex flex-col justify-center relative overflow-hidden shadow-lg border border-[#3f3d6b]"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              boxShadow: "0 0 30px rgba(195, 190, 247, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute -right-12 -top-12 w-24 h-24 bg-[#c3bef7] opacity-10 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <h3 className="text-xl sm:text-2xl font-press-start mb-4 text-[#c3bef7] relative z-10 inline-block">
              <span className="bg-gradient-to-r from-[#c3bef7] to-[#8a84d6] bg-clip-text text-transparent">
                About Dr AIT
              </span>
            </h3>
            <p className="text-base sm:text-lg text-hackathon-beige font-jetbrains relative z-10">
              Dr. Ambedkar Institute of Technology (Dr. AIT) was founded by M.H.
              Jayaprakash Narayan in 1980. Named after Dr. B.R. Ambedkar, the
              institute is affiliated to Visvesvaraya Technological University
              (VTU), Belagavi and is recognized and accredited by AICTE and NBA
              respectively. The institution is accredited by NAAC with 'A+'
              Grade. The Institution has achieved 163 Rank in National
              Institutional Ranking Framework (NIRF). In the year 2010, academic
              autonomy was conferred by the University Grants Commission, New
              Delhi, which has enabled the institution to frame its own
              curriculum, examinations and awarding of the degrees.
            </p>
          </motion.div>
        </div>

        {/* Hackathon Information Section - Redesigned Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* What is Colossus - Redesigned Card */}
          <motion.div
            className="bg-gradient-to-br from-[#2d2b55] to-[#1f1d40] p-6 sm:p-8 rounded-lg relative overflow-hidden shadow-lg border border-[#3f3d6b] h-full"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 30px rgba(195, 190, 247, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute right-0 bottom-0 w-32 h-32 bg-[#06d6a0] opacity-5 rounded-full"
              animate={{
                x: [0, 20, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="flex items-center mb-4">
              <div className="w-1 h-8 bg-[#06d6a0] mr-3 rounded-full"></div>
              <h3 className="text-xl sm:text-2xl font-press-start text-[#c3bef7] relative z-10">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="bg-gradient-to-r from-[#c3bef7] to-[#8a84d6] bg-clip-text text-transparent">
                    What is Colossus 2025?
                  </span>
                </motion.span>
              </h3>
            </div>
            <p className="text-base sm:text-lg text-hackathon-beige font-jetbrains relative z-10">
              Colossus 2025 is a 24-hour hackathon where people from different
              backgrounds come together to build innovative tech projects. It's
              a chance for developers, designers, and creative thinkers to
              learn, collaborate, and create something new. Organized by the
              technical club at Dr. Ambedkar Institute of Technology, Bengaluru,
              in collaboration with Nanogram Hub and the Google Developers
              Student Club.
            </p>
          </motion.div>

          {/* Why Participate - Redesigned Card */}
          <motion.div
            className="bg-gradient-to-br from-[#2d2b55] to-[#1f1d40] p-6 sm:p-8 rounded-lg relative overflow-hidden shadow-lg border border-[#3f3d6b] h-full"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 30px rgba(195, 190, 247, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute -left-16 -bottom-16 w-32 h-32 bg-[#c3bef7] opacity-5 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="flex items-center mb-4">
              <div className="w-1 h-8 bg-[#06d6a0] mr-3 rounded-full"></div>
              <h3 className="text-xl sm:text-2xl font-press-start text-[#c3bef7] relative z-10">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="bg-gradient-to-r from-[#c3bef7] to-[#8a84d6] bg-clip-text text-transparent">
                    Why Participate?
                  </span>
                </motion.span>
              </h3>
            </div>
            <div>
              <motion.ul
                className="space-y-2 text-base sm:text-lg text-hackathon-beige font-jetbrains relative z-10"
                variants={staggerContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {[
                  "Connect with like-minded individuals",
                  "Learn new skills and technologies",
                  "Win exciting prizes and recognition",
                  "Build real-world projects for your portfolio",
                  "Enjoy a fun and collaborative experience",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={listItemVariants}
                    className="flex items-start"
                  >
                    <span className="text-[#06d6a0] mr-2">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>

        {/* Previous Hackathon Stats */}
        <div className="mb-8 px-4 sm:px-0">
          <motion.h3
            className="text-xl sm:text-4xl text-center font-press-start text-hackathon-lavender"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.17, 0.67, 0.83, 0.67],
              }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <span className="bg-gradient-to-r from-[#c3bef7] to-[#8a84d6] bg-clip-text text-hackathon-light-pink">
                HackColossus 2024
              </span>
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.17, 0.67, 0.83, 0.67],
              }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <span className="bg-gradient-to-r from-[#8a84d6] to-[#06d6a0] bg-clip-text text-hackathon-light-pink">
                Highlights
              </span>
            </motion.span>
          </motion.h3>
        </div>

        {/* Stats Section - Redesigned Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          ref={statsContainerRef}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
        >
          {/* Participants */}
          <motion.div
            className="text-center bg-gradient-to-br from-[#2d2b55] to-[#1f1d40] p-6 sm:p-8 rounded-lg relative overflow-hidden shadow-lg border border-[#3f3d6b] h-40 sm:h-48 flex flex-col justify-center items-center"
            variants={cardVariants}
            custom={3}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(6, 214, 160, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-[#06d6a0]/10 to-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="text-3xl sm:text-4xl font-press-start"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: "backOut",
              }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-[#06d6a0] to-[#4ba083] bg-clip-text text-transparent">
                <CountingNumber target={160} />+
              </span>
            </motion.div>
            <motion.p
              className="text-base sm:text-lg uppercase mt-2 text-hackathon-beige font-jetbrains"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              ON-CAMPUS PARTICIPANTS
            </motion.p>
          </motion.div>

          {/* Teams */}
          <motion.div
            className="text-center bg-gradient-to-br from-[#2d2b55] to-[#1f1d40] p-6 sm:p-8 rounded-lg relative overflow-hidden shadow-lg border border-[#3f3d6b] h-40 sm:h-48 flex flex-col justify-center items-center"
            variants={cardVariants}
            custom={4}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(6, 214, 160, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-[#06d6a0]/10 to-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="text-3xl sm:text-4xl font-press-start"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: "backOut",
              }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-[#06d6a0] to-[#4ba083] bg-clip-text text-transparent">
                <CountingNumber target={40} />+
              </span>
            </motion.div>
            <motion.p
              className="text-base sm:text-lg uppercase mt-2 text-hackathon-beige font-jetbrains"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              TEAMS
            </motion.p>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className="text-center bg-gradient-to-br from-[#2d2b55] to-[#1f1d40] p-6 sm:p-8 rounded-lg relative overflow-hidden shadow-lg border border-[#3f3d6b] h-40 sm:h-48 flex flex-col justify-center items-center"
            variants={cardVariants}
            custom={5}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(6, 214, 160, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-[#06d6a0]/10 to-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="text-3xl sm:text-4xl font-press-start"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease: "backOut",
              }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-[#06d6a0] to-[#4ba083] bg-clip-text text-transparent">
                <CountingNumber target={16} />
                k+
              </span>
            </motion.div>
            <motion.p
              className="text-base sm:text-lg uppercase mt-2 text-hackathon-beige font-jetbrains"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              REACH ON SOCIAL MEDIA
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
