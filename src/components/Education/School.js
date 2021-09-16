import React from "react";
import "./School.css";

const School = (props) => {
  return (
    <div className="bordercard">
      <div>
        <h1 className="institution">{props.institution}</h1>
        <h1 className="date">{props.date}</h1>
        <h1 className="descr">{props.descr}</h1>
        <h1 className="classes">{props.classes}</h1>
      </div>
      <img className="image" src={props.image} />
    </div>
  );
};

export default School;
