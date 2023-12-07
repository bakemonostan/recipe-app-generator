/* eslint-disable no-undef */

import { useContext } from "react";
// import Ingridents from "./Ingridents";
// import Header from "./Header";
import Card from "./Card";
import RecipeContext from "../context/RecipeContext";
// import { data } from 'autoprefixer';

export default function Hero() {
  //   const [recipe, setRecipe] = useState([]);
  const { recipes } = useContext(RecipeContext);

  //   async function fetchRecipe() {
  //     try {
  //       const response = await fetch(
  //         "https://www.themealdb.com/api/json/v1/1/random.php"
  //       );
  //       const data = await response.json();
  //       setRecipe(data);
  //       // console.log(data['meals'][0]['idMeal']);
  //       // console.log(recipe['meals'][0]);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   }

  //   useEffect(() => {
  //     fetchRecipe();
  //   }, []);

  //   const meal = recipe.meals && recipe.meals[0];

  return (
    // <section>
    //   {meal && (
    //     <article className="min-h-screen border lg:flex ">
    //       <div
    //         className={` w-full lg:max-w-4xl border bg-no-repeat bg-cover  lg:w-2/5 bg-[url('${meal.strMealThumb}')]`}
    //       >
    //         <img
    //           src={meal.strMealThumb}
    //           className="object-cover w-full h-full"
    //           alt={meal.strMeal}
    //         />
    //       </div>

    //       <div className="px-10 py-5">
    //         <h1 className="text-black  text-2xl font-medium font-['Poppins']">
    //           {meal.strMeal}
    //         </h1>
    //         <Ingridents measure={meal} />
    //       </div>
    //       <div className="px-10">
    //         <h1 className="text-black  text-2xl font-medium font-['Poppins']">
    //           DIRECTIONS
    //         </h1>
    //         <li>{meal.strInstructions}</li>
    //       </div>
    //     </article>
    //   )}
    // </section>
    <div className="flex w-full mx-auto border border-red-500 md:h-screen sm:items-center sm:justify-center sm:px-10">
      {recipes && <Card />}
    </div>
  );
}
