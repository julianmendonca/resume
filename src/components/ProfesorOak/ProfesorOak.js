import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const ProfesorOak = (props) => {
  useEffect(() => {
    try {
      window.scroll(0, 0);
      if (window.document.querySelector("iframe") === null)
        window.location.reload();
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <div>
      <div className="professor_oak_container background_orange">
        <Link to="/home">
          <button className="home_button">
            {props.spanish ? "Inicio" : "Home"}
          </button>
        </Link>
        <div className="oak_presentation">
          <h1 className="section_title white">
            {props.spanish ? "Profesor Oak" : "Proffesor Oak"}
          </h1>
          <img
            className="profesor_oak_icon"
            alt="Profesor Oak Icon"
            src={require("../../assets/images/profesor_oak.jpeg")}
          />
          <p className="white">
            {props.spanish
              ? "Profesor Oak es un bot de Pokemon para Discord, uno puede capturar pokemones, pelear y apostar pokemones con otros usuarios."
              : "Proffesor Oak is a Pokemon bot for Discord, you can either catch, fight or bet pokemons with other users."}
          </p>
          <div className="discord_chat">
            <widgetbot
              className="discord_chat"
              server="762859545189154816"
              channel="762859808574668810"
              width="100%"
            ></widgetbot>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfesorOak;
