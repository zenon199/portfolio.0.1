import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiRedux,
  SiGit,
  SiDocker,
  SiTailwindcss,
  SiTwitter,
  SiGithub,
  SiLinkedin,
  SiTelegram,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IconType } from "react-icons";

export const skills = [
  {
    icon: SiTypescript,
    text: "TypeScript",
  },
  {
    icon: SiJavascript,
    text: "JavaScript",
  },
  {
    icon: SiReact,
    text: "React",
  },
  {
    icon: SiNextdotjs,
    text: "Next",
  },
  {
    icon: SiTailwindcss,
    text: "Tailwind",
  },
  {
    icon: SiRedux,
    text: "Redux",
  },
  {
    icon: SiHtml5,
    text: "HTML5",
  },
  {
    icon: SiCss3,
    text: "CSS3",
  },
  {
    icon: SiNodedotjs,
    text: "Node",
  },
  {
    icon: SiExpress,
    text: "Express",
  },
  {
    icon: SiGit,
    text: "Git",
  },
  {
    icon: SiDocker,
    text: "Docker",
  },
  {
    icon: BiLogoPostgresql,
    text: "PostgreSQL",
  },
  {
    icon: SiMongodb,
    text: "MongoDB",
  },
  {
    icon: SiFirebase,
    text: "Firebase",
  },
];

export interface Project {
  title: string;
  description: string;
  link?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    title: "Data Hub",
    description:
      "A data storage platform which can produce reels and thumbnails from your raw videos/photos using AI.",
    link: "https://github.com/zenon199/data-hub",
    tags: [
      
      "ImageKit",
      "Clerk",
      "Drizzle",
      "Next.js",
      "TypeScript",
      "AI",
      "Github",
    ],
  },
  {
    title: "Groove Up",
    description:
      "A music streaming platform where users can decide the next playing song by upvoting.",
    link: "https://github.com/zenon199/grooveup",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "Github",
    ],
  },
  {
    title: "Code Lab",
    description:
      "A platform for students and developers to practise and enhance DSA solving skills. The admin can host contests and puts a subscription model for users.",
    link: "https://github.com/zenon199/code-lab",
    tags: [
      "React",
      "Expess",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "Docker",
      "Razorpay",
      "Github",
    ],
  },
  {
    title: "Neuro Note",
    description:
      "A web application where users can save their tweets, posts etc and can chat later from it using AI. The responses are generated using your previous whole data.",
    link: "https://github.com/zenon199/neuro-note",
    tags: [
      "React",
      "Expess",
      "TypeScript",
      "Tailwind",
      "Vector DB",
      "OpenAI",
      "Github",
    ],
  },
  {
    title: "Track Tube",
    description:
      "A website where users can add YouTube playlists and can track their progress. It helps users to complete their learning journey using streaks and points system.",
    link: "https://github.com/zenon199/track-tube",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "Github",
    ],
  },
  
];

export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
  link?: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Freelance",
    logo: "/skeleton.jpg",
    position: "Full Stack Developer",
    description:
      "Worked on a Clothing brand website to increase their online presence and sales.",
    years: "Dec, 2024 - Jan, 2025",
  },
  {
    company: "TBI",
    logo: "/tbi.png",
    position: "Backend Developer",
    description:
      "Worked on backend services and developed various APIs for the internal Employee management tools.",
    years: "Oct, 2024 - Dec, 2024",
  },
  {
    company: "KIET",
    logo: "/kiet.png",
    position: "Student",
    description:
      "Pursuing Computer Science Engineering degree from KIET Group of Institutions, Ghaziabad.",
    years: "Nov, 2022 - July, 2026",
  }
];
export interface Social {
  name: string;
  link: string;
  icon: IconType;
}

export const socials: Social[] = [
  {
    name: "Twitter",
    link: "https://twitter.com/_abhii199",
    icon: SiTwitter,
  },
  {
    name: "GitHub",
    link: "https://github.com/zenon199",
    icon: SiGithub,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abhii199",
    icon: SiLinkedin,
  },
  {
    name: "Telegram",
    link: "https://t.me/zenon199",
    icon: SiTelegram,
  },
];

export const aboutYou = {
  name: "Abhishek Yadav",
  description:
    "👋 Hi, I'm Abhishek. Full Stack Developer. I've been developing amazing web aaps end to end for a long time. Creating impact by coding! ",
  yearsOfExperience: "1+ years",
  location: "Delhi, India",
  email: "abhii199works@gmail.com",
  twitter: "_abhii199",
};

export const logoText = "@abhii199";

export const marketingHeadlines = {
  mainHeadline: "Hi There 👋",
  subHeadline: "Eat. Sleep. Code. Repeat.",
};

export const websiteMetadata = {
  title: "Abhishek Yadav | Full Stack Developer",
  description: "👋 Hey, Abhishek Yadav here. Welcome to my portfolio.",
  url: "https://abhiworks.site",
  image_url: "https://abhiworks.site/abhi_image.png",
  logo_url: "https://abhiworks.site/logo.png",
  twitterSite: "@_abhii199",
  keywords: [
    "Abhishek Yadav",
    "zenon199",
    "abhii199",
    "Developer",
    "Blockchain",
    "Full Stack",
    "Solana",
    "Frontend",
    "Backend",
    "Devops",
    "KIET",
  ],
};
