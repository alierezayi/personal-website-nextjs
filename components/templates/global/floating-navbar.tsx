"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LINKS } from "@/constants/refrences/links";
import { useActiveSection } from "@/context/active-section-context";

export const FloatingNav = ({ className }: { className?: string }) => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-5 inset-x-0 mx-auto border border-slate-200/50 dark:border-slate-800/50 rounded-full dark:bg-gray-900/80 bg-slate-100/80 z-[5000] items-center justify-center gap-5 md:gap-0 py-1.5 px-2 backdrop-blur",
          className
        )}
      >
        {LINKS.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.hash}
            onClick={() => {
              setActiveSection(navItem.name);
              setTimeOfLastClick(Date.now());
            }}
            className={cn(
              "relative dark:text-white items-center flex text-neutral-700 dark:hover:text-neutral-300 hover:text-neutral-500 p-2 md:py-1.5 md:px-3",
              navItem.name === activeSection && "text-black"
            )}
          >
            <navItem.icon className="block md:hidden z-10 w-5 h-5" />
            <span className="hidden md:block z-10">{navItem.name}</span>

            {navItem.name === activeSection && (
              <motion.span
                className="rounded-full absolute inset-0 z-0 border border-slate-300/50 bg-slate-200/70 dark:bg-gray-800/70 dark:border-gray-700/50"
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              ></motion.span>
            )}
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
