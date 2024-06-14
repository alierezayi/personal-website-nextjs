"use client";

import { useEffect, useState } from "react";

import BgDot from "@/components/ui/bg-dot";
import Social from "@/components/sections/home/social";
import ScrollDown from "@/components/sections/home/scroll-down";
import Details from "@/components/sections/home/details";

export default function Intro() {
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
        <div className="grid custom-grid gap-x-5 lg:gap-x-8 pt-16 lg:pt-28">
          {/* social */}
          <Social />
          {/* profile picture */}
          <div
            className="ml-7 sm:ml-0 md:-ml-10 lg:ml-16 w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px]
             lg:w-[300px] lg:h-[300px] bg-profile bg-no-repeat bg-center bg-cover shadow order-[initial]
             justify-self-start lg:order-1 lg:justify-self-center animate-profile custom-box-shadow"
          />
          <Details />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}
