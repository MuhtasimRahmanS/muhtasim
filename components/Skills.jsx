"use client";
import React from "react";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
const Skills = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold"> Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 my-10">
        <div className="text-9xl  bg-primary text-white  p-2 border-2 rounded-xl">
          {" "}
          <TiHtml5 className="mx-auto" />
        </div>
        <div className="text-9xl  bg-primary text-white  p-2 border-2 rounded-xl">
          {" "}
          <IoLogoCss3 className="mx-auto" />
        </div>
        <div className="text-9xl  bg-primary text-white  p-2 border-2 rounded-xl">
          {" "}
          <IoLogoJavascript className="mx-auto" />
        </div>
        <div className="text-9xl  bg-primary text-white  p-2 border-2 rounded-xl">
          {" "}
          <SiTailwindcss className="mx-auto" />
        </div>
        <div className="text-9xl  bg-primary text-white  p-2 border-2 rounded-xl">
          {" "}
          <RiReactjsLine className="mx-auto" />
        </div>
        <div className="text-9xl  bg-primary text-white  p-2 border-2 rounded-xl">
          {" "}
          <IoLogoFirebase className="mx-auto" />
        </div>
        <div className="text-9xl  bg-primary text-white  p-2 border-2 rounded-xl">
          {" "}
          <FaNode className="mx-auto" />
        </div>
        <div className="text-9xl  bg-primary text-white  p-2 border-2 rounded-xl">
          {" "}
          <SiExpress className="mx-auto" />
        </div>
        <div className="text-9xl  bg-primary text-white  p-2 border-2 rounded-xl">
          {" "}
          <SiMongodb className="mx-auto" />
        </div>
        <div className="text-9xl  bg-primary text-white  p-2 border-2 rounded-xl">
          {" "}
          <FaGitAlt className="mx-auto" />
        </div>
        <div className="text-9xl  bg-primary text-white  p-2 border-2 rounded-xl">
          {" "}
          <FaGithub className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
