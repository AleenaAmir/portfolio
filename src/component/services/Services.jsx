import React from 'react';
import './Services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <h5> what i offer</h5>
      <h2>Services</h2>
      <div className=" container services_container">
        <articel className="service">
          <div className="service_head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>Responsive design</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p> Design Customization</p>
            </li>{' '}
            <li>
              <BiCheck className="service_list_icon" />
              <p>Commercial licensed Images</p>
            </li>{' '}
            <li>
              <BiCheck className="service_list_icon" />
              <p>Content upload</p>
            </li>{' '}
            <li>
              <BiCheck className="service_list_icon" />
              <p>Source Code</p>
            </li>{' '}
          </ul>
        </articel>
        {/* End of UI */}
        {/* Frontend development */}
        <articel className="service">
          <div className="service_head">
            <h3>Full Stack Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>Complete Web-app </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p> Responsive deisgn</p>
            </li>{' '}
            <li>
              <BiCheck className="service_list_icon" />
              <p>Logo design</p>
            </li>{' '}
            <li>
              <BiCheck className="service_list_icon" />
              <p>Content upload</p>
            </li>{' '}
            <li>
              <BiCheck className="service_list_icon" />
              <p>Customization</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Source Code</p>
            </li>
          </ul>
        </articel>
        {/* Web development END */}
        {/* Full stack Development */}
        <articel className="service">
          <div className="service_head">
            <h3> Backend Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>Database managment</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p> MySQl</p>
            </li>{' '}
            <li>
              <BiCheck className="service_list_icon" />
              <p>Prisma</p>
            </li>{' '}
            <li>
              <BiCheck className="service_list_icon" />
              <p>MongoDB</p>
            </li>{' '}
            <li>
              <BiCheck className="service_list_icon" />
              <p>Database changes</p>
            </li>{' '}
          </ul>
        </articel>
      </div>
    </section>
  );
};

export default Services;
