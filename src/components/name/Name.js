import React from "react";
import "./Name.css";
import Me from "../../assets/me.png";
import { Link } from "react-router-dom";
import CV from "../../assets/CV_Jakub_Sajko.pdf";

const Name = () => {
  return (
    <div className="name-container" id="name">
      <div className="name-description">
        <div className="name-text">
          <h1>Cześć, nazywam się</h1>
        </div>
        <div className="name-me">
          <h1>Jakub Sajko</h1>
        </div>
        <p>
          Jestem absolwentem wyższej uczelni w zakresie grafiki komputerowej
          <br />i multimediów, lecz swoją przyszłość zawodową wiążę z
          frontendem. <br />
          Każdą wolną chwilę poświęcam na udoskonalaniu swoich umiejętność{" "}
          <br />w tworzeniu aplikacji internetowych. Chciałbym zdobywać
          doświadczenie <br />
          oraz rozwijać się w tym kierunku.
        </p>
      </div>
      <div className="name-picture">
        <div className="imgBg"></div>
        <img src={Me} alt="" className="name-picture-me" />
      </div>
      <Link to={CV} target="_blank" className="name-download-cv" download>
        <h2>Pobierz CV</h2>
        <span className="name-download-cv-icon">
          <i class="fas fa-download"></i>
        </span>
      </Link>
    </div>
  );
};

export default Name;
