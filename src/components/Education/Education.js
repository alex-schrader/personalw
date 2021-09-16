import React, { useState } from "react";
import "./Education.css";
import School from "./School.js";
import swarthmore from "./swarthmore.png";
import sfs from "./sfs.png";
import udemy from "./udemy.png";
import DropdownMenu from "./DropdownMenu";

const Education = (props) => {
  const [currSchool, setCurrSchool] = useState(
    <School
      institution="Swarthmore College"
      date="2020-2024"
      descr="Computer Science Major"
      classes="Relevant Coursework: Introduction to Computer Science, Data Structures and Algorithms, Software
      Engineering, Single Variable Calculus 2, Linear Algebra,
      Fundamentals of Digital and Embedded Systems"
      image={swarthmore}
    />
  );
  const onClickHandlerUdemy = () => {
    console.log("--> in onClikcHandlerUdemy");
    setCurrSchool(
      <School
        institution="Udemy"
        date="2021"
        descr="Personal CS learning outside school for fun"
        classes="Classes: Data Structures and Algorithms Masterclass, React - The Complete Guide(helped build this website!)"
        image={udemy}
      />
    );
  };
  const onClickHandlerSwarthmore = () => {
    setCurrSchool(
      <School
        institution="Swarthmore College"
        date="2020-2024"
        descr="Computer Science Major"
        classes="Relevant Coursework: Introduction to Computer Science, Data Structures and Algorithms, Software
        Engineering, Single Variable Calculus 2, Linear Algebra,
        Fundamentals of Digital and Embedded Systems"
        image={swarthmore}
      />
    );
  };
  const onClickHandlerSfs = () => {
    setCurrSchool(
      <School
        institution="Seoul Foreign High School"
        date="2015-2020"
        descr="High School"
        image={sfs}
        classes="Completed International Baccalaureate Diploma at an high school in South Korea for foreign students as a US citizen. Higher Level Classes included Mathematics, Physics, and Language and Literature."
      />
    );
  };
  return (
    <div className="outerbordercard">
      <div className="menu">
        <DropdownMenu
          onClickUdemy={onClickHandlerUdemy}
          onClickSwarthmore={onClickHandlerSwarthmore}
          onClickSfs={onClickHandlerSfs}
          menuActive='true'
        />
      </div>
      <div className = "schoolblock">{currSchool}</div>
    </div>
  );
};

export default Education;
