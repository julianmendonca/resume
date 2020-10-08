import React from "react";

// Icons
import nodeIcon from "../../assets/icons/node.png";
import reactIcon from "../../assets/icons/react.png";
import mysqlIcon from "../../assets/icons/sql.png";
import dotNetIcon from "../../assets/icons/net.png";
import elasticSearchIcon from "../../assets/icons/elastic.svg";
import htmlIcon from "../../assets/icons/html.png";
import cssIcon from "../../assets/icons/css.png";
import gitIcon from "../../assets/icons/git.png";

const Experience = (props) => {
  return (
    <div className="section_holder tecnologies_section">
      <h1 className="section_title">
        {props.spanish ? "Tecnologias" : "Tech Stack"}
      </h1>
      <div className="tecnology_holder">
        <div className="tecnology_item">
          <img alt="Node Icon" src={nodeIcon} />
          <h4>Node.js</h4>
        </div>
        <div className="tecnology_item">
          <img alt="React Icon" src={reactIcon} />
          <h4>React.js</h4>
        </div>
        <div className="tecnology_item">
          <img alt="My SQL Icon" src={mysqlIcon} />
          <h4>My SQL</h4>
        </div>
        <div className="tecnology_item">
          <img alt=".Net Icon" src={dotNetIcon} />
          <h4>C# .Net</h4>
        </div>
        <div className="tecnology_item">
          <img alt="ElasticSearch Icon" src={elasticSearchIcon} />
          <h4>Elasticsearch</h4>
        </div>
        <div className="tecnology_item">
          <img alt="HTML Icon" src={htmlIcon} />
          <h4>HTML 5</h4>
        </div>
        <div className="tecnology_item">
          <img alt="CSS Icon" src={cssIcon} />
          <h4>CSS 3</h4>
        </div>
        <div className="tecnology_item">
          <img alt="Git Icon" src={gitIcon} />
          <h4>Git</h4>
        </div>
      </div>
    </div>
  );
};

export default Experience;
