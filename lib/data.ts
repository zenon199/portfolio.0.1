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
  title: "Abhishek | FullStack Dev",
  description: "👋 Hey, Abhishek Yadav here. Welcome to my portfolio.",
  url: "https://abhiworks.site",
  image_url: "https://abhiworks.site/abhi_image.png",
  logo_url: "https://abhiworks.site/logo.jpg",
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
