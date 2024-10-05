"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div
      className="h-[60vh] px-8 md:px-16 xl:px-24 py-14 overflow-y-auto flex justify-center relative space-x-10"
      ref={ref}
    >
      <div className="relative flex items-start">
        <div>
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="h-[50vh] p-4 mb-16 space-y-4 flex flex-col justify-center"
            >
              <motion.h2
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-3xl font-bold text-white flex items-center"
              >
                <span className="w-10 h-10 rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </span>
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg text-gray-300 max-w-sm"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-[10vh]" />
        </div>
      </div>
      <div
        className={cn(
          "hidden md:block h-[50vh] w-[40vw] rounded-md border sticky top-0 p-4 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </div>
  );
};
