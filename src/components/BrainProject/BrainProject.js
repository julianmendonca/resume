import React from "react";
import { Link } from "react-router-dom";
import TextColor from "./TextColor";
import SpellChecker from "../SpellChecker/SpellChecker";
const BrainProject = (props) => {
  return (
    <div style={{ paddingBottom: "30px" }}>
      <section className="align-center background_orange">
        <Link to="/home">
          <button className="home_button button_white">
            {props.spanish ? "Inicio" : "Home"}
          </button>
        </Link>
      </section>

      <section className="align-center background_orange">
        <div className="brain_project_container">
          <SpellChecker spanish={props.spanish}></SpellChecker>
        </div>
      </section>

      <section className="align-center">
        <div className="brain_project_container">
          <TextColor spanish={props.spanish}></TextColor>
        </div>
      </section>
    </div>
  );
};

export default BrainProject;
