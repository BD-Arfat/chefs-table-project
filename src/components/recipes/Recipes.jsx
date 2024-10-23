import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="col-span-8 p-4">
      <h1>All Recipes : {recipes.length}</h1>
      <div className="grid grid-cols-2 gap-5">
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
