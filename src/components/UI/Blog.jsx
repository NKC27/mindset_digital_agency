import React from 'react';
import '../../styles/blog.css';

import videoImg from '../../images/video.png';
import articleImg from '../../images/article.png';
import caseStudy from '../../images/case-study.png';

const blogData = [
  {
    imgURL: videoImg,
    title: 'Articles',
    desc: 'Boost your engagement rate with new customers!',
    linkUrl: '#',
  },
  {
    imgURL: articleImg,
    title: 'Case Study',
    desc: 'Latest case study in web development! Watch the video!',
    linkUrl: '#',
  },
  {
    imgURL: caseStudy,
    title: 'Video',
    desc: 'Boost your conversion rate with us for new clients!',
    linkUrl: '#',
  },
];

const Blog = () => {
  return (
    <section>
      <div className="container">
        <div className="blog__top-content">
          <h6 className="subtitle">Our Blog</h6>
          <h2>
            Let's have a look from our
            <span className="highlight"> recent blog</span>
          </h2>
        </div>

        <div className="blog__wrapper">
          {blogData.map((item, index) => (
            <div className="blog__item" key={index}>
              <h3>{item.title}</h3>
              <div className="blog__img">
                <img src={item.imgURL} alt="" />
              </div>
              <p className="description blog__desc">{item.desc}</p>
              <div>
                <a href="#" className="learn__more">
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
