import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-yellow-400 text-white flex justify-between items-center p-6 relative">
        <h1 className="text-3xl font-bold cursor-pointer">Food Recipe App</h1>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:gap-6 absolute md:relative bg-yellow-400 w-full md:w-auto transition-all duration-500 z-10`}
          style={{ top: "100%", left: 0 }}
        >
          <ul className="flex flex-col md:flex-row md:gap-6 text-xl font-semibold p-4 md:p-0">
            <li className="hover:text-yellow-600 duration-500">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-yellow-600 duration-500">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Debugging: Add a console log to check menu state */}
      {console.log("Menu is open:", isOpen)}
    </>
  );
};

export default Navbar;
