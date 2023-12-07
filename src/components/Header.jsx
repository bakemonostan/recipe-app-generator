import { Heart, RefreshCw } from "lucide-react";
import Button from "./Button"; // Adjust the path based on your project structure

export default function Header() {
  // console.log(recipeList)

  const handleClick = () => {
    location.replace(location.href);
  };

  // Function to perform an action and store it for undo

  return (
    <section className="w-full bg-white sm:hidden">
      {/* Mobile view */}
      <div className="flex justify-between p-7 lg:hidden">
        <div className="flex gap-5">
          <Button label="Back" />
          <Button label="Favorites" />
        </div>
        <div className="flex gap-5 ">
          {/* Pass the performAction function to the onClick prop */}
          <RefreshCw className="w-[34.77px] h-[34px]" onClick={handleClick} />
          <Heart className="w-[26.07px] h-[34px]" />
        </div>
      </div>
    </section>
  );
}
