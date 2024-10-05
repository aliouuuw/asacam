"use client";

import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ChevronDownIcon,
} from "lucide-react";
import GradualSpacing from "@/components/ui/gradual-spacing";
import FlickeringGrid from "./ui/flickering-grid";

const Hero = () => {
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center relative w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <FlickeringGrid
            className="z-0 absolute inset-0 size-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}
          />
      </motion.div>
      <div className="relative z-10 p-8 rounded-lg text-center max-w-full">
        <GradualSpacing
          className="font-display text-center text-4xl font-bold -tracking-widest md:text-7xl md:leading-[5rem]"
          text="ASACAM: Redefining Surveillance"
        />
        <motion.h2
          className="text-6xl font-bold mb-4 text-white md:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ASACAM: Redefining Surveillance
        </motion.h2>
        <motion.p
          className="text-xl mb-8 text-white w-full text-balance"
          initial={{ opacity: 0, y: 20, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Empowering video monitoring through AI-driven insights
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-white text-black rounded-full px-6 py-3"
          >
            BOOK A DEMO
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        style={{ opacity }}
      >
        <div className="animate-bounce">
          <ChevronDownIcon className="w-8 h-8 text-white" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
