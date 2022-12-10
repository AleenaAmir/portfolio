import './Contact.css';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_yfyrq9l',
        'template_4f46e57',
        form.current,
        'VIAYFIViAPVNw691D'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

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
              <h5>junaid8597@gmail.com</h5>

              <a
                href="mailto:junaid8597@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send a message
              </a>
            </article>
            <article className="contact_option">
              <RiMessengerLine className="contact-option-icon" />
              <h4>Facebook / Massenger</h4>
              <h5>Muhammad junaid</h5>

              <a
                href="https://www.facebook.com/profile.php?id=100042252727835 "
                target="_blank"
                rel="noopener noreferrer"
              >
                Send a message
              </a>
            </article>
            <article className="contact_option">
              <BsWhatsapp className="contact-option-icon" />
              <h4>Whatsapp</h4>
              <h5>+923111474928</h5>

              <a
                href="https://wa.me/+923111474928"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send a message
              </a>
            </article>
          </div>
          {/* End of contact  options*/}
          <form ref={form} method="post" onSubmit={sendEmail}>
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
