"use client";

import { SectionHeading } from "./sectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSectionInView";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const Skills = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills 🤹‍♂️</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 cursor-text">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white/60 borderBlack rounded-xl px-5 py-3 hover:bg-sky-200/80 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
