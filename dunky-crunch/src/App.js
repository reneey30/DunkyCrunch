import { Link } from "react-router-dom";
import './App.css';



function App() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/ingredients">Ingredients</Link> |{" "}
        <Link to="/search">Search</Link>
      </nav>
      <h1>Landing Page</h1>
    </div>
  );
}

export default App;
