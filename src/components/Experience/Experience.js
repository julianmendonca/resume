import React from "react";

const Experience = (props) => {
  return (
    <div className="section_holder tecnologies_section">
      <h1 className="section_title">
        {props.spanish ? "Tecnologias" : "Tecnologies"}
      </h1>
      <div className="tecnology_holder">
        <div className="tecnology_item">
          <img src={require("../../assets/icons/node.png")} />
          <h4>Node.js</h4>
        </div>
        <div className="tecnology_item">
          <img src={require("../../assets/icons/react.png")} />
          <h4>React.js</h4>
        </div>
        <div className="tecnology_item">
          <img src={require("../../assets/icons/sql.png")} />
          <h4>My SQL</h4>
        </div>
        <div className="tecnology_item">
          <img src={require("../../assets/icons/net.png")} />
          <h4>C# .Net</h4>
        </div>
        <div className="tecnology_item">
          <img src={require("../../assets/icons/html.png")} />
          <h4>HTML 5</h4>
        </div>
        <div className="tecnology_item">
          <img src={require("../../assets/icons/css.png")} />
          <h4>CSS 3</h4>
        </div>
        <div className="tecnology_item">
          <img src={require("../../assets/icons/git.png")} />
          <h4>Git</h4>
        </div>
        <div className="tecnology_item">
          <img src={require("../../assets/icons/elastic.svg")} />
          <h4>ELASTICSEARCH</h4>
        </div>
      </div>
    </div>
  );
};

export default Experience;
