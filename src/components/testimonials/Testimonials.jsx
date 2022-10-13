import React from "react";
import "./testemonials.css";
import AVTR1 from "../../images/avatar1.jpg";
import AVTR2 from "../../images/avatar2.jpg";
import AVTR3 from "../../images/avatar3.jpg";
import AVTR4 from "../../images/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Frank',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    avatar: AVTR2,
    name: 'Four',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    avatar: AVTR3,
    name: 'Jean',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    avatar: AVTR4,
    name: 'Sophie',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
      
        pagination={{ clickable: true }}
        >
        {data.map(({ avatar, name, review, index }) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="cliet__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
