"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import ShinyButton from "../ui/shiny-button";

const Header = ({ isMenuOpen, setIsMenuOpen, activeSection, sections }) => (
  <header className="fixed w-full z-50 h-16 bg-black bg-opacity-50 backdrop-blur-md">
    <div className="px-8 md:px-16 xl:px-24 py-4 flex justify-between items-center">
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

      <ShinyButton className={"max-md:hidden bg-white text-black h-fit py-1 px-4"}>INVEST</ShinyButton>

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

export default Header;
