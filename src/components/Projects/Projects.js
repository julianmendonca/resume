import React from "react";
import { Link } from "react-router-dom";

const ProfesorOak = (props) => {
  return (
    <div className="project_holder">
      <div className="project_info">
        <h2 className="white">
          {props.spanish ? "Profesor Oak" : "Professor Oak"}
        </h2>
        <img
          className="profesor_oak_icon"
          alt="Profesor Oak Icon"
          src={require("../../assets/images/profesor_oak.jpeg")}
        />
      </div>
      <div className="project_details">
        <p className="white">
          {props.spanish
            ? "Profesor Oak es un bot de discord, el cual fue construido utilizando PokeApi, Discord.js, PostreSQL y esta hosteado en Heroku"
            : "Profesor Oak is a discord bot, it was built using PokeApi, Discord.js, PostgreSQL and it's hosted on Heroku"}
        </p>
        <Link to="/professor_oak">
          <button className="button_white">
            {props.spanish ? "Saber más" : "Know more"}
          </button>
        </Link>
      </div>
    </div>
  );
};

const BrainProject = (props) => {
  return (
    <div className="project_holder_brain">
      <div className="project_info">
        <h2 className="white">Brain.js</h2>
        <img
          className="brain_icon"
          alt="Profesor Oak Icon"
          src={require("../../assets/images/brain.png")}
        />
      </div>
      <div className="project_details_brain">
        <p className="white">
          {props.spanish
            ? "Brain.js es una libreria de Neural Networks para javascript que utiliza GPU para poder utilizarse en el navegador web, arme pequeños proyectos para ver sus utilidades"
            : "Brain.js is a Neural Network library for javascript wich uses GPU to be able to be usable in web browsers, I built a few small projects to show its uitilities"}
        </p>
        <Link to="/brain">
          <button className="button_white">
            {props.spanish ? "Saber más" : "Know more"}
          </button>
        </Link>
      </div>
    </div>
  );
};

const Projects = (props) => {
  return (
    <div className="section_holder">
      <h1 className="section_title white">
        {props.spanish ? "Proyectos Personales" : "Personal Projects"}
      </h1>
      <ProfesorOak spanish={props.spanish}></ProfesorOak>
      <BrainProject spanish={props.spanish}></BrainProject>
    </div>
  );
};

export default Projects;
