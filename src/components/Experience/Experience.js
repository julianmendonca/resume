import React from "react";
import parse from "html-react-parser";
const Braindw = (props) => {
  return (
    <div className="job_item">
      <div className="job_icon_holder">
        <img
          className="company_logo"
          alt="Braindw"
          src={require("../../assets/icons/braindw.png")}
        />
        <h3>Full Stack Web Developer</h3>
        <h5>2019 - {props.spanish ? "Actualidad" : "Today"}</h5>
      </div>
      <div className="job_information">
        <h4 className="underline">
          {props.spanish ? "Tareas Realizadas" : "Job Activities"}
        </h4>
        <ul className="job_tasks">
          <li className="job_task">
            <p>
              {props.spanish
                ? parse(
                    "Mantenimiento y extensión de <b>API</b> en <b>.Net</b>"
                  )
                : parse(
                    "Maintainence and expansion of <b>API</b> using <b>.Net</b>"
                  )}
            </p>
          </li>
          <li className="job_task">
            <p>
              {props.spanish
                ? parse("Manejo de archivos en <b>AmazonS3</b>")
                : parse("File management using <b>AmazonS3</b>")}
            </p>
          </li>
          <li className="job_task">
            <p>
              {props.spanish
                ? parse(
                    "Creación de nuevas landings utilizando <b>React.js</b> o vanilla JS"
                  )
                : parse(
                    "Creation of new landings using <b>React.js</b> or vanilla JS"
                  )}
            </p>
          </li>
          <li className="job_task">
            <p>
              {props.spanish
                ? parse(
                    "Creación y mantenimiento de tests utilizando <b>Cypress</b>"
                  )
                : parse("Tests creation and maintenance using <b>Cypress</b>")}
            </p>
          </li>
          <li className="job_task">
            <p>
              {props.spanish
                ? parse(
                    "Creación y mantenimiento de buscadores utilizando <b>Elasticsearch</b>"
                  )
                : parse(
                    "Creation and maintenance of search engines using <b>Elasticsearch</b>"
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
        {props.spanish ? "Experiencia Laboral" : "Work Experience"}
      </h1>
      <Braindw spanish={props.spanish}></Braindw>
    </div>
  );
};

export default Experience;
