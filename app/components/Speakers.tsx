"use client";

import React, { useEffect, useState, CSSProperties } from "react";
import { motion, AnimatePresence, useMotionValue, MotionValue } from "framer-motion";
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
      className={cn("relative", className)}
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
        "relative z-10 w-full",
        "rounded-[var(--border-radius)]",
        "transition-shadow duration-300",
        "hover:shadow-[0_0_10px_var(--neon-first-color),0_0_30px_var(--neon-first-color)]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "w-full min-h-[120px]",
          "rounded-[calc(var(--border-radius)-var(--border-size))]",
          "bg-hackathon-dark-blue p-6 sm:p-8",
          "dark:bg-neutral-900"
        )}
      >
        {children}
      </div>
    </div>
  );
};

// Sample speakers data.
const speakersData = [
  {
    name: "John Doe",
    role: "CEO, Tech Innovators",
    image: "/placeholder.svg",
  },
  {
    name: "Jane Smith",
    role: "CTO, Future Systems",
    image: "/placeholder.svg",
  },
  {
    name: "Mike Johnson",
    role: "Founder, CodeCraft",
    image: "/placeholder.svg",
  },
  {
    name: "Sarah Williams",
    role: "AI Researcher, DataMinds",
    image: "/placeholder.svg",
  },
];

/**
 * Speakers
 * Renders each speaker card with retro pointer interactions and a neon gradient glow.
 */
const Speakers = () => {
  return (
    <section id="speakers" className="py-20 bg-hackathon-darker-blue">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-hackathon-light-pink"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Galactic Guides
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakersData.map((speaker, index) => (
            <FollowerPointerCard
              key={index}
              title={speaker.name}
              className="transition duration-300" // Additional classes if needed
            >
              <NeonGradientCard
                neonColors={{
                  firstColor: "#ff77ff",
                  secondColor: "#ff77ff",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 border-4 border-hackathon-lavender"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-hackathon-light-pink">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-hackathon-beige">
                    {speaker.role}
                  </p>
                </motion.div>
              </NeonGradientCard>
            </FollowerPointerCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
