"use client";

import { SectionHeading } from "./sectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";

export const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me 🤔</SectionHeading>
      <p className="mb-3">
        I am a <span className="font-medium">software engineer</span> with
        expertise spanning{" "}
        <span className="font-bold">
          React, Next.js, Node.js, Typescript, Express, Nest, MongoDB, SQL,
          Prisma, GraphQL, REST... 🧑‍💻{" "}
        </span>
        My career highlights feature the successful delivery of scalable web
        applications that exceeded client expectations and elevated user
        engagement ✅. I excel in solving intricate challenges 🏃‍♂️, collaborating
        across teams 🗣️, and adhering to project timelines ⏳. Committed to ongoing
        learning ⏭️ and possessing strong communication skills 💬, I offer valuable
        contributions to organizations seeking to enhance their development
        endeavors 💎.
      </p>
      <p>
        When I'm not coding, you can find me slaying villains in video games 🎮,
        or watching One Piece on sundays 😁.. I also like football, and you
        might catch me on the field, channeling my inner Cristiano Ronaldo ⚽,
        as I strive to score magnificent goals. I'm constantly seeking new
        challenges and learning experiences 🤔. And I like to lay on my bed 🛌,
        and meditate 🧘‍♂️...
      </p>
    </motion.section>
  );
};
