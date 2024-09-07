import React from 'react';
import Links from './Links';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


const skills = [
  { name: 'HTML', image: 'html.png' },
  { name: 'CSS', image: 'css.png' },
  { name: 'Bootstrap', image: 'bootstrap.png' },
  { name: 'JavaScript', image: 'javascript.png' },
  { name: 'React', image: 'react.png' },
  { name: 'Python', image: 'python.png' },
  { name: 'Flask', image: 'flask.png' },
  { name: 'C', image: 'c.png' },
];

const About = () => {
  return (
    <>
      <Links />
      <div
        className="jumbotron text-center"
        style={{
          backgroundColor: '#6c757d', // Change to your preferred color
          color: '#fff',
          padding: '60px 20px',
        }}
      >
        <h1 className="display-4">About Me</h1>
        <p className="lead">
          Hello, I'm Alex Gikungu, a software engineer with over one year of experience.
          I specialize in both front-end and back-end development, including API generation.
        </p>
      </div>

      <div className="container my-5">
        <h2 className="text-center">Skills</h2>
        <div className="row text-center">
          {skills.map((skill) => (
            <div key={skill.name} className="col-lg-3 col-md-4 col-sm-6 my-3 skill-item">
              <img
                src={skill.image}
                alt={`${skill.name} icon`}
                className="img-fluid mb-2"
                style={{ maxHeight: '60px' }}
              />
              <h5>{skill.name}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center">Services</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="ecommerce.png" className="card-img-top" alt="E-commerce development" />
              <div className="card-body">
                <h5 className="card-title">Dynamic Web Development</h5>
                <p className="card-text">Build e-commerce websites and other dynamic platforms that drive business growth.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="portfolio.png" className="card-img-top" alt="Static website development" />
              <div className="card-body">
                <h5 className="card-title">Static Websites</h5>
                <p className="card-text">Create stunning portfolio websites that showcase your work effectively.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="mpesa.png" className="card-img-top" alt="M-Pesa integration" />
              <div className="card-body">
                <h5 className="card-title">M-Pesa Integrations</h5>
                <p className="card-text">Seamless M-Pesa integration for easy online payments.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="card">
              <img src="api.png" className="card-img-top" alt="API development" />
              <div className="card-body">
                <h5 className="card-title">API Development</h5>
                <p className="card-text">Custom APIs for integrating and enhancing your web applications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center my-5">
        <h2>Contact Me</h2>
        <p>Reach out to me on WhatsApp for any web development needs!</p>
        <a
          href="https://wa.me/<YOUR_WHATSAPP_NUMBER>?text=Hi Alex, I visited your portfolio and would like to discuss your web development services."
          className="btn btn-success btn-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact on WhatsApp
        </a>
      </div>

      <Footer />
    </>
  );
};

export default About;
