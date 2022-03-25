import React from "react";
import "./Skills.css";
// graphics
import ME from "../../assets/skills-me.png";
import HTML from "../../assets/skills-html.png";
import CSS from "../../assets/skills-css.png";
import JS from "../../assets/skills-js.png";
import REACT from "../../assets/skills-react.png";
import PY from "../../assets/skills-py.png";
import GIT from "../../assets/skills-git.png";
import BLENDER from "../../assets/skills-blender.png";
import FIGMA from "../../assets/skills-figma.png";

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <div className="skills-header">
        <h1>Umiejętności</h1>
      </div>
      <hr className="title-line" />
      <div className="skills-content">
        <div className="skills-row-1">
          <img src={HTML} alt="" />
          <img src={CSS} alt="" />
          <img src={JS} alt="" />
        </div>
        <div className="skills-row-2">
          <img src={FIGMA} className="skill-row-left" alt="" />
          <img src={ME} className="skill-row-me" alt="" />
          <img src={REACT} alt="" />
        </div>
        <div className="skills-row-3">
          <img src={BLENDER} alt="" />
          <img src={GIT} alt="" />
          <img src={PY} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
