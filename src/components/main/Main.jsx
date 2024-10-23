import React, { useState } from "react";
import Recipes from "../recipes/Recipes";
import Sidebar from "../sidebar/Sidebar";

const Main = () => {
  const [bookRecipes, setBookRecipes] = useState([]);
  const handleBookRecipes = (recipe) => {
    const isExist = bookRecipes.find(
      (previousRecipes) => previousRecipes.recipe_id === recipe.recipe_id
    );
    if (!isExist) {
      setBookRecipes([...bookRecipes, recipe]);
    } else {
      alert("hobe na hobe na add second time !!!!");
    }
  };
  return (
    <div className="grid grid-cols-12 gap-4">
      <Recipes handleBookRecipes={handleBookRecipes}></Recipes>
      <Sidebar bookRecipes={bookRecipes}></Sidebar>
    </div>
  );
};

export default Main;
