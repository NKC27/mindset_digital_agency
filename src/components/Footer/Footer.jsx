import React from 'react';
import './footer.css';

const quickLiks01 = [
  {
    path: '#',
    display: 'Marketing',
  },
  {
    path: '#',
    display: 'Analytics',
  },
  {
    path: '#',
    display: 'Commerce',
  },
];

const quickLiks02 = [
  {
    path: '#',
    display: 'Pricing',
  },
  {
    path: '#',
    display: 'Documentation',
  },
  {
    path: '#',
    display: 'Guides',
  },
];

const quickLiks03 = [
  {
    path: '#about',
    display: 'About',
  },
  {
    path: '#',
    display: 'Jobs',
  },
  {
    path: '#blog',
    display: 'Blog',
  },
];
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <h2>MindSet</h2>
            <p className="description">Grow with us</p>
            <p className="small__text description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem, error ad. Dolores odit cupiditate itaque
              blanditiis. Voluptatem, sit. Corrupti, voluptatum!
            </p>
          </div>

          <div className="footer__quick-links">
            <h3 className="quick__links-title">Solution</h3>
            <ul className="quick__links">
              {quickLiks01.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__quick-links">
            <h3 className="quick__links-title">Company</h3>
            <ul className="quick__links">
              {quickLiks02.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__quick-links">
            <h3 className="quick__links-title">Support</h3>
            <ul className="quick__links">
              {quickLiks03.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="copyright">
          Copyright {year}, developed by NKC27. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
