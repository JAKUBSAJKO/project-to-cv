import React from "react";
import "./Nav.css";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-content">
        <ul>
          <li>
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
            >
              <a href="">Wykształcenie</a>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="workExp"
              spy={true}
              smooth={true}
              offset={0}
              duration={1200}
            >
              <a href="">Doświadczenie</a>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={1600}
            >
              <a href="">Umiejętności</a>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="interests"
              spy={true}
              smooth={true}
              offset={0}
              duration={2000}
            >
              <a href="">Zainteresowania</a>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={2400}
            >
              <a href="">Kontakt</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
