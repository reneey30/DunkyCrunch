// import { Link } from "react-router-dom";
import "./../App.css";
import NavMain from "./components/navmain";
import MainForm from "./components/mainform";
import { useContext } from "react";
import { QueryContext } from "./../QueryContext";

function Landing() {
  const { setApiQuery, isLoggedIn, setIsLoggedIn } = useContext(QueryContext);

  return (
    <>
      <div className="container">
        <NavMain isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setApiQuery={setApiQuery}/>
        <MainForm setApiQuery={setApiQuery}/>
      </div>
    </>
  );
}

export default Landing;
