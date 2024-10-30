import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/recipes?limit=50");
      const data = await response.json();
      setData(data.recipes);
      setFilteredData(data.recipes);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    const filtered = data.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleTopRated = () => {
    const topRatedData = data
      .filter((recipe) => recipe.rating >= 4.5 && recipe.rating <= 5.0)
      .sort((a, b) => b.rating - a.rating);
    setFilteredData(topRatedData);
  };

  if (loading) return <Shimmer />;

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <input
          type="text"
          placeholder="Search Meal"
          className="mt-4 ml-2 rounded-md px-3 py-3 border-2 outline-none text-lg  md:w-1/3"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="mt-4 md:mt-4 ml-3 bg-yellow-400 text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-yellow-500 duration-500"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="mt-4 md:mt-4 ml-3 bg-green-400 text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-green-500 duration-500"
          onClick={handleTopRated}
        >
          Top Rated
        </button>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-7 mt-10">
        {filteredData.length > 0 ? (
          filteredData.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white p-4 rounded-lg shadow-lg w-64 md:w-72 lg:w-80 transform transition-transform duration-300 hover:scale-105"
            >
              <Link to={`/recipe/${recipe.id}`}>
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <div className="text-lg font-semibold">{recipe.name}</div>
                <div className="text-sm text-gray-500">{recipe.rating}</div>
              </Link>
            </div>
          ))
        ) : (
          <h2 className="text-lg text-gray-700">No recipes found.</h2>
        )}
      </div>
    </>
  );
};

export default Body;
