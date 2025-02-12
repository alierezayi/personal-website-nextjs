"use client";

import { useActiveSection } from "@/app/blog/_context/active-section-context";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useSectionInView } from "@/hooks/useSectionInView";
import { ThemeToggle } from "@/components/global/theme-toggle";
import { LINKS } from "@/app/blog/_constants/data/links";
import IMAGES from "@/app/blog/_constants/images";

function Header() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <header
      ref={ref}
      id="home"
      className="flex items-center justify-between h-20"
    >
      <Logo />
      <HeaderNav />
      <ThemeToggle />
    </header>
  );
}

export default Header;

function HeaderNav() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSection();

  return (
    <nav className="hidden md:flex flex-1 justify-center">
      <ul className="flex items-center gap-7 w-fit">
        {LINKS.map((link, i) => (
          <Link
            key={i}
            href={link.hash}
            onClick={() => {
              setActiveSection(link.name);
              setTimeOfLastClick(Date.now());
            }}
            className={cn(
              "hover:text-black-200 dark:hover:text-white-200 transition flex items-center gap-1"
            )}
          >
            <link.icon className="size-4" />
            {link.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

const Logo = () => {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 125,
        delay: 0.1,
        duration: 0.7,
      }}
      className="w-14"
    >
      {theme === "light" ? (
        <Image
          src={IMAGES.header.logo.dark}
          width={50}
          height={30}
          alt=""
          quality={95}
        />
      ) : (
        <Image
          src={IMAGES.header.logo.light}
          width={50}
          height={30}
          alt=""
          quality={95}
        />
      )}
    </motion.div>
  );
};
