import React, { useEffect } from "react";
import "./About.css";
import avatar from "../../assets/Designer.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about" id="about">
      <motion.h1
        className="about-heading"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, staggerChildren: 0.3 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        About Me
      </motion.h1>
      <div className="about_container">
        <motion.div
          className="about_text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, staggerChildren: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p>
            Hello! I am William Rozario, a passionate developer specialized in
            the MERN stack. I have a strong background in web development and
            have built numerous projects, including a real-time chat
            application, a notes app, and a movie search app. I am also
            proficient in Next.js and TypeScript.
          </p>
          <p>
            With a degree in MCA and a 72% CGPA, I am enthusiastic about
            learning new technologies and applying them to solve real-world
            problems. Currently, I am working on a project that involves
            displaying and editing ad banners using Next.js and TypeScript.
          </p>
          <p>
            Feel free to reach out to me for collaborations or any exciting
            opportunities!
          </p>
        </motion.div>
        <motion.div
          className="about_image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="img_wrapper">
            <img src={avatar} alt="William Rozario" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
