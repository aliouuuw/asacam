"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Utility function to generate random positions and sizes
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

// Randomly pick a label from the options and classify some as threats
const getRandomLabel = () => {
  const labels = [
    { label: "Car", isThreat: false },
    { label: "Person", isThreat: false },
    { label: "Boat", isThreat: false },
    { label: "Plane", isThreat: false },
    { label: "Threat", isThreat: true }, // New threat label
  ];
  return labels[getRandomInt(0, labels.length)];
};

export default function BoundingBoxAnimation() {
  const canvasRef = useRef(null);
  const boxesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    // Box properties (initial state)
    const boxes = Array.from({ length: 5 }, () => ({
      x: getRandomInt(50, width - 100),
      y: getRandomInt(50, height - 100),
      w: getRandomInt(50, 100),
      h: getRandomInt(80, 160),
      targetX: getRandomInt(50, width - 100),
      targetY: getRandomInt(50, height - 100),
      labelData: getRandomLabel(), // Random label and threat status
    }));

    boxesRef.current = boxes;

    // Draw the bounding box with appropriate colors for threats
    const drawBox = (x, y, w, h, labelData) => {
      ctx.strokeStyle = labelData.isThreat ? "#FF0000" : "#FFFFFF"; // Red for threats, white for normal
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y, w, h);

      // Draw the label on top of each box
      ctx.font = "12px Chakra Petch";
      ctx.fillStyle = labelData.isThreat ? "#FF0000" : "#FFFFFF"; // Red text for threats
      ctx.fillText(labelData.label, x + 5, y - 5);
    };

    const clearCanvas = () => {
      ctx.clearRect(0, 0, width, height);
    };

    const animateBoxes = () => {
      clearCanvas();

      // Update box positions gradually
      boxes.forEach((box) => {
        box.x += (box.targetX - box.x) * 0.02; // Smooth transition in X
        box.y += (box.targetY - box.y) * 0.04; // Smooth transition in Y

        // Once close to the target, assign new target
        if (Math.abs(box.targetX - box.x) < 1) {
          box.targetX = getRandomInt(50, width - 100);
        }
        if (Math.abs(box.targetY - box.y) < 1) {
          box.targetY = getRandomInt(50, height - 100);
        }

        drawBox(box.x, box.y, box.w, box.h, box.labelData);
      });

      requestAnimationFrame(animateBoxes); // Smooth animation loop
    };

    animateBoxes(); // Start the animation

    // Cleanup on component unmount
    return () => {
      clearCanvas();
      cancelAnimationFrame(animateBoxes);
    };
  }, []);

  return (
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ duration: 1.5 }}
    >
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className="w-full h-full"
      />
    </motion.div>
  );
}
