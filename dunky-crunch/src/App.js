import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import NavMain from "./routes/components/navmain";
// import MainForm from "./routes/components/mainform";
import Landing from "./routes/landing";
import Ingredients from "./routes/ingredients";
import Search from "./routes/search";
import { QueryContext } from "./QueryContext";
import { RecipeIdContext } from "./RecipeIdContext";

// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
import "./App.css";
// import { auth } from "./firebase-config";

// function App() {
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");

//   const [user, setUser] = useState({});

    // console.log(auth);

//   onAuthStateChanged(auth, (currentUser) => {
//     setUser(currentUser);
//   });

//   const register = async () => {
//     try {
//       const user = await createUserWithEmailAndPassword(
//         auth,
//         registerEmail,
//         registerPassword
//       );
//       console.log(user);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const login = async () => {
//     try {
//       const user = await signInWithEmailAndPassword(
//         auth,
//         loginEmail,
//         loginPassword
//       );
//       console.log(user);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const logout = async () => {
//     await signOut(auth);
//   };

//   return (
//     <div className="App">
//       <div>
//         <h3> Register User </h3>
//         <input
//           placeholder="Email..."
//           onChange={(event) => {
//             setRegisterEmail(event.target.value);
//           }}
//         />
//         <input
//           placeholder="Password..."
//           onChange={(event) => {
//             setRegisterPassword(event.target.value);
//           }}
//         />

//         <button onClick={register}> Create User</button>
//       </div>

//       <div>
//         <h3> Login </h3>
//         <input
//           placeholder="Email..."
//           onChange={(event) => {
//             setLoginEmail(event.target.value);
//           }}
//         />
//         <input
//           placeholder="Password..."
//           onChange={(event) => {
//             setLoginPassword(event.target.value);
//           }}
//         />

//         <button onClick={login}> Login</button>
//       </div>

//       <h4> User Logged In: </h4>
//       {user?.email}

//       <button onClick={logout}> Sign Out </button>
//     </div>
//   );
// }

function App() {
  const [apiQuery, setApiQuery] = useState(null);
  const [searchParams, setSearchParams] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const providerValue = { apiQuery, setApiQuery };

  return (
    <QueryContext.Provider value={{ apiQuery, setApiQuery, isLoggedIn, setIsLoggedIn }}>
      <RecipeIdContext.Provider value={{ searchParams, setSearchParams }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="ingredients" element={<Ingredients />} />
          <Route path="search" element={<Search />} />
        </Routes>
      </RecipeIdContext.Provider>
    </QueryContext.Provider>

    // {/* <Routes>

    //   <Route path="/" element={<Landing />} />
    //   <Route path="ingredients" element={<Ingredients />} />
    //   <Route path="search" element={<Search />} />

    // </Routes> */}

    // <div>
    //   <nav
    //     style={{
    //       borderBottom: "solid 1px",
    //       paddingBottom: "1rem",
    //     }}
    //   >
    //     <Link to="/ingredients">Ingredients</Link> |{" "}
    //     <Link to="/search">Search</Link>
    //   </nav>
    //   <h1>Landing Page</h1>
    //   <NavMain />
    //   <MainForm />
    // </div>
  );
}

export default App;
