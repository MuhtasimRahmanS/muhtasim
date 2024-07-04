"use client";
import React from "react";
import photo from "../public/IMG_20240626_221452.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className="hero  h-[70vh]">
        <div className="hero-content flex-col justify-between w-full lg:flex-row-reverse">
          <div>
            <Image alt="image" src={photo} className="max-w-sm rounded-lg  " />
          </div>
          <div>
            <h1 className="text-4xl font-bold">
              Hello I&apos;m <br /> Muhtasim Rahman
            </h1>
            <h1 className="text-3xl font-bold">React Web Developer</h1>
            <p className="py-6">{/* todo */}</p>
            <a className="btn btn-primary" href="/resume.pdf" download>
              <button>Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
