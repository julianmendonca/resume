import React, { useState } from "react";
import Certificate from "../Certificate/Certificate";

const CourseItem = (props) => {
  return (
    <li className="course_item">
      <div>
        <h4>{props.spanish ? props.titleSpanish : props.titleEnglish}</h4>
        <h5>
          {props.spanish ? "Fecha" : "Date"}: {props.date}
        </h5>
        <h5>
          {props.spanish ? "Duración" : "Duration"}: {props.duration}
        </h5>
      </div>
      <button
        className="button_white button_small"
        onClick={(e) => {
          props.setCertificate(props.image);
        }}
      >
        {props.spanish ? "Ver certificado" : "View certificate"}
      </button>
    </li>
  );
};

const Courses = (props) => {
  const [certificate, setCertificate] = useState("");
  const closeCertificateImage = () => {
    setCertificate("");
  };
  return (
    <div className="cursos_container section_holder white">
      {certificate !== "" ? (
        <Certificate
          closeCertificateImage={closeCertificateImage}
          image={certificate}
        />
      ) : (
        ""
      )}
      <h1 className="section_title">
        {props.spanish ? "Cursos realizados" : "Courses taken"}
      </h1>
      <div className="courses_holder">
        <ul className="courses_list">
          <div className="course_image_holder">
            <img
              alt="Educacion IT"
              src={require("../../assets/icons/educacionit.jpg")}
              className="course_image"
            />
          </div>
          <CourseItem
            image={require("../../assets/images/courses/it/java.png")}
            setCertificate={setCertificate}
            spanish={props.spanish}
            titleSpanish="Java Standard Programming 8.0"
            titleEnglish="Java Standard Programming 8.0"
            date="2017"
            duration="40hs"
          />
          <CourseItem
            image={require("../../assets/images/courses/it/objetos.png")}
            setCertificate={setCertificate}
            spanish={props.spanish}
            titleSpanish="Introducción al Paradigma de Objetos"
            titleEnglish="Introduction to Object Paradigma  "
            date="2019"
            duration="9hs"
          />
          <CourseItem
            image={require("../../assets/images/courses/it/sql.png")}
            setCertificate={setCertificate}
            spanish={props.spanish}
            titleSpanish="Introducción a Base de Datos y SQL"
            titleEnglish="Introduction to Data Bases and SQL"
            date="2017"
            duration="12hs"
          />
          <CourseItem
            image={require("../../assets/images/courses/it/android.png")}
            setCertificate={setCertificate}
            spanish={props.spanish}
            titleSpanish="Programación en Android"
            titleEnglish="Android programing"
            date="2017"
            duration="15hs"
          />
        </ul>
        <ul className="courses_list">
          <div className="course_image_holder">
            <img
              alt="Udemy"
              src={require("../../assets/icons/udemy.svg")}
              className="course_image"
            />
          </div>
          <CourseItem
            setCertificate={setCertificate}
            spanish={props.spanish}
            titleSpanish="Desarrollo de juegos con Unity 3D C#"
            titleEnglish="Game development with Unity 3D C#"
            date="2018"
            duration="10hs"
          />
          <CourseItem
            setCertificate={setCertificate}
            spanish={props.spanish}
            titleSpanish="React - La guia completa (Hooks, React Router)"
            titleEnglish="React - The complete guide (Hooks, React Router)"
            date="2017"
            duration="10hs"
          />
          <CourseItem
            setCertificate={setCertificate}
            spanish={props.spanish}
            titleSpanish="Android Studio"
            titleEnglish="Android Studio"
            date="2017"
            duration="10hs"
          />
        </ul>
      </div>
    </div>
  );
};

export default Courses;
