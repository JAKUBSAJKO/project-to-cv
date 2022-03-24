import React from "react";
import "./Interests.css";

const Interests = () => {
  return (
    <div className="interests-container" id="interests">
      <div className="interests-header">
        <h1>Zainteresowania</h1>
      </div>
      <div className="interests-content">
        <div className="interests-music">
          <h2>Muzyka</h2>
          <div className="interests-scroll-animation">
            <div className="interests-info">
              <h3>Zespół</h3>
              <p>
                Od kilku lat gram na gitarze oraz śpiewam w zespole muzycznym,
                który założyłem <br class="responsive" />z kolegą. Muzykę
                komponowaną przeze mnie można przypisać do klimatów rocka.
                Muzyka i słowa są dla mnie tak samo ważne{" "}
                <br class="responsive" />w piosenkach. Teksty piszę{" "}
                <br class="responsive" />w języku polskim.
              </p>
              <br />
              <h3>Ulubione zespoły</h3>
              <h3 className="top">Świat</h3>
              <ul>
                <li>Linkin Park</li>
                <li>Bring me the horizon</li>
                <li>Oasis</li>
                <li>Placebo</li>
                <li>Red hot chilli peppers</li>
              </ul>
              <h3 className="top">Polska</h3>
              <ul>
                <li>Ted Nemeth / Patryk Pietrzak</li>
                <li>Happysad</li>
                <li>Myslovitz</li>
              </ul>
            </div>
          </div>
          <i class="fas fa-caret-down down-arrow"></i>
        </div>
        <div className="interests-sport">
          <h2>Sport</h2>
          <div className="interests-scroll-animation">
            <div className="interests-info">
              <h3>Koszykówka</h3>
              <p>
                Jest to zdecydowanie mój ulubiony sport. Gra jest szybka, gdyż
                każda z drużyna ma jedynie 24 sekundy na wykonanie akcji. Poza
                oglądaniem lubię również grać w kosza. Ulubioną drużyną jest Los
                Angeles Lakers, a ulubionym koszykarzem zawsze będzie Kobe
                Bryant.
              </p>
              <br />
              <h3>Formuła 1</h3>
              <p>
                Ciekawy sport, zdecydowanie inny niż reszta sportów. Walka
                <br class="responsive" />z innymi zespołami, a także{" "}
                <br class="responsive" />z zespołowym kolegą to coś czego nie
                spotykamy w żadnym innym sporcie. Wiele zależy{" "}
                <br class="responsive" />
                od kierowców, ale praktycznie tyle samo zależy od bolidu.
                Formulą 1 zacząłem interesować się <br class="responsive" />
                po obejrzeniu pierwszego sezonu serialu "Drive to survive".
              </p>
            </div>
          </div>
          <i class="fas fa-caret-down down-arrow"></i>
        </div>
        <div className="interests-book">
          <h2>Książki</h2>
          <p>
            Ulubiony gatunek to zdecydowanie powieści kryminalne. Ruth Ware oraz
            Stephen King to moi ulubieni autorzy, których styl mi odpowieda.
            Jeżeli nie mam czasu na książki to staram się wybierać audiobooki
            jak tło do zajęć.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interests;
