// Blogs.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Links from './Links';
import Footer from './Footer';
// import './Blogs.css'; 
const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: 'Max Irungu',
      content: 'I had an amazing experience working with this developer. Not only did they create a stunning plumbing website for me, but they also exceeded my expectations in terms of design and functionality. Highly recommended!',
      rating: 5,
    },
    {
      id: 2,
      title: 'Michael',
      content: 'The developer built an outstanding e-commerce website for my business with seamless M-Pesa integration. The attention to detail and commitment to delivering a high-quality product were truly impressive. Great job!',
      rating: 4,
    },
    {
      id: 3,
      title: 'Victor',
      content: 'Working with this developer on a group project was a fantastic experience. Their collaborative approach, effective communication, and technical expertise greatly contributed to the success of our project. Thumbs up!',
      rating: 4.5,
    },
    {
      id: 4,
      title: 'Samson kinyua',
      content: 'I had the pleasure of collaborating with this developer on a podcast website. Their creativity, technical skills, and dedication to delivering a user-friendly platform were remarkable. It was a pleasure working together!',
      rating: 5,
    },
  ];
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>★</span>);
    }
    return stars;
  };

  return (
    <>
      <Links />
      <div className='clients'>
      <h1>Clients Feedbacks </h1>
      </div>
      <div className="blogs-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <div className="blog-header">
              <h2>{blog.title}</h2>
              <div className="stars">{renderStars(blog.rating)}</div>
            </div>
            <p>{blog.content}</p>
            {/* Blog icon */}
            <div className="blog-icon">📝</div>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default Blogs;
