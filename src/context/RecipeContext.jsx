/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

//set a variable to the create context method
const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(null);
  const [recipeList, setRecipeList] = useState(null);
  const [favorites, setFavorites] = useState({
    isFavorite: false,
  });
  const [favlist, setFavList] = useState(null);

  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);

  async function getNextRecipe() {
    if (recipeList && recipeList.length > 0) {
      // Get the current index
      const currentIndex =
        (currentRecipeIndex - 1 + recipeList.length) % recipeList.length;

      // Get the idMeal from the recipeList using the currentIndex
      const idMeal = recipeList[currentIndex];

      // Use the idMeal to fetch the corresponding recipe
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then((response) => response.json())
        .then((data) => {
          const meal = data.meals && data.meals[0];
          setRecipes(meal);
        })
        .catch((error) => {
          console.error("Error fetching recipe:", error);
        });

      // Increment the current index for the next click
      setCurrentRecipeIndex(currentIndex);
    }
  }

  useEffect(() => {
    const savedFavorites = localStorage.getItem("saveFavorites");
    if (savedFavorites) {
      setFavList(JSON.parse(savedFavorites));
    }
  }, []);
  function addToFavorites(id, name, imageUrl) {
    const isFavorite = favorites.id === id;
    if (isFavorite) {
      removeFromFavorites();
    } else {
      // Add to local storage
      setFavorites({
        id,
        name,
        imageUrl,
        isFavorite: true,
      });
      const savedFavorites =
        JSON.parse(localStorage.getItem("saveFavorites")) || [];
      const isSaved = savedFavorites.some((fav) => fav.id === id);

      if (!isSaved) {
        const updatedList = [...savedFavorites, { id, name, imageUrl }];
        localStorage.setItem("saveFavorites", JSON.stringify(updatedList));
        setFavList(updatedList);
      }
    }
  }

  function removeFromFavorites() {
    const savedFavorites =
      JSON.parse(localStorage.getItem("saveFavorites")) || [];
    const updatedList = savedFavorites.filter((fav) => fav.id !== favorites.id);
    localStorage.setItem("saveFavorites", JSON.stringify(updatedList));
    setFavList(updatedList);
    setFavorites({
      id: null,
      name: null,
      imageUrl: null,
      isFavorite: false,
    });
  }

  async function getRecipes() {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      const meal = data.meals && data.meals[0];
      setRecipes(meal);

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
    <RecipeContext.Provider
      value={{
        recipes,
        recipeList,
        favorites,
        favlist,
        addToFavorites,
        getNextRecipe,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContext;
