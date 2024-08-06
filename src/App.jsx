import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Project />
      <div className="footer">
        <p
          className="footer-text"
          style={{
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Made with 💖 by William
        </p>
      </div>
    </>
  );
}

export default App;
