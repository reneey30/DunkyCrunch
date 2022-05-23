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
        <Form.Group className="d-flex justify-content-center mb-2">

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
    console.log("to do:  get recipes from api");
  }

  return (
    <>
      <div className="mainform">
        <h1 className="text-center mb-4">Ingredients</h1>

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
