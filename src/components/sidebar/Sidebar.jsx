import React from "react";

const Sidebar = ({ bookRecipes }) => {
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
                      onClick={() => handleBookRecipes(recipe)}
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
        {/*  */}
        <div>
                         
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
