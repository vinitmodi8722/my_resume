import { BsCircleFill } from "react-icons/bs";
import { IProject, ISkill } from "./type";

export const languages: ISkill[] = [
  {
    name: "Python",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "Java Script",
    level: "65%",
    Icon: BsCircleFill,
  },
  {
    name: "HTML",
    level: "85%",
    Icon: BsCircleFill,
  },
  {
    name: ".css",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "React",
    level: "76%",
    Icon: BsCircleFill,
  },
  {
    name: "Next js",
    level: "80%",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: "figma",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    name: "Photoshop",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "Autocad",
    level: "60%",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    name: "Qr-scanner",
    description: "This website in you will generate own QR-code",
    image_path: "/qr_generate.jpg",
    deployed_url:
      "https://qr-code-generate-fc2scxnj9-vinit-modis-projects.vercel.app",
    github_url: "https://github.com/vinitmodi8722/qrCode_Generate",
    category: ["nextjs"],
    key_techs: ["next js", "react", "javascript", "tailwind css"],
  },
  {
    name: "Enc-dec_Image",
    description:
      "This website in you will Encrypt and decrypt image using aes algorithm",
    image_path: "/aes_algo.jpg",
    deployed_url: "https://aes-image-enc-dec.vercel.app",
    github_url: "https://github.com/vinitmodi8722/AES_image_enc_dec",
    category: ["javascript"],
    key_techs: ["next js", "html", "css", "javascript", "tailwind css"],
  },
  {
    name: "VM_Store",
    description:
      "This website in you will purchese watch and see collection of watches",
    image_path: "/e-commerce.jpg",
    deployed_url: "https://vm-store-seven.vercel.app",
    github_url: "https://github.com/vinitmodi8722/vm-store",
    category: ["javascript"],
    key_techs: ["next js", "html", "css", "javascript", "tailwind css"],
  },
  {
    name: "Blog",
    description: "This website in you can read blogs of Arts(paintings)",
    image_path: "/blog_website.jpg",
    deployed_url: "https://senity-tailwind-blog-website.vercel.app",
    github_url: "https://github.com/vinitmodi8722/senity-tailwind-blog-website",
    category: ["javascript"],
    key_techs: ["next js", "html", "css", "javascript", "tailwind css"],
  },
];
