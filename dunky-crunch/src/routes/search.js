import { QueryContext } from "./../QueryContext";
import React, { useEffect, useState, useContext } from "react";
import NavRecipe from "./components/navrecipe";
import Details from "./components/details";


function Search() {

  const [ingredientsList, setIngredientsList ] = useState({});
  const { apiQuery } = useContext(QueryContext);

  const ENDPOINT = "https://api.spoonacular.com/recipes/";
  const API_KEY = "e74950d89dbe4c6a9349da28a66873bd";
  
  let recipeId = 661447;
  let recipeTitle = "Square Deviled Eggs";
  let recipeImage = "https://spoonacular.com/recipeImages/661447-312x231.jpg";

  let queryString = `${ENDPOINT}${recipeId}/ingredientWidget.json?apiKey=${API_KEY}`

  console.log("querystring: " + queryString);

  useEffect(() => {
    // fetch ingredients
    fetch(queryString)
      .then((res) => res.json())
      .then((ingredients) => {
          console.log("ingredients: " + JSON.stringify(ingredients));
          setIngredientsList(ingredients);
        }
      );
  },[queryString]);

    return (
      <div className="container">
        {/* <Link to="/">Back to Starting Page</Link>
        <p>Searched by recipe page</p> */}
        <NavRecipe />
        <Details recipeTitle={recipeTitle} recipeImage={recipeImage} ingredientsList={ingredientsList}/>
      </div>
    );
  }
  
  export default Search;
  