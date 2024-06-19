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
      <SectionSubTitle className="bg-whi">
        My personal qualification
      </SectionSubTitle>
      <SectionContent>
        <VerticalTimeline lineColor={theme === "dark" ? "#374151" : "#e5e7eb"}>
          {EXPERIENCES.map((experience, i) => (
            <React.Fragment key={i}>
              {experience.title ? (
                <VerticalTimelineElement
                  contentStyle={{
                    background: theme === "dark" ? "#020617" : "#ffffff",
                    border:
                      theme === "dark"
                        ? "1px solid #374151"
                        : "1px solid #e5e7eb",
                    textAlign: "left",
                    borderRadius: "16px",
                    boxShadow: "none",
                  }}
                  iconStyle={{
                    background: theme === "dark" ? "#020617" : "#ffffff",
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
                  <p className="!mt-5 !text-sm !font-normal text-neutral-600 dark:text-gray-400">
                    {experience.description}
                  </p>
                </VerticalTimelineElement>
              ) : (
                <VerticalTimelineElement
                  iconStyle={{
                    background: theme === "dark" ? "#020617" : "#fffff",
                    fontSize: "1.25rem",
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
