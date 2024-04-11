"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { SectionHeading } from "./sectionHeading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSectionInView";
import { useTheme } from "@/hooks/useTheme";

export const Experience = () => {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience 🤵</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light"
                    ? "rgba(255, 255, 255, 0.6)"
                    : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: `${
                  theme === "dark"
                    ? "2px solid rgb(147 197 253 / 0.5)"
                    : "2px solid rgb(59 130 246 / 0.5)"
                }`,
                textAlign: "left",
                padding: "1.3rem 2rem",
                borderRadius: "1rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light"
                    ? "rgba(255, 255, 255, 0.8)"
                    : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};
