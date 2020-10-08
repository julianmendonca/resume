import React, { useState } from "react";
import Presentation from "../Presentation/Presentation";
import Technologies from "../Technologies/Technologies";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import ProfessorOak from "../ProfesorOak/ProfesorOak";
import BrainProject from "../BrainProject/BrainProject";
import Courses from "../Courses/Courses";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Layout = (props) => {
  const [spanish, setSpanish] = useState(false);
  return (
    <Router>
      <div className="language_selector">
        <span
          className={
            spanish
              ? "white unselectable background_orange"
              : " unselectable orange background_white"
          }
          onClick={() => {
            setSpanish(true);
          }}
        >
          Español
        </span>
        <span
          className={
            spanish
              ? "orange unselectable background_white"
              : " unselectable white background_orange"
          }
          onClick={() => {
            setSpanish(false);
          }}
        >
          English
        </span>
      </div>
      <Route path="/" exact>
        <section className="align-center presentation_section">
          <Presentation spanish={spanish} />
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
