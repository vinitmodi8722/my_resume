import React, { FunctionComponent, useState } from "react";
import { IProject } from "../../../type";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";

const ProjectCard: FunctionComponent<{ project: IProject }> = ({
  project: {
    deployed_url = "",
    description = "",
    github_url = "",
    image_path = "",
    key_techs = [""],
    name = "",
  } = {},
}) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
        width={300}
        height={150}
        layout="responsive"
      />
      <p className="my-2 text-center">{name}</p>
      {showDetail && (
        <div className="grid md:grid-cols-2 absolute p-2 top-0 left-0 z-10 w-full h-auto gap-x-12 text-black bg-gray-400 dark:text-white dark:bg-dark-100">
          <div>
            <Image
              src={image_path}
              width={400}
              height={150}
              alt={name}
              className="rounded-lg"
            />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg  bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              {deployed_url && (
                <a
                  href={deployed_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg  bg-gray-200 dark:bg-dark-200"
                >
                  <AiFillProject /> <span>Project view</span>
                </a>
              )}
            </div>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            {description && <h3 className="mb-3 font-medium">{description}</h3>}
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={() => setShowDetail(false)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3  focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
