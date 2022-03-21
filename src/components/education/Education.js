import React from "react";
import "./Education.css";
import PWSZ from "../../assets/pwsz-elblag.jpg";

const Education = () => {
  return (
    <div className="edu-container" id="education">
      <div className="edu-header">
        <h1>Wykształcenie</h1>
      </div>
      <div className="edu-content">
        <div className="edu-picture">
          <div className="edu-picture-background">
            <img src={PWSZ} alt="" />
          </div>
        </div>
        <div className="edu-text">
          <h2 className="edu-text-nameschool">
            Państwowa Wyższa Szkoła Zawodowa
            <br /> w Elblągu
          </h2>
          <p>
            <b>Kierunek</b>: informatyka stosowana <br />
            <b>Specjalizacja:</b> grafika komputerowa i multimedia <br />
            <b>Poziom wykształcenia:</b> inżynier
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
