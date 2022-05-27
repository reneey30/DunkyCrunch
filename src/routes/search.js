import { RecipeIdContext } from "../RecipeIdContext";
import { QueryContext } from "./../QueryContext";
import React, { useEffect, useState, useContext } from "react";
import NavRecipe from "./components/navrecipe";
import Details from "./components/details";


function Search() {

  const [ingredientsList, setIngredientsList ] = useState({});
  const { 
    isLoggedIn, 
    setIsLoggedIn,
    onAuthStateChanged,
    signOut,
    auth  
  } = useContext(QueryContext);
  const { searchParams } = useContext(RecipeIdContext);

  const ENDPOINT = "https://api.spoonacular.com/recipes/";
  const API_KEY = "e74950d89dbe4c6a9349da28a66873bd";

  let params = searchParams;
  
  // let recipeId = 661447;
  // let recipeTitle = "Square Deviled Eggs";
  // let recipeImage = "https://spoonacular.com/recipeImages/661447-312x231.jpg";

  let {recipeId, recipeTitle, recipeImage} = params;

  let queryString = `${ENDPOINT}${recipeId}/ingredientWidget.json?apiKey=${API_KEY}`

  console.log("querystring + params: " + queryString + " : ");
  console.log(params);

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
        <NavRecipe
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          onAuthStateChanged={onAuthStateChanged}
          signOut={signOut}
          auth={auth}
        />
        <Details
          recipeTitle={recipeTitle}
          recipeImage={recipeImage}
          ingredientsList={ingredientsList}
        />
      </div>
    );
  }
  
  export default Search;
  