import React from "react";
import "./Languages.css";
import PL from "../../assets/language-pl.png";
import ENG from "../../assets/language-eng.png";

const Languages = () => {
  return (
    <div className="languages-container">
      <div className="languages-contain">
        <div className="languages-header">
          <h1>Znajomość języków</h1>
        </div>
        <div className="languages-content">
          <div className="languages-left">
            <img src={PL} alt="" />
            <h2>Język polski</h2>
            <h3>język ojczysty</h3>
          </div>
          <div className="languages-right">
            <img src={ENG} alt="" />
            <h2>Język angielski</h2>
            <h3>średnio zaawansowany niższy</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
