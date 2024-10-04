"use client";

import { useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  MenuIcon,
  XIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "lucide-react";
import Image from "next/image";
import FlickeringGrid from "@/components/ui/flickering-grid";
import GradualSpacing from "@/components/ui/gradual-spacing";
import ShinyButton from "@/components/ui/shiny-button";

const sections = ["product", "research", "company"];

const Header = ({ isMenuOpen, setIsMenuOpen, activeSection }) => (
  <header className="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur-md">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <motion.h1
        className="text-3xl font-bold text-white tracking-wide"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        ASACAM
      </motion.h1>

      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          {sections.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={`#${item}`}
                className={`text-white uppercase text-sm hover:text-white transition-colors ${
                  activeSection === item ? "border-b-2 border-white" : ""
                }`}
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      <ShinyButton className={"max-md:hidden"}>INVEST</ShinyButton>

      <Button
        variant="ghost"
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <XIcon /> : <MenuIcon />}
      </Button>
    </div>
  </header>
);

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) =>
  isMenuOpen && (
    <motion.nav
      className="fixed top-16 left-0 right-0 bg-black z-40 md:hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <ul className="py-4">
        {sections.map((item) => (
          <li key={item} className="px-4 py-2">
            <a
              href={`#${item}`}
              className="text-white hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
        <ShinyButton className={"block mx-4 mt-4"}>INVEST</ShinyButton>;
      </ul>
    </motion.nav>
  );

const HeroSection = () => {
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center  relative w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        {/* <Image src={"/surveillance.gif"} alt="Boat surveillance video" fill /> */}
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
            className="bg-white text-black hover:bg-white rounded-full px-6 py-3"
          >
            GET STARTED
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

const Section = ({ id, title, content, imageSrc, reversed = false }) => (
  <section id={id} className="py-20">
    <div
      className={`container mx-auto px-4 ${
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
        <Button className="bg-white text-black hover:bg-white rounded-full">
          Learn More
        </Button>
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

const NewsSection = () => (
  <section id="news" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        Latest News
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Groundbreaking Research in Renewable Energy",
            description:
              "A team of scientists has developed a new method to harness solar energy more efficiently, potentially revolutionizing the renewable energy sector.",
            date: "October 1, 2024",
          },
          {
            title: "AI Technology Transforms Healthcare",
            description:
              "New AI applications are improving patient outcomes by predicting illnesses before they develop, marking a significant advancement in medical technology.",
            date: "September 29, 2024",
          },
          {
            title: "Global Climate Summit 2024: Key Takeaways",
            description:
              "World leaders gathered to discuss climate action, emphasizing the need for immediate measures to combat climate change and its impacts.",
            date: "September 28, 2024",
          },
        ].map((newsItem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">
              {newsItem.title}
            </h3>
            <p className="mb-2">{newsItem.date}</p>
            <p className="mb-4">{newsItem.description}</p>
            <Button className="bg-white text-black rounded-full">
              Read More
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const BlogsSection = () => (
  <section id="blogs" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        Research & Blogs
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            title: "The Future of Transportation: Electric Vehicles",
            description:
              "As the world shifts towards sustainability, electric vehicles are becoming a viable alternative to traditional cars. Explore the latest advancements in EV technology.",
            date: "September 25, 2024",
          },
          {
            title: "Understanding Artificial Intelligence: A Beginner's Guide",
            description:
              "This blog post aims to demystify AI for newcomers, explaining its applications, benefits, and the ethical considerations surrounding its use.",
            date: "September 23, 2024",
          },
          {
            title: "How Blockchain is Changing the Financial Landscape",
            description:
              "Blockchain technology is revolutionizing finance by enhancing security, transparency, and efficiency in transactions. Learn how it's being implemented across various sectors.",
            date: "September 20, 2024",
          },
          {
            title: "Top 10 Strategies for Effective Time Management",
            description:
              "In today's fast-paced world, mastering time management is essential for productivity. Discover ten practical strategies to optimize your time.",
            date: "September 18, 2024",
          },
        ].map((blogItem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">
              {blogItem.title}
            </h3>
            <p className="mb-2">{blogItem.date}</p>
            <p className="mb-4">{blogItem.description}</p>
            <Button className="bg-white text-black rounded-full">
              Read More
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-white py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-4">
          <h3 className="text-xl font-bold">ASACAM</h3>
          <p className="">
            © {new Date().getFullYear()} ASACAM. All rights reserved.
          </p>
        </div>
        <ul className="flex space-x-4 mb-4">
          <li>
            <a href="#" className="">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h4 className="text-lg font-semibold">Follow Us</h4>
        <div className="flex space-x-4 mt-2">
          <a href="#" className="">
            Facebook
          </a>
          <a href="#" className="">
            Twitter
          </a>
          <a href="#" className="">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("product");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight; // Adjusted to include viewport height
      const sectionHeights = sections.map(
        (section) => document.getElementById(section).offsetTop
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

  //     font-[family-name:var(--font-geist-sans)]
  return (
    <div className="bg-black text-white w-screen overflow-hidden">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
      />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <HeroSection />
        <Section
          id="product"
          title="Innovative Surveillance Technology"
          content="Asacam provides state-of-the-art detection technology designed for precision and reliability. We addresses a range of industry challenges such as human short attention spans, false video alerts, lack of automation, and high labor costs. Our AI-driven toolchain offers instant target detections and live natural language descriptions in order to incredibly reducing false positives and enhancing productivity."
          imageSrc="/website.jpg"
        />
        <Section
          id="research"
          title="First Automated Unified Toolchain "
          content="We invest in extensive research to enhance our technology and adapt to the evolving needs of our clients."
          imageSrc="/tool.jpg"
          reversed
        />
        <Section
          id="company"
          title="Our Company"
          content="A livestream from any camera of your choice is analyzed by using advanced object detection and leveraging the powerful GPT-4 model. This combination allows for real-time, intelligent scene descriptions and therefore sends our customers monitoring capabilities to the next level. The results are displayed live and can be securely stored for future reference along with the AI-generated report."
          imageSrc="/diagram.jpg"
        />
        <NewsSection />
        <BlogsSection />
      </main>
      <Footer />
    </div>
  );
}
