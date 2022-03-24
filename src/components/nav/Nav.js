import React from "react";
import "./Nav.css";
import { Link } from "react-scroll";

const Nav = () => {
  const showMenu = () => {
    const navContent = document.getElementById("nav-content");

    navContent.style.left = "0";
  };
  const hideMenu = () => {
    const navContent = document.getElementById("nav-content");

    navContent.style.left = "480px";
  };
  return (
    <div className="nav">
      <div className="nav-content" id="nav-content">
        <span className="close-nav">
          <i class="fas fa-times" onClick={hideMenu}></i>
        </span>
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
              <a href="" onClick={hideMenu}>
                Wykształcenie
              </a>
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
              <a href="" onClick={hideMenu}>
                Doświadczenie
              </a>
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
              <a href="" onClick={hideMenu}>
                Umiejętności
              </a>
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
              <a href="" onClick={hideMenu}>
                Zainteresowania
              </a>
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
              <a href="" onClick={hideMenu}>
                Kontakt
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <span className="menu-icon">
        <i className="fas fa-bars" onClick={showMenu}></i>
      </span>
    </div>
  );
};

export default Nav;
