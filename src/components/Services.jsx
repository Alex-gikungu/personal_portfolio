import React, { useState } from 'react';
import Links from './Links';
import Footer from './Footer';

const Services = () => {
  const projects = [
    {
      title: 'Maxie Plumbing Website',
      image: 'plumb.jpg',
      details: 'Maxie Plumbing website is a comprehensive platform showcasing the services offered by Maxie Plumbing Services...',
      liveLink: 'https://maxie-plumbing-services.vercel.app/',
    },
    {
      title: 'Podcast Website',
      image: 'pod.jpg',
      details: 'Explore the world of podcasts with our immersive Podcast Website...',
      liveLink: 'https://podclub.onrender.com/',
    },
    // Add more projects here
  ];

  const services = [
    {
      title: 'API Integrations',
      description: 'Seamless integration of APIs such as M-Pesa, Stripe, and others for secure transactions.',
      image: 'api.jpg',
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored software solutions designed to meet your specific business needs.',
      image: 'custom.jpg',
    },
    // Add more services here
  ];

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
      title: 'Samson Kinyua',
      content: 'I had the pleasure of collaborating with this developer on a podcast website. Their creativity, technical skills, and dedication to delivering a user-friendly platform were remarkable. It was a pleasure working together!',
      rating: 5,
    },
  ];

  const ProjectCard = ({ project }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
      setShowDetails(!showDetails);
    };

    return (
      <div className="project-card">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-info">
          <h3>{project.title}</h3>
          {showDetails && (
            <>
              <p>{project.details}</p>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                Visit website
              </a>
            </>
          )}
          <button onClick={toggleDetails}>{showDetails ? 'Show Less' : 'Read More'}</button>
        </div>
      </div>
    );
  };

  const ServiceCard = ({ service }) => (
    <div className="service-card">
      <img src={service.image} alt={service.title} className="service-image" />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );

  const TestimonialCard = ({ testimonial }) => (
    <div className="testimonial-card">
      <h4>{testimonial.title}</h4>
      <p>"{testimonial.content}"</p>
      <span>Rating: {testimonial.rating} / 5</span>
    </div>
  );

  return (
    <>
      <div className="ser">
        <Links />
        <h1>Business Websites & Portfolios</h1>
        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <h1>Other Services</h1>
        <div className="services-container">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <div className="testimonials-container">
          <h2>Client Testimonials</h2>
          {blogs.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="contact-section">
          <h2>Contact Me</h2>
          <p>If you're interested in any of these services, feel free to reach out to me on WhatsApp.</p>
          <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="contact-button">
            Contact Me on WhatsApp
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
