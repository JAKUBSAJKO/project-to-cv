import React, { useState } from "react";
import "./WorkExp.css";
import MOVIE from "../../assets/movie-workExp.mp4";
import IMG1 from "../../assets/img1-we.png";
import IMG2 from "../../assets/img2-we.png";
import IMG3 from "../../assets/img3-we.png";
import IMG4 from "../../assets/img4-we.png";

const Workexp = () => {
  let [movieOrImages, setMovieOrImages] = useState("true");
  let [currentNum, setCurrentNum] = useState(1);

  const previousImg = () => {
    if (currentNum === 1) {
      setCurrentNum(4);
    } else {
      setCurrentNum(currentNum - 1);
    }
  };

  const nextImg = () => {
    if (currentNum === 4) {
      setCurrentNum(1);
    } else {
      setCurrentNum(currentNum + 1);
    }
  };

  return (
    <div className="work-container" id="workExp">
      <div className="work-container-bg">
        <div className="work-header">
          <h2>Doświadczenie zawodowe</h2>
        </div>
        <div className="work-content">
          <div className="leftside">
            <h2>
              <b>Stanowisko: Grafik komputerowy</b>
            </h2>
            <h3>Regionalna Pracownia Digitalizacji | Elbląg</h3>
            <h3>10.2020 - 02.2021</h3>
            <h4>Opis stanowiska:</h4>
            <ul>
              <li>zaprojektowanie wirtualnej wystawy</li>
              <li>tworzenie modeli 3D</li>
              <li>tworzenie materiałów graficznych</li>
              <li>montaż filmowy</li>
              <li>testowanie platform internetowych</li>
            </ul>
            <p>
              Zwieńczeniem współpracy była praca dyplomowa. <br />
              Wraz z kolegą stworzyliśmy grę edukacyjną dla dzieci <br />w
              środowisku Unity. Gra polegała na odnalezieniu ukrytych eksponatów
              w labiryncie oraz zdobyci wiedzy na ich temat. Eksponaty
              znajdujące się w grze pochodzą <br />z regionu Warmi i Mazur.
            </p>
          </div>
          <div className="rightside">
            <div className="content">
              <i
                className={
                  movieOrImages === "false"
                    ? "fas fa-angle-left arrow-left noarrow"
                    : "fas fa-angle-left arrow-left"
                }
                onClick={previousImg}
              ></i>
              <i
                className={
                  movieOrImages === "false"
                    ? "fas fa-angle-right arrow-right noarrow"
                    : "fas fa-angle-right arrow-right"
                }
                onClick={nextImg}
              ></i>
              <div
                className={
                  movieOrImages === "true" ? "slider slider-on" : "slider"
                }
              >
                <img
                  src={IMG1}
                  alt=""
                  className={currentNum === 1 ? "image-on" : ""}
                />
                <img
                  src={IMG2}
                  alt=""
                  className={currentNum === 2 ? "image-on" : ""}
                />
                <img
                  src={IMG3}
                  alt=""
                  className={currentNum === 3 ? "image-on" : ""}
                />
                <img
                  src={IMG4}
                  alt=""
                  className={currentNum === 4 ? "image-on" : ""}
                />
              </div>
              <div
                className={
                  movieOrImages === "false" ? "video video-on" : "video"
                }
              >
                <video controls width="360px">
                  <source src={MOVIE} type="video/mp4" />
                </video>
              </div>
            </div>
            <div
              className={movieOrImages === "false" ? "dots noactive" : "dots"}
            >
              <div
                className={currentNum === 1 ? "dot pick" : "dot"}
                onClick={() => {
                  setCurrentNum(1);
                }}
              ></div>
              <div
                className={currentNum === 2 ? "dot pick" : "dot"}
                onClick={() => {
                  setCurrentNum(2);
                }}
              ></div>
              <div
                className={currentNum === 3 ? "dot pick" : "dot"}
                onClick={() => {
                  setCurrentNum(3);
                }}
              ></div>
              <div
                className={currentNum === 4 ? "dot pick" : "dot"}
                onClick={() => {
                  setCurrentNum(4);
                }}
              ></div>
            </div>
            <hr className={movieOrImages === "false" ? "movieHr" : ""} />
            <div className="content-icon">
              <i
                className={
                  movieOrImages === "true"
                    ? "fas fa-image active-icon"
                    : "fas fa-image"
                }
                onClick={() => {
                  setMovieOrImages("true");
                }}
              ></i>
              <i
                className={
                  movieOrImages === "false"
                    ? "fas fa-video active-icon"
                    : "fas fa-video"
                }
                onClick={() => {
                  setMovieOrImages("false");
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workexp;
