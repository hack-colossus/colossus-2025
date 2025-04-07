"use client";
import React, { useState, CSSProperties } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// Utility to conditionally join classes – you can use your own implementation.
import { cn } from "@/lib/utils";

/**
 * NeonGradientCard
 * A card with neon gradient effects
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

// Day 1 and Day 2 jury members (with added LinkedIn URL and description)
const day1Members = [
  {
    name: "D Rahul Singh ",
    role: "Jury Member",
    image: "/jury/rahul.png",
    linkedIn: "https://www.linkedin.com/in/d-rahulsingh/",
    description: "Kaggle Grandmaster, and Software Engineer @ Wipro",
  },
  {
    name: "Abdulkhadeer Shirahatti",
    role: "Jury Member",
    image: "/jury/Abdulkhadeer.jpeg",
    linkedIn: "https://www.linkedin.com/in/abdulkhadeer-shirahatti-399a7abb/",
    description: "Founder of Oxynyc innovations private limited",
  },
  {
    name: "Navyaa Sharma",
    role: "Jury Member",
    image: "/jury/Navyaa.png",
    linkedIn: "https://www.linkedin.com/in/navyaa-sharma-here/",
    description: "Software engineer @ Google",
  },
  {
    name: "Shashank Srivatsa ",
    role: "Jury Member",
    image: "/jury/Shashank.jpg",
    linkedIn: "https://www.linkedin.com/in/shashank-srivatsa-116460135/",
    description: " MD and Chairman of Codevice Solution Pvt Ltd",
  },
  {
    name: "Sanjib Ghosh",
    role: "Jury Member",
    image: "/jury/Sanjib.png",
    linkedIn: "https://www.linkedin.com/in/sanjib-ghosh-geng",
    description: "Senior Manager @ Mercedes-Benz R&D India",
  },
];

const day2Members = [
  {
    name: "Pallavi Lokesh Shetty",
    role: "Jury Member",
    image: "/jury/pallavi-shetty.jpeg",
    linkedIn: "https://www.linkedin.com/in/pallavilokeshshetty/ ",
    description: "Sr Architect MW and Security Lead @ Microsoft",
  },
  {
    name: "Ascharya Soni",
    role: "Jury Member",
    image: "/jury/Ascharya Soni.jpeg",
    linkedIn: "https://www.linkedin.com/in/ascharya/",
    description: "Software Developer Engineer 2 @ Pice",
  },
  {
    name: "Hardik Arora",
    role: "Jury Member",
    image: "/jury/Hardik Arora.jpeg",
    linkedIn: "https://www.linkedin.com/in/hardika2311/",
    description: "Software Engineer @ Pice",
  },
  {
    name: "Prakhar Sharan",
    role: "Jury Member",
    image: "/jury/prakhar-sharan.jpeg",
    linkedIn: "https://www.linkedin.com/in/prakhar-sharan-dev/",
    description: "Software engineer @ Amazon",
  },
  {
    name: "Akanksha Buchke",
    role: "Jury Member",
    image: "/jury/akanksha-buchke.JPG",
    linkedIn: "https://www.linkedin.com/in/akanksha-buchke/",
    description: "Senior SDE @ Intuit",
  },
  {
    name: "Brijesh Kumar Mishra",
    role: "Jury Member",
    image: "/jury/brijesh-kumar-mishra.jpeg",
    linkedIn: "https://www.linkedin.com/in/brijesh-kumar-mishra-598802165/",
    description: "Deputy Manager @ Page Industries ",
  },
];

interface Speaker {
  name: string;
  role: string;
  image: string;
  linkedIn?: string;
  description?: string;
}

/**
 * JuryMemberCard
 * Component for individual jury member card
 */
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
    <div
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
          {/* Modified image container with improved styling */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative mx-auto mb-4 overflow-hidden rounded-full border-4 border-hackathon-lavender">
            <a
              href={speaker.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <Image
                src={speaker.image}
                alt={speaker.name}
                fill
                sizes="(max-width: 640px) 8rem, (max-width: 768px) 10rem, 12rem"
                className="object-cover object-center"
                priority
              />
            </a>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center text-hackathon-light-pink">
            {speaker.name}
          </h3>
          <p className="text-sm text-center text-hackathon-beige">
            {speaker.role}
          </p>
          <p className="text-base text-center text-hackathon-beige mt-2">
            {speaker.description}
          </p>
        </motion.div>
      </NeonGradientCard>
    </div>
  );
};

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
 * Speakers
 * Renders speaker cards with tabs for Day 1 and Day 2
 */
const Speakers = () => {
  const [activeTab, setActiveTab] = useState("day1");
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
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 transition-opacity duration-200",
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
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 transition-opacity duration-200",
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
    </section>
  );
};

export default Speakers;
