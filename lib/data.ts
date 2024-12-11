import React from "react";
import { FaCode, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import adminDashboard from "@/public/images/adminDashboard.png";
import ecommerceStore from "@/public/images/ecommerceStore.png";
import airBnbApp from "@/public/images/airbnbApp.png";
import agencyWebsite from "@/public/images/agencyWebsite.png";
import careFree from "@/public/images/carefree.png";
import blueesim from "@/public/images/blueesim.png";
import airpop from "@/public/images/airpop.png";
import cvFormatting from "@/public/images/cvformatting.png";
import shoppingCart from "@/public/images/shoppingCart.png";

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
    title: "Software Engineer at Adscribe",
    location: "London, UK ( Remote )",
    description:
      "At Adscribe, a cutting-edge AI-recruitment platform, I contributed to building innovative solutions that streamline recruitment processes with unmatched efficiency and precision. I developed a CV formatting tool that enables users to configure CVs by choosing templates, generating candidate-specific CVs, and updating data in real-time with a live preview. The tool also supports exporting CVs as PDFs. Additionally, I implemented partial campaign generation and single document generation using BullMQ and polling, ensuring a seamless user experience without blocking the UI during document creation. I also built web scraping tools using Puppeteer and enhanced document generation functionality with ReactPDF. My role included creating permission-based sharing features, expandable UI components, and automated version control with GitHub Actions. I consistently maintained high-quality standards through tests (Jest) and comprehensive end-to-end testing (Cypress). Leveraging Storybook, I ensured seamless integration of UI components, delivering a robust and user-friendly experience.",
    icon: React.createElement(FaCode),
    date: "Jul 2023 - Present",
  },
  {
    title: "Software Engineer at Pabau Clinic Software",
    location: "Prishtina, Kosovo (Hybrid)",
    description:
      "At Pabau, an all-in-one practice management software, I played a critical role in enhancing the platform's capabilities to simplify healthcare providers' workflows. I developed the two-factor authentication (2FA) feature to enhance security and built reusable, responsive components with thorough testing using Jest, Cypress, and Storybook. I introduced testing practices by creating the first Cypress smoke test for a page and delivered a presentation to the team on leveraging Jest for testing. As an active code reviewer and default PR reviewer, I ensured code quality and consistency across the team. In my last three months, I led a team of interns, conducted standups, mentored them on tasks, and supported their development. I also implemented a drag-and-drop reorder feature using React Beautiful DnD, created custom resolvers, and debugged and resolved critical bugs. My work consistently focused on building scalable, efficient, and user-friendly features while fostering a collaborative and high-performing team environment.",
    icon: React.createElement(FaReact),
    date: "Jan 2022 - Jul 2023",
  },
  {
    title: "Software Engineer at Starswapp",
    location: "Prishtina, Kosovo ( Remote )",
    description:
     "At Starswapp, I worked remotely on diverse projects for clients across industries, delivering innovative solutions with precision and quality. I developed a service car management platform for a Swiss client (Care-Free), enabling efficient scheduling and tracking. I also built Airpop, a React Native social media app, incorporating real-time updates and user-friendly features. For a family business, I created a custom application to streamline operations for mobile homes, kitchens, and bathrooms. Additionally, I designed an e-travel app promoting tourism in Kosovo, featuring interactive maps and curated itineraries. My role also involved developing small e-commerce platforms with responsive designs and secure payment gateways. These experiences refined my skills in problem-solving, remote collaboration, and delivering scalable solutions tailored to client needs.",
    icon: React.createElement(FaCode),
    date: "Dec 2020 - Jan 2022",
  },
  {
    title: "Graduated from University of Business and Technology",
    location: "Prishtina, Kosovo",
    description:
      "Four years of dedicated pursuit culminated in my graduation with a degree in Computer Science and Engineering. This journey symbolizes my commitment to mastering the digital realm, equipping me with the skills to innovate and shape the technological landscape.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
] as const;

export const projectsData = [
  {
    title: "CV Formatting",
    description:
      "Built an intelligent CV formatting tool at Adscribe, enabling automated CV generation, template selection, live preview, and export options for professional branding.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "Prisma", "ReactPDF"],
    imageUrl: cvFormatting, 
    url: 'https://adscribe-wiki.super.site/v140-cv-formatting-letterheads-revamped-document-branding-and-more',
  },  
  {
    title: "Blue eSIM",
    description:
      "A seamless eSIM solution for travelers, offering global coverage, flexible plans, and instant activation to stay connected worldwide.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", 'PostgreSQL', "Supabase"],
    imageUrl: blueesim,
    url: 'https://blue-esim.com/', 
  },
  {
    title: "Carefree",
    description:
    "Empowers merchants to offer free services, increase vehicle value, and attract customers with a quality-checked network across Switzerland.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "Prisma", "PostgreSQL", "Supabase"],
    imageUrl: careFree,
    url: "https://www.care-free.ch/",
  },
  {
    title: "Admin Ecommerce Dashboard",
    description:
      "Create, edit and delete store elements. Monitor customer orders and track sales trends monthly with interactive graphs. Efficient eCommerce control",
    tags: ["Next.JS", "Typescript", "Node.JS", "Tailwind", "Prisma", "MySQL"],
    imageUrl: adminDashboard,
    url: "https://admin-ecommerce-dashboard.vercel.app/",
  },
  {
    title: "Ecommerce Store",
    description:
      "Browse categories, filter products, paginate, sorting, view details, and effortlessly fill your cart. Checkout is a breeze, powered by Stripe for secure card payments.",
    tags: ["Next.JS", "TypeScript", "Node.JS", "Tailwind", "Prisma", "Zustand"],
    imageUrl: ecommerceStore,
    url: "https://ahmet-store.vercel.app/",
  },
  {
    title: "AirPop - Social Media Mobile App",
    description:
      "Connect with people around you by sharing your moments effortlessly on AirPop. A modern social media app for seamless interactions.",
    tags: ["React Native", "TypeScript", "Firebase"],
    imageUrl: airpop, 
    url: "", 
  },
  {
    title: "Airbnb Clone",
    description:
      "An Airbnb-like app that bridges property owners and travelers. List, book, and favorite spaces, track bookings, and filter options by location, guests, and beds. Your gateway to curated getaways.",
    tags: ["Next.JS", "Typescript", "Node,JS", "Tailwind", "Prisma", "MongoDB"],
    imageUrl: airBnbApp,
    url: "https://ahmets-gateways.vercel.app/",
  },
  {
    title: "Shopping Cart",
    description:
      "A Vue.js shopping cart where users can add products to the cart, view details, increase quantity, delete items, and see the cart overview.",
    tags: ["Vue 3", "TypeScript", "Pinia", "Composition API", "Tailwind"],
    imageUrl: shoppingCart,
    url: "https://github.com/AhmetNishefci/ShoppingCartVue/tree/master", 
  },
  {
    title: "Agency Website",
    description:
      "Explore my beginner's Next.js agency site: smooth animations, seamless page transitions, and a user-friendly contact form. Tech meets aesthetics for a captivating digital experience. Simple frontend only.",
    tags: ["React", "Next.js", "CSS modules"],
    imageUrl: agencyWebsite,
    url: "https://ahmet-agency-website.vercel.app/",
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
  "Vue",
  "Redux",
  "Zustand",
  "Pinia",
  "Node.js",
  "Express",
  "Fastify",
  "NestJS",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Mongoose",
  "Sentry",
  "Docker",
  "Redis",
  "Mixpanel",
  "Webhooks",
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
  "Polling",
  "BullMQ",
] as const;
