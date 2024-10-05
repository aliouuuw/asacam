"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FlickeringGrid from "./ui/flickering-grid";

const industries = [
  {
    title: "Robotics",
    description:
      "Utilize AI for precise automation and monitoring, enhancing operational efficiency and safety in robotic systems.",
    bgImage: "/industries/robotics.jpg",
  },
  {
    title: "Manufacturing",
    description:
      "Boost production quality, safety, and operational efficiency with AI-powered monitoring and predictive maintenance.",
    bgImage: "/industries/manufacturing.jpg",
  },
  {
    title: "Security",
    description:
      "Leverage AI-driven surveillance to enhance threat detection, automate responses, and improve public safety.",
    bgImage: "/industries/security.jpg",
  },
  {
    title: "Healthcare",
    description:
      "Enhance patient care and security through AI solutions that optimize workflows, monitor critical areas, and ensure safety.",
    bgImage: "/industries/healthcare.jpg",
  },
  {
    title: "Defense",
    description:
      "Strengthen security and decision-making with real-time AI-powered surveillance for situational awareness and operational efficiency.",
    bgImage: "/industries/law.jpg",
  },
];

export default function Applications() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Set up a resize listener to determine if the screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };
    window.addEventListener("resize", handleResize);
    
    // Initial check
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get the scroll progress of the section
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start end", "end end"], // Adjust the offset to start/end appropriately
  });

  // Simulate a smooth horizontal scroll over the industries
  const xTransform = isMobile
  ? useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-20%", "-80%"]) // Mobile values
  : useTransform(scrollYProgress, [0, 0.3, 0.6, 1], ["30%", "15%", "0%", "-40%"]); // Desktop values

  // Control opacity and size changes over the scroll progress
  const fadeTransform = useTransform(scrollYProgress, [0, 0.5,  1], [0, 1, 1]); // Fade in the industries
  const widthTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["120px", "300px"]
  ); // Expand effect for all cards

  return (
    <section ref={ref} className="relative w-full h-[150vh] bg-black text-white">
      {/* Make this sticky until all elements are scrolled  */}
      <motion.div
        className="sticky top-[25%] flex w-fit h-[500px] px-8 md:px-16 xl:px-24 overflow-x-scroll"
        style={{ x: xTransform }}
      >
        <div>
          <h3 className="text-3xl mb-4">ENDLESS APPLICATIONS</h3>
          <p className="min-w-[400px]">
            Our AI-powered surveillance software offers a wide range of
            capabilities to meet the needs of various industries.
          </p>
        </div>
        {/* Overflow created by this element */}
        <motion.div className="flex w-full gap-x-4">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[250px] h-full rounded-lg overflow-hidden bg-cover"
              style={{
                backgroundImage: `url(${industry.bgImage})`,
                width: widthTransform,
              }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                className="p-6 bg-black/70 text-white h-full flex flex-col justify-between"
                style={{ opacity: fadeTransform }}
              >
                <h3 className="text-2xl font-bold">{industry.title}</h3>
                <p className="mt-2">{industry.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
