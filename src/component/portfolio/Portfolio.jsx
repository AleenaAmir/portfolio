import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/chak92.png';
import IMG2 from '../../assets/sap1.png';
import IMG3 from '../../assets/hotel2.jpg';
import IMG4 from '../../assets/Managment.jpg';
import IMG5 from '../../assets/marketting.png';
import IMG6 from '../../assets/Ecommerce_site_2.jpg';
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Property website',
    github: ' ',
    demo: '',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Cloud Equate SAP',
    github: '',
    demo: '',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Marketing website',
    github: '',
    demo: '',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Real Estate webstie',
    github: '',
    demo: '',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Expense managment ',
    github: '',
    demo: '',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Ecommerc website',
    github: '',
    demo: '',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className="container  portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_img">
                <img src={image} alt={title}  height={200}/>
              </div>
              <h3> {title}</h3>
              <div className="portfolio_item_cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
