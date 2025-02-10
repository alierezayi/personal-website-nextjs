"use client";

import {
  Section,
  SectionContent,
  SectionHeading,
  SectionSubTitle,
} from "@/app/blog/components/layouts/section";
import { TimelineEntry } from "@/types/experience";
import { Book, Book1, BookSaved, Briefcase, User } from "iconsax-react";
import { Timeline } from "../../ui/timeline";
import { LaptopMinimal } from "lucide-react";

const data: TimelineEntry[] = [
  {
    icon: LaptopMinimal,
    title: "Front End Developer",
    location: "Remote",
    date: { from: "2024-07-22T00:00:00Z", to: "2025-01-20T00:00:00Z" },
    content: (
      <div>
        <h2 className="text-xl">Hello World</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ab
          mollitia at accusantium, sunt nulla.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ab
          mollitia at accusantium, sunt nulla.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ab
          mollitia at accusantium, sunt nulla.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ab
          mollitia at accusantium, sunt nulla.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ab
          mollitia at accusantium, sunt nulla.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ab
          mollitia at accusantium, sunt nulla.
        </p>
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
