import parse from "html-react-parser";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

// const BaTaxi = (props) => {
//   return (
//     <ScrollAnimation
//       className=""
//       animateIn="bounceInLeft"
//       duration={1}
//       animateOnce={true}
//       offset={5}
//     >
//       <div className="job_item black">
//         <div className="job_icon_holder">
//           <img
//             className="company_logo_small"
//             alt="Braindw"
//             src={require("../../assets/images/bataxi.png")}
//           />
//           <h3>{props.spanish ? "Soporte al usuario" : "User support"}</h3>
//           <h5>2017 - 2019</h5>
//         </div>
//         <div className="job_information">
//           <h4 className="underline">
//             {props.spanish ? "Tareas Realizadas" : "Job Activities"}
//           </h4>
//           <ul className="job_tasks">
//             <li className="job_task">
//               <p>
//                 {props.spanish
//                   ? "Reporte de incidencias en Trello"
//                   : "Issue submition in Trello"}
//               </p>
//             </li>
//             <li className="job_task">
//               <p>
//                 {props.spanish
//                   ? "Alta de nuevos usuarios y asesoramiento de la App"
//                   : "New users registry and onboarding of the App"}
//               </p>
//             </li>
//             <li className="job_task">
//               <p>
//                 {props.spanish
//                   ? "Soporte vía teléfono y mail"
//                   : "Phone and mail support"}
//               </p>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </ScrollAnimation>
//   );
// };
const Braindw = (props) => {
  return (
    <ScrollAnimation
      className=""
      animateIn="bounceInRight"
      duration={1}
      animateOnce={true}
      offset={5}
    >
      <div className="job_item black">
        <div className="job_icon_holder">
          <img
            className="company_logo white_background_on_darkmode"
            alt="Braindw"
            src={require("../../assets/icons/braindw.png")}
          />
          <h3>Full Stack Web Developer</h3>
          <h5>2019 - 2021</h5>
          <h3
            style={{ textDecoration: "underline", textTransform: "capitalize" }}
          >
            {props.spanish ? "Clientes" : "Clients"}:
          </h3>
          <div className="braindw_clients">
            <img
              className="white_background_on_darkmode"
              alt="Musimundo"
              src={require("../../assets/images/musimundo.png")}
            />
            <img alt="Easy" src={require("../../assets/images/easy.png")} />
            <img
              alt="SommierCenter"
              src={require("../../assets/images/sommiercenter.png")}
            />
            <img
              alt="Walmart"
              src={require("../../assets/images/walmart.png")}
            />
          </div>
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
                      "Mantenimiento y extensión de <b>API</b> en <b>C# .Net</b>"
                    )
                  : parse(
                      "Maintainence and expansion of the <b>API</b> using <b>C# .Net</b>"
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
                      "Creación de nuevas apps utilizando <b>React.js</b> o vanilla JS"
                    )
                  : parse("App development with <b>React.js</b> or vanilla JS")}
              </p>
            </li>
            <li className="job_task">
              <p>
                {props.spanish
                  ? parse(
                      "Optimización de aplicaciones <b>React.js</b> para manejo de trafico intensivo"
                    )
                  : parse(
                      "Performace optimization for <b>React.js</b> apps to handle intensive traffic"
                    )}
              </p>
            </li>
            <li className="job_task">
              <p>
                {props.spanish
                  ? parse(
                      "Creación y mantenimiento de End-to-End testing utilizando <b>Cypress</b> "
                    )
                  : parse(
                      "End-to-End tests development  and maintenance with <b>Cypress</b>"
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
    </ScrollAnimation>
  );
};

const Capicua = (props) => {
  return (
    <ScrollAnimation
      className=""
      animateIn="bounceInLeft"
      duration={1}
      animateOnce={true}
      offset={5}
    >
      <div className="job_item black">
        <div className="job_icon_holder">
          <img
            className="company_logo_small"
            alt="Capicua"
            src={require("../../assets/images/capicua.jpg")}
          />
          <h3>Full stack web developer</h3>
          <h5>2021 - {props.spanish ? "Actualidad" : "Present"}</h5>
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
                      "Desarrollo de Back End con <b>Node.js, Typescript y Apollo</b>"
                    )
                  : parse(
                      "Back End development with <b>Node.js, Typescript and Apollo</b>"
                    )}
              </p>
            </li>
            <li className="job_task">
              <p>
                {props.spanish
                  ? parse(
                      "Desarrollo de front end con <b>React.js, Typescript y Apollo</b>"
                    )
                  : parse(
                      "Front end development with <b>React.js, Typescript y Apollo</b>"
                    )}
              </p>
            </li>
            <li className="job_task">
              <p>
                {props.spanish
                  ? parse("Testing de la app con <b>test-library/react</b>")
                  : parse("App testing with <b>testing-library/react</b>")}
              </p>
            </li>
            <li className="job_task">
              <p>
                {props.spanish
                  ? parse("Manejo de base de datos <b>SQL</b>")
                  : parse("<b>SQL</b> database management")}
              </p>
            </li>
            <li className="job_task">
              <p>
                {props.spanish
                  ? parse(
                      "Creacion de historias de componentes con <b>Storybook</b>"
                    )
                  : parse(
                      "Build stories for React components using <b>Storybook</b>"
                    )}
              </p>
            </li>
            <li className="job_task">
              <p>
                {props.spanish
                  ? parse("Revision de codigo del equipo")
                  : parse("<b>Code review</b> on team pull requests")}
              </p>
            </li>
            <li className="job_task">
              <p>
                {props.spanish
                  ? parse(
                      "Manejo de recursos en <b>AWS S3</b> y reivision logs"
                    )
                  : parse(
                      "Remove file management with <b>AWS S3</b> and logs tracking"
                    )}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </ScrollAnimation>
  );
};

const Experience = (props) => {
  return (
    <div className="section_holder">
      <h1 className="section_title orange">
        {props.spanish ? "Experiencia Laboral" : "Work Experience"}
      </h1>
      {/* <BaTaxi spanish={props.spanish}></BaTaxi> */}
      <Braindw spanish={props.spanish}></Braindw>
      <Capicua spanish={props.spanish} />
    </div>
  );
};

export default Experience;
