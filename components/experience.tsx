"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData, experiencesData2 } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experiencia");
  return (
    <section id="experiencia" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Experiencia Laboral</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 3rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af ",
              }}
              date={item.date}
              dateClassName="mr-3"
              icon={item.icon}
              iconStyle={{ background: "white", fontSize: "1.5 rem" }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="!mt-1 !font-normal underline">
                {item.description2}
              </p>
              <p>{item.location}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
      <motion.div
        className="bg-gray-200 my-20 h-1 w-80  rounded-full mx-auto"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.125 }}
      ></motion.div>
      <SectionHeading>Educación</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData2.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af ",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{ background: "white", fontSize: "1.5 rem" }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="!mt-1 !font-normal underline">{item.description}</p>
              <p className="!mt-1 !font-normal">{item.description2}</p>
              <p>{item.location}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
