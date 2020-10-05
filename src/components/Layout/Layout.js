import React, { useState } from "react";
import Holder from "../../hoc/Holder/Holder";
import Presentation from "../Presentation/Presentation";
import Technologies from "../Technologies/Technologies";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";

const Layout = (props) => {
  const [spanish, setSpanish] = useState(true);
  return (
    <Holder>
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
      <section className="align-center">
        <Presentation spanish={spanish} />
      </section>
      <section className="align-center background_orange">
        <Technologies spanish={spanish}></Technologies>
      </section>
      <section className="align-center">
        <Experience spanish={spanish}></Experience>
      </section>
      <section className="align-center background_orange">
        <Projects spanish={spanish}></Projects>
      </section>
    </Holder>
  );
};

export default Layout;
