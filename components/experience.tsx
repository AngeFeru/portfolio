"use client";

import React, { useContext } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData, experiencesData2 } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref, inView } = useSectionInView("Experiencia", 0.45);
  const { theme } = useTheme();
  return (
    <section id="experiencia" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Experiencia Laboral</SectionHeading>

      <VerticalTimeline lineColor="">

        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={inView}
              contentStyle={{
                background: theme == "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 3rem",
              }}
              contentArrowStyle={{
                borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255,255,255,0.05)",
              }}
              date={item.date}
              dateClassName="mr-3"
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)", fontSize: "1.5 rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="!mt-1 !font-normal underline text-gray-700 dark:text-white/75">
                {item.description2}
              </p>
              <p>{item.location}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
      <motion.div
        className="bg-gray-200 my-20 h-1 w-80  rounded-full mx-auto dark:bg-opacity-20"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.125 }}
      ></motion.div>
      <SectionHeading>Educación</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData2.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={inView}
              contentStyle={{
                background: theme == "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255,255,255,0.05)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)", fontSize: "1.5 rem"
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="!mt-1 !font-normal underline text-gray-700 dark:text-white/75">{item.description}</p>
              <p className="!mt-1 !font-normal underline text-gray-700 dark:text-white/75">{item.description2}</p>
              <p>{item.location}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
