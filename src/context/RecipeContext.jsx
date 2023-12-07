/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

//set a variable to the create context method
const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(null);
  const [recipeList, setRecipeList] = useState(null);

  async function getRecipes() {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      setRecipes(data);

      const idMeal = data.meals[0].idMeal;
      const storedRecipes =
        JSON.parse(localStorage.getItem("recipeList")) || [];
      const updatedRecipeList = [...storedRecipes, idMeal];
      localStorage.setItem("recipeList", JSON.stringify(updatedRecipeList));
      setRecipeList(updatedRecipeList);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <RecipeContext.Provider value={{ recipes, recipeList }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContext;
