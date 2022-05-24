import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function RecipeCards({ recipes }) {
  
  return (
    <>
      <div className="mb-2">
        {recipes.length ? (
          recipes.map((recipe, index) => (
            <Card>
              <Card.Body>
                  <Card.Header>{recipe.title}</Card.Header>
                  <Card.Title>{recipe.likes}</Card.Title>
                  <img src={recipe.image}></img>
            </Card.Body>
            </Card>
          ))
        ) : (
          <p>No recipes found...</p>
        )}
      </div>
    </>
  );
}

export default RecipeCards;
