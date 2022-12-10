import React from 'react';
import './Experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Expercience = () => {
  return (
    <section id="experience">
      <h5> What skills i have</h5>
      <h2>My experience</h2>
      <div className=" container experience_container">
        <div className="experience_frontend">
          <h3> Frontend Development </h3>
          <div className="experience_content">
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Expercience</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Expercience</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail_icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Expercience</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail_icon" />
              <div>
                <h4>Raect</h4>
                <small className="text-light">Expercience</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail_icon" />
              <div>
                <h4>Material-ui</h4>
                <small className="text-light">Expercience</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Expercience</small>
              </div>
            </article>
          </div>
        </div>
        {/*END of FrontEnd*/}
        <div className="expercience_backend">
          <h3> Backend Development </h3>
          <div className="experience_content">
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail_icon" />
              <div>
                <h4>Node</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail_icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail_icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail_icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Expercience</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail_icon" />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Expercience</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail_icon" />
              <div>
                <h4>Prisma</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expercience;
