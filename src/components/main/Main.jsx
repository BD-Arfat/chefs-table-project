import React, { useState } from "react";
import Recipes from "../recipes/Recipes";
import Sidebar from "../sidebar/Sidebar";

const Main = () => {
  const [bookRecipes, setBookRecipes] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalorie, setCalorie] = useState(0);
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
  const handleRemove = (id) => {
    const deletedRecipes = bookRecipes.find(
      (recipe) => recipe.recipe_id === id
    );
    const updateRecipe = bookRecipes.filter(
      (recipe) => recipe.recipe_id !== id
    );
    setBookRecipes(updateRecipe);
    setPreparedRecipe([...preparedRecipe, deletedRecipes]);
  };

  const calculateTimeAndCalorie = (preparing_time, calories) => {
    const newTotalTime = totalTime + preparing_time;
    const newCalorie = totalCalorie + calories;
    setTotalTime(newTotalTime);
    setCalorie(newCalorie);
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      <Recipes handleBookRecipes={handleBookRecipes}></Recipes>
      <Sidebar
        handleRemove={handleRemove}
        preparedRecipe={preparedRecipe}
        bookRecipes={bookRecipes}
        calculateTimeAndCalorie={calculateTimeAndCalorie}
        totalCalorie={totalCalorie}
        totalTime={totalTime}
      ></Sidebar>
    </div>
  );
};

export default Main;
