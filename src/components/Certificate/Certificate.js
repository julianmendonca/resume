import React, { useEffect, useRef } from "react";

const Certificate = (props) => {
  const container = useRef(null);
  const certificate = useRef(null);
  useEffect(() => {
    certificate.current.style.opacity = 1;
    document.querySelector("body").classList.add("overflow_hidden");
  }, []);
  const download = () => {
    fetch(props.certificate.image, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", props.spanish ?props.certificate.titleSpanish : props.certificate.titleEnglish +'.png'); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div ref={container} className="grey_background ">
      <div ref={certificate} className="certificate_container">
        <button className="close_button">
          <img
            alt="Close"
            onClick={props.closeCertificateImage}
            src={require("../../assets/icons/close.png")}
          />
        </button>
        <img
          alt={props.spanish ? "Certificado" : "Certificate"}
          src={props.certificate.image}
        />
        <button className="button_orange" onClick={download}>
          {props.spanish ? "Descargar" : "Download"}
        </button>
      </div>
    </div>
  );
};

export default Certificate;
