import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

const Skills = () => {
  const icons = [
    {
      name: "HTML",
      url: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      name: "CSS",
      url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
      name: "JavaScript",
      url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "MongoDB",
      url: "https://cdn.iconscout.com/icon/free/png-512/free-mongodb-4-1175139.png?f=webp&w=256",
    },
    {
      name: "Express",
      url: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20128%20128%22%3E%3Cpath%20fill%3D%22%2334a853%22%20d%3D%22M126.67%2098.44c-4.56%201.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89%2076%2081.85%2085.2%2075.14%2094.77c-2.4%203.42-4.92%204.91-9.4%203.7L92.66%2062.34%2067.6%2029.71c4.31-.84%207.29-.41%209.93%203.45%205.83%208.52%2012.26%2016.63%2018.67%2025.21C102.65%2049.82%20109%2041.7%20115%2033.26c2.41-3.42%205-4.72%209.33-3.46-3.28%204.35-6.49%208.63-9.72%2012.88-4.36%205.73-8.64%2011.53-13.16%2017.14-1.61%202-1.35%203.3.09%205.19C109.9%2076%20118.16%2087.1%20126.67%2098.44zM1.33%2061.74c.72-3.61%201.2-7.29%202.2-10.83%206-21.43%2030.6-30.34%2047.5-17.06C60.93%2041.64%2063.39%2052.62%2062.9%2065H7.1c-.84%2022.21%2015.15%2035.62%2035.53%2028.78%207.15-2.4%2011.36-8%2013.47-15%201.07-3.51%202.84-4.06%206.14-3.06-1.69%208.76-5.52%2016.08-13.52%2020.66-12%206.86-29.13%204.64-38.14-4.89C5.26%2085.89%203%2078.92%202%2071.39c-.15-1.2-.46-2.38-.7-3.57Q1.33%2064.78%201.33%2061.74zM7.2%2060.25H57.63c-.33-16.06-10.33-27.47-24-27.57C18.63%2032.56%207.85%2043.7%207.2%2060.25z%22%20class%3D%22color000000%20svgShape%22%2F%3E%3C%2Fsvg%3E",
    },
    {
      name: "React",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
  ];

  return (
    <div className="skills" id="skills">
      <h1 className="skills-heading">Skills</h1>
      <div className="skills-icons">
        {icons.map((icon, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            whileInView={{ opacity: 1, y: 0 }}
            key={index}
            className="skill"
          >
            <img
              src={icon.url}
              alt={`${icon.name} icon`}
              className="skill-icon"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
