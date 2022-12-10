import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/ME.jpeg';
import HeaderSocial from './HeaderSocial';
import Typical from 'react-typical';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello</h5>
        {/* <Typical
          loop={Infinity}
          steps={["I 'M", 1000, 'Muhammad junaid', 1000]}
        /> */}
        <h1> I'M Muhammad junaid</h1>
        {/* {
          (setTimeout(() => {
            <h1> Muhammad junaid</h1>;
          }),
          1000)
          setTimeout(() => {
            console.log('This will run after 1 second!')
          }, 1000);
        } */}

        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="my">
          <img src={ME} alt="my" />
        </div>

        <a href="#contact" className="Scroll_Down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
