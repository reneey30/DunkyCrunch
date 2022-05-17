import { Link } from "react-router-dom";
import NavRecipe from "./components/navrecipe";
import RecipeCards from "./components/recipecards";



function Ingredients() {
  return (
    <div>
      <Link to="/">Back to Starting Page</Link>
      <p>Searched by Ingredients page</p>
      <NavRecipe />
      {/* for (let recipe of recipes) {
          <RecipeCards title={recipe.title} imageSrc={recipe.imageSrc}/>
      } */}
      <RecipeCards />
    </div>
  );
}

export default Ingredients;
