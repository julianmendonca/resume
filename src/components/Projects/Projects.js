import React from "react";

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
        <button className="button_white">
          {props.spanish ? "Saber más" : "Know more"}
        </button>
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
    </div>
  );
};

export default Projects;
