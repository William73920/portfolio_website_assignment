// HeroBanner.js
import React from "react";
import { TypeAnimation as Typist } from "react-type-animation";
import "./Home.css";
import student from "../../assets/student.png";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import will from "../../assets/will.jpg";

//https://th.bing.com/th/id/OIG4.weI12A9sUGjvaabLi_N3?pid=ImgGn

const Home = () => {
  return (
    <div className="hero-container" id="home">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        className="image-section"
      >
        <img
          src="https://th.bing.com/th/id/OIG4.weI12A9sUGjvaabLi_N3?pid=ImgGn"
          alt="Profile"
          className="image"
        />
      </motion.div>
      <div className="text-section">
        <Typist
          sequence={[
            "I am a Frontend Developer",
            1000,
            "I am a MERN Stack Developer",
            1000,
          ]}
          wrapper="p"
          cursor={{ show: true, blink: true }}
          style={{ fontSize: "45px", fontFamily: "cursive" }}
          repeat={Infinity}
          className="hero-text"
        />

        <button
          className="text-section-buttons"
          onClick={() =>
            window.open("https://github.com/William73920", "_blank")
          }
        >
          Github Profile <FontAwesomeIcon icon={faGithub} size="2x" />
        </button>
      </div>
    </div>
  );
};

export default Home;
