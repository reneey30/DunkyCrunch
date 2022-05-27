// import { Link } from "react-router-dom";
import "./../App.css";
import NavMain from "./components/navmain";
import MainForm from "./components/mainform";
import { useContext, useState, useEffect } from "react";
import { QueryContext } from "./../QueryContext";

function Landing() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  const {
    setApiQuery,
    isLoggedIn,
    setIsLoggedIn,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    auth,
  } = useContext(QueryContext);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

}, [])

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
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
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <div className="container">
        <NavMain
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setApiQuery={setApiQuery}
        />
        <MainForm setApiQuery={setApiQuery} />

        <div>
          <h3> Register User </h3>
          <input
            placeholder="Email..."
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <input
            placeholder="Password..."
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />

          <button onClick={register}> Create User</button>
        </div>

        <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login}> Login</button>
      </div>

      <h4> User Logged In: </h4>
      {user ? user.email : "Not Logged In"}

      <button onClick={logout}> Sign Out </button>
      
      </div>
    </>
  );
}

export default Landing;
