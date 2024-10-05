"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header/Header";
import MobileMenu from "@/components/Header/MobileMenu";
import Hero from "@/components/Style2/Hero";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs/AboutUs";
import TextRevealByWord from "@/components/ui/text-reveal";
import HowItWorks from "@/components/HowItWorks";
import GridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import Applications from "@/components/Applications";
import { Features } from "@/components/Features";
import ResearchSection from "@/components/Research";
import CompanySection from "@/components/Company";

const sections = ["product", "research", "company"];

const Section = ({ id, title, content, imageSrc, reversed = false }) => (
  <section id={id} className="py-20">
    <div
      className={`px-8 md:px-16 xl:px-24 ${
        reversed ? "flex-row-reverse" : ""
      } flex items-center`}
    >
      <motion.div
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 px-6"
      >
        <h3 className="text-4xl font-bold text-white mb-4">{title}</h3>
        <p className="text-lg text-white mb-6">{content}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: reversed ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative w-full md:w-1/2 h-64 md:h-96"
      >
        <Image
          src={imageSrc}
          alt={`${title} Image`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          unoptimized
        />
      </motion.div>
    </div>
  </section>
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight; // Adjusted to include viewport height
      const sectionHeights = sections.map(
        (section) =>
          document.getElementById(section).offsetTop +
          document.getElementById(section).clientHeight / 2
      );
      const activeIndex = sectionHeights.findIndex(
        (height) => height > scrollPosition
      );

      // Adjust active section based on activeIndex
      setActiveSection(
        activeIndex === -1
          ? sections[sections.length - 1]
          : sections[activeIndex - 1]
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const introductionText = `
    ASACAM is building the future of security with the first automated unified toolchain, transforming surveillance video into comprehensive and precise report documents.
  `;

  return (
    <div className="bg-black text-white w-screen overflow-clip">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        sections={sections}
      />
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        sections={sections}
      />
      <main>
        <Hero />
        <div id="product">
          <div className="z-10 flex items-center justify-center md:h-screen bg-white relative">
            <TextRevealByWord text={introductionText} />
          </div>
          <Features />
          <HowItWorks />
          <Applications />
        </div>
        <ResearchSection />
        <CompanySection />
      </main>
      <Footer />
    </div>
  );
}
