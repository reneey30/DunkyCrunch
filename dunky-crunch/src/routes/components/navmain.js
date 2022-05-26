import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function NavMain() {
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
                  <h2>search</h2>
                  
              </div>
            
            {/* </div> */}
          </div>
        </nav>
    </>
  );
}

export default NavMain;
