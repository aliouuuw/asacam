"use client"

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import ShinyButton from "../ui/shiny-button";
import BoundingBoxAnimation from "../ui/BoundingBoxAnimation";
import HyperText from "../ui/hyper-text";
import { useEffect } from "react";

const Marquee = ({ partners }) => {
    const controls = useAnimation();
  
    useEffect(() => {
      // Start the animation once the component is mounted
      controls.start({
        x: ["100%", "-100%"], // Animate from 100% to -100% of the container width
        transition: {
          repeat: Infinity, // Infinite scrolling
          ease: "linear", // Smooth scrolling
          duration: 20, // Time it takes for one full scroll (adjust for speed)
        },
      });
    }, [controls]);
  
    return (
      <motion.div
        className="absolute bottom-0 left-0 w-full bg-black z-20 px-8 md:px-16 xl:px-24  py-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
      >
        <h3 className="text-xl font-bold uppercase">Trusted by:</h3>
        <div className="flex w-full justify-evenly"  >
          {partners.map((partner, index) => (
            <Image
              key={index}
              src={partner.src}
              alt={partner.name}
              width={100}
              height={40}
              className="grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </motion.div>
    );
  };

// Motion Variants for animations
const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.3 },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const partners = [
    { name: "Partner 1", src: "/logo-placeholder.png" },
    { name: "Partner 2", src: "/logo-placeholder.png" },
    { name: "Partner 3", src: "/logo-placeholder.png" },
    { name: "Partner 4", src: "/logo-placeholder.png" },
    // Add more partners as needed
  ];

  return (
    <section className="px-8 md:px-16 xl:px-24 relative flex items-center h-screen bg-black text-white">
      {/* bg-gradient-to-l from-gray-600 to-60% to-black */}
      {/* Optional: Some subtle motion effects or SVG background */}
      <BoundingBoxAnimation />
      <motion.div
        initial={{ scale: 1.2, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1, transition: { duration: 1.5 } }}
        className="absolute inset-0 z-10 bg-gradient-to-l from-transparent to-60% to-black"
      />

      <motion.div
        className="z-10 flex flex-col justify-center space-y-6 md:max-w-[70%] text-pretty"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Pre-title */}
        <motion.p
          className="animate-pulse text-sm tracking-wide uppercase"
          variants={fadeIn}
        >
          ⚡ Empowering Video Monitoring
        </motion.p>

        {/* Title */}
        <motion.h1 className="text-5xl md:text-6xl font-bold" variants={fadeIn}>
          <div className="flex items-center gap-x-4">
          Your
          <span>
            <HyperText className="font-bold" text="Security," />
          </span>
        </div>
          Enhanced with AI.
        </motion.h1>

        {/* Subtitle */}
        <motion.p className="text-lg max-w-2xl" variants={fadeIn}>
          Say goodbye to human errors, unnecessary alerts, and high labor costs
          with our enterprise grade AI-driven solution.
        </motion.p>

        {/* Call to Action Button */}
        <motion.div variants={fadeIn}>
          <ShinyButton className={"bg-white text-black"}>
            BOOK A DEMO
          </ShinyButton>
        </motion.div>
      </motion.div>
      <Marquee partners={partners} />
    </section>
  );
}
