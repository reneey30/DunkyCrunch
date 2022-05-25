import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../App.css";

function SingleIngredient({ title, amount, unit }) {
  return (
    <li>
      <div className="d-flex">
        <div className="px-2"> {title} : </div>
        <div className="px-1"> {amount}</div>
        <div>{unit}</div>
      </div>
    </li>
  );
}

function Details({ recipeTitle, recipeImage, ingredientsList }) {
  let ingredients = ingredientsList.ingredients;

  console.log("ingredients type: ");
  console.log(ingredients);
  let a = () =>
    ingredients !== undefined
      ? console.log(ingredients[0].amount.metric.unit)
      : console.log("no ingredients");

  a();

  return (
    <div className="mx-auto single-recipe">
      <h2 className="text-center">
        <strong>{recipeTitle}</strong>
      </h2>
      <div className="d-flex justify-content-evenly m-2 p-2">
        <div>
          <h4>Ingredients</h4>
          <ol>
            {ingredients !== undefined && ingredients.length ? (
              ingredients.map(({ name, amount }, index) => (
                <SingleIngredient
                  title={name}
                  amount={amount.metric.value}
                  unit={amount.metric.unit}
                />
              ))
            ) : (
              <li>No ingredients found...</li>
            )}
          </ol>
          {/* < SingleIngredient title="Broccoli" amount="182.0" unit="g"/> */}
          {/* {(ingredients !== undefined) && ingredients.length ? (
          ingredients.map(({ name, amount }, index) => (
            < SingleIngredient title={name} amount={amount.metric.value} unit={amount.metric.unit}/>
          ))
        ) : (
          <p>No ingredients found...</p>
        )} */}
        </div>
        <div style={{ width: "312px", height: "231px" }}>
          <img alt="recipe" className="single-recipe-image" src={recipeImage} />
        </div>
      </div>
    </div>
  );
}

export default Details;
