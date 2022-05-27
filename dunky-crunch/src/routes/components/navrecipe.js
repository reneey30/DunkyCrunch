import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function NavRecipe({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();

  let back = () => {
    let current = location.pathname;

    if (current === "/ingredients") {
      return "/";
    }
    if (current === "/search") {
      return "/ingredients";
    }

    return "/";
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div>
            <Link to={back()} className="m-2">
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
            {isLoggedIn ? (
              <button className="btn btn-light mx-2" >logout</button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavRecipe;
