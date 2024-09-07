import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Links from './Links';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Links />
      <div className="main-content">
        <header className="hero-section text-center text-light">
          <div className="container">
            <h1>Welcome to My Portfolio</h1>
            <p>Your go-to place for top-notch web development services.</p>
            <a href="#about" className="btn btn-primary btn-lg">Learn More</a>
          </div>
        </header>

        <section id="about" className="about-section text-center py-5">
          <div className="container">
            <h2>About Me</h2>
            <p>
              Hi, I'm Alex Gikungu, a software engineer with a passion for creating dynamic and user-friendly web applications. With experience in both front-end and back-end development, I specialize in crafting tailored solutions to meet your needs.
            </p>
          </div>
        </section>

        <section id="services" className="services-section text-center py-5 bg-light">
          <div className="container">
            <h2>My Services</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="service-card">
                  <h3>Dynamic Websites</h3>
                  <p>From e-commerce platforms to interactive web applications, I create dynamic websites that engage users and drive results.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-card">
                  <h3>Static Websites</h3>
                  <p>Beautifully designed static websites that showcase your portfolio, business, or personal brand with elegance and simplicity.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-card">
                  <h3>M-Pesa Integration</h3>
                  <p>Seamlessly integrate M-Pesa payment solutions into your website for easy and secure transactions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio-section text-center py-5">
          <div className="container">
            <h2>Portfolio</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="portfolio-card">
                  <img src="plumb.jpg" alt="Maxie Plumbing Website" className="img-fluid" />
                  <h3>Maxie Plumbing Website</h3>
                  <p>A comprehensive platform showcasing plumbing services with a clean and intuitive design.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="portfolio-card">
                  <img src="pod.jpg" alt="Podcast Website" className="img-fluid" />
                  <h3>Podcast Website</h3>
                  <p>Discover and stream podcasts with an immersive, user-friendly interface.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="portfolio-card">
                  <img src="shop.jpg" alt="E-commerce Website" className="img-fluid" />
                  <h3>E-commerce Website</h3>
                  <p>Online shopping experience with seamless product browsing and secure transactions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section text-center py-5 bg-light">
          <div className="container">
            <h2>Contact Me</h2>
            <p>If you have any questions or want to get in touch, feel free to contact me through the form below or via email.</p>
            <a href="/contacts" className="btn btn-primary btn-lg">Contact Form</a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
