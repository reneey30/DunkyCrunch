import React from "react";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Ingredient({ ingredient, index, removeIngredient }) {
  return (
    <div className="ingredient">
      <span>{ingredient}</span>
      <div>
        <Button
          variant="outline-danger"
          onClick={() => removeIngredient(index)}
        >
          ✕
        </Button>
      </div>
    </div>
  );
}

function FormIngredient({ addIngredient, getRecipes }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addIngredient(value);
    setValue("");
  };

  return (
    <>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="d-flex justify-content-center mb-3">

            <Form.Control
              type="text"
              className="input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Add new ingredients"
            />
            <Button className="btn btn-dark" type="submit" id="add-ingredient">
              Add Ingredient
            </Button>
        
        </Form.Group>
      </Form>

      <Button variant="primary mb-3" onClick={() => getRecipes()}>
        Submit
      </Button>
    </>
  );
}

function MainForm() {
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = (text) => {
    const newIngredients = [...ingredients, text];
    setIngredients(newIngredients);
    console.log(newIngredients);
  };

  const removeIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const getRecipes = () => {
    let localIngredients = [...ingredients];
    console.log("to do:  get recipes from api");
    const ENDPOINT = "https://api.spoonacular.com/recipes/";
    const RECIPES_COUNT = 3;
    // const API_KEY = "e74950d89dbe4c6a9349da28a66873bd";
    const API_KEY = "9dcdb30197a14d4c973b4501f5bb3c7d";

    const joiner = ",+";

    let query1 = `${ENDPOINT}findByIngredients`; 

    // let j = 0;
    let allIngredients = localIngredients.join(joiner);

    // console.log(localIngredients);

    // let tempIngredientString = localIngredients[0];

    // for(let j=1;j<(localIngredients.length - 1); j++){
    //   tempIngredientString = tempIngredientString + joiner + localIngredients[j];
    // }

    // let allIngredients = tempIngredientString;

    console.log(allIngredients);

    let ingredientString = allIngredients + "&number=" + RECIPES_COUNT;

    let ingredientQuery = `${query1}?ingredients=${ingredientString}&apiKey=${API_KEY}`;

    console.log(ingredientQuery);

    // setApiQuery(ingredientQuery);

    // // fetch recipes
    // fetch(ingredientQuery)
    // .then(res => res.json())
    // .then(recipes => {
    //     // work with data returned from API in this block
    //     console.log(recipes);
    //     //cards container
    //     // let cards = document.getElementById("cards-container").getElementsByClassName("recipe");
 
    //     // let i = 0;

    //     // let tempRecipesId = []

    //     for (let recipe of recipes){

    //       console.log(recipe);
    //         // working on each individual recipe card

    //         // tempRecipesId.push(recipe.id);
            
    //         // title: recipe.title
    //         // image: recipe.image
    //         // ingredients: 1. ingredients not requested(missing) recipe.missedIngredients - loop thru => recipe.missedIngredients[n].name
    //         //ingredients: 2. ingredients requested(in request by user) recipe.usedIngredients - loop thru => recipe.usedIngredients[n].name
    //         //instructions: recipe.id will be used to get {RecipeID} to use in query 2
    //         // 

    //         // cards[i].getElementsByClassName("card-title")[0].innerText = recipe.title;
    //         // cards[i].getElementsByClassName("card-img-top")[0].src = recipe.image;

    //         // let listContainer = cards[i].getElementsByClassName("list-group")[0];

    //         // loop one - add ingredients requested to ul
 
    //         // for (let usedIngredient of recipe.usedIngredients) {

    //         //     addList("<strong>" + usedIngredient.name + "</strong>", listContainer);
    //         // }           

    //         // loop two - add ingredients not requested to ul

    //         // for (let missedIngredient of recipe.missedIngredients) {

    //         //     addList(missedIngredient.name, listContainer);
    //         // }

    //         // i++;     
    //     }

    //     // return tempRecipesId;
    // })
  };

  return (
    <>
      <div className="mainform">
        <h2 className="text-center mb-4">Ingredients</h2>

        <div className="mb-4">
          {ingredients.map((ingredient, index) => (
            <Card>
              <Card.Body>
                <Ingredient
                  key={index}
                  index={index}
                  ingredient={ingredient}
                  removeIngredient={removeIngredient}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
        <FormIngredient addIngredient={addIngredient} getRecipes={getRecipes}/>
      </div>
    </>
  );
}

export default MainForm;
