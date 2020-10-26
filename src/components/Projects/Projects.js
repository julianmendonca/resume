import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import ScrollAnimation from "react-animate-on-scroll";

const AlgorithmProject = (props) => {
  return (
    <ScrollAnimation
    className="animate_component"
    animateIn="bounceInRight"
    duration={1}
    animateOnce={true}
    offset={5}
  >
      <div className="project_holder">
      <div className="project_info">
          <h2 className="white">
            {props.spanish ? "Algoritmo JS" : "JS Algorithm"}
          </h2>
          <img
          style={{borderRadius:'0'}}
            className="profesor_oak_icon"
            alt="Profesor Oak Icon"
            src={require("../../assets/icons/js.png")}
          />
        </div>
        <div className="project_details">
          <p className="white">
            {props.spanish
              ? parse(
                  "Haciendo uso de la estructura de datos Grafo armé un algoritmo de recomendación de productos en base a la similitud de los carros de compra"
                )
              : parse(
                  "I have built a product recommendation algorithm based on the similarity of shopping carts using a Graph data structure, w"
                )}
          </p>  
          <a href='https://github.com/julianmendonca/RecomendationAlgorithm'>
            <button className="button_white github-button">
              {props.spanish ? "Ver GitHub" : "View GitHub"}
              <img alt='github' src={require('../../assets/icons/github.png')}/>
            </button>
          </a>
        </div>

      </div>
    </ScrollAnimation>
  )
}
const CypressProject = (props) => {
  return (
    <ScrollAnimation
    className="animate_component"
    animateIn="bounceInRight"
    duration={1}
    animateOnce={true}
    offset={5}
  >
      <div className="project_holder">
      <div className="project_info">
          <h2 className="white">
            {props.spanish ? "Reporte de Tests" : "Tests Report"}
          </h2>
          <img
            className="profesor_oak_icon"
            alt="Profesor Oak Icon"
            src={require("../../assets/icons/cypress.png")}
          />
        </div>
        <div className="project_details">
          <p className="white">
            {props.spanish
              ? parse(
                  "Construi un proceso que arma cada una hora el reporte de tests automatizados con <a href='https://www.cypress.io/'>Cypress</a>, luego deploya en <a href='https://surge.sh/'>Surge</a> y por ultimo envia un mail notificando que finalizaron los tets"
                )
              : parse(
                  "I have built a process that creates a HTML report of <a href='https://www.cypress.io/'>Cypress</a> tests every hour, deploys in <a href='https://surge.sh/'>Surge</a> and sends an email notifyng the tests has ended"
                )}
          </p>  
          <a href='https://github.com/julianmendonca/resume'>
            <button className="button_white github-button">
              {props.spanish ? "Ver GitHub" : "View GitHub"}
              <img alt='github' src={require('../../assets/icons/github.png')}/>
            </button>
          </a>
        </div>

      </div>
    </ScrollAnimation>
  )
}
const ReactProject = (props) => {
  return (
    <ScrollAnimation
      className="animate_component"
      animateIn="bounceInLeft"
      duration={1}
      animateOnce={true}
      offset={5}
    >
      <div className="project_holder">
        <div className="project_info">
          <h2 className="white">
            {props.spanish ? "Projectos en React" : "React Projects"}
          </h2>
          <img
            className="profesor_oak_icon"
            alt="Profesor Oak Icon"
            src={require("../../assets/icons/react.png")}
          />
        </div>
        <div className="project_details">
          <p className="white">
            {props.spanish
              ? parse(
                  "He realizado aplicaciones web con contenido personalizado usando <b>React.js</b> para Easy Argentina, Musimundo y Locatel Colombia. Tambien esta misma pagina fue hecha en <b>React.js</b> usando <b>React Hooks</b>"
                )
              : parse(
                  "I have built web apps in <b>React.js</b> with personalized content for Easy Argentina, Musimundo and Locatel Colombia. This website is also made with <b>React.js</b> and <b>React Hooks</b>"
                )}
          </p>
          <a href='https://github.com/julianmendonca/resume'>
            <button className="button_white github-button">
              {props.spanish ? "Ver GitHub" : "View GitHub"}
              <img alt='github' src={require('../../assets/icons/github.png')}/>
            </button>
          </a>
        </div>
      </div>
    </ScrollAnimation>
  );
};

const ProfesorOak = (props) => {
  return (
    <ScrollAnimation
      className="animate_component"
      animateIn="bounceInLeft"
      duration={1}
      animateOnce={true}
      offset={5}
    >
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
          <a href='https://github.com/julianmendonca/ProfesorOak'>
            <button className="button_white github-button">
              {props.spanish ? "Ver GitHub" : "View GitHub"}
              <img alt='github' src={require('../../assets/icons/github.png')}/>
            </button>
          </a>
        </div>
      </div>
    </ScrollAnimation>
  );
};

const BrainProject = (props) => {
  return (
    <ScrollAnimation
      className="animate_component"
      animateIn="bounceInRight"
      duration={1}
      animateOnce={true}
      offset={5}
    >
      <div className="project_holder_brain">
        <div className="project_info">
          <h2 className="white">
            {props.spanish ? "Algoritmos y " : "Algorithms & "}Brain.js
          </h2>
          <img
            className="brain_icon"
            alt="Profesor Oak Icon"
            src={require("../../assets/images/brain.png")}
          />
        </div>
        <div className="project_details_brain">
          <p className="white">
            {props.spanish
              ? "Me interesan mucho los Algoritmos y Machine Learning/Deep Learning, asi que arme unos pequeños proyectos para ver sus utilidades en Javascript, utilizando simples algoritmos y Brain.js"
              : "I am very interested in Algorithms and Machine Learning/Deep Learning, so i made a few little projects to see its utilities in Javascript using simple algorithms and brain.js"}
          </p>
          <Link to="/brain">
            <button className="button_white">
              {props.spanish ? "Saber más" : "Learn more"}
            </button>
          </Link>
        </div>
      </div>
    </ScrollAnimation>
  );
};

const Projects = (props) => {
  return (
    <div className="section_holder">
      <h1 className="section_title white">
        {props.spanish ? "Proyectos Personales" : "Personal Projects"}
      </h1>
      <ProfesorOak spanish={props.spanish}></ProfesorOak>
      {true ? "" : <BrainProject spanish={props.spanish}></BrainProject>}
      <CypressProject spanish={props.spanish}/>
      <ReactProject spanish={props.spanish}></ReactProject>
      <AlgorithmProject spanish={props.spanish}></AlgorithmProject>
    </div>
  );
};

export default Projects;
