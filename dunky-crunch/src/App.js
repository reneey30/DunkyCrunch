import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import NavMain from "./routes/components/navmain";
// import MainForm from "./routes/components/mainform";
import Landing from "./routes/landing";
import Ingredients from "./routes/ingredients";
import Search from "./routes/search";
import { QueryContext } from "./QueryContext";

function App() {
  const [apiQuery, setApiQuery] = useState(null);

  // const providerValue = { apiQuery, setApiQuery };

  return (
    <QueryContext.Provider value={{apiQuery, setApiQuery}}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="ingredients" element={<Ingredients />} />
        <Route path="search" element={<Search />} />
      </Routes>
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
