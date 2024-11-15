import React from "react";
import { AiTwotoneApi } from "react-icons/ai";
import { FaServer } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { SiSanity } from "react-icons/si";

const Aboutdata = () => {
  return (
    <>
      <div className="bg-gray-200 dark:bg-dark-200 dark:text-white rounded-lg lg:col-span-1 h-[100px] items-center flex  p-2 ">
        <div className="flex items-center">
          <div className="text-green-400 h-[30px] w-[30px] mr-3">
            <RiComputerLine className=" h-[30px] w-[30px]" />
          </div>
          <div>
            {" "}
            <div>
              <span className="font-bold text-lg/4">Frontend Developement</span>
            </div>
            <div className="text-sm text-justify font-semibold">
              I can build a attractive and user friendly website using
              <span className="font-bold"> HTMl, </span>
              <span className="font-bold">CSS, </span>
              <span className="font-bold">Tailwind CSS </span>
              and <span className="font-bold">react.js</span>.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 dark:bg-dark-200 dark:text-white rounded-lg lg:col-span-1 h-[100px] items-center flex p-2">
        <div className="flex items-center">
          <div className="text-green-400 h-[30px] w-[30px] mr-3">
            <FaServer className=" h-[30px] w-[30px]" />
          </div>
          <div>
            {" "}
            <div>
              <span className="font-bold text-lg/4">Backend Developement</span>
            </div>
            <div className="text-sm text-justify font-semibold">
              I can handle database, server and api.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 dark:bg-dark-200 dark:text-white rounded-lg lg:col-span-1 h-[100px] items-center flex p-2">
        <div className="flex items-center">
          <div className="text-green-400 h-[30px] w-[30px] mr-3">
            <AiTwotoneApi className=" h-[30px] w-[30px]" />
          </div>
          <div>
            {" "}
            <div>
              <span className="font-bold text-lg/4">API Developement</span>
            </div>
            <div className="text-sm text-justify font-semibold">
              I can develop robust REST API using
              <span className="font-bold"> Node Api</span>.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 dark:bg-dark-200 dark:text-white rounded-lg lg:col-span-1 h-[100px] items-center flex p-2">
        <div className="flex items-center">
          <div className="text-green-400 h-[30px] w-[30px] mr-3">
            <SiSanity className=" h-[30px] w-[30px]" />
          </div>
          <div>
            {" "}
            <div>
              <span className="font-bold text-lg/4">CMS Developement</span>
            </div>
            <div className="text-sm text-justify font-semibold">
              I can build website using CMS like
              <span className="font-bold"> sanity, </span>
              <span className="font-bold">strapi</span>.
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="bg-gray-200 dark:bg-dark-200 dark:text-white rounded-lg lg:col-span-1 h-[80px] p-2">
        <div className="flex items-center">
          <div className="text-green-400 h-[30px] w-[30px] mr-3">
            <MdDeveloperMode className=" h-[30px] w-[30px]" />
          </div>
          <div>
            {" "}
            <div>
              <span className="font-bold text-lg/4">Frontend Developement</span>
            </div>
            <div className="text-sm text-justify font-semibold">
              I can build a attractive and user friendly website using
              <span className="font-bold"> HTMl, </span>
              <span className="font-bold">CSS, </span>
              <span className="font-bold">Tailwind CSS </span>
              and <span className="font-bold">react.js</span>.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 dark:bg-dark-200 dark:text-white rounded-lg lg:col-span-1 h-[80px] p-2">
        <div className="flex items-center">
          <div className="text-green-400 h-[30px] w-[30px] mr-3">
            <SiAntdesign className=" h-[30px] w-[30px]" />
          </div>
          <div>
            {" "}
            <div>
              <span className="font-bold text-lg/4">Frontend Developement</span>
            </div>
            <div className="text-sm text-justify font-semibold">
              I can build a attractive and user friendly website using
              <span className="font-bold"> HTMl, </span>
              <span className="font-bold">CSS, </span>
              <span className="font-bold">Tailwind CSS </span>
              and <span className="font-bold">react.js</span>.
            </div>
          </div>
        </div>
      </div>

       */}
    </>
  );
};

export default Aboutdata;
