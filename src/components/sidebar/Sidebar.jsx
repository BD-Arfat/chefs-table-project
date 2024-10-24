import React from "react";

const Sidebar = ({
  bookRecipes,
  handleRemove,
  preparedRecipe,
  calculateTimeAndCalorie,
  totalCalorie,
  totalTime,
}) => {
  return (
    <div className="col-span-5 p-4 border border-gray-300 rounded-xl">
      <h1 className="font-bold text-2xl text-center">
        Want to cook: {bookRecipes.length}
      </h1>
      <hr className="my-4" />
      <div>
        {/*  */}
        <div className="overflow-x-auto">
          <table className="table text-left w-full mx-auto">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bookRecipes.map((recipe, index) => (
                <tr key={index} className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>{recipe.recipe_name}</td>
                  <td>{recipe.preparing_time}</td>
                  <td>{recipe.calories}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleRemove(recipe.recipe_id);
                        calculateTimeAndCalorie(
                          parseInt(recipe.preparing_time),
                          parseInt(recipe.calories)
                        );
                      }}
                      className="btn bg-emerald-500 rounded-3xl text-white py-2 px-5 mb-1"
                    >
                      Buy Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr className="my-4" />
        {/*  */}
        <div>
          <h1 className="font-bold text-2xl my-4 text-center">
            Currently Cooking :{preparedRecipe.length}
          </h1>
          <div className="overflow-x-auto">
            <table className="table text-left w-full mx-auto">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {preparedRecipe.map((recipe, index) => (
                  <tr key={index} className="bg-base-200">
                    <th>{index + 1}</th>
                    <td>{recipe.recipe_name}</td>
                    <td>{recipe.preparing_time}</td>
                    <td>{recipe.calories}</td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td>Total Time : {totalTime}</td>
                  <td>Total Calories : {totalCalorie}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
