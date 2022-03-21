import React from "react";
import "./Skills.css";
// graphics
import Me from "../../assets/skills-me.png";
import HTML from "../../assets/skills-html.png";
import CSS from "../../assets/skills-css.png";
import JS from "../../assets/skills-js.png";
import REACT from "../../assets/skills-react.png";
import PY from "../../assets/skills-py.png";
import GIT from "../../assets/skills-git.png";
import BLEDNER from "../../assets/skills-blender.png";
import FIGMA from "../../assets/skills-figma.png";

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <div className="skills-container-bg">
        <div className="skills-header">
          <h1>Umiejętności</h1>
        </div>
        <div className="skills-maps">
          <div className="skills-maps-center">
            <img src={Me} alt="" />
            <img className="skills-icon" src={HTML} alt="" />
            <img className="skills-icon" src={CSS} alt="" />
            <img className="skills-icon" src={JS} alt="" />
            <img className="skills-icon" src={REACT} alt="" />
            <img className="skills-icon" src={PY} alt="" />
            <img className="skills-icon" src={GIT} alt="" />
            <img className="skills-icon" src={BLEDNER} alt="" />
            <img className="skills-icon" src={FIGMA} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
