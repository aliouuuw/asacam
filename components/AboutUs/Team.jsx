"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Array of team members
const persons = [
  {
    name: "Abdoulaye DIALLO",
    role: "CEO & Founder",
    imageUrl: "/team/abdoulaye_diallo.png",
    linkeinUrl: "https://www.linkedin.com/in/laye-diallo/",
  },
  {
    name: "Jonathan ALLARASSEM",
    role: "Head of R&D & Co-Founder",
    imageUrl: "/team/Jonathan.jpg",
    linkeinUrl: "https://www.linkedin.com/in/jonathan-allarassem-0aab09200/",
  },
  {
    name: "Saliou DIOUF",
    role: "CTO & Co-Founder",
    imageUrl: "/team/Saliou_Diouf.jpg",
    linkeinUrl: "https://ca.linkedin.com/in/andypoprawa",
  },
  {
    name: "Aliou WADE",
    role: "Senior Software Engineer & Architect",
    imageUrl: "/team/Aliou.png",
    linkeinUrl: "https://www.linkedin.com/in/aliou-wade-35a435196/",
  },
  {
    name: "Babacar SOW",
    role: "Hardware Team Lead",
    imageUrl: "/team/Babacar_Sow.jpg",
    linkeinUrl: "https://www.linkedin.com/in/babacar-sassy-ngom-sow-910489204/",
  },
  {
    name: "Mouhamad GUEYE",
    role: "Software Engineer",
    imageUrl: "/team/mouhamad_gueye.jpg",
    linkeinUrl: "https://www.linkedin.com/in/mouhamad-gueye-b00b31229/",
  },
  {
    name: "Saly DIABY",
    role: "Head Of Legal And Communication",
    imageUrl: "/team/saly_diaby.jpeg",
    linkeinUrl: "https://www.linkedin.com/in/saly-diaby-38b249200/",
  },
];

export function Team() {
  const [activeItem, setActiveItem] = useState(0);
  const wrapperRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    wrapperRef.current.style.setProperty(
      "--transition",
      "600ms cubic-bezier(0.22, 0.61, 0.36, 1)"
    );

    timeoutRef.current = setTimeout(() => {
      wrapperRef.current?.style.removeProperty("--transition");
    }, 900);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeItem]);

  return (
    <div className="h-full w-full flex items-center justify-start my-8">
      <div className="w-full">
        <ul
          ref={wrapperRef}
          className="group w-full flex flex-col gap-3 md:h-[1200px] md:grid md:grid-cols-3 md:place-items-center md:[&>*:last-child]:place-content-center"
        >
          {persons.map((person, index) => (
            <li
              onClick={() => setActiveItem(index)}
              aria-current={activeItem === index}
              className={cn(
                "relative md:hover:[&[aria-current='false']]:cursor-zoom-in md:w-[95%] md:h-[90%] md:[&[aria-current='true']]:w-[100%] md:[&[aria-current='true']]:h-[100%]",
                "md:[transition:width_var(--transition,200ms_ease-in)]",
                "md:[transition:height_var(--transition,200ms_ease-in)]",
                "md:before-block before:absolute before:bottom-0 before:left-[-10px] before:right-[-10px] before:top-0 before:hidden before:bg-background",
                "md:[&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[7%]"
              )}
              key={person.name}
            >
              <div className="relative h-full w-full overflow-hidden rounded-lg border md:border-none">
                <Image
                  className="absolute right-0 top-1/2 h-auto w-24 max-w-none -translate-y-1/2 object-cover grayscale md:left-1/2 md:w-full md:h-full md:-translate-x-1/2"
                  src={person.imageUrl}
                  alt={person.name}
                  width={300}
                  height={500}
                  quality={100}
                />
                <div
                  className={cn(
                    "max-md:hidden inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 before:md:bg-gradient-to-tl from-transparent to-accent to-60% after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0 after:z-10 after:bg-gradient-to-tl md:absolute md:transition-opacity",
                    activeItem === index ? "md:opacity-50" : "md:opacity-0"
                  )}
                />
                <div
                  className={cn(
                    "max-md:hidden top-0 left-0 w-full p-4 transition-[transform,opacity] md:absolute",
                    activeItem === index
                      ? "md:translate-x-0 md:opacity-100"
                      : "md:translate-x-4 md:opacity-0"
                  )}
                >
                  <div className="w-full flex items-center justify-between">
                    <p className="text-xs uppercase w-[200px] md:text-background dark:text-foreground xl:text-sm">
                      {person.role}
                    </p>
                    <Link href={person.linkeinUrl} target="_blank">
                      <Linkedin
                        className="h-6 w-6 max-md:hidden"
                        strokeWidth={1}
                      />
                    </Link>
                  </div>
                  <p className="text-lg font-black md:w-[200px] text-wrap md:text-background dark:text-foreground xl:text-2xl">
                    {person.name}
                  </p>
                </div>
                <div className="w-full p-2">
                  <p className="text-xs uppercase w-[200px] md:text-background dark:text-foreground md:text-lg">
                    {person.role}
                  </p>

                  <p className="text-lg font-black md:w-[200px] text-wrap md:text-background dark:text-foreground md:text-2xl">
                    {person.name}
                  </p>
                  <Link
                    href={person.linkeinUrl}
                    target="_blank"
                    className="md:hidden"
                  >
                    <Linkedin className="h-4 w-4" strokeWidth={1} />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
