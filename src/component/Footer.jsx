import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4 mt-10">
      <div className="text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} RecipeApp. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
