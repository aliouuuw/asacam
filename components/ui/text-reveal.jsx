"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Utility function for className handling (optional)
import { cn } from "@/lib/utils";

export const TextRevealByWord = ({ text, className }) => {
  const targetRef = useRef(null);

  // Scroll progress linked to targetRef
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // Smooth scroll trigger
  });

  // Split text into words for animation
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0", className)}>
      <div className="sticky top-0 z-10 mx-auto flex h-[50vh] max-w-4xl items-center px-8 py-16">
        <motion.p
          className="flex flex-wrap text-2xl font-bold text-white md:text-3xl lg:text-4xl xl:text-5xl"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          {words.map((word, i) => {
            const start = (i / words.length)*0.7;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </motion.p>
      </div>
    </div>
  );
};

// Container motion variant for better control
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Small delay between each word
      duration: 0.8, // Slower reveal
    },
  },
};

const Word = ({ children, progress, range }) => {
  // No easing in useTransform, just simple mapping from input to output
  const opacity = useTransform(progress, range, [0, 1]);
  const scale = useTransform(progress, range, [0.95, 1]);

  return (
    <span className="relative mr-2 lg:mr-4">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity, scale }}
        className={"text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
