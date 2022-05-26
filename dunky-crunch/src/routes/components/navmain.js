import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavMain({ isLoggedIn, setIsLoggedIn, setApiQuery }) {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const ENDPOINT = "https://api.spoonacular.com/recipes/";
    const RECIPES_COUNT = 3;
    const API_KEY = "e74950d89dbe4c6a9349da28a66873bd";
    // const API_KEY = "9dcdb30197a14d4c973b4501f5bb3c7d";

    // e.preventDefault();
    if (!value) return;

    let searchQuery =
      ENDPOINT +
      "complexSearch?query=" +
      value +
      "&number=" +
      RECIPES_COUNT +
      "&apiKey=" +
      API_KEY;

    // let searchQuery = "https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=3&apiKey=e74950d89dbe4c6a9349da28a66873bd";

    console.log("search for: " + value);

    searchFunction(searchQuery)

    setApiQuery(searchQuery);

    navigate("/ingredients", { replace: true });

    // setValue("");
  };

  const searchFunction = (searchQuery) => {
    fetch(searchQuery)
      .then((res) => res.json())
      .then((recipesList) => {
        console.log("recipes from search bar: ");
        console.log(recipesList);
        console.log(recipesList.results[0]);
      });
  };

  // let searchQuery = "https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=3&apiKey=e74950d89dbe4c6a9349da28a66873bd";

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* <div className="d-flex"> */}
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
            {/* <div className="d-flex justify-content-center"> */}
            <div className="searchbar d-flex justify-content-center mx-2">
              <input
                className="search_input"
                type="text"
                name="search"
                placeholder="Search recipes..."
                onChange={(e) => setValue(e.target.value)}
              ></input>
              <span className="search_icon">
                <FontAwesomeIcon icon={faSearch} onClick={handleSearch} />
              </span>
            </div>
            {/* </div> */}
            <div>
              {isLoggedIn ? (
                <button
                  className="btn btn-light mx-2"
                  onClick={() => {
                    setIsLoggedIn(false);
                  }}
                >
                  logout
                </button>
              ) : (
                <button
                  className="btn btn-light mx-2"
                  onClick={() => {
                    setIsLoggedIn(true);
                  }}
                >
                  login
                </button>
              )}
            </div>
          </div>

          {/* </div> */}
        </div>
      </nav>
    </>
  );
}

export default NavMain;
