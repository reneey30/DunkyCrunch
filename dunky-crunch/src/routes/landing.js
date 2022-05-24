import { Link } from "react-router-dom";
import "./../App.css";
import NavMain from "./components/navmain";
import MainForm from "./components/mainform";

function Landing() {
  return (
    <>
      <div className="container">
        <NavMain />
        <MainForm />
      </div>
    </>
  );
}

export default Landing;
