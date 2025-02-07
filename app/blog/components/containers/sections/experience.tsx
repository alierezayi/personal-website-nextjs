"use client";

import {
  Section,
  SectionContent,
  SectionHeading,
  SectionSubTitle,
} from "@/app/blog/components/layouts/section";
import {
  VerticalTimeline,
  VerticalTimelineItem,
} from "@/app/blog/components/sections/experience/vertical-timeline";
import { BgGridSmall } from "@/components/ui/backgrounds";
import { EXPERIENCES } from "@/constants/refrences/experiences";

export default function Experience() {
  return (
    <Section name="Experience">
      <SectionHeading>Experience</SectionHeading>
      <SectionSubTitle>My personal qualification</SectionSubTitle>
      <SectionContent className="relative">
        <VerticalTimeline>
          {EXPERIENCES.map((experience, i) => (
            <VerticalTimelineItem key={i} {...experience} />
          ))}
        </VerticalTimeline>
      </SectionContent>
    </Section>
  );
}
