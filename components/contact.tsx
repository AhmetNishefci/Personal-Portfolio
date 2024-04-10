"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import toast from "react-hot-toast";

import { SectionHeading } from "./sectionHeading";
import { SubmitButton } from "./submitButton";
import { useSectionInView } from "@/hooks/useSectionInView";
import { sendEmail } from "@/actions/sendEmail";
import { useConfetti } from "@/hooks/useConfetti";

export const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);
  const confetti = useConfetti();
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
      <SectionHeading>Summon the Wizard 🧙</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80 ">
        I invite you to reach out to me directly through this portal 🚪 {""}
        <a className="font-bold" href="mailto:ahmetnishefcii@gmail.com">
          ahmetnishefcii@gmail.com 🧙‍♂️
        </a>{" "}
        or use the form spell ✨ below to send your messages 📩 through the
        ethereal network 🛜, and await the whisper of magic in response. 😁
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
          toast.success(
            <div>
              Message cast successfully! ✨
              <br />
              The wizard is now conjuring a response... 🧙‍♂️
            </div>
          );
        }}
      >
        <input
          className="h-14 px-4 rounded-lg bg-white bg-opacity-70 hover:border-1 dark:hover:border-yellow-400 hover:border-gray-700 focus:border-2 focus:border-yellow-400 focus:bg-opacity-80 borderBlack dark:bg-white dark:bg-opacity-70 dark:focus:bg-opacity-80 transition-all dark:outline-none placeholder-gray-500 dark:placeholder-gray-600"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email ✉️"
        />

        <textarea
          className="h-52 my-3 rounded-lg hover:border-1 dark:hover:border-yellow-400 borderBlack focus:border-2 focus:border-yellow-400 hover:border-gray-700 bg-white bg-opacity-70 focus:bg-opacity-80  border-gray-700 p-4 dark:bg-white dark:bg-opacity-70 dark:focus:bg-opacity-80 transition-all dark:outline-none placeholder-gray-500 dark:placeholder-gray-600"
          name="message"
          placeholder="Craft your message 💭🔮"
          required
          maxLength={5000}
        />

        <SubmitButton />
      </form>
    </motion.section>
  );
};
