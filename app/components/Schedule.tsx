"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

interface TimelineEntry {
  time: string;
  event: string;
  description: string;
}

const timelineData: TimelineEntry[] = [
  {
    time: "9:00 AM",
    event: "Registration and Check-in",
    description: "Arrive and register your attendance.",
  },
  {
    time: "10:00 AM",
    event: "Opening Ceremony",
    description: "Kick off the event with inspiring opening remarks.",
  },
  {
    time: "11:00 AM",
    event: "Hacking Begins",
    description: "Start brainstorming and coding innovative projects.",
  },
  {
    time: "1:00 PM",
    event: "First Round",
    description: "First round evaluation and feedback.",
  },
  {
    time: "2:00 PM",
    event: "Lunch",
    description: "Enjoy a break and network with fellow participants.",
  },
  {
    time: "5:00 PM",
    event: "Second Round",
    description: "Second round evaluation and feedback.",
  },
  {
    time: "6:00 PM",
    event: "Snack",
    description: "Grab a quick snack to keep your energy up.",
  },
  {
    time: "8:00 PM",
    event: "Dinner",
    description: "Dine and discuss progress over a great meal.",
  },
  {
    time: "12:00 AM",
    event: "Midnight Snacks",
    description:
      "Wrap up your projects and prepare for the next phase with midnight snacks.",
  },
  {
    time: "8:00 AM",
    event: "BreakFast",
    description: "Start your day with a hearty breakfast.",
  },
  {
    time: "9:00 PM",
    event: "Final Round",
    description: "Showcase your final projects and celebrate with awards.",
  },
];

