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
        // if (direction < 0) {
        //   setVisible(true);
        // } else {
        //   setVisible(false);
        // }
        setVisible(true);
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
          "flex max-w-fit fixed top-5 inset-x-0 mx-auto rounded-2xl bg-neutral-200/80 dark:bg-secondary/80 z-30 items-center justify-center gap-5 md:gap-0 p-[3px] backdrop-blur",
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
              "relative dark:text-white items-center flex text-neutral-700 p-2 md:py-2.5 md:px-4",
              navItem.name === activeSection && "text-black"
            )}
          >
            <navItem.icon className="block z-10 size-5 md:size-4 mr-1" />
            <span className="hidden md:block z-10">{navItem.name}</span>

            {navItem.name === activeSection && (
              <motion.span
                className="rounded-2xl absolute inset-0 z-0 bg-background"
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
