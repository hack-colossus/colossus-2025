"use client";

import { useState, ReactElement, ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

/* ============================================================
   NeonGradientCard Component
   ------------------------------------------------------------
   This version removes the neon background pseudo-elements,
   leaving just a simple card with optional hover glow.
   ============================================================ */

interface NeonColorsProps {
  firstColor: string;
  secondColor: string;
}

// Extend HTMLAttributes to properly type additional props
interface NeonGradientCardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: ReactElement;
  className?: string;
  children?: ReactNode;
  borderSize?: number; // In pixels
  borderRadius?: number; // In pixels
  neonColors?: NeonColorsProps;
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
      // Expose custom CSS variables for border size/color customization.
      style={
        {
          "--border-size": `${borderSize}px`,
          "--border-radius": `${borderRadius}px`,
          "--neon-first-color": neonColors.firstColor,
          "--neon-second-color": neonColors.secondColor,
        } as CSSProperties
      }
      // Apply hover glow effect and rounded corners.
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
          "bg-hackathon-dark-blue p-4 sm:p-6",
          "dark:bg-neutral-900"
        )}
      >
        {children}
      </div>
    </div>
  );
};

/* ============================================================
   FAQ Component
   ------------------------------------------------------------
   Renders FAQ items. When active, item is wrapped in the
   NeonGradientCard. No neon background is drawn—only a
   border radius + optional hover shine remain.
   ============================================================ */

const faqData = [
  {
    question: "What is a hackathon?",
    answer:
      "A hackathon is an event where participants work together on software projects over a short period, usually 24-48 hours.",
  },
  {
    question: "Who can participate?",
    answer:
      "Anyone interested in technology and innovation can join, regardless of their skill level.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "Coding skills are helpful, but hackathons welcome designers, project managers, and creative thinkers too.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring your laptop, charger, and any essential devices. We'll provide food, drinks, and a workspace.",
  },
  {
    question: "Is there a fee to participate?",
    answer: "No, Colossus 2025 is completely free!",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isActive: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isActive, onClick }: FAQItemProps) => {
  // Using consistent pink neon colors.
  const pinkNeonColors = { firstColor: "#ff77ff", secondColor: "#ff77ff" };

  const content = (
    <>
      <div className="flex justify-between items-center">
        <h3 className="text-lg sm:text-xl font-press-start text-hackathon-light-pink">
          {question}
        </h3>
        <span className="text-xl sm:text-2xl font-jetbrains text-hackathon-light-pink">
          {isActive ? "−" : "+"}
        </span>
      </div>
      {isActive && (
        <p className="mt-4 text-base sm:text-xl font-jetbrains text-hackathon-beige leading-relaxed">
          {answer}
        </p>
      )}
    </>
  );

  // If active, wrap in NeonGradientCard with a pink glow.
  if (isActive) {
    return (
      <NeonGradientCard
        onClick={onClick}
        className="cursor-pointer mb-6"
        neonColors={pinkNeonColors}
        borderSize={3}
        borderRadius={16}
      >
        {content}
      </NeonGradientCard>
    );
  }

  // Inactive card: a simple border with pink glow on hover.
  return (
    <div
      onClick={onClick}
      className={cn(
        "cursor-pointer mb-6 border-2 border-hackathon-purple bg-hackathon-dark-blue p-4 sm:p-6",
        "transition-all duration-300",
        "hover:border-hackathon-light-pink hover:shadow-[0_0_10px_#ff77ff,0_0_30px_#ff77ff]"
      )}
    >
      {content}
    </div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-20 bg-hackathon-darker-blue font-mono"
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-press-start text-center mb-6 sm:mb-8 border-b-2 border-hackathon-light-pink pb-2 sm:pb-4 text-hackathon-light-pink">
          FAQs
        </h2>
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isActive={activeIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
