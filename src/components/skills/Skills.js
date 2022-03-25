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
import { motion } from "framer-motion";

// circle animation
const cirlce = {
  hover: {
    scale: 1.1,
    transition: {
      yoyo: Infinity,
    },
  },
};

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <div className="skills-container-bg">
        <div className="skills-header">
          <h1>Umiejętności</h1>
        </div>
        <div className="skills-maps">
          <div className="skills-maps-center">
            <img src={Me} alt="" className="me-icon" />
            <motion.img
              className="skills-icon"
              src={HTML}
              alt=""
              variants={cirlce}
              whileHover="hover"
            />
            <motion.img
              className="skills-icon"
              src={CSS}
              alt=""
              variants={cirlce}
              whileHover="hover"
            />
            <motion.img
              className="skills-icon"
              src={JS}
              alt=""
              variants={cirlce}
              whileHover="hover"
            />
            <motion.img
              className="skills-icon"
              src={REACT}
              alt=""
              variants={cirlce}
              whileHover="hover"
            />
            <motion.img
              className="skills-icon"
              src={PY}
              alt=""
              variants={cirlce}
              whileHover="hover"
            />
            <motion.img
              className="skills-icon"
              src={GIT}
              alt=""
              variants={cirlce}
              whileHover="hover"
            />
            <motion.img
              className="skills-icon"
              src={BLEDNER}
              alt=""
              variants={cirlce}
              whileHover="hover"
            />
            <motion.img
              className="skills-icon"
              src={FIGMA}
              alt=""
              variants={cirlce}
              whileHover="hover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
