import React, { useEffect, useRef } from "react";

const Certificate = (props) => {
  const container = useRef(null);
  useEffect(() => {
    container.current.style.opacity = 1;
  }, []);
  const download = () => {
    fetch(props.image, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div ref={container} className="certificate_container">
      <button onClick={props.closeCertificateImage} className="close_button">
        <img altc="Close" src={require("../../assets/icons/close.png")} />
      </button>
      <img
        alt={props.spanish ? "Certificado" : "Certificate"}
        src={props.image}
      />
      <button className="button_orange" onClick={download}>
        {props.spanish ? "Descargar" : "Download"}
      </button>
    </div>
  );
};

export default Certificate;
