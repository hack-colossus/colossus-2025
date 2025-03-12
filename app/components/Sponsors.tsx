"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Lenis from "lenis";
import Link from "next/link";
import Image from "next/image";
import { TypingAnimation } from "@/components/magicui/typing-animation";

// ─── DATA & TYPES ─────────────────────────────────────────────

interface SlideData {
  title: string;
  button?: string;
  src: string;
  alt?: string;
  content?: string;
}

// Sponsor data for carousel and sticky cards.
const sponsorData: SlideData[] = [
  {
    title: "Stripe",
    button: "Explore Sponsor",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Stripe_Logo%2C_revised_2016.svg",
    content: "Payment processing platform.",
  },
  {
    title: "Polygon",
    button: "Explore Sponsor",
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Polygon_Logo.svg/1200px-Polygon_Logo.svg.png",
    content: "Blockchain scaling & infrastructure.",
  },
  {
    title: "AWS",
    button: "Explore Sponsor",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    content: "Cloud computing services.",
  },
  {
    title: "Adobe",
    button: "Explore Sponsor",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Adobe_Corporate_Logo.png",
    content: "Creative software solutions.",
  },
  {
    title: "Google",
    button: "Explore Sponsor",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    content: "Search engine & tech innovation.",
  },
];

// ─── CAROUSEL COMPONENT ─────────────────────────────────────────────

function Carousel({ slides }: { slides: SlideData[] }) {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = isPaused ? "paused" : "running";
    }
  }, [isPaused]);

  return (
    <div
      className="container mx-auto w-full overflow-hidden relative py-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={carouselRef}
        className="carousel-items flex items-center justify-center"
        style={{
          width: "fit-content",
          animation: `carouselAnim ${slides.length * 5}s infinite linear`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide key={index} slide={slide} />
        ))}
        {/* Duplicate slides for seamless looping */}
        {slides.map((slide, index) => (
          <Slide key={`dup-${index}`} slide={slide} />
        ))}
      </div>

      <style jsx>{`
        @keyframes carouselAnim {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50%));
          }
        }
        .carousel-items {
          display: flex;
          width: max-content;
        }
        .carousel-focus:hover {
          transition: all 0.8s;
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}

function Slide({ slide }: { slide: SlideData }) {
  return (
    <div
      className="carousel-focus flex items-center justify-center mx-2 transition-all duration-800 ease-in-out"
      style={{ width: "300px", height: "225px" }}
    >
      <Image
        className="w-full h-full object-cover rounded-lg shadow-lg"
        src={slide.src}
        alt={slide.alt || "Carousel Image"}
        width={300}
        height={225}
      />
    </div>
  );
}

// ─── STICKY SCROLL SPONSOR CARDS ─────────────────────────────────────────────

const StickyCard = ({
  i,
  title,
  content,
  src,
  progress,
  range,
  targetScale,
}: SlideData & {
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const imagescale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="flex flex-col h-screen items-center justify-center mt-8 sticky top-0"
    >
      <motion.div
        className="p-8 shadow-md w-[90%] sm:w-[80%] md:w-[60%] lg:w-[1000px] h-[500px] sm:h-[200px] md:h-[300px] lg:h-[500px] rounded-xl overflow-hidden relative flex flex-col items-center justify-center bg-hackathon-purple"
        style={{
          scale,
          top: `calc(-10px + ${i * 25}px)`,
        }}
      >
        <motion.img
          src={src}
          alt={title}
          style={{ opacity, scale: imagescale }}
          className="object-contain w-full h-3/4"
        />
        <div className="text-center p-4">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <p className="text-gray-300 text-sm">{content}</p>
        </div>
      </motion.div>
    </div>
  );
};

const StickyCardList = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    // Removed unused parameter
    lenis.on("scroll", () => {});

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <div
        ref={container}
        className="flex flex-col items-center justify-center space-y-8"
      >
        <TypingAnimation
          className="text-4xl font-semibold pt-20 text-hackathon-purple dark:text-white"
          duration={100}
        >
          Welcome to Our Sponsors
        </TypingAnimation>
        {/* Wrap the cards in a Link if desired */}
        <Link href={"indivbook"}>
          {sponsorData.map((sponsor, index) => {
            const targetScale = 1 - (sponsorData.length - index) * 0.05;
            const range = [index / sponsorData.length, 1];
            return (
              <StickyCard
                i={index}
                key={index}
                title={sponsor.title}
                content={sponsor.content!}
                src={sponsor.src}
                range={range}
                targetScale={targetScale}
                progress={scrollYProgress}
              />
            );
          })}
        </Link>
      </div>
    </div>
  );
};

// ─── MAIN COMPONENT ─────────────────────────────────────────────

export default function SponsorsShowcase() {
  return (
    <div className="min-h-screen bg-hackathon-darker-blue text-white">
      <div className="pt-20">
        <h2 className="text-4xl font-bold text-center mb-8 border-b border-white pb-4 text-hackathon-purple">
          Sponsors
        </h2>
        {/* Carousel Section */}
        <Carousel slides={sponsorData} />
        {/* Sticky Scroll Sponsor Cards Section */}
        <StickyCardList />
      </div>
    </div>
  );
}
