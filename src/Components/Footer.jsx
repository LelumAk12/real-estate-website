import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 text-gray-400"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-10 pb-10">
        {/* Logo + About */}
        <div className="md:w-1/3">
          <div className="flex items-center gap-2 mb-4">
            <img src={assets.logo_dark} alt="Logo" />
            
          </div>
          <p className="text-sm leading-relaxed">
            At Estate, we are your trusted partner in real
            estate—dedicated to guiding you through every step of your journey,
            whether you're buying, selling, or investing. Our goal is to make
            your dream of homeownership a reality by offering personalized
            support, expert advice, and a deep understanding of the market.
          </p>
        </div>

        {/* Company Links */}
        <div className="md:w-1/5">
          <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a href="#Header" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:w-1/3">
          <h3 className="text-white text-lg font-semibold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-sm mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded bg-gray-800 border border-gray-700 text-sm placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded bg-blue-500 text-white text-sm hover:bg-blue-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        Copyright 2025 © Estate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
