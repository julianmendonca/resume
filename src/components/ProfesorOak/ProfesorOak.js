import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ProfesorOak = (props) => {
  useEffect(() => {
    try {
      window.scroll(0, 0);
      if (window.document.querySelector("iframe") === null) {
        window.document.querySelector("iframe").remove();
        window.document.querySelector(
          "discord_chat"
        ).innerHTML += `<iframe title="Discord Bot" src="https://widgetbot.io/channels/762859545189154816/762859808574668810/?api=e109816d-54b1-4a6f-b16b-c4e1504f5cf8" style="border: none; width: 100%; height: 100%;"></iframe>`;
      }
      //window.location.reload();
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <div className="background_orange">
      <div className="professor_oak_container background_orange">
        <Link to="/">
          <button className="home_button button_white">
            {props.spanish ? "Inicio" : "Home"}
          </button>
        </Link>
        <div className="oak_presentation">
          <h1 className="section_title white">
            {props.spanish ? "Profesor Oak" : "Professor Oak"}
          </h1>
          <img
            className="brain_icon"
            alt="Profesor Oak Icon"
            src={require("../../assets/images/profesor_oak.jpeg")}
          />
          <h2
            className="white"
            style={{
              textAlign: "center",
              textShadow: "6px 5px 8px rgb(120,0,84)",
            }}
          >
            {props.spanish
              ? "Profesor Oak es un bot de Pokemon para Discord, uno puede capturar pokemones, pelear y apostar pokemones con otros usuarios."
              : "Proffesor Oak is a Pokemon bot for Discord, you can either catch, fight or bet pokemons with other users."}
          </h2>
          <h2 className="white">
            {props.spanish ? "Comandos disponibles" : "Available  commands"}:
          </h2>
          <ul>
            <li className="white">
              <div>
                <strong className="comman_name">!buscar</strong>
              </div>{" "}
              <p className="command_description">
                {props.spanish
                  ? "Puede que aparezca un pokemon, puede tomar varios intentos."
                  : "A pokemon may appear, it can take a few attempts."}
              </p>
            </li>
            <li className="white">
              <div>
                <strong className="comman_name">!enviar pokemon</strong>
              </div>{" "}
              <p className="command_description">
                {props.spanish
                  ? "Cuando aparece un pokemon salvaje debes escribir !enviar + nombre_de_tu_pokemon para enviar un pokemon e intentar capturar al pokemon salvaje."
                  : "When a wild pokemon appear you must write !enviar + your_pokemon_name to send a pokemon and catch the wild pokemon."}
              </p>
            </li>
            <li className="white">
              <div>
                <strong className="comman_name">!pendiente</strong>
              </div>{" "}
              <p className="command_description">
                {props.spanish
                  ? "Te dice si tenes algun pokemon pendiente por capturar."
                  : "Tells you if there is a pending pokemon to capture."}
              </p>
            </li>
            <li className="white">
              <div>
                <strong className="comman_name">!pokedex pokemon</strong>
              </div>{" "}
              <p className="command_description">
                {props.spanish
                  ? "Muestra una imagen con los stats de un pokemon que poseas."
                  : "Shows an image with the stats of a pokemon you own."}
              </p>
            </li>
            <li className="white">
              <div>
                <strong className="comman_name">!comandos</strong>
              </div>{" "}
              <p className="command_description">
                {props.spanish
                  ? "Muestra todos los comandos disponibles. ( Algunos no funcionan en este widget)."
                  : "Show all available commands. ( Some of them doesen't work on this widget)."}
              </p>
            </li>
          </ul>
          <div className="discord_chat">
            <h5 className="white">
              {props.spanish
                ? "En este chat estan limitados los comandos y funciona un poco lento debido a las limitaciones del widget de discord."
                : "This chat is a little slow and has limited commands because of the limitations the discord widget has."}
            </h5>
            <iframe
              title="Discord Bot"
              src="https://widgetbot.io/channels/762859545189154816/762859808574668810/?api=e109816d-54b1-4a6f-b16b-c4e1504f5cf8"
              style={{ border: "none", width: "100%", height: "100%" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfesorOak;
