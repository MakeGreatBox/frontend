"use client";
import React, { useState } from "react";
import Image from 'next/image';
import logoImage from "../../img/makegreatboxlogo.png";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Navbar Main Title */}


        

          {/* Mobile Menu Button */}
          <div className="flex items-center justify-between w-full px-4 ms-8">
          <Image 
            src={logoImage}
            alt="Responsive Logo"
            width={200} // Set a fixed width
            height={100}
            className="h-auto w-10%"  // Maintain aspect ratio
          />

          </div>
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navbar Links for Desktop */}
          <div className="hidden sm:block sm:ml-auto">
            <div className="flex space-x-4">
              <a
                href="/"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                <i className="fa-solid fa-house"></i>
                Home
              </a>
              <a
                href="/controls"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Controls
              </a>
              <a
                href="/settings"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Settings
              </a>
              <a
                href="/historial"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Historial
              </a>
              <a
                href="/about_us"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                AboutUs
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="/"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="/controls"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Controls
          </a>
          <a
            href="/settings"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Settings
          </a>
          <a
            href="/settings"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Historial
          </a>
          <a
            href="/about_us"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            AboutUs
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
