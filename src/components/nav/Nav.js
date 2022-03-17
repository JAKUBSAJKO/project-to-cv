import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-content">
        <ul>
          <li>
            <a href="">Wykształcenie</a>
          </li>
          <li>
            <a href="">Doświadczenie</a>
          </li>
          <li>
            <a href="">Umiejętności</a>
          </li>
          <li>
            <a href="">Zainteresowania</a>
          </li>
          <li>
            <a href="">Kontakt</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
