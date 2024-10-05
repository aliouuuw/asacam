"use client";

import { motion } from "framer-motion";
import ShinyButton from "../ui/shiny-button";

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, sections }) =>
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
        <ShinyButton className={"block mx-4 mt-4"}>INVEST</ShinyButton>
      </ul>
    </motion.nav>
  );

export default MobileMenu;
