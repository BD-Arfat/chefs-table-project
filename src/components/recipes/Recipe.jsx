import React from "react";
import { FaBeer, FaFire } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const Recipe = ({ recipe, handleBookRecipes }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div>
      <div class="card bg-base-100 shadow-xl rounded-lg h-full">
        <figure class="px-10 pt-10">
          <img
            src={recipe_image}
            alt="Shoes"
            class="rounded-xl mx-auto w-full h-52"
          />
        </figure>
        <div class="card-body items-center px-10 mt-5 text-left">
          <h2 class="card-title font-bold text-2xl mb-3">{recipe_name}</h2>
          <p className="text-lg text-slate-600 mb-5">{short_description}</p>
          <hr className="mb-4" />
          <h1 className="font-bold text-2xl mb-3">
            ingredients : {ingredients.length}
          </h1>
          <ul className="mb-3 px-5">
            {recipe.ingredients.map((item, index) => (
              <li className="list-disc text-slate-600 text-lg mb-1" key={index}>
                {item}
              </li>
            ))}
          </ul>
          <hr className="my-5" />
          <div className="text-gray-500 text-sm flex justify-between items-center mb-5">
            <div className="flex items-center gap-1">
              <MdAccessTime className="text-lg" />
              {preparing_time} minutes
            </div>
            <div className="flex items-center gap-1">
              <FaFire className="text-lg" />
              {calories} calories
            </div>
          </div>
          <div class="card-actions">
            <button
              onClick={() => handleBookRecipes(recipe)}
              className="btn bg-emerald-500 rounded-3xl text-white py-3 px-16 mb-4"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
