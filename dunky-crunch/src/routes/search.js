import { Link } from "react-router-dom";
import NavRecipe from "./components/navrecipe";
import Details from "./components/details";
import RecipeImage from "./components/recipeimage";



function Search() {
    return (
      <div className="container">
        {/* <Link to="/">Back to Starting Page</Link>
        <p>Searched by recipe page</p> */}
        <NavRecipe />
        <Details />
        <RecipeImage />
      </div>
    );
  }
  
  export default Search;
  