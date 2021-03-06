import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <h1>Jakub Sajko | CV</h1>
      <h2>Możesz mnie znaleźć na</h2>
      <div className="footer-icons">
        <a href="https://www.facebook.com/jakub.sajko.9/">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/sajgonndg/">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com/JakubSajkoNDG">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/jakub-sajko-83a851231/">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/JAKUBSAJKO">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <h3>Made by Jakub Sajko</h3>
    </div>
  );
};

export default Footer;
