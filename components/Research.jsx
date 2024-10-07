"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Brain, TrendingUp, Users } from "lucide-react";
import Image from "next/image";

const researchAreas = [
  {
    title: "Object Detection",
    icon: Camera,
    content:
      "We tested our computer vision models on multiple datasets, including RGB and infrared imagery, achieving precision and recall rates above 93% during maritime reconnaissance missions with drones.",
  },
  {
    title: "Large Language Models",
    icon: Brain,
    content:
      "By integrating LLMs, we've enhanced scene understanding and natural language descriptions. Our models can process and describe complex scenarios in real-time with 99% contextual accuracy.",
  },
  {
    title: "Scalability",
    icon: TrendingUp,
    content:
      "No more need to buy specific cameras; our app can be deployed on any platform. Designed with scalability in mind, it seamlessly grows with your needs.",
  },
  {
    title: "Competitive Landscape",
    icon: Users,
    content:
      "Setting a new standard in the market, we've built the first automated and unified toolchain leveraging LLMs for live video monitoring missions.",
  },
];

export default function ResearchSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section
      id="research"
      className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Research & Innovation
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Driving the future of AI-powered surveillance through cutting-edge
            research.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="hover:shadow-xl transform transition"
            >
              <Card className="bg-black border border-white/20 text-white h-full">
                <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                  <area.icon className="w-8 h-8 text-gray-300" />{" "}
                  {/* Color for icons */}
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300">{area.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          className="px-4 sm:px-6 lg:px-8"
        >
          <Card className="bg-black border border-white/20 text-white p-6 shadow-lg flex flex-col items-center">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-white mb-4">
                LLM in Video Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-fit max-w-4xl flex items-center justify-center">
                <Image
                  src="/diagram.jpg" // Ensure correct path to your image
                  alt="System Architecture Diagram"
                  width={1000}
                  height={600}
                  objectFit="cover"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
