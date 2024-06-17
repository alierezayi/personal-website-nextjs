"use client";

import {
  Section,
  SectionContent,
  SectionHeading,
  SectionSubTitle,
} from "@/components/sections";
import { EXPERIENCES } from "@/constants/refrences/experiences";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  return (
    <Section name="Experience">
      <SectionHeading>Experience</SectionHeading>
      <SectionSubTitle>My personal qualification</SectionSubTitle>
      <SectionContent>
        <VerticalTimeline>
          {EXPERIENCES.map((experience, i) => (
            <React.Fragment key={i}>
              {experience.title ? (
                <VerticalTimelineElement
                  date={experience.date}
                  icon={experience.icon}
                >
                  <h3>{experience.title}</h3>
                  <p>{experience.location}</p>
                  <p>{experience.description}</p>
                </VerticalTimelineElement>
              ) : (
                <VerticalTimelineElement icon={experience.icon} />
              )}
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </SectionContent>
    </Section>
  );
}
