import React, { useState } from "react";
import Holder from "../../hoc/Holder/Holder";
import Presentation from "../Presentation/Presentation";
import Experience from "../Experience/Experience";

const Layout = (props) => {
  const [spanish, setSpanish] = useState(true);
  return (
    <Holder>
      <button
        onClick={() => {
          setSpanish(!spanish);
        }}
      >
        Toogle Language
      </button>
      <section className="align-center">
        <Presentation spanish={spanish} />
      </section>
      <section className="align-center background_orange">
        <Experience spanish={spanish}></Experience>
      </section>
    </Holder>
  );
};

export default Layout;
