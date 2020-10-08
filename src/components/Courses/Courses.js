import React from "react";

const CourseItem = (props) => {
  return (
    <li className="course_item">
      <h4>{props.spanish ? props.titleSpanish : props.titleEnglish}</h4>
      <h5>
        {props.spanish ? "Fecha" : "Date"}:{props.date}
      </h5>
      <h5>
        {props.spanish ? "Duración" : "Duration"}:{props.duration}
      </h5>
      <button className="button_white button_small">
        {props.spanish ? "Ver certificado" : "View certificate"}
      </button>
    </li>
  );
};

const Courses = (props) => {
  return (
    <div className="cursos_container section_holder white">
      <h1 className="section_title">
        {props.spanish ? "Cursos realizados" : "Courses taken"}
      </h1>
      <div className="courses_holder">
        <ul className="courses_list">
          <img
            alt="Educacion IT"
            src={require("../../assets/icons/educacionit.jpg")}
            className="course_image"
          />

          <CourseItem
            spanish={props.spanish}
            titleSpanish="Introducción a Java"
            titleEnglish="Introduction to Java"
            date="2018"
            duration="10hs"
          />
          <CourseItem
            spanish={props.spanish}
            titleSpanish="Introducción a SQL"
            titleEnglish="Introduction to SQL"
            date="2017"
            duration="10hs"
          />
          <CourseItem
            spanish={props.spanish}
            titleSpanish="Android Studio"
            titleEnglish="Android Studio"
            date="2017"
            duration="10hs"
          />
        </ul>
        <ul className="courses_list">
          <img
            alt="Udemy"
            src={require("../../assets/icons/udemy.png")}
            className="course_image"
          />
          <CourseItem
            spanish={props.spanish}
            titleSpanish="Desarrollo de juegos con Unity 3D C#"
            titleEnglish="Game development with Unity 3D C#"
            date="2018"
            duration="10hs"
          />
          <CourseItem
            spanish={props.spanish}
            titleSpanish="React - La guia completa (Hooks, React Router)"
            titleEnglish="React - The complete guide (Hooks, React Router)"
            date="2017"
            duration="10hs"
          />
          <CourseItem
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
