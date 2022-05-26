import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";


function NavRecipe() {
  return (
    <>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">

              <div>
              <Link to="/" className="m-2">
                <FontAwesomeIcon icon={faAngleLeft} />
              </Link>
                </div>          
              <div className="d-flex justify-content-center mx-auto">
                <h1
                  style={{
                    color: "black",
                  }}
                >
                  DunkyCrunch!
                </h1>
              </div>
              <div className="d-flex justify-content-end">
              
              <Link to="/search">Search</Link>
              <Link to="/ingredients" className="m-2">Ingredients</Link>
              </div>
           
          </div>
        </nav>
    </>
  );
}

export default NavRecipe;
