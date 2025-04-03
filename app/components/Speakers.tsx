"use client";

import React, { useEffect, useState, CSSProperties } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
// Utility to conditionally join classes – you can use your own implementation.
import { cn } from "@/lib/utils";

/**
 * FollowerPointerCard
 * Wraps content to display an interactive pointer (with tooltip) that follows your mouse.
 */
export const FollowerPointerCard = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      x.set(e.clientX - rect.left + scrollX);
      y.set(e.clientY - rect.top + scrollY);
    }
  };

  const handleMouseEnter = () => setIsInside(true);
  const handleMouseLeave = () => setIsInside(false);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "none" }}
      className={cn("relative h-full", className)}
    >
      <AnimatePresence>
        {isInside && <FollowPointer x={x} y={y} title={title} />}
      </AnimatePresence>
      {children}
    </div>
  );
};

/**
 * FollowPointer
 * Renders a retro pointer (a rotating SVG and tooltip) that follows the mouse.
 */
export const FollowPointer = ({
  x,
  y,
  title,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  title?: string | React.ReactNode;
}) => {
  const colors = [
    "var(--sky-500)",
    "var(--neutral-500)",
    "var(--teal-500)",
    "var(--green-500)",
    "var(--blue-500)",
    "var(--red-500)",
    "var(--yellow-500)",
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return (
    <motion.div
      className="absolute z-50 flex flex-col items-center"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{ scale: 1, opacity: 1 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className="h-6 w-6 transform -rotate-[70deg] -translate-x-[12px] -translate-y-[10px]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color }}
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
      </svg>
      <motion.div
        style={{ backgroundColor: color }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        className="mt-2 px-2 py-1 text-xs text-white rounded-full whitespace-nowrap"
      >
        {title || `Retro Pointer`}
      </motion.div>
    </motion.div>
  );
};

/**
 * NeonGradientCard
 * A card with a neon gradient glow on hover.
 */
export interface NeonGradientCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  borderSize?: number;
  borderRadius?: number;
  neonColors?: {
    firstColor: string;
    secondColor: string;
  };
}

export const NeonGradientCard: React.FC<NeonGradientCardProps> = ({
  className,
  children,
  borderSize = 2,
  borderRadius = 20,
  neonColors = {
    firstColor: "#ff77ff",
    secondColor: "#ff77ff",
  },
  ...props
}) => {
  return (
    <div
      style={
        {
          "--border-size": `${borderSize}px`,
          "--border-radius": `${borderRadius}px`,
          "--neon-first-color": neonColors.firstColor,
          "--neon-second-color": neonColors.secondColor,
        } as CSSProperties
      }
      className={cn(
        "relative z-10 w-full h-full flex flex-col",
        "rounded-[var(--border-radius)]",
        "transition-shadow duration-300",
        "hover:shadow-[0_0_10px_var(--neon-first-color),0_0_30px_var(--neon-first-color)]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "w-full h-full flex flex-col",
          "rounded-[calc(var(--border-radius)-var(--border-size))]",
          "bg-hackathon-dark-blue p-4 sm:p-6",
          "dark:bg-neutral-900"
        )}
      >
        {children}
      </div>
    </div>
  );
};

// Day 1 jury members (random)
const day1Members = [
  {
    name: "Maya Rodriguez",
    role: "Jury Member",
    image: "/jury/maya-rodriguez.jpeg",
  },
  {
    name: "Alex Chen",
    role: "Jury Member",
    image: "/jury/alex-chen.jpeg",
  },
  {
    name: "Priya Sharma",
    role: "Jury Member",
    image: "/jury/priya-sharma.jpeg",
  },
  {
    name: "David Kim",
    role: "Jury Member",
    image: "/jury/david-kim.jpeg",
  },
  {
    name: "Sarah Johnson",
    role: "Jury Member",
    image: "/jury/sarah-johnson.jpeg",
  },
];

// Day 2 jury members (original ones)
const day2Members = [
  {
    name: "Pallavi Lokesh Shetty",
    role: "Jury Member",
    image: "/jury/pallavi-shetty.jpeg",
  },
  {
    name: "Abdulkhadeer",
    role: "Jury Member",
    image: "/jury/Abdulkhadeer.jpeg",
  },
  {
    name: "Prakhar Sharan",
    role: "Jury Member",
    image: "/jury/prakhar-sharan.jpeg",
  },
  {
    name: "Akanksha Buchke",
    role: "Jury Member",
    image: "/jury/akanksha-buchke.JPG",
  },
  {
    name: "Brijesh Kumar Mishra",
    role: "Jury Member",
    image: "/jury/brijesh-kumar-mishra.jpeg",
  },
];

/**
 * TabButton
 * A styled button for tab navigation
 */
const TabButton = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-6 py-3 rounded-t-lg font-medium transition-all duration-300",
        active
          ? "bg-hackathon-dark-blue text-hackathon-light-pink border-b-2 border-hackathon-light-pink"
          : "bg-hackathon-darker-blue text-hackathon-beige hover:bg-hackathon-dark-blue"
      )}
    >
      {children}
    </button>
  );
};

