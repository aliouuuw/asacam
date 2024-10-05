"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const industries = [
  {
    title: "Retail",
    description:
      "Enhance security, optimize operations, and improve customer experience.",
    bgImage: "/industries/retail.jpg",
  },
  {
    title: "Manufacturing",
    description:
      "Improve safety, efficiency, and quality control in manufacturing facilities.",
    bgImage: "/industries/manufacturing.jpg",
  },
  {
    title: "Transportation",
    description:
      "Enhance safety, efficiency, and security in transportation systems.",
    bgImage: "/industries/transportation.jpg",
  },
  {
    title: "Healthcare",
    description:
      "Improve patient safety, optimize workflows, and enhance security in healthcare facilities.",
    bgImage: "/industries/healthcare.jpg",
  },
  {
    title: "Law Enforcement",
    description:
    "Enhance security, operational efficiency, and decision-making through advanced AI surveillance and real-time data analysis.",
    bgImage: "/industries/law.jpg",
  },
];

export default function Applications() {
  const ref = useRef(null);

  // Get the scroll progress of the section
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start end", "end end"], // Adjust the offset to start/end appropriately
  });

  // Simulate a smooth horizontal scroll over the industries
  const xTransform = useTransform(scrollYProgress, [0, 1], ["30%", "-50%"]);

  // Control opacity and size changes over the scroll progress
  const fadeTransform = useTransform(scrollYProgress, [0, 1], [0, 1]); // Fade in the industries
  const widthTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["120px", "300px"]
  ); // Expand effect for all cards

  return (
    <section ref={ref} className="relative w-full h-[150vh] bg-white text-black">
      {/* Make this sticky until all elements are scrolled  */}
      <motion.div
        className="sticky top-16 flex w-fit h-[500px] px-8 md:px-16 xl:px-24 py-16 overflow-x-scroll"
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
