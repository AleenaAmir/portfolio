import React from "react";
import me from "../../assets/me.jpg";

import "./Header.css";

export default function Header() {
  return (
    <div className="main-container">
      <header className="navbar">
     
        {/* <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav> */}
      </header>

      <section className="hero">
        <div className="content">
          <h2>Hello, I'm Aleena</h2>
          <h3> Full Stack Developer</h3>
          <p>
           
            From frontend interfaces to backend logic, I architect efficient, real-time systems.
            I thrive in fast-paced environments, translating complex requirements into elegant, functional solutions—whether it’s a marketplace, management dashboard, or SaaS platform
          </p>
          <button className="contact-btn">Contact Me</button>
        </div>
        <div className="profile-pic">
          <img src={ me} alt="Aleena Ghafoor" />
        </div>
      </section>
    </div>
  );
}
