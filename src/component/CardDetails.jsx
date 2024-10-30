import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);
      const data = await response.json();
      setRecipe(data);
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex flex-col justify-center items-center mt-10 mb-8 px-4">
        <div className="flex flex-col md:flex-row w-full max-w-3xl animate-pulse">
          <div className="w-full md:w-1/2 h-64 bg-gray-300 rounded-t-lg md:rounded-l-lg md:rounded-t-none"></div>
          <div className="w-full md:w-1/2 p-6 space-y-4">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="mt-4 space-y-4">
              <div className="h-4 bg-gray-300 rounded w-2/3"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center mt-10 mb-8 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-3xl">
        <div className="w-full md:w-1/2">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-64 object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{recipe.name}</h2>
            <p className="text-lg font-semibold">Cuisine: {recipe.cuisine}</p>
            <p className="text-lg font-semibold">
              Difficulty: {recipe.difficulty}
            </p>
            <p className="text-lg font-semibold">
              Meal Type: {recipe.mealType}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mt-4">Ingredients:</h3>
            <ul className="list-disc ml-5">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-lg text-gray-700">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mt-4">Instructions:</h3>
            {Array.isArray(recipe.instructions) ? (
              <ul className="list-decimal ml-5">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="text-lg text-gray-600">
                    {instruction}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-lg text-gray-600">
                Instructions are not available.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
