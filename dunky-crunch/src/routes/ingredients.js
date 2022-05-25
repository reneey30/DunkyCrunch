import React, { useEffect, useState, useContext } from "react";
// import { Link } from "react-router-dom";
import NavRecipe from "./components/navrecipe";
import RecipeCards from "./components/recipecards";
import { QueryContext } from "./../QueryContext";


function Ingredients() {

  const [recipesObject, setRecipesObject] = useState({});
  const { apiQuery, setSearchParams } = useContext(QueryContext);
  // let ingredientQuery = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=cheese,+pork&number=3&apiKey=9dcdb30197a14d4c973b4501f5bb3c7d";
  let ingredientQuery=apiQuery;

  console.log("ingredients query: " + ingredientQuery);

  useEffect(() => {
    // fetch recipes
    fetch(ingredientQuery)
      .then((res) => res.json())
      .then((recipes) => {
        // work with data returned from API in this block
        console.log(recipes);
        //cards container
        // let cards = document.getElementById("cards-container").getElementsByClassName("recipe");

        // let i = 0;

        // let tempRecipesId = []

        setRecipesObject(recipes);

        // for (let recipe of recipes) {
        //   console.log(recipe);
          // working on each individual recipe card

          // tempRecipesId.push(recipe.id);

          // title: recipe.title
          // image: recipe.image
          // ingredients: 1. ingredients not requested(missing) recipe.missedIngredients - loop thru => recipe.missedIngredients[n].name
          //ingredients: 2. ingredients requested(in request by user) recipe.usedIngredients - loop thru => recipe.usedIngredients[n].name
          //instructions: recipe.id will be used to get {RecipeID} to use in query 2
          //

          // cards[i].getElementsByClassName("card-title")[0].innerText = recipe.title;
          // cards[i].getElementsByClassName("card-img-top")[0].src = recipe.image;

          // let listContainer = cards[i].getElementsByClassName("list-group")[0];

          // loop one - add ingredients requested to ul

          // for (let usedIngredient of recipe.usedIngredients) {

          //     addList("<strong>" + usedIngredient.name + "</strong>", listContainer);
          // }

          // loop two - add ingredients not requested to ul

          // for (let missedIngredient of recipe.missedIngredients) {

          //     addList(missedIngredient.name, listContainer);
          // }

          // i++;
        // }

        // return tempRecipesId;
      });
  },[ingredientQuery]);

  return (
    <div className="container">
      {/* <Link to="/">Back to Starting Page</Link>
      <p>Searched by Ingredients page</p> */}
      {/* <p> {JSON.stringify(recipesObject)}</p> */}
      <NavRecipe />
      <RecipeCards recipes={recipesObject} setSearchParams={setSearchParams}/>
    </div>
  );
}

export default Ingredients;
