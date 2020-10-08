import React from "react";
import { Link } from "react-router-dom";

// Icons
import professorOakIcon from "../../assets/images/profesor_oak.jpeg";
import brainJsIcon from "../../assets/images/brain.png";

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
          src={professorOakIcon}
        />
      </div>
      <div className="project_details">
        <p className="white">
          {props.spanish
            ? "Profesor Oak es un bot de discord, el cual fue construido utilizando PokeApi, Discord.js, PostreSQL y esta hosteado en Heroku y con Integración Continua"
            : "Profesor Oak is a discord bot, it was built using PokeApi, Discord.js, PostgreSQL and it's hosted on Heroku with Continuous Integration"}
        </p>
        <Link to="/professor_oak">
          <button className="button_white">
            {props.spanish ? "Saber más" : "Learn more"}
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
        <h2 className="white">
          {props.spanish ? "Algoritmos y " : "Algorithms & "}Brain.js
        </h2>
        <img className="brain_icon" alt="Profesor Oak Icon" src={brainJsIcon} />
      </div>
      <div className="project_details_brain">
        <p className="white">
          {props.spanish
            ? "Me interesan mucho los Algoritmos y Machine Learning/Deep Learning, asi que investigué esos conceptos desarrollando pequeños proyectos para ver sus utilidades en Javascript, utilizando simples algoritmos y Brain.js"
            : "I am very interested in Algorithms and Machine Learning/Deep Learning, so I've been doing some research while developing a few projects to learn more about their utilities in Javascript using simple algorithms and brain.js"}
        </p>
        <Link to="/brain">
          <button className="button_white">
            {props.spanish ? "Saber más" : "Learn more"}
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
