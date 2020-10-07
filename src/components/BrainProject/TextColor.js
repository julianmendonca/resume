import React, { useState } from "react";

const TextColor = (props) => {
  const [color, setColor] = useState([0, 0, 0]);
  const [trainingData, setTrainingData] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState("rgb(0,0,100)");
  const [trained, setTrained] = useState(false);
  const [predictedColor, setPredictedColor] = useState("");
  const randomNumber = () => {
    return Math.floor(Math.random() * 255) + 1;
  };
  let net = new window.brain.NeuralNetwork();

  const generateRandomColorAndText = () => {
    const r = randomNumber();
    const g = randomNumber();
    const b = randomNumber();
    setBackgroundColor(`rgb(${r},${g},${b})`);
    net.train(trainingData);
    const output = net.run({ r: r, g: g, b: b });
    const predictedColor = output.black > output.white ? "black" : "white";
    setPredictedColor(predictedColor);
  };
  const trainModel = () => {
    net.train(trainingData);
    setTrained(true);
  };
  const addData = (chosenColor) => {
    const a = randomNumber();
    const b = randomNumber();
    const c = randomNumber();
    const newData = {
      input: {
        r: color[0],
        g: color[1],
        b: color[2],
      },
      output: {
        [chosenColor]: 1,
      },
    };
    setTrainingData([...trainingData, newData]);
    setColor([a, b, c]);
    setBackgroundColor(`rgb(${a},${b},${c})`);
  };

  return (
    <div className="text_color_holder brain_project_container">
      <h2 className="orange">
        {props.spanish ? "¿Blanco o Negro?" : "Black or White?"}
      </h2>
      <p className="black align_start">
        {props.spanish
          ? 'Elige la opcion donde mas se vea el texto, luego pulse "Entrenar modelo"'
          : 'Choose the most readable option then press "Train model"'}
      </p>
      <div className="controlls_holder">
        <div className="color_display_holder">
          {trained === false ? (
            <div className="color_display">
              <div className="black_text_holder">
                <div
                  className="color_block"
                  style={{ backgroundColor: backgroundColor }}
                >
                  <h5>Lorem Ipsum</h5>
                </div>
                <button onClick={() => addData("black")}>
                  {props.spanish ? "Se ve mejor" : "Seems better"}
                </button>
              </div>
              <div className="white_text_holder">
                <div
                  className="color_block"
                  style={{ backgroundColor: backgroundColor }}
                >
                  <h5 className="white">Lorem Ipsum</h5>
                </div>
                <button onClick={() => addData("white")}>
                  {props.spanish ? "Se ve mejor" : "Seems better"}
                </button>
              </div>
            </div>
          ) : (
            <div className="color_display">
              <div className="black_text_holder">
                <div
                  className="color_block"
                  style={{ backgroundColor: backgroundColor }}
                >
                  <h5 style={{ color: predictedColor }}>Lorem Ipsum</h5>
                </div>
              </div>
            </div>
          )}

          {!trained ? (
            <button className="train_button" onClick={trainModel}>
              {props.spanish ? "Entrenar modelo" : "Train model"}
            </button>
          ) : (
            <button
              className="train_button"
              onClick={generateRandomColorAndText}
            >
              {props.spanish ? "Generar color random" : "Generate random color"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextColor;
