import React from 'react';
import '../../styles/services.css';

const Services = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="services__top-content">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save time managing your business with</h2>
          <h3 className="highlight">our best service</h3>
        </div>

        <div className="service__item-wrapper">
          <div className="service__item">
            <span className="service__icon">
              <i class="ri-apps-line"></i>
            </span>
            <h3 className="service__title">App Development</h3>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              veritatis saepe cum ullam accusantium perspiciatis sequi quibusdam
              corporis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
