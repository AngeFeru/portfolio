import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { PiCertificateBold } from "react-icons/pi";

export const links = [
  {
    name: "Inicio",
    hash: "#Inicio",
  },
  {
    name: "Acerca de",
    hash: "#Acercade",
  },
  {
    name: "Proyectos",
    hash: "#proyectos",
  },
  {
    name: "Competencias",
    hash: "#skills",
  },
  {
    name: "Experiencia",
    hash: "#experiencia",
  },
  {
    name: "Contacto",
    hash: "#contacto",
  },
] as const;

export const experiencesData = [
  {
    title: "Administrativo | Help Desk",
    location: "Montevideo, UY",
    description2:"ANGLO Palacio         ",
    description:"",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - Presente",
  },
] as const;

export const experiencesData2 = [
  {
    title: "Licenciatura en Sistemas",
    location: "Montevideo, UY",
    date:"2023-Presente",
    description:"Universidad ORT",
    description2:"Estudiante de la carrera de Licenciatura, cursando 3er año.",
    icon: React.createElement(LuGraduationCap),

  },
  {
    title: "Analista GeneXus",
    location: "Montevideo, UY",
    description2:
      "Realice el curso de Analista Genexus Junior, donde aprendi las principales caracteristicas de funcionamiento de la herramienta.",
      description:"",
    icon: React.createElement(PiCertificateBold),
    date: "2024",
  },
] as const;


export const projectsData = [
  {
    title: "GeneXus",
    description:
      "Durante el curso que realice, creamos una aplicacion para administrar compras",
    tags: ["GeneXus"],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Oracle SQL",
  "Haskell",
  "Java",
  "GeneXus",
  "Python",
  "Excel",
] as const;
