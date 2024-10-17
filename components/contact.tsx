"use client"

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contacto"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]  text-center
    "
    >
      <SectionHeading>Contáctame</SectionHeading>
      <p className="text-gray-700 -mt-6 text-center">
        Contáctame directamente a{" "}
        <a className="underline" href="mailto:angelofr08@gmail.com">
          angelofr08@gmail.com
        </a>
        {""} o a traves
      </p>
      <p> del siguiente formulario</p>

      <form className="mt-10 flex flex-col">
        <input
          className="h-14 px-4  rounded-lg borderBlack"
          type="email"
          placeholder="Tu email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Tu mensaje"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105  disabled:scale-100 disabled:bg-opacity-65"
          >
            Enviar{" "}
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            {""}
          </button>
        </div>
      </form>
    </motion.section>
  );
}
