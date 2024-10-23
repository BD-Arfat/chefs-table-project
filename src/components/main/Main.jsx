import React from "react";
import Recipes from "../recipes/Recipes";
import Sidebar from "../sidebar/Sidebar";

const Main = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <Recipes></Recipes>
      <Sidebar></Sidebar>
    </div>
  );
};

export default Main;
