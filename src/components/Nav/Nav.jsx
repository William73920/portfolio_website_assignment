import React, { useEffect, useRef, useState } from "react";

import "./Nav.css";
import gsap from "gsap";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 760) {
      if (isOpen) {
        gsap.to(menuRef.current, {
          x: 0,
          duration: 0.2,
          ease: "ease-in",
        });
      } else {
        gsap.to(menuRef.current, {
          x: "-100%",
          duration: 0.5,
          ease: "ease-in",
        });
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 760 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);
  return (
    <nav className="navbar">
      <div
        className={"burger-menu " + (isOpen ? "open" : "")}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={"navbar_items " + (isOpen ? "open" : "")} ref={menuRef}>
        <div className="navbar_item" onClick={() => setIsOpen(false)}>
          <a href="#home">Home </a>
        </div>
        <div className="navbar_item" onClick={() => setIsOpen(false)}>
          <a href="#about">About Me</a>
        </div>
        <div className="navbar_item" onClick={() => setIsOpen(false)}>
          <a href="#skills">Skills</a>
        </div>
        <div className="navbar_item" onClick={() => setIsOpen(false)}>
          <a href="#projects"> Projects </a>
        </div>
      </div>
      <div />
    </nav>
  );
};

export default Nav;
