"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Acerca de", 0.9);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-10 scroll-mt-28 sm:text-xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="Acercade"
    >
      <SectionHeading>Sobre mi</SectionHeading>
      <p className="mb-3">
        Estudiante de{" "}
        <span className="font-medium">Licenciatura en sistemas en ORT</span>,
        durante la carrera he aprendido distintos lenguajes de programación, así
        como a desarrollar habilidades para resolver problemas técnicos y
        lógicos. Estoy en busqueda de una experiencia laboral en el{" "}
        <span className="font-medium">area de IT, </span>
        <span className="font-medium">
          {" "}
          quiero enfrentarme a desafíos reales y aprender de ellos, porque sé
          que es la mejor manera de crecer tanto profesional como personalmente.
        </span>
      </p>
      <p>
        <span className="italic">Mis hobbies</span>, son principalmente ver
        series y juegos de computadora, como tambien ir al gimnasio.
      </p>
    </motion.section>
  );
}
