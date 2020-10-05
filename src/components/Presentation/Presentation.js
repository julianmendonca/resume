import React, { useState } from "react";

const Presentation = (props) => {
  return (
    <div className="section_holder flex-row">
      <div className="presentation_holder">
        <h1 className="orange presentation_title">Julian Mendonca</h1>
        <h4 className="presentation_rol grey">full stack web developer</h4>
        <img
          src={require("../../assets/images/presentation_image.jpg")}
          className="mobile_presentation_image"
        />
        <p className="person_description">
          {props.spanish
            ? "Soy una persona proactiva que busca siempre aprender y mejorar, tengo experiencia trabajando con React.js en frontend y C# .Net en backen"
            : "I am a proactive person who is allways looking for new learnings and improvments, I have experience working with React.js in frontend and C# .Net in backend"}
        </p>
      </div>
      <img
        src={require("../../assets/images/presentation_image.jpg")}
        className="presentation_image"
      />
    </div>
  );
};
export default Presentation;
