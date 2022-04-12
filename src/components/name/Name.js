import React from "react";
import "./Name.css";
import ME from "../../assets/foto_me.png";
import { Link } from "react-router-dom";
import CV from "../../assets/CV_Jakub_Sajko.pdf";
import { motion } from "framer-motion";

const Name = () => {
  return (
    <div className="name-container" id="name">
      <div className="name-description">
        <div className="name-text">
          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              mass: 1,
              damping: 8,
            }}
          >
            Cześć, nazywam się
          </motion.h1>
        </div>
        <div className="name-me">
          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{
              delay: 1.5,
              type: "spring",
              mass: 1,
              damping: 8,
            }}
          >
            Jakub Sajko
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Jestem absolwentem wyższej uczelni w zakresie grafiki komputerowej
          <br class="responsive" />i multimediów, lecz swoją przyszłość zawodową
          wiążę z frontendem. <br class="responsive" />
          Każdą wolną chwilę poświęcam na udoskonalaniu swoich umiejętność{" "}
          <br class="responsive" />w tworzeniu aplikacji internetowych.
          Chciałbym zdobywać doświadczenie <br class="responsive" />
          oraz rozwijać się w tym kierunku.
        </motion.p>
      </div>
      <div className="name-picture">
        <div className="imgBg"></div>
        <img src={ME} alt="" className="name-picture-me" />
      </div>

      <Link
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        to={CV}
        target="_blank"
        className="name-download-cv"
        download
      >
        <h2>Pobierz CV</h2>
        <span className="name-download-cv-icon">
          <i class="fas fa-download"></i>
        </span>
      </Link>
    </div>
  );
};

export default Name;
