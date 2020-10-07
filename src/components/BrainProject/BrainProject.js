import React from "react";
import { Link } from "react-router-dom";
import TextColor from "./TextColor";
const BrainProject = (props) => {
  return (
    <div className="background_orange" style={{ paddingBottom: "30px" }}>
      <div className="brain_project_container background_orange">
        <Link to="/home">
          <button className="home_button button_white">
            {props.spanish ? "Inicio" : "Home"}
          </button>
        </Link>
        <TextColor spanish={props.spanish}></TextColor>
      </div>
    </div>
  );
};

export default BrainProject;
