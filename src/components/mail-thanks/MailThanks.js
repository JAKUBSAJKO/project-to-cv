import React from "react";
import "./MailThanks.css";
import { Link } from "react-router-dom";

const Mailthanks = () => {
  return (
    <div className="mail-container">
      <div className="mail-cards">
        <div className="mail-icon">
          <i class="fas fa-envelope"></i>
        </div>
        <h1>Dzięki za kontakt</h1>
      </div>
      <Link to={"/"}>
        <button>Wróć</button>
      </Link>
    </div>
  );
};

export default Mailthanks;
