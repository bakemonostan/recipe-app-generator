import RecipeContext from "../context/RecipeContext";
import Header from "./Header";

// context
import { useContext } from "react";

export default function Card() {
  const { recipes } = useContext(RecipeContext);

  const directionsArray = recipes.strInstructions.split(".");
  directionsArray.pop();

  return (
    <>
      <div className="flex flex-col items-center max-w-5xl bg-white border border-gray-200 rounded-lg shadow md:items-stretch md:flex-row ">
        <Header />
        <div className="object-cover w-full border border-blue-600 rounded-t-lg h-72 md:h-auto md:w-2/5 md:rounded-none md:rounded-s-lg">
          <img
            src={recipes.strMealThumb}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal md:w-3/5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {recipes.strMeal}
          </h5>
          <div className="px-10 py-5">
            <h1 className="text-black  text-2xl font-medium font-['Poppins']">
              {recipes.strMeal}
            </h1>
            {/* <Ingridents measure={meal} /> */}
          </div>
          <div className="px-10">
            <h1 className="text-black  text-2xl font-medium font-['Poppins']">
              DIRECTIONS
            </h1>
            <ul className="list-disc">
              {directionsArray.map((direction, index) => {
                return <li key={index}>{direction}.</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
