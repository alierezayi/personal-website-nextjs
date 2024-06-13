"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TbSend } from "react-icons/tb";
import BgDot from "@/components/ui/bg-dot";
import Social from "@/components/sections/home/social";
import { useSectionInView } from "@/hooks/useSectionInView";
import { useActiveSection } from "@/context/active-section-context";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import ScrollDown from "@/components/sections/home/scroll-down";

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSection();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section className="relative lg:min-h-[560px] lg:h-[calc(100vh-80px)] lg:max-h-[620px]">
      <BgDot />
      <div className="z-0 flex flex-col gap-16 lg:gap-24 ">
        <div className="grid custom-grid gap-x-5 lg:gap-x-8 pt-16 lg:pt-32">
          {/* social */}
          <Social />
          {/* profile picture */}
          <div
            className="ml-7 sm:ml-0 md:-ml-10 lg:ml-20 w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px]
             lg:w-[300px] lg:h-[300px] bg-profile bg-no-repeat bg-center bg-cover shadow order-[initial]
              justify-self-start lg:order-1 lg:justify-self-center animate-profile custom-box-shadow"
          />
          <div className="flex flex-col justify-center col-span-3 lg:col-span-1 mt-10">
            {/* title */}
            <h1 className="text-4xl font-semibold mb-7">Ali Rezaei</h1>
            {/* subtitle */}
            <h3
              className="relative text-xl font-medium pl-14 lg:pl-20 mb-5 lg:mb-7 before:absolute before:w-[40px]
               lg:before:w-[70px] before:h-0.5 before:bg-gray-300 dark:before:bg-gray-700 before:left-0
               before:top-3 lg:before:top-4 before:rounded-full"
            >
              Front End Developer
            </h3>
            {/* description */}
            <p className="max-w-[initial] lg:max-w-[400px] mb-10 lg:mb-12 text-neutral-500 dark:text-gray-300">
              <TextGenerateEffect
                words="I am a crative Front End Developer based in Iran, Kerman with a
                  passion for creating web apps and dedicated to my work."
              />
            </p>
            {/* go to contact link */}
            <Link
              href="#contact"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
              className="flex gap-1 bg-neutral-800 hover:bg-neutral-700 dark:bg-white dark:hover:bg-white-200
               py-4 px-6 rounded-2xl w-fit text-white dark:text-black transition duration-500"
            >
              Say Hello
              <TbSend className="text-lg" />
            </Link>
          </div>
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}
