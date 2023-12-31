"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import toast from "react-hot-toast";

import { SectionHeading } from "./sectionHeading";
import { SubmitButton } from "./submitButton";
import { useSectionInView } from "@/hooks/useSectionInView";
import { sendEmail } from "@/actions/sendEmail";


export const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);


  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="font-bold" href="mailto:ahmetnishefcii@gmail.com">
          ahmetnishefcii@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        ref={formRef}
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          formRef.current?.reset();

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg bg-white bg-opacity-70 focus:bg-opacity-80 borderBlack dark:bg-white dark:bg-opacity-70 dark:focus:bg-opacity-80  transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg bg-white bg-opacity-70 focus:bg-opacity-80 borderBlack p-4 dark:bg-white dark:bg-opacity-70 dark:focus:bg-opacity-80  transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}