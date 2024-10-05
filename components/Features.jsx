"use client";
import React from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldIcon,
  BrainCircuitIcon,
  FileTextIcon,
  BellIcon,
  Radio,
  ScanEye,
} from "lucide-react";
import GridPattern from "./ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const content = [
  {
    icon: ScanEye,
    title: "INSTANT DETECTIONS",
    description:
      "Leverage advanced AI models for accurate and efficient surveillance.",
    content: <div> Collaborative Editing</div>,
  },
  {
    icon: BrainCircuitIcon,
    title: "LLM INTEGRATION",
    description:
      "Get instant, natural language descriptions of detected events.",
    content: (
      <Image
        src="/tool.jpg"
        width={1000}
        height={1000}
        className="object-cover"
        alt="linear board demo"
      />
    ),
  },
  {
    icon: FileTextIcon,
    title: "AUTOMATED REPORTING",
    description:
      "Generate comprehensive reports with the history of all detections.",
    content: <div> Version control</div>,
  },
  {
    icon: Radio,
    title: "HARDWARE AGNOSTIC",
    description: "Compatible with any camera, no need for specific hardware.",
    content: <div> Running out of content</div>,
  },
  // {
  //   icon: ShieldIcon,
  //   title: "NEAR-ZERO FALSE POSITIVES",
  //   description: "Significantly decrease false alerts using LLM technology.",
  //   content: <div> NEAR-ZERO FALSE POSITIVES</div>,
  // },
];
const FeaturesGrid = ({ content }) => {
  return (
    <div className="grid md:grid-cols-2 grid-flow-row gap-4 px-8 md:px-16 xl:px-24 place-items-center">
      {content.map((item, index) => (
        <div
          key={item.title + index}
          className="p-4 space-y-4 flex flex-col justify-center"
        >
          <motion.h2
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="text-3xl text-white flex items-center"
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
              opacity: 1,
            }}
            className="text-lg text-gray-300 max-w-sm"
          >
            {item.description}
          </motion.p>
        </div>
      ))}
    </div>
  );
};

export function Features() {
  return (
    <div className="relative py-16 h-fit space-y-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        One Frame at a Time
      </h2>
      <div className="h-fit w-full px-16 flex justify-center">
        <Image
          src={"/website.jpg"}
          alt={"Mock App Dashboard"}
          width={1000}
          height={600}
          objectFit="cover"
          className="rounded-lg"
          unoptimized
        />
      </div>
      <div className="absolute inset-0 z-10">
        <GridPattern
          numSquares={30}
          maxOpacity={0.2}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </div>
      <FeaturesGrid content={content} />
    </div>
  );
}
