"use client";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-primary text-primary-content p-10">
        <aside>
          <p className="font-bold">Muhtasim Rahman</p>
          <p>Copyright © ${new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>{/* todo */}</nav>
      </footer>
    </div>
  );
};

export default Footer;
