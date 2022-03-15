import React from "react";
import "./WorkExp.css";

const Workexp = () => {
  return (
    <div className="work-container">
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
            <div className="slider"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workexp;
