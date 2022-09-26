import React from 'react';
import '../../styles/testimonial.css';

import Slider from 'react-slick';

import ava01 from '../../images/ava-1.jpeg';
import ava02 from '../../images/ava-2.jpeg';
import ava03 from '../../images/ava-3.jpeg';

// const testimonialData = [
//   {

//   }
// ]

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slideToShow: 1,
    slideToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <section>
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">Testimonials</h6>
          <h2>
            Trusted by more than
            <span className="highlight"> 5,000 customers</span>
          </h2>
          <div className="slider__wrapper">
            <Slider {...settings}>
              <div className="slider__item">
                <p className="description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                  alias ex ut dicta. Impedit rerum ratione ab eius eos ullam
                  laudantium omnis, quasi nisi modi aliquid, dolorem enim est
                  quam tenetur quos quod incidunt at odio harum tempore sunt
                  reiciendis!
                </p>

                <div className="customer__details">
                  <div className="customer__img">
                    <img src={ava01} alt="ava1-img" />
                  </div>

                  <div>
                    <h5 className="customer__name"> Mike Spinx</h5>
                    <p className="description">CEO, Spinx Records</p>
                  </div>
                </div>
              </div>

              <div className="slider__item">
                <p className="description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                  alias ex ut dicta. Impedit rerum ratione ab eius eos ullam
                  laudantium omnis, quasi nisi modi aliquid, dolorem enim est
                  quam tenetur quos quod incidunt at odio harum tempore sunt
                  reiciendis!
                </p>

                <div className="customer__details">
                  <div className="customer__img">
                    <img src={ava02} alt="ava1-img" />
                  </div>

                  <div>
                    <h5 className="customer__name"> Sally Peters</h5>
                    <p className="description">
                      Snr. Product Designer, Miracle Finance
                    </p>
                  </div>
                </div>
              </div>

              <div className="slider__item">
                <p className="description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                  alias ex ut dicta. Impedit rerum ratione ab eius eos ullam
                  laudantium omnis, quasi nisi modi aliquid, dolorem enim est
                  quam tenetur quos quod incidunt at odio harum tempore sunt
                  reiciendis!
                </p>

                <div className="customer__details">
                  <div className="customer__img">
                    <img src={ava03} alt="ava3-img" />
                  </div>

                  <div>
                    <h5 className="customer__name"> Daniel Tanz</h5>
                    <p className="description">CEO, Tanz Brewery</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
