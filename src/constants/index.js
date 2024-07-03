import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  graphql,
  firebase,
  styledComponents,
  jest,
  python,
  r,
  gcp,
  threejs,
  message,
  apple,
  sql,
  sas,
  // nextjs,
  // gsap,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: python,
    name: "Python",
    type: "Programming Language",
  },

  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },

  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: threejs,
    name: "Three.js",
    type: "Animation Library",
  },
  // {
  //   imageUrl: gsap,
  //   name: "GSP",
  //   type: "Animation Library",
  // },

  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: styledComponents,
    name: "styled-components",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  // {
  //   imageUrl: nextjs,
  //   name: "Next.js",
  //   type: "Frontend",
  // },
  {
    imageUrl: gcp,
    name: "Google Cloud Platform",
    type: "Cloud Computing Platform",
  },

  {
    imageUrl: firebase,
    name: "Firebase",
    type: "Database",
  },
  {
    imageUrl: graphql,
    name: "GraphQL",
    type: "Backend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sql,
    name: "SQL",
    type: "Query Language",
  },

  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: jest,
    name: "Jest",
    type: "Testing",
  },
  {
    imageUrl: r,
    name: "R",
    type: "Programming Language",
  },
  {
    imageUrl: sas,
    name: "SAS",
    type: "Statistical Analysis and Data Management Program",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },

  /*
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  */
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Message",
    iconUrl: message,
    link: "/contact",
    hasLink: true,
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/TaiJoLo",
    hasLink: true,
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/lotaijo/",
    hasLink: true,
  },
];

export const projects = [
  {
    iconUrl: estate,
    theme: "btn-back-green",
    name: "Places Sharing Application",
    description:
      "Built a fullstack web app for users to create, share, and explore places. Facilitates sign-up, login, and image uploads. Utilizes Google Maps for interactive exploration.",
    link: "https://github.com/TaiJoLo/mern",
    live: "",
  },
  {
    iconUrl: threads,
    theme: "btn-back-blue",
    name: "E-Commerce Website",
    description:
      "Created an e-commerce platform offering users the ability to sign up and log in, browse products, add and remove items to their shopping cart, and securely complete online payments.",
    link: "https://github.com/TaiJoLo/crwn-clothing",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "News Sentiment Analysis Tool",
    description:
      "Developed a web tool for analyzing news articles' sentiment and subjectivity, offering users insights into the tone and perspective of their reading material.",
    link: "https://github.com/TaiJoLo/udacity-evaluate-news-nlp",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Staff Management Portal",
    description:
      "Built a web app for campground staff to manage bookings, view camper information, and handle customer data. Facilitates booking management, camper list viewing, and customer search.",
    link: "https://github.com/TaiJoLo/scg",
  },
  // {
  //   iconUrl: apple,
  //   theme: "btn-back-pink",
  //   name: "Apple website clone",
  //   description:
  //     "(need to edit)Developed a web tool for analyzing news articles' sentiment and subjectivity, offering users insights into the tone and perspective of their reading material.",
  //   link: "https://github.com/TaiJoLo/udacity-evaluate-news-nlp",
  // },
  /*
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "T-Shirt",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
 
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
  */
];
