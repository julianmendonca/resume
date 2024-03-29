import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Experience = (props) => {
  return (
    <div className="section_holder tecnologies_section">
      <h1 className="section_title">
        {props.spanish ? "Tecnologías" : "Tecnologies"}
      </h1>
      <div className="tecnology_holder">
        <ScrollAnimation
          className="animate_component"
          animateIn="bounceInLeft"
          duration={1}
          animateOnce={true}
          offset={5}
        >
          <div className="tecnology_item">
            <img alt="Node Icon" src={require("../../assets/icons/node.png")} />
            <h4>Node.js</h4>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="animate_component"
          animateIn="bounceInLeft"
          duration={1}
          animateOnce={true}
          offset={5}
        >
          <div className="tecnology_item">
            <img
              alt="React Icon"
              src={require("../../assets/icons/react.png")}
            />
            <h4>React.js</h4>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="animate_component"
          animateIn="bounceInLeft"
          duration={1}
          animateOnce={true}
          offset={5}
        >
          <div className="tecnology_item">
            <img
              alt="Git Icon"
              src={require("../../assets/icons/typescript.png")}
            />
            <h4>Typescript</h4>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="animate_component"
          animateIn="bounceInLeft"
          duration={1}
          animateOnce={true}
          offset={5}
        >
          <div className="tecnology_item">
            <img
              alt="Git Icon"
              src={require("../../assets/icons/Apollo.png")}
            />
            <h4>Apollo</h4>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="animate_component"
          animateIn="bounceInLeft"
          duration={1}
          animateOnce={true}
          offset={5}
        >
          <div className="tecnology_item">
            <img
              alt="My SQL Icon"
              src={require("../../assets/icons/sql.png")}
            />
            <h4>My SQL</h4>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="animate_component"
          animateIn="bounceInLeft"
          duration={1}
          animateOnce={true}
          offset={5}
        >
          <div className="tecnology_item">
            <img alt=".Net Icon" src={require("../../assets/icons/net.png")} />
            <h4>C# .Net</h4>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="animate_component"
          animateIn="bounceInLeft"
          duration={1}
          animateOnce={true}
          offset={5}
        >
          <div className="tecnology_item">
            <img
              alt="ElasticSearch Icon"
              src={require("../../assets/icons/elastic.svg")}
            />
            <h4>Elasticsearch</h4>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="animate_component"
          animateIn="bounceInLeft"
          duration={1}
          animateOnce={true}
          offset={5}
        >
          <div className="tecnology_item">
            <img alt="Git Icon" src={require("../../assets/icons/git.png")} />
            <h4>Git</h4>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="animate_component"
          animateIn="bounceInLeft"
          duration={1}
          animateOnce={true}
          offset={5}
        >
          <div className="tecnology_item">
            <img
              alt="Git Icon"
              src={require("../../assets/icons/storybook.png")}
            />
            <h4>Storybook</h4>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="animate_component"
          animateIn="bounceInLeft"
          duration={1}
          animateOnce={true}
          offset={5}
        >
          <div className="tecnology_item">
            <img
              alt="Git Icon"
              src={require("../../assets/icons/testing-library.png")}
            />
            <h4>Testing Library</h4>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="animate_component"
          animateIn="bounceInLeft"
          duration={1}
          animateOnce={true}
          offset={5}
        >
          <div className="tecnology_item">
            <img
              alt="Git Icon"
              src={require("../../assets/icons/cypress.png")}
            />
            <h4>Cypress</h4>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="animate_component"
          animateIn="bounceInLeft"
          duration={1}
          animateOnce={true}
          offset={5}
        >
          <div className="tecnology_item">
            <img
              alt="Git Icon"
              src={require("../../assets/icons/github.png")}
            />
            <h4>Github</h4>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Experience;
