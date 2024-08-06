import React from "react";
import "./Project.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { motion } from "framer-motion";

const Project = () => {
  const Projects = [
    {
      name: "Ecommerce Website",
      description:
        "A full fledged ecommerce website with stripe payment integration",
      url: "https://ecom-alpha-ten.vercel.app/",
      imgUrl:
        "https://cdn.sanity.io/images/uohvziyc/production/4b907a2ef3a78914fb8d272a6cf4f3dbcd374874-1904x911.png",
      codeUrl: "https://github.com/William73920/Ecommerce",
    },
    {
      name: "Netflix Clone",
      description: "A full fledged netflix clone",
      url: "https://net-five.vercel.app/",
      imgUrl:
        "https://cdn.sanity.io/images/uohvziyc/production/ea1f9d774dd8ca3b0a97db9b5bcf730485fa9a89-1905x887.png",
      codeUrl: "https://github.com/William73920/Netflix-clone",
    },
    {
      name: "Notes App",
      description:
        "A full fledged notes app with full fledged editor and authentication",
      url: "https://covid-tracker-rho.vercel.app/",
      imgUrl:
        "https://cdn.sanity.io/images/uohvziyc/production/6a50fd7ba02da52912c9f128d989b19ff871cebc-1830x761.png",
      codeUrl: "https://github.com/William73920/NotesApp",
    },
    {
      name: "Movie Search App",
      description: "A full fledged movie search app with cast and trailers",
      url: "https://master--beautiful-monstera-07947d.netlify.app/",
      imgUrl:
        "https://cdn.sanity.io/images/uohvziyc/production/a6cf91e4e1db1e9516551a1725828946c101a7e7-1107x874.png",
      codeUrl: "https://github.com/William73920/Movie_Search",
    },
  ];

  return (
    <div className="project" id="projects">
      <h1 className="project-heading">Projects</h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        className="project-container"
      >
        {Projects.map((project) => (
          <ProjectCard
            name={project.name}
            description={project.description}
            url={project.url}
            imgUrl={project.imgUrl}
            codeUrl={project.codeUrl}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
