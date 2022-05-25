import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../App.css";

function RecipeCards({ recipes, setSearchParams }) {
  return (
    <div className="m-5">
      <div className="d-flex justify-content-evenly">
        {recipes.length ? (
          recipes.map(({ id, title, likes, image }, index) => (
            <div
              key={index}
              className="recipe-card"
              style={{ backgroundImage: "url(" + image + ")" }}
            >
              <div className="recipe-card-screen">
                <p className="text-center text-white">
                  <strong>{title}</strong>
                </p>
                <p className="text-center text-white">Likes: {likes}</p>
                <Button
                  onClick={() =>
                    console.log({ id: id, title: title, image: image })
                  }
                >
                  Ingredients details
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p>No recipes found...</p>
        )}
      </div>
    </div>
  );
}

export default RecipeCards;
