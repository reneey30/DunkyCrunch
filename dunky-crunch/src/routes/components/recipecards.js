import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../App.css";

function RecipeCards({ recipes }) {
  
  return (
    <>
    
      <div className="d-flex justify-content-around">
        {recipes.length ? (
          recipes.map(({title,likes,image}, index) => (

            <div className="recipe-card" style={{backgroundImage: "url(" + image + ")"}}>
                <p><strong>{title}</strong></p>
                <p>Likes: {likes}</p>
            </div>
          ))
        ) : (
          <p>No recipes found...</p>
        )}
      </div>
    </>
  );
}

export default RecipeCards;
