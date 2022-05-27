import React from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NavMain({
  isLoggedIn,
  setIsLoggedIn,
  setApiQuery,
  signOut,
  auth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
}) {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      handleCloseR();
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      setIsLoggedIn(true);
      handleCloseL();
    } catch (error) {
      console.log(error.message);
    }
  };

  const registerHandler = (e) => {
    e.preventDefault();
    register();
  }

  const loginHandler = (e) => {
    e.preventDefault();
    login();
  }

  const handleCloseR = () => setShowRegister(false);
  const handleShowR = () => setShowRegister(true);

  const handleCloseL = () => setShowLogin(false);
  const handleShowL = () => setShowLogin(true);

  const handleSearch = (e) => {
    const ENDPOINT = "https://api.spoonacular.com/recipes/";
    const RECIPES_COUNT = 3;
    const API_KEY = "e74950d89dbe4c6a9349da28a66873bd";
    // const API_KEY = "9dcdb30197a14d4c973b4501f5bb3c7d";

    e.preventDefault();
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

    // searchFunction(searchQuery);

    setApiQuery(searchQuery);

    navigate("/ingredients", { replace: true });

    // setValue("");
  };

  const logout = async () => {
    await signOut(auth);
    setIsLoggedIn(false);
  };

  // const searchFunction = (searchQuery) => {
  //   fetch(searchQuery)
  //     .then((res) => res.json())
  //     .then((recipesList) => {
  //       console.log("recipes from search bar: ");
  //       console.log(recipesList);
  //       console.log(recipesList.results[0]);
  //     });
  // };

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
            <form onSubmit={handleSearch}>
              <div className="searchbar d-flex justify-content-between mx-2">
                <input
                  className="search_input"
                  type="text"
                  name="search"
                  placeholder="Search recipes..."
                  onChange={(e) => setValue(e.target.value)}
                ></input>
                <button
                  className="search_icon search-button"
                  type="submit"
                  id="search-recipe"
                >
                  <span><FontAwesomeIcon icon={faSearch} /></span>
                </button>
              </div>
            </form>
            {/* </div> */}
            <div>
              {user ? (
                <div className="d-flex justify-content-between">
                  <div>User: {user ? user.email : "Not Logged In"}</div>

                  <button className="btn btn-light mx-2" onClick={logout}>
                    logout
                  </button>
                </div>
              ) : (
                <div>
                  <button className="btn btn-light mx-2" onClick={handleShowL}>
                    Login
                  </button>
                  <button className="btn btn-light mx-2" onClick={handleShowR}>
                    Register
                  </button>
                </div>
              )}
            </div>

            {/* Register modal */}

            {/* <Button variant="primary" onClick={handleShowR}>
              Register
            </Button> */}

            <Modal show={showRegister} onHide={handleCloseR}>
              <Modal.Header closeButton>
                <Modal.Title>Register with Email and Password</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={registerHandler}>
                  <h3> Register User </h3>
                  <input
                    type="email"
                    placeholder="Email..."
                    className="form-control mb-2"
                    onChange={(event) => {
                      setRegisterEmail(event.target.value);
                    }}
                  />
                  <input
                    type="password"
                    placeholder="Password..."
                    className="form-control mb-2"
                    onChange={(event) => {
                      setRegisterPassword(event.target.value);
                    }}
                  />
                  <button
                    type="submit"
                    className="btn btn-outline-dark mb-2"
                  >
                    Create User
                  </button>

                  {/* <button type="submit"> Create User 2</button> */}
                </form>
              </Modal.Body>
              
            </Modal>

            {/* login modal*/}

            {/* <Button variant="primary" onClick={handleShowL}>
              Sign In
            </Button> */}

            <Modal show={showLogin} onHide={handleCloseL}>
              <Modal.Header closeButton>
                <Modal.Title>Sign In with Email and Password</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={loginHandler}>
                  <h3> Login </h3>
                  <input
                    type="email"
                    placeholder="Email..."
                    className="form-control mb-2"
                    onChange={(event) => {
                      setLoginEmail(event.target.value);
                    }}
                  />
                  <input
                    type="password"
                    placeholder="Password..."
                    className="form-control mb-2"
                    onChange={(event) => {
                      setLoginPassword(event.target.value);
                    }}
                  />
                  <button
                    type="submit"
                    className="btn btn-outline-dark mb-2"
                  >
                    Sign In
                  </button>

                  {/* <button onClick={login}> Login</button> */}
                </form>
              </Modal.Body>
              {/* <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseL}>
                  Close
                </Button>
                <Button variant="primary" onClick={login}>
                  Log In
                </Button>
              </Modal.Footer> */}
            </Modal>
          </div>

          {/* </div> */}
        </div>
      </nav>
    </>
  );
}

export default NavMain;
