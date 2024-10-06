"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

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
      <div className="flex w-full justify-evenly">
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

export default Marquee;
