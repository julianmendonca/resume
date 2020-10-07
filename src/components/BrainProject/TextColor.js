import React from "react";

const TextColor = (props) => {
  return (
    <div className="text_color_holder">
      <h2 className="white">
        {props.spanish ? "¿Blanco o Negro?" : "Black or White?"}
      </h2>
      <p className="white">
        {props.spanish
          ? 'Elige la opcion donde mas se vea el texto, luego pulse "Entrenar"'
          : 'Choose the most readable option then press "Train"'}
      </p>
      <div className="controlls_holder">
        <div className="color_display"></div>
        <div className="controlls"></div>
      </div>
    </div>
  );
};

export default TextColor;
