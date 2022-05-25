import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function NavRecipe() {
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
              <Link to="/">Back to Starting Page</Link>
              </div>
            {/* </div> */}
          </div>
        </nav>
    </>
  );
}

export default NavRecipe;
