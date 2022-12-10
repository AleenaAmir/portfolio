import React from 'react';
import './Footer.css';
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Developer
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Expercience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonial</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/">
          <FiFacebook />
        </a>
        <a href="https://www.instagram.com/accounts/login/">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/home">
          <BsTwitter />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Developer Tutorials. All right reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
