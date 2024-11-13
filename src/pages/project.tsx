/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { projects as projectsData } from "../../data";
import ProjectCard from "./components/ProjectCard";
import ProjectsNavbar from "./components/ProjectsNavbar";
import { Category } from "../../type";

const project = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setactive] = useState("all");

  const handlerfiltercategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setactive(category);
      return;
    }
    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setactive(category);
  };

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
      <nav>
        <ProjectsNavbar
          handlerfiltercategory={handlerfiltercategory}
          active={active}
        />
      </nav>
      <div className="grid grid-cols-12 gap-4 my-3 relative">
        {projects.map((project) => (
          <div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
            <ProjectCard project={project} key={project.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default project;
