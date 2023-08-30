import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import adminDashboard from "@/public/images/adminDashboard.png";
import ecommerceStore from "@/public/images/ecommerceStore.png";
import airBnbApp from "@/public/images/airBnbApp.png";
import agencyWebsite from "@/public/images/agencyWebsite.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from University of Business and Technology",
    location: "Prishtina, Kosovo",
    description:
      "Four years of dedicated pursuit culminated in my graduation with a degree in Computer Science and Engineering. This journey symbolizes my commitment to mastering the digital realm, equipping me with the skills to innovate and shape the technological landscape.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Software Engineer",
    location: "Freelance",
    description:
      "Embarking on my first year as a developer, I leapt into a whirlwind of real-world projects with two trusted companions. Across international borders, we answered the calls of clients seeking digital solutions. Our focus, particularly on e-commerce platforms, showcased our prowess in React, Next.js, Node, and Prisma. This year marked the beginning of a journey where we turned code into tailored experiences, one project at a time.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Software Engineer at Pabau Clinic Software",
    location: "Prishtina, Kosovo",
    description:
      "At Pabau Clinic Software, I spearheaded responsive design, ensuring optimal user experiences across devices. Collaborating cross-functionally, I contributed to robust security features like two-factor authentication. I engineered scalable components using React, Next.js, and TypeScript, while also supporting backend development with Nest.js, Prisma, and PostgreSQL. I excelled in Agile settings, advocated Test-Driven Development, and conducted end-to-end tests using Cypress. Through cache optimization and active code reviews, I consistently elevated quality and met deadlines in fast-paced environments.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Admin Ecommerce Dashboard",
    description:
      "Create, edit and delete store elements. Monitor customer orders and track sales trends monthly with interactive graphs. Efficient eCommerce control",
    tags: ["Next.JS", "Typescript", "Node.JS", "Tailwind", "Prisma", "MySQL"],
    imageUrl: adminDashboard,
    url: "https://admin-ecommerce-dashboard.vercel.app/"
  },
  {
    title: "Ecommerce Store",
    description:
      "Browse categories, filter products, paginate, sorting, view details, and effortlessly fill your cart. Checkout is a breeze, powered by Stripe for secure card payments.",
    tags: ["Next.JS", "TypeScript", "Node.JS", "Tailwind", "Prisma", "Zustand"],
    imageUrl: ecommerceStore,
    url: "https://ahmet-store.vercel.app/"
  },
  {
    title: "Airbnb Clone",
    description:
      "An Airbnb-like app that bridges property owners and travelers. List, book, and favorite spaces, track bookings, and filter options by location, guests, and beds. Your gateway to curated getaways.",
    tags: ["Next.JS", "Typescript", "Node,JS", "Tailwind", "Prisma", "MongoDB"],
    imageUrl: airBnbApp,
    url: "https://ahmets-gateways.vercel.app/"
  },
  {
    title: "Agency Website",
    description:
    "Explore my beginner's Next.js agency site: smooth animations, seamless page transitions, and a user-friendly contact form. Tech meets aesthetics for a captivating digital experience. Simple frontend only.",
    tags: ["React", "Next.js", "CSS modules",],
    imageUrl: agencyWebsite,
    url: "https://ahmet-agency-website.vercel.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Less/Sass",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Zustand",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Mongoose",
  "Prisma",
  "Git",
  "GraphQL",
  "Apollo",
  "React Query",
  "REST",
  "Data Modeling",
  "JSON Web Tokens(JWT)",
  "NextAuth",
  "Framer Motion",
  "Jest",
  "Cypress",
] as const;