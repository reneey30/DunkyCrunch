import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function NavRecipe({ 
  isLoggedIn, 
  setIsLoggedIn, 
  signOut,
  auth,
  onAuthStateChanged,
 }) {
  const location = useLocation();

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const logout = async () => {
    await signOut(auth);
    setIsLoggedIn(false);
  };

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
            {user ? (
              // <button className="btn btn-light mx-2" >logout</button>
              <div className="d-flex justify-content-between">
                  <div>
                    User: {user ? user.email : "Not Logged In"}
                  </div>

                  <button className="btn btn-light mx-2" onClick={logout}>
                    logout
                  </button>
                </div>
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
