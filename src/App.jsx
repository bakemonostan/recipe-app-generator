import Hero from "./components/Hero";
import { RecipeProvider } from "./context/RecipeContext";

export default function App() {
  return (
    <RecipeProvider>
      <Hero />
    </RecipeProvider>
  );
}
