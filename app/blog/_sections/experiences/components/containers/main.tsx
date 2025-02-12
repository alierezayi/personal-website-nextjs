"use client";

import {
  Section,
  SectionContent,
  SectionHeading,
  SectionSubTitle,
} from "@/app/blog/_components/layouts/section";
import { TimelineEntry } from "@/types/experience";
import { BookSaved, Briefcase, Global, User } from "iconsax-react";
import { Timeline } from "@/app/blog/_sections/experiences/components/ui/timeline";
import { LaptopMinimal } from "lucide-react";
import Image from "next/image";
import { LOGOES } from "@/app/blog/_constants/images/logos";
import Link from "next/link";
import { LinkPreview } from "@/components/ui/link-preview";

const data: TimelineEntry[] = [
  {
    icon: LaptopMinimal,
    title: "Front End Developer",
    location: "Remote",
    date: { from: "2024-07-22T00:00:00Z", to: "2025-01-20T00:00:00Z" },
    content: (
      <div>
        <div>
          <Link href="https://unfxco.com" className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Unicorn Forex Broker</h2>
          </Link>
          <p className="tracking-wider mt-5 leading-relaxed text-black/80 dark:text-white/80">
            Unicorn Forex Broker (UNFXCO), part of{" "}
            <LinkPreview
              url="https://unfxco.com"
              className="font-semibold text-foreground"
            >
              Unicorn Brokers Holding
            </LinkPreview>
            , is a global leader in forex, crypto trading, prop trading, and
            white-label solutions. I joined UNFXCO as a{" "}
            <span className="italic">Front-End Developer</span>
          </p>
        </div>
        <div className="mt-4">
          <div>
            <div className="flex items-center gap-2">
              <Image src={LOGOES.b2prop} width={20} height={20} alt="" />
              <LinkPreview
                url="https://manager-prop.unfxco.com"
                className="text-base font-semibold"
              >
                B2Prop Trading Platform
              </LinkPreview>
            </div>
            <div className="mt-4 tracking-wider leading-relaxed text-black/80 dark:text-white/80">
              <p>
                Developed and maintained b2prop, a trading platform built with{" "}
                <LinkPreview
                  url="https://nextjs.org"
                  className="font-semibold text-foreground"
                >
                  Next.js
                </LinkPreview>{" "}
                and{" "}
                <LinkPreview
                  url="https://typescriptlang.org"
                  className="font-semibold text-foreground"
                >
                  TypeScript
                </LinkPreview>
                , focus on UI/UX .
              </p>
              <p>
                Designed and implemented a cross-platform widget to enhance user
                experience and functionality across devices.
              </p>
              <p>
                Collaborated with backend developers, designers, and
                stakeholders to deliver a seamless and responsive trading
                platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Briefcase,
    title: "Bachelor of Computer",
    location: "Iran, Kerman",
    date: { from: "2022-01-01T00:00:00Z", to: "Present" },
    content: (
      <div>
        <h2 className="text-xl">Hello World</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ab
          mollitia at accusantium, sunt nulla.
        </p>
      </div>
    ),
  },
  {
    icon: BookSaved,
    title: "Diploma in Mathematics",
    date: { from: "2018-01-01T00:00:00Z", to: "2021-01-01T00:00:00Z" },
    location: "Iran, Kerman",
    content: (
      <div>
        <h2 className="text-xl">Hello World</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ab
          mollitia at accusantium, sunt nulla.
        </p>
      </div>
    ),
  },
];

export default function Experience() {
  return (
    <Section name="Experience">
      <SectionHeading>Experience</SectionHeading>
      <SectionSubTitle>My personal qualification</SectionSubTitle>
      <SectionContent className="relative">
        <Timeline data={data} />
      </SectionContent>
    </Section>
  );
}
