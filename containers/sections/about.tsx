"use client";

import Image from "next/image";
import IMAGES from "@/constants/images";
import {
  Section,
  SectionContent,
  SectionHeading,
  SectionSubTitle,
} from "@/components/sections";
import Link from "next/link";
import { FileText, Github } from "lucide-react";
import Info from "@/components/sections/about/info";
import { Card } from "@/components/ui/card";
import GitHubStats from "@/components/sections/about/github-calendar";

export default function About() {
  return (
    <Section name="About">
      <SectionHeading>About Me</SectionHeading>
      <SectionSubTitle>My introduction</SectionSubTitle>
      <SectionContent>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 justify-between">
          <div className="rounded-2xl bg-coding bg-cover bg-center w-full md:max-w-[300px] lg:max-w-[350px] aspect-square" />
          <div className="w-full max-w-[520px]">
            <Info />
            <p className="text-neutral-500 dark:text-gray-400 leading-snug tracking-wide">
              Ali Rezaei, born in 2003. I am a Front End Developer, I created
              web pages with UI/UX user interface, I have 2 years of experience
              and many clients are happy with the projects carried out. My main
              stack is <span className="font-medium">React, Next.js</span>.
            </p>
            <div className="flex gap-5 mt-14">
              <Link
                href=""
                target="_blank"
                className="flex items-center gap-1 bg-neutral-800 hover:bg-neutral-700 dark:bg-white
             dark:hover:bg-white-200 py-4 px-6 rounded-2xl w-fit text-white dark:text-black
              transition duration-500"
              >
                Download CV
                <FileText className="w-5" />
              </Link>
              <Link
                href="https://github.com/alierezayi"
                target="_blank"
                className="flex items-center gap-1 border
              py-4 px-6 rounded-2xl w-fit 
              transition duration-500"
              >
                View Github
                <Github className="w-5" />
              </Link>
            </div>
          </div>
        </div>
        <GitHubStats />
      </SectionContent>
    </Section>
  );
}
