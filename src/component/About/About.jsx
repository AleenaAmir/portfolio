import React from 'react';
import './About.css';
import ME from '../../assets/me.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about__me">
          <div className="about_me_img">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card ">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years Working </small>
            </article>
            <article className="about__card ">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>100+ Worldwide </small>
            </article>
            <article className="about__card ">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ completed </small>
            </article>
          </div>
          <p className="text">
            Hello , i M Aleena a Front-End Developer specializing in crafting interactive, responsive, and visually appealing web applications. With strong expertise in HTML, CSS, JavaScript, React.js, and modern frameworks like Next.js,Remix.js. I deliver seamless user experiences. My focus is on performance optimization, cross-browser compatibility, and mobile-first design, ensuring a smooth, engaging experience across all devices. I thrive on solving complex challenges and continuously seek innovative approaches to enhance web development.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
