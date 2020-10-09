import React, { useState } from "react";
import Tilt from "react-tilt";
import Presentation from "../Presentation/Presentation";
import Technologies from "../Technologies/Technologies";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import ProfessorOak from "../ProfesorOak/ProfesorOak";
import BrainProject from "../BrainProject/BrainProject";
import Courses from "../Courses/Courses";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Layout = (props) => {
  const [spanish, setSpanish] = useState(true);
  useState(() => {
    const setInitalLanguage = async () => {
      if (window.localStorage.getItem("spanish") === "false") setSpanish(false);
    };
    setInitalLanguage();
  }, []);
  return (
    <Router>
      <div className="language_selector">
        <span
          className={
            spanish
              ? "white unselectable background_orange"
              : "unselectable orange background_white"
          }
          onClick={() => {
            setSpanish(true);
            window.localStorage.setItem("spanish", true);
          }}
        >
          Español{" "}
          <span role="img" aria-label="bandera española">
            🇪🇸
          </span>
        </span>
        <span
          className={
            spanish
              ? "orange unselectable background_white"
              : "unselectable white background_orange"
          }
          onClick={() => {
            setSpanish(false);
            window.localStorage.setItem("spanish", false);
          }}
        >
          English{" "}
          <span role="img" aria-label="USA flag">
            🇺🇸
          </span>
        </span>
      </div>
      <Route path="/" exact>
        <section className="align-center presentation_section">
          <Tilt
            options={{ max: 25, scale: 1 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Presentation spanish={spanish} />
          </Tilt>
        </section>
        <section className="align-center background_orange">
          <Technologies spanish={spanish}></Technologies>
        </section>
        <section className="align-center background_orange">
          <Courses spanish={spanish}></Courses>
        </section>
        <section className="align-center">
          <Experience spanish={spanish}></Experience>
        </section>
        <section className="align-center background_orange">
          <Projects spanish={spanish}></Projects>
        </section>
      </Route>
      <Route path="/professor_oak">
        <ProfessorOak spanish={spanish} />
      </Route>
      <Route path="/brain">
        <BrainProject spanish={spanish} />
      </Route>
    </Router>
  );
};

export default Layout;
