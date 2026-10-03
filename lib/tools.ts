import {
  SiFigma,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiSass,
  SiJquery,
  SiBootstrap,
  SiTailwindcss,
  SiDotnet,
  SiGit,
  SiShopify,
  SiGoogleads,
  SiMeta,
  SiTiktok,
} from "react-icons/si";
import { DiHtml5, DiCss3, DiMsqlServer } from "react-icons/di";
import { Search, Megaphone, ShoppingCart, ShoppingBag } from "lucide-react";

export const devTools = [
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "HTML5", Icon: DiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: DiCss3, color: "#1572B6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Angular", Icon: SiAngular, color: "#DD0031" },
  { name: "Sass", Icon: SiSass, color: "#CC6699" },
  { name: "jQuery", Icon: SiJquery, color: "#0769AD" },
  { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: ".NET / C#", Icon: SiDotnet, color: "#512BD4" },
  { name: "SQL Server", Icon: DiMsqlServer, color: "#CC2927" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
];

export const marketingTools = [
  { name: "SEO", Icon: Search, color: "#22C55E" },
  { name: "Digital Marketing", Icon: Megaphone, color: "#ecc35a" },
  { name: "Google Ads", Icon: SiGoogleads, color: "#4285F4" },
  { name: "Meta Ads", Icon: SiMeta, color: "#0866FF" },
  { name: "TikTok Ads", Icon: SiTiktok, color: "#25F4EE" },
  { name: "Shopify", Icon: SiShopify, color: "#95BF47" },
  { name: "E-commerce", Icon: ShoppingCart, color: "#9c7118" },
  { name: "Amazon & Noon", Icon: ShoppingBag, color: "#FF9900" },
];
