import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function NavMain({isLoggedIn, setIsLoggedIn}) {
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
                      <input className="search_input" type="text" name="search" placeholder="Search recipes..."></input>
                      <span className="search_icon">
                      <FontAwesomeIcon icon={faSearch} />
                      </span>
                    </div>
                  {/* </div> */}
                  <div>
                    { isLoggedIn ?
                    (<button className="btn btn-light mx-2">logout</button>)
                    :
                    (<button className="btn btn-light mx-2">login</button>)
                    }
                  </div>  
              </div>
            
            {/* </div> */}
          </div>
        </nav>
    </>
  );
}

export default NavMain;
