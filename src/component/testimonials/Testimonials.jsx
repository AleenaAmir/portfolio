import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/comment1.jpeg';
import img2 from '../../assets/comment2.jpeg';
import img3 from '../../assets/comment3.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    id: 1,
    avatar: img1,
    name: 'Tina Snow',
    country: 'austria',

    review:
      'It was a very positive experience working with junaid, he delivered on everything I asked and did a great job doing it. He provided me good advice to start with also. communication was good and I supplied very clear instructions to start with, so there was no confusion. Can only speak highly of him. Thanks',
  },
  {
    id: 2,
    avatar: img1,
    name: 'john marks',

    country: 'Germany',
    review:
      'Awesome guy. He was able to accomplish my request pretty quickly from the first attempt. Highly recommend him!',
  },
  {
    id: 3,
    avatar: img2,
    name: 'lawrance',

    country: 'Bangladesh',
    review:
      'Excellent service..! junaid was very knowledgeable and patient with me.. i will definitely using his services again in future...! 100% recommended..🖤',
  },
  {
    id: 4,
    avatar: img2,
    name: 'Eddy',

    country: 'Canada',
    review: 'Junaid did an amazing job. Quick it was. will order again.',
  },
  {
    id: 5,
    avatar: img3,
    name: 'josiph',

    country: 'UK',
    review:
      'Very professional and focused on understanding the value of the project. this was a first step on a bigger project, well done!',
  },
  {
    id: 6,
    avatar: img3,
    name: 'gyuner',

    country: 'United Kingdom',
    review: 'great to work with',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>
      <Swiper className="contain  testimonials_container">
        {data.map(({ name, avatar, review, country }, index) => {
          return (
            <SwiperSlide
              key={index}
              className="testimonial"
              modules={[Pagination]}
              spaceBetween={40}
              slidesPerView={1}
            >
              <div className="client_avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client_name">{name}</h5>
              <h5 className="client_country">{country}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
