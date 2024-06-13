"use client";

import { LINKS } from "@/constants/refrences/links";
import { useActiveSection } from "@/context/active-section-context";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function HeaderNavbar() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSection();

  return (
    <nav className="hidden md:flex flex-1 justify-center">
      <ul className="flex items-center gap-5 w-fit">
        {LINKS.map((link, i) => (
          <Link
            key={i}
            href={link.hash}
            onClick={() => {
              setActiveSection(link.name);
              setTimeOfLastClick(Date.now());
            }}
            className={cn(
              "hover:text-black-200 dark:hover:text-white-200 transition"
            )}
          >
            {link.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
