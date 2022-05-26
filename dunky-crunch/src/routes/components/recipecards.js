import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../App.css";
import { useNavigate } from "react-router-dom";

function RecipeCards({ recipes, setSearchParams }) {
  let navigate = useNavigate();

  return (
    <div className="m-5">
      <div className="d-flex justify-content-evenly">
        {recipes.length ? (
          recipes.map(({ id, title, image }, index) => (
            <div
              onClick={() => {
                    
                let params = { recipeId: id, recipeTitle: title, recipeImage: image };
                console.log(params);
                setSearchParams(params);
                navigate("/search", {replace: true});

              }}
              key={index}
              className="recipe-card"
              style={{ backgroundImage: "url(" + image + ")" }}
            >
              <div className="recipe-card-screen">
                <p className="text-center text-white">
                  <strong>{title}</strong>
                </p>
                <p className="text-center text-white">Click for details...</p>
              
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