const TimelineItem = ({
  item,
  index,
  isVisible,
}: {
  item: TimelineEntry;
  index: number;
  isVisible: boolean;
}) => {
  const isLeft = index % 2 === 0;

  // Animation variants (desktop and mobile can share similar animations)
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isLeft ? -50 : 50,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.1,
      },
    },
  };

  const branchVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        delay: 0.05,
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
      },
    },
  };

  return (
    <>
      {/* Desktop Layout (alternating left/right) */}
      <div
        className="hidden md:grid items-center relative min-h-[120px]"
        style={{ gridTemplateColumns: "1fr 80px auto 80px 1fr" }}
      >
        {isLeft ? (
          <>
            {/* Left side card with connector extension */}
            <div className="col-start-1 col-end-2 flex justify-end pr-0">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 110, 199, 0.5)",
                  borderColor: "#FF6EC7",
                }}
                transition={{ duration: 0.3 }}
                className="bg-hackathon-darker-blue p-6 rounded-lg shadow-lg border-2 border-hackathon-purple max-w-sm w-full backdrop-blur-sm bg-opacity-90 flex flex-col relative"
              >
                {/* Connector extension from card */}
                <div className="absolute right-0 top-1/2 w-4 h-[3px] bg-gradient-to-r from-hackathon-purple to-hackathon-light-pink transform -translate-y-1/2 translate-x-full"></div>
                <h3 className="text-xl font-semibold mb-2 text-hackathon-lavender">
                  {item.time} - {item.event}
                </h3>
                <p className="text-hackathon-beige">{item.description}</p>
              </motion.div>
            </div>

            {/* Left branch line */}
            <div className="col-start-2 col-end-3 flex justify-end items-center h-full">
              <motion.div
                variants={branchVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="w-full h-[3px] bg-gradient-to-r from-hackathon-purple to-hackathon-light-pink origin-right"
              />
            </div>

            {/* Center dot */}
            <div className="col-start-3 col-end-4 flex justify-center items-center">
              <motion.div
                variants={dotVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="z-10 w-6 h-6 rounded-full bg-hackathon-light-pink shadow-[0_0_15px_rgba(255,110,199,0.7)] border-4 border-hackathon-darker-blue"
              />
            </div>

            {/* Empty right branch and card */}
            <div className="col-start-4 col-end-6"></div>
          </>
        ) : (
          <>
            {/* Empty left branch and card */}
            <div className="col-start-1 col-end-3"></div>

            {/* Center dot */}
            <div className="col-start-3 col-end-4 flex justify-center items-center">
              <motion.div
                variants={dotVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="z-10 w-6 h-6 rounded-full bg-hackathon-light-pink shadow-[0_0_15px_rgba(255,110,199,0.7)] border-4 border-hackathon-darker-blue"
              />
            </div>

            {/* Right branch line */}
            <div className="col-start-4 col-end-5 flex justify-start items-center h-full">
              <motion.div
                variants={branchVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="w-full h-[3px] bg-gradient-to-l from-hackathon-purple to-hackathon-light-pink origin-left"
              />
            </div>

            {/* Right side card with connector extension */}
            <div className="col-start-5 col-end-6 flex justify-start pl-0">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 110, 199, 0.5)",
                  borderColor: "#FF6EC7",
                }}
                transition={{ duration: 0.3 }}
                className="bg-hackathon-darker-blue p-6 rounded-lg shadow-lg border-2 border-hackathon-purple max-w-sm w-full backdrop-blur-sm bg-opacity-90 flex flex-col relative"
              >
                {/* Connector extension from card */}
                <div className="absolute left-0 top-1/2 w-4 h-[3px] bg-gradient-to-l from-hackathon-purple to-hackathon-light-pink transform -translate-y-1/2 -translate-x-full"></div>
                <h3 className="text-xl font-semibold mb-2 text-hackathon-lavender">
                  {item.time} - {item.event}
                </h3>
                <p className="text-hackathon-beige">{item.description}</p>
              </motion.div>
            </div>
          </>
        )}
      </div>

      {/* Mobile Layout (single column) */}
      <div className="md:hidden">
        <div className="flex items-start space-x-6">
          {/* Dot column with more space */}
          <div className="flex flex-col items-center relative">
            <motion.div
              variants={dotVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="z-10 w-6 h-6 rounded-full bg-hackathon-light-pink shadow-[0_0_15px_rgba(255,110,199,0.7)] border-4 border-hackathon-darker-blue"
            />
            {/* Optional horizontal connector line */}
            <motion.div
              variants={branchVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="absolute top-3 left-6 w-6 h-[3px] bg-gradient-to-r from-hackathon-light-pink to-hackathon-purple"
            />
          </div>
          {/* Card column with more spacing from the timeline */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255, 110, 199, 0.5)",
              borderColor: "#FF6EC7",
            }}
            transition={{ duration: 0.3 }}
            className="bg-hackathon-darker-blue p-6 rounded-lg shadow-lg border-2 border-hackathon-purple w-full backdrop-blur-sm bg-opacity-90 flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-2 text-hackathon-lavender">
              {item.time} - {item.event}
            </h3>
            <p className="text-hackathon-beige">{item.description}</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  // Reference for the timeline section to drive the vertical line
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Create refs for timeline items to track visibility
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    Array(data.length).fill(false)
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    itemRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
              observer.unobserve(ref);
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(ref);
      observers.push(observer);
    });
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section
      id="schedule"
      ref={containerRef}
      className="py-24 relative bg-gradient-to-b from-hackathon-dark-blue to-hackathon-darker-blue overflow-hidden mr-5"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -left-24 top-1/4 w-64 h-64 rounded-full bg-hackathon-purple opacity-10 blur-3xl"></div>
        <div className="absolute right-0 top-3/4 w-80 h-80 rounded-full bg-hackathon-light-pink opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-hackathon-light-pink mb-3 uppercase">
            Event Schedule
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-hackathon-purple to-hackathon-light-pink mx-auto rounded-full"></div>
        </motion.div>

        {/* Vertical Timeline Line */}
        {/* Desktop vertical line */}
        <div
          className="hidden md:block absolute left-1/2 top-32 bottom-20 w-1 bg-hackathon-darker-blue z-0"
          style={{ height: "calc(100% - 160px)" }}
        >
          <motion.div
            style={{ scaleY: scrollYProgress, height: "100%" }}
            className="bg-gradient-to-b from-hackathon-purple to-hackathon-light-pink origin-top w-full rounded-full shadow-[0_0_10px_rgba(255,110,199,0.5)]"
          />
        </div>
        {/* Mobile vertical line - Moving it further left */}
        <div
          className="block md:hidden absolute left-3 top-32 bottom-20 w-1 bg-hackathon-darker-blue z-0"
          style={{ height: "calc(100% - 160px)" }}
        >
          <motion.div
            style={{ scaleY: scrollYProgress, height: "100%" }}
            className="bg-gradient-to-b from-hackathon-purple to-hackathon-light-pink origin-top w-full rounded-full shadow-[0_0_10px_rgba(255,110,199,0.5)]"
          />
        </div>

        <div className="space-y-20 relative z-10">
          {data.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
            >
              <TimelineItem
                item={item}
                index={index}
                isVisible={visibleItems[index]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return <Timeline data={timelineData} />;
}
