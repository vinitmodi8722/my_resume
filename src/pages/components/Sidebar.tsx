import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <div className="flex justify-center">
        <Image
          src="/favicon.ico"
          alt="file"
          className="rounded-full"
          width={128}
          height={128}
          layout="intrinsic"
          quality={100}
        />
      </div>
      <h3 className="my-4 text-3xl font-medium tracking-wider font-Kaushan dark:text-white">
        <span className="text-green-400 ">vinit </span>modi
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:text-white">
        Web Developer
      </p>
      <a
        className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center dark:bg-dark-200 dark:text-white"
        href="/Vinit_Modi_Resume.pdf"
        download="vinitmodi_Resume.pdf"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      <div className="flex justify-around w-9/12 my-5 text-green-500 md:w-full mx-auto">
        <a href="https://github.com/vinitmodi8722">
          <AiFillGithub className="w-6 h-6 cursor-pointer " />
        </a>
        <a href="https://www.linkedin.com/in/vinit-j-modi-935037201/">
          <AiFillLinkedin className="w-6 h-6 cursor-pointer" />
        </a>
        <a href="https://x.com/vinitmodi_8722">
          <FaXTwitter className="w-6 h-6 cursor-pointer" />
        </a>
      </div>

      <div
        className="py-4  my-5 bg-gray-200 dark:bg-dark-200 dark:text-white"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Gujarat,India</span>
        </div>
        <p className="my-2">vinit.modi8722@gmail.com</p>
        <p className="my-2">9316*****3</p>
      </div>
      <a
        href="mailto:vinit.modi8722@gmail.com"
        className="bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 inline-flex items-center justify-center focus:outline-none"
      >
        Email me
      </a>
      <button
        onClick={changeTheme}
        className="bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
