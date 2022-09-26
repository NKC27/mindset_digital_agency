import React from 'react';
import '../../styles/services.css';

const serviceData = [
  {
    icon: 'ri-apps-line',
    title: 'App Development',
    desc: 'Lorem, ipsum dolor sit amet elit. excepturi molestias nesciunt minus dicta! Libero mollitia architecto dolorem repellat!',
  },

  {
    icon: 'ri-code-s-slash-line',
    title: 'Web Design',
    desc: 'Lorem, ipsum dolor sit amet elit. excepturi molestias nesciunt minus dicta! Libero mollitia architecto dolorem repellat!',
  },

  {
    icon: 'ri-landscape-line',
    title: 'Graphic Design',
    desc: 'Lorem, ipsum dolor sit amet elit. excepturi molestias nesciunt minus dicta! Libero mollitia architecto dolorem repellat!',
  },

  {
    icon: 'ri-rocket-line',
    title: 'Digital Marketing',
    desc: 'Lorem, ipsum dolor sit amet elit. excepturi molestias nesciunt minus dicta! Libero mollitia architecto dolorem repellat!',
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="services__top-content">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save time managing your business with</h2>
          <h3 className="highlight">our best service</h3>
        </div>

        <div className="service__item-wrapper">
          {serviceData.map((item, index) => (
            <div className="service__item" key={index}>
              <span className="service__icon">
                <i class={item.icon}></i>
              </span>
              <h3 className="service__title">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
