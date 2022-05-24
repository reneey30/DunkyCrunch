import { Link } from "react-router-dom";
import "./../App.css";
import NavMain from "./components/navmain";
import MainForm from "./components/mainform";
import { useContext } from "react";
import { QueryContext } from "./../QueryContext";

function Landing() {
  const { setApiQuery } = useContext(QueryContext);

  return (
    <>
      <div className="container">
        <NavMain />
        <MainForm setApiQuery={setApiQuery}/>
      </div>
    </>
  );
}

export default Landing;
