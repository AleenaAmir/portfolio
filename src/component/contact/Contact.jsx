import './Contact.css';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
function Contact() {
  const form = useRef();

 

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2> Contact Me</h2>
      <div className="container">
        <div className="containe ">
          <div className="contact_options">
            <article className="contact_option">
              <MdOutlineEmail className="contact-option-icon" />
              <h4>Email</h4>
              <h5>aleenaghafoor239@gmail.com</h5>

              <a
                href="mailto:aleenaghafoor239@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send a message
              </a>
            </article>
            <article className="contact_option">
              <RiMessengerLine className="contact-option-icon" />
              <h4>LinkedIn</h4>
              <h5>Aleena Abdul Ghafoor</h5>

              <a
                href="www.linkedin.com/in/aleena-ghafoor-1a986b348 "
                target="_blank"
                rel="noopener noreferrer"
              >
                Send a message
              </a>
            </article>
            <article className="contact_option">
              <BsWhatsapp className="contact-option-icon" />
              <h4>Whatsapp</h4>
              <h5>00971566272315</h5>

              <a
                href="https://wa.me/+971566272315"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send a message
              </a>
            </article>
          </div>
          {/* End of contact  options*/}
          <form action="https://formspree.io/f/mgvkezga" method="post" ref={form}>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
            />
            <input type="email" name="email" placeholder="Email" required />
            <textarea
              name="message"
              rows="7"
              placeholder="Your message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
