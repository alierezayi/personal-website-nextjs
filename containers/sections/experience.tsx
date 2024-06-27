"use client";

import {
  Section,
  SectionContent,
  SectionHeading,
  SectionSubTitle,
} from "@/components/sections";
import {
  VerticalTimeline,
  VerticalTimelineItem,
} from "@/components/sections/experience/vertical-timeline";
import { EXPERIENCES } from "@/constants/refrences/experiences";

export default function Experience() {
  return (
    <Section name="Experience">
      <SectionHeading>Experience</SectionHeading>
      <SectionSubTitle>My personal qualification</SectionSubTitle>
      <SectionContent>
        <VerticalTimeline>
          {EXPERIENCES.map((experience, i) => (
            <VerticalTimelineItem key={i} {...experience} />
          ))}
        </VerticalTimeline>
      </SectionContent>
    </Section>
  );
}
