import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-32 bg-transparent">
        <div className="flex-shrink-0">
          <img src={assets.logo} alt="Logo" className="h-10" />
        </div>

        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>

        <div className="hidden md:block">
          <button className="bg-white px-8 py-2 rounded-full text-black hover:bg-gray-100">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
