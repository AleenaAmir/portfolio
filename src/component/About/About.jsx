import React from 'react';
import './About.css';
import ME from '../../assets/ME.jpeg';
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
            Hello , i M Muhammad junaid a Well-qualified Full Stack Developer
            familiar with wide range of programming utilities and languages.
            Knowledgeable of back-end and front-end development requirements.
            Handles any part of process with ease. Collaborative team player
            with excellent technical abilities offering 3 year of related
            experience.
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
