"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { useFormStatus } from "react-dom";
import SubmitBtn from "./submitBtn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contacto");
 
  return (
    <motion.section
      id="contacto"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]  text-center"
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1, }}
      transition={{ duration: 1, }}
      viewport={{ once: true, }}
    >
      <SectionHeading>Contáctame</SectionHeading>
      <p className="text-gray-700 -mt-6 text-center dark: text-white/80">
        Contáctame directamente a{" "}
        <a className="underline" href="mailto:angelofr08@gmail.com">
          angelofr08@gmail.com
        </a>
        {""} o a través
      </p>
      <p> del siguiente formulario</p>

      <form className="mt-10 flex flex-col dark: text-black" action={async (formData) => {
       const {data, error} = await sendEmail(formData);

        if(error){
          toast.error(error);
          return;
        }

        toast.success("Mensaje enviado correctamente");

      }}>
        <input
          className="h-14 px-4  rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Tu email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Tu mensaje"
          required
          maxLength={5000}
        />
        <div className="flex justify-end">
          <SubmitBtn />
        </div>
      </form>
    </motion.section>
  );
}
