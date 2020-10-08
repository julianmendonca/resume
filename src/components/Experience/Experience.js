import React from "react";
import parse from "html-react-parser";

// Icons
import braindWIcon from "../../assets/icons/braindw.png";
import baTaxiLogo from "../../assets/images/bataxi.png";

const BaTaxi = (props) => {
  return (
    <div className="job_item">
      <div className="job_icon_holder">
        <img
          className="company_logo_small"
          alt="Buenos Aires Taxi"
          src={baTaxiLogo}
        />
        <h3>
          {props.spanish
            ? "Soporte técnico al usuario"
            : "Fron Deskt Tech support"}
        </h3>
        <h5>2017 - 2019</h5>
      </div>
      <div className="job_information">
        <h4 className="underline">
          {props.spanish ? "Responsabilidades" : "Responsabilities"}
        </h4>
        <ul className="job_tasks">
          <li className="job_task">
            <p>
              {props.spanish
                ? "Reporte de incidencias y fallos para el equipo técnico"
                : "Issues and bugs submission for the IT team"}
            </p>
          </li>
          <li className="job_task">
            <p>
              {props.spanish
                ? "Registro de nuevos usuarios y asesoramiento de la App"
                : "New users registry and onboarding of the App"}
            </p>
          </li>
          <li className="job_task">
            <p>
              {props.spanish
                ? "Soporte via teléfono y mail"
                : "Phone and mail support"}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
const Braindw = (props) => {
  return (
    <div className="job_item">
      <div className="job_icon_holder">
        <img className="company_logo" alt="Braindw" src={braindWIcon} />
        <h3>Full Stack Web Developer</h3>
        <h5>2019 - {props.spanish ? "Actualidad" : "Present"}</h5>
      </div>
      <div className="job_information">
        <h4 className="underline">
          {props.spanish ? "Responsabilidades" : "Responsabilities"}
        </h4>
        <ul className="job_tasks">
          <li className="job_task">
            <p>
              {props.spanish
                ? parse(
                    "Mantenimiento y extensión de <b>API</b> basada en <b>C# .Net</b>"
                  )
                : parse(
                    "Maintainence and expansion of the <b>API</b> based on <b>C# .Net</b>"
                  )}
            </p>
          </li>
          <li className="job_task">
            <p>
              {props.spanish
                ? parse(
                    "Manejo de archivos remotos utilizando servicio de <b>AmazonS3</b>"
                  )
                : parse("Remote file management with <b>AmazonS3</b> service")}
            </p>
          </li>
          <li className="job_task">
            <p>
              {props.spanish
                ? parse(
                    "Creación de nuevas apps utilizando <b>React.js</b> o vanilla JS"
                  )
                : parse("App development with <b>React.js</b> or vanilla JS")}
            </p>
          </li>
          <li className="job_task">
            <p>
              {props.spanish
                ? parse(
                    // @TODO Juli: Corregir numero de trafico
                    "Optimización de aplicaciones <b>React.js</b> para manejo de tráfico intensivo (+5000 usuarios activos diarios)"
                  )
                : parse(
                    "Performace optimization for <b>React.js</b> apps to handle intensive traffic (+5000 daily active users)"
                  )}
            </p>
          </li>
          <li className="job_task">
            <p>
              {props.spanish
                ? parse(
                    "Creación y mantenimiento de End-to-End tests utilizando <b>Cypress</b> "
                  )
                : parse(
                    "End-to-End tests development and maintenance with <b>Cypress</b>"
                  )}
            </p>
          </li>
          <li className="job_task">
            <p>
              {props.spanish
                ? parse(
                    "Creación y mantenimiento de buscadores optimizados utilizando <b>Elasticsearch</b>"
                  )
                : parse(
                    "Creation and maintenance of optimized search engines using <b>Elasticsearch</b>"
                  )}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Experience = (props) => {
  return (
    <div className="section_holder">
      <h1 className="section_title orange">
        {props.spanish ? "Responsabilidades" : "Responsabilities"}
      </h1>
      <BaTaxi spanish={props.spanish}></BaTaxi>
      <Braindw spanish={props.spanish}></Braindw>
    </div>
  );
};

export default Experience;
