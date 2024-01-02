// Services.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Links from './Links';
import Footer from './Footer';


const Services = () => {
  const projects = [
    {
        title: 'Maxie Plumbing Website',
        image: 'plumb.jpg',
        details: 'Maxie Plumbing website is a comprehensive platform showcasing the services offered by Maxie Plumbing Services. The website provides information about their expertise, service offerings, and a user-friendly interface to connect with the plumbing team. With a clean and intuitive design, it ensures an effortless experience for visitors seeking plumbing solutions.',
        liveLink: 'https://maxie-plumbing-services.vercel.app/',
      
    },

    {
      title: 'Podcast Website',
      image: 'pod.jpg',
      details: 'Explore the world of podcasts with our immersive Podcast Website. Designed for podcast enthusiasts, this platform offers a seamless listening experience, a variety of genres, and easy navigation. Dive into a collection of engaging episodes, discover new content, and stay connected with your favorite shows. With a sleek design and user-friendly interface, the Podcast Website is your go-to destination for discovering, streaming, and enjoying quality podcast content.',
      liveLink: 'https://podclub.onrender.com/',
    }
    ,

    {
      title: 'E-commerce Website',
      image: 'shop.jpg',
      details: 'Experience the convenience of online shopping with our E-commerce Website. Discover a wide range of sports wear collections, browse through stylish apparel, and shop for the latest trends in sports fashion. Our user-friendly interface makes it easy to explore products, add them to your cart, and securely complete your purchase. Enjoy a seamless shopping experience with fast shipping and responsive customer support. Elevate your sports wardrobe with the E-commerce Website - your one-stop destination for trendy and comfortable sports wear.',
      liveLink: 'https://sports-wear-collections.vercel.app/',
    }
    ,
    {
      title: 'Weather Application',
      image: 'weather.jpg',
      details: "Stay informed about the weather with our intuitive Weather Application. Get real-time updates on current conditions, forecasts, and detailed weather information for any location. Whether you\'re planning your day or keeping an eye on the upcoming week, our application provides accurate and reliable weather data. With a clean design and user-friendly features, it's easy to navigate and explore weather patterns. Stay prepared for any forecast with the Weather Application - your reliable companion for weather updates.",
      liveLink: 'https://weather-app-alex-gikungu.vercel.app/',
    }
    ,
    

    {
      title: 'Birthday Countdown App',
      image: 'bb.jpg',
      details: 'Celebrate special moments with our Birthday Countdown App. This app allows you to create personalized countdowns to eagerly anticipate and celebrate birthdays. Set reminders, customize themes, and share the excitement with friends and family. With its simple and engaging interface, the Birthday Countdown App adds a touch of joy to the countdown experience. Count the moments, share the anticipation, and make birthdays even more special with our Birthday Countdown App.',
      liveLink: 'https://birthday-one-ruddy.vercel.app/',
    }
    ,    
    {
      title: 'Rental Houses Website',
      image: 'public/nest .png',
      details: 'Explore your dream living space with our Rental Houses Website. Discover a curated collection of rental properties, from cozy apartments to spacious homes. Our user-friendly platform simplifies the house-hunting process, allowing you to filter by location, amenities, and more. Find the perfect place to call home with detailed property listings, high-quality images, and easy contact options. Whether you are moving or simply exploring options, the Rental Houses Website offers a seamless experience in finding your ideal rental property.',
      liveLink: 'https://example.com/project1',
    },
    
  ];

  const ProjectCard = ({ project }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
      setShowDetails(!showDetails);
    };

    return (
      <div className="project-card">
        <img src={project.image} alt={project.title} />
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {showDetails && (
            <div>
              <p>{project.details}</p>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                Visit website
              </a>
            </div>
          )}
          <button onClick={toggleDetails}>Read More</button>
        </div>
      </div>
    );
  };

  return (
    <>
    <div className='ser'>
      <Links />
      <h1>Business websites & portfolios </h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Services;
