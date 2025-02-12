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
import { LaptopMinimal, University } from "lucide-react";
import Image from "next/image";
import { LOGOES } from "@/app/blog/_constants/images/logos";
import Link from "next/link";
import { LinkPreview } from "@/components/ui/link-preview";
import UnfxcoTimeline from "./timeline-unfxco";
import SchoolTimeline from "./timeline-school";
import UniversityTimeline from "./timeline-university";

const data: TimelineEntry[] = [
  {
    icon: LaptopMinimal,
    title: "Front End Developer",
    location: "Remote",
    date: { from: "2024-07-22T00:00:00Z", to: "2025-01-20T00:00:00Z" },
    content: <UnfxcoTimeline />,
  },
  {
    icon: Briefcase,
    title: "Bachelor of Computer",
    location: "Iran, Kerman",
    date: { from: "2022-01-01T00:00:00Z", to: "Present" },
    content: <UniversityTimeline />,
  },
  {
    icon: BookSaved,
    title: "Diploma in Mathematics",
    date: { from: "2018-01-01T00:00:00Z", to: "2021-01-01T00:00:00Z" },
    location: "Iran, Kerman",
    content: <SchoolTimeline />,
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
