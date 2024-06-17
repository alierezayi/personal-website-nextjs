"use client";

import {
  Section,
  SectionContent,
  SectionHeading,
  SectionSubTitle,
} from "@/components/sections";
import { EXPERIENCES } from "@/constants/refrences/experiences";
import { useTheme } from "next-themes";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  const { theme } = useTheme();
  return (
    <Section name="Experience">
      <SectionHeading>Experience</SectionHeading>
      <SectionSubTitle className="">My personal qualification</SectionSubTitle>
      <SectionContent>
        <VerticalTimeline lineColor="#e5e7eb3e">
          {EXPERIENCES.map((experience, i) => (
            <React.Fragment key={i}>
              {experience.title ? (
                <VerticalTimelineElement
                  contentStyle={{
                    background: theme === "dark" ? "#020617" : "#fffff",
                    border:
                      theme === "dark"
                        ? "1px solid #374151"
                        : "1px solid #e5e7eb",
                    textAlign: "left",
                    borderRadius: "16px",
                    boxShadow: "none",
                  }}
                  contentArrowStyle={{
                    borderRight:
                      theme === "dark"
                        ? "7px solid  #020617"
                        : "7px solid  #fffff",
                  }}
                  iconStyle={{
                    background: theme === "dark" ? "#020617" : "#fffff",
                    fontSize: "1.25rem",
                  }}
                  date={experience.date}
                  icon={experience.icon}
                >
                  <h3 className="font-semibold text-base">
                    {experience.title}
                  </h3>
                  <p className="font-normal !mt-1 !text-xs">
                    {experience.location}
                  </p>
                  <p className="!mt-5 !font-normal text-neutral-600 dark:text-neutral-200">
                    {experience.description}
                  </p>
                </VerticalTimelineElement>
              ) : (
                <VerticalTimelineElement
                  iconStyle={{
                    background: "#64748b",
                    fontSize: "1.5rem",
                  }}
                  icon={experience.icon}
                />
              )}
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </SectionContent>
    </Section>
  );
}
