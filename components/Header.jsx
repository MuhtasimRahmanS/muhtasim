import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <a className=" font-semibold md:text-3xl sm:text-xl text-primary">
          Muhtasim Rahman
        </a>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end space-x-4">
        <Link
          href={"https://github.com/MuhtasimRahmanS"}
          className="text-2xl p-2 bg-primary text-white border-2 rounded-xl"
        >
          {" "}
          <FaGithub />{" "}
        </Link>
        <Link
          href={"https://www.linkedin.com/in/muhtasim-rahman/"}
          className="text-2xl p-2 bg-primary text-white border-2 rounded-xl"
        >
          {" "}
          <FaLinkedin />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Header;
