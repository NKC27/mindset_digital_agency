import React from 'react';
import '../../styles/about.css';

import aboutImg from '../../images/about-us.jpeg';

const chooseData = [
  {
    icon: 'ri-wifi-line',
    title: 'First working process',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae maiores itaque impedit voluptatibus accusantium aut. Aut cumque ',
  },
  {
    icon: 'ri-team-line',
    title: 'Dedicated team',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae maiores itaque impedit voluptatibus accusantium aut. Aut cumque .',
  },
  {
    icon: 'ri-customer-service-2-line',
    title: '24/7 Help & Support',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae maiores itaque impedit voluptatibus accusantium aut. Aut cumque ',
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__content">
            <h6 className="subtitle">Why choose us</h6>
            <h2>Specialists in application development</h2>
            <h3 className="highlight">financial challenges</h3>
            <p className="description about__content-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              illo harum quis cupiditate tempore! Soluta rem quaerat at numquam
              ipsam.
            </p>

            <div className="choose__item-wrapper">
              {chooseData.map((item, index) => (
                <div className="choose__us-item" key={index}>
                  <span className="choose__us-icon">
                    <i className={item.icon}></i>
                  </span>
                  <div>
                    <h4 className="choose__us-title">{item.title}</h4>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about__img">
            <img src={aboutImg} alt="about-img"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
