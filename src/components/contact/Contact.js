import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-header">
        <h1>Kontakt</h1>
      </div>
      <div className="contact-content">
        <div className="contact-left">
          <div className="contact-left-mail">
            <i className="fas fa-envelope"></i>
            <h1>jakubsajko.inf@gmail.com</h1>
          </div>
          <div className="contact-left-phone">
            <i className="fas fa-mobile-alt"></i>
            <h1>515 982 498</h1>
          </div>
          <div className="contact-left-city">
            <i className="fas fa-map-marker-alt"></i>
            <h1>Gdańsk / Nowy Dwór Gdański</h1>
          </div>
        </div>
        <div className="contact-right">
          <form
            id="contactform"
            action="https://formsubmit.io/send/jakubsajko.inf@gmail.com"
            method="POST"
          >
            <input
              name="_redirect"
              type="hidden"
              value="https://jakub-sajko-cv.netlify.app/thanks"
            ></input>
            <input
              name="_formsubmit_id"
              type="text"
              className="honeypot"
            ></input>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Wpisz imię i nazwisko"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Wpisz email"
            />
            <input
              type="text"
              name="subjects"
              id="subjects"
              placeholder="Wpisz temat"
            />
            <textarea
              name="msg"
              id="msg"
              rows="3"
              placeholder="Wiadomość"
            ></textarea>
            <Link to={"/thanks"}>
              <button type="submit" className="contact-btn" value="Submit">
                Wyślij
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
