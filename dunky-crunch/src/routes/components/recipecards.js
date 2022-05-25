import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../App.css";

function RecipeCards({ recipes }) {
  return (
    <div className="m-5">
      <div className="d-flex justify-content-evenly">
        {recipes.length ? (
          recipes.map(({ title, likes, image }, index) => (
            <div
              className="recipe-card"
              style={{ backgroundImage: "url(" + image + ")" }}
            >
              <div className="recipe-card-screen">
                <p className="text-center text-white">
                  <strong>{title}</strong>
                </p>
                <p className="text-center text-white">Likes: {likes}</p>
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
