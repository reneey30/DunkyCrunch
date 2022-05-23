import { Link } from "react-router-dom";
import './../App.css';
import NavMain from "./components/navmain";
import MainForm from "./components/mainform";


function Landing() {
    return (
      <div className="app">
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
        <NavMain />
        <MainForm />
      </div>
    );
  }
  
  export default Landing;
  