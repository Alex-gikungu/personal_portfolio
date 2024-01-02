// Services.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Links from './Links';
import Footer from './Footer';


const Services = () => {
  const projects = [
    {
      title: 'Maxie Plumbing website ',
      image: 'plumb.jpg', // Replace with actual image path
      description: 'Description for Project 1.',
      details: 'More details about Project 1.',
      liveLink: 'https://maxie-plumbing-services.vercel.app/',
    },

    {
      title: 'Podcast website',
      image: 'pod.jpg', // Replace with actual image path
      description: 'Description for Project 1.',
      details: 'More details about Project 1.',
      liveLink: 'https://podclub.onrender.com/',
    },

    {
      title: 'E-commerce website',
      image: 'shop.jpg', // Replace with actual image path
      description: 'Description for Project 1.',
      details: 'More details about Project 1.',
      liveLink: 'https://sports-wear-collections.vercel.app/',
    },

    {
      title: 'Weather application ',
      image: 'weather.jpg', // Replace with actual image path
      description: 'Description for Project 1.',
      details: 'More details about Project 1.',
      liveLink: 'https://weather-app-alex-gikungu.vercel.app/',
    },

    {
      title: 'Birthday countdown app ',
      image: 'bb.jpg', // Replace with actual image path
      description: 'Description for Project 1.',
      details: 'More details about Project 1.',
      liveLink: 'https://birthday-one-ruddy.vercel.app/',
    },

    {
      title: 'Rental houses website ',
      image: 'project1.jpg', // Replace with actual image path
      description: 'Description for Project 1.',
      details: 'More details about Project 1.',
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
                Live Link
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
