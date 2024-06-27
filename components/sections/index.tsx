"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import { SectionName } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type SectionType = {
  children: React.ReactNode;
  name: SectionName;
  className?: string;
};

type SectionHeadingType = {
  children: React.ReactNode;
  className?: string;
};

function Section({ children, name, className }: SectionType) {
  const { ref } = useSectionInView(name);

  return (
    <section
      ref={ref}
      id={name.toLowerCase()}
      className={cn("pt-7 pb-14 md:pb-20", className)}
    >
      {children}
    </section>
  );
}

function SectionHeading({ children, className }: SectionHeadingType) {
  return (
    <h1 className={cn("text-2xl font-medium text-center", className)}>
      {children}
    </h1>
  );
}

function SectionSubTitle({ children, className }: SectionHeadingType) {
  return (
    <h3
      className={cn(
        "text-neutral-500 dark:text-gray-500 text-center text-xs mb-12 md:mb-12",
        className
      )}
    >
      {children}
    </h3>
  );
}

function SectionContent({ children, className }: SectionHeadingType) {
  return <div className={cn(className)}>{children}</div>;
}

function SectionDivider() {
  return (
    <motion.div
      className="dark:bg-gray-200/30 bg-gray-300 my-5 h-20 w-1 rounded-full mx-auto md:hidden"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    />
  );
}

export {
  Section,
  SectionContent,
  SectionDivider,
  SectionHeading,
  SectionSubTitle,
};
