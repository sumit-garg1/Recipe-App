import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="animate-pulse flex gap-4 mb-8">
        <div className="bg-gray-200 rounded-md h-10 w-32"></div>
        <div className="bg-gray-200 rounded-md h-10 w-32"></div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-7 mt-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 p-4 rounded-lg shadow-lg w-64 animate-pulse"
          >
            <div className="bg-gray-300 h-40 rounded-md mb-4"></div>
            <div className="bg-gray-300 h-6 rounded-md mb-2"></div>
            <div className="bg-gray-300 h-4 rounded-md"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
