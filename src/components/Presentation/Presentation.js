import React from "react";

const Presentation = (props) => {
  return (
    <div className="section_holder flex-row black">
      <div className="presentation_holder">
        <h1 className="orange presentation_title">Julian Mendonca</h1>
        <h4 className="presentation_rol grey">full stack web developer</h4>
        <img
          alt="Julian Mendonca"
          src={require("../../assets/images/presentation_image.jpg")}
          className="mobile_presentation_image unselectable"
        />
        <p className="person_description">
          {props.spanish
            ? "Soy una persona proactiva que busca siempre aprender y mejorar. Tengo experiencia trabajando con React.js en frontend y C# .Net en backend."
            : "I am a proactive person who is always looking for new learnings and improvements. I have experience working with React.js in frontend and C# .Net in backend."}
        </p>
      </div>
      <img
        alt="Julian Mendonca"
        src={require("../../assets/images/presentation_image.jpg")}
        className="presentation_image"
      />
    </div>
  );
};
export default Presentation;
