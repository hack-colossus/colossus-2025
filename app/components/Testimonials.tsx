"use client";
import React, { useState, useEffect } from "react";

const TestimonialSlider = () => {
  const testimonials = [
    {
      team: "Snack Overflow",
      track: "Open Innovation",
      favorite: "Good mentors and student mentors.",
      impact:
        "Gave us more confident on the problem statement and project that we worked on.",
      advice:
        "I have been recommending a lot of them to attend the other events conducted by AIT due to the pleasant experience in the hackathon. I would say that it was smoothly conducted and the team appreciated the judgement and process.",
      rating: 4,
    },
    {
      team: "Team Surveillance WIZ!",
      track: "Open Innovation",
      favorite: "Food and Support by Volunteers",
      impact: "Connection and Help in development and improving my project",
      advice: "You should definitely give a try.",
      rating: 5,
    },
    {
      team: "White Hats",
      track: "Open Innovation",
      favorite:
        "Seeing how, on an ordinary day, many people work on their talents in private, while at the same event, others step up to showcase their skills, transforming the entire college environment. It was truly inspiring to witness this shift, motivating others to do the same.",
      impact:
        "Winning Hackcolossus was a huge motivation, especially since it was our first major win after putting in our utmost effort. It also taught us valuable lessons—not just about exploring different opportunities, but also about the importance of staying grounded and maintaining strong bonds within the team. This experience reinforced that success is just the beginning of a bigger journey.",
      advice:
        "Be real, explore as much as possible, and focus on solving problems with unique features. Stay humble, and most importantly, don't get demotivated by comparing your journey to others—everyone has their own starting point. Just give it your best and enjoy the experience!",
      rating: 4,
    },
    {
      team: "Hack-Wizards",
      track: "Open Innovation",
      favorite:
        "Best part?That magical moment that our project finally executed with our assumed results.And our struggle to present project to mentors and juries.",
      impact: "It helped me learn new technologies and softwares.",
      advice:
        "I would definitely suggest others to participate in Hackcolossus.It is great place in learn,innovate and collaborate.My experience there was invaluable.",
      rating: 5,
    },
    {
      team: "electrostorm",
      track: "IOT & Robotics",
      favorite: "working time at night",
      impact:
        "we used the same project in other competition that helped us to win",
      advice: "it is a great experience as a developer",
      rating: 3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

interface GoToSlide {
    (index: number): void;
}

const goToSlide: GoToSlide = (index: number): void => {
    setCurrentSlide(index);
};

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Rating stars component
  const RatingStars = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={i < rating ? "#FB2576" : "none"}
            stroke={i < rating ? "#FB2576" : "#846EB1"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <h2 className="font-press-start text-center text-xl md:text-2xl mb-8 text-hackathon-lavender">
        WINNER <span className="text-retro-pink">TESTIMONIALS</span>
      </h2>

      <div className="relative">
        {/* Main testimonial card */}
        <div className="border-2 overflow-hidden border-retro-purple bg-hackathon-darker-blue rounded-lg p-4 md:p-6 shadow-lg relative">
          <div className="absolute top-2 right-2">
            <RatingStars rating={testimonials[currentSlide].rating} />
          </div>

          {/* Testimonial header */}
          <div className="mb-4 flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h3 className="font-press-start text-base md:text-lg text-retro-pink">
                {testimonials[currentSlide].team}
              </h3>
              <p className="font-jetbrains text-xs md:text-sm text-hackathon-lavender">
                {testimonials[currentSlide].track}
              </p>
            </div>
          </div>

          {/* Testimonial content */}
          <div className="space-y-4">
            <div>
              <h4 className="font-press-start text-xs md:text-sm text-retro-green mb-2">
                FAVORITE PART:
              </h4>
              <div className="border-l-4 border-retro-pink pl-4">
                <p className="font-jetbrains text-sm md:text-base text-hackathon-beige">
                  "{testimonials[currentSlide].favorite}"
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-press-start text-xs md:text-sm text-retro-green mb-2">
                IMPACT:
              </h4>
              <p className="font-jetbrains text-sm md:text-base text-hackathon-beige">
                {testimonials[currentSlide].impact}
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-hackathon-purple">
              <h4 className="font-press-start text-xs md:text-sm text-retro-yellow mb-2">
                ADVICE:
              </h4>
              <p className="font-jetbrains text-sm md:text-base text-hackathon-light-pink">
                {testimonials[currentSlide].advice}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation buttons - outside on larger screens, inside on mobile */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:-ml-4 bg-hackathon-dark-blue p-1 md:p-2 rounded-full border-2 border-retro-purple hover:bg-retro-purple transition-colors"
          aria-label="Previous testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-retro-pink"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:-mr-4 bg-hackathon-dark-blue p-1 md:p-2 rounded-full border-2 border-retro-purple hover:bg-retro-purple transition-colors"
          aria-label="Next testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-retro-pink"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Slide indicators */}
      <div className="flex justify-center mt-4 md:mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-retro-pink" : "bg-hackathon-purple"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile team indicator */}
      <div className="md:hidden flex justify-center mt-4">
        <p className="font-press-start text-xs text-hackathon-lavender">
          {currentSlide + 1}/{testimonials.length}
        </p>
      </div>
    </div>
  );
};

export default TestimonialSlider;