/**
 * JuryMemberCard
 * Component for individual jury member card
 */
interface Speaker {
  name: string;
  role: string;
  image: string;
}

const JuryMemberCard = ({
  speaker,
  index,
  isVisible,
}: {
  speaker: Speaker;
  index: number;
  isVisible: boolean;
}) => {
  return (
    <FollowerPointerCard
      title={speaker.name}
      className={cn(
        "transition-all duration-300 h-full",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <NeonGradientCard
        neonColors={{
          firstColor: "#ff77ff",
          secondColor: "#ff77ff",
        }}
        className="h-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="flex flex-col items-center justify-center h-full"
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative mx-auto mb-4">
            <Image
              src={speaker.image}
              alt={speaker.name}
              fill
              sizes="(max-width: 640px) 8rem, (max-width: 768px) 10rem, 12rem"
              className="rounded-full object-cover border-4 border-hackathon-lavender"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center text-hackathon-light-pink">
            {speaker.name}
          </h3>
          <p className="text-sm text-center text-hackathon-beige">
            {speaker.role}
          </p>
        </motion.div>
      </NeonGradientCard>
    </FollowerPointerCard>
  );
};

/**
 * Speakers
 * Renders speaker cards with tabs for Day 1 and Day 2
 */
const Speakers = () => {
  const [activeTab, setActiveTab] = useState("day1");
  const [isLoaded, setIsLoaded] = useState(true);

  // Pre-render both days' content but only show the active one
  return (
    <section
      id="speakers"
      className="py-12 sm:py-16 md:py-20 bg-hackathon-darker-blue mr-4 md:mr-0"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-hackathon-light-pink"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Jury Panel
        </motion.h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-t-lg overflow-hidden">
            <TabButton
              active={activeTab === "day1"}
              onClick={() => {
                setActiveTab("day1");
              }}
            >
              Day 1
            </TabButton>
            <TabButton
              active={activeTab === "day2"}
              onClick={() => {
                setActiveTab("day2");
              }}
            >
              Day 2
            </TabButton>
          </div>
        </div>

        {/* Both Day 1 and Day 2 jury members are rendered but only the active one is visible */}
        <div className="relative">
          {/* Day 1 Members */}
          <div
            className={cn(
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 transition-opacity duration-200",
              activeTab === "day1"
                ? "opacity-100 visible"
                : "opacity-0 invisible absolute inset-0"
            )}
          >
            {day1Members.map((speaker, index) => (
              <JuryMemberCard
                key={`day1-${index}`}
                speaker={speaker}
                index={index}
                isVisible={activeTab === "day1"}
              />
            ))}
          </div>

          {/* Day 2 Members */}
          <div
            className={cn(
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 transition-opacity duration-200",
              activeTab === "day2"
                ? "opacity-100 visible"
                : "opacity-0 invisible absolute inset-0"
            )}
          >
            {day2Members.map((speaker, index) => (
              <JuryMemberCard
                key={`day2-${index}`}
                speaker={speaker}
                index={index}
                isVisible={activeTab === "day2"}
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          justify-content: center;
        }
      `}</style>
    </section>
  );
};

export default Speakers;
