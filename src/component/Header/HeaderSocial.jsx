import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

const HeaderSocial = () => {
  return (
    <div className="header_socials">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <BsGithub className="icons" />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100042252727835"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsFacebook className="icons" />
      </a>
      <a
        href="https://www.linkedin.com/in/muhammad-junaid-815706222/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin className="icons" />
      </a>
    </div>
  );
};

export default HeaderSocial;
