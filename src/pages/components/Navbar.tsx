/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";

const NavbarItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <div>
        <span
          onClick={() => setActiveItem(name)}
          className="hover:text-green-400"
        >
          {name}
        </span>
      </div>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/project") setActiveItem("Project");
    if (pathname === "/resume") setActiveItem("Resume");
  }, []);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="font-bold text-green-400 text-xl border-b-4 border-green-400 md:text-2xl">
        {activeItem}
      </span>
      <div className="text-lg flex space-x-5">
        <NavbarItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        <NavbarItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Project"
          route="/project"
        />
        <NavbarItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
};

export default Navbar;
