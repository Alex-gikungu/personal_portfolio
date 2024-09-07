import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaWhatsapp, FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="footer-icons mb-3">
              <a href="https://www.facebook.com/aleko.aleki.3?mibextid=pwzcmfqlRWHhawsM" target="_blank" rel="noopener noreferrer" className="mx-2 text-light">
                <FaFacebook size={24} />
              </a>
              <a href="https://wa.me/+254112043557" target="_blank" rel="noopener noreferrer" className="mx-2 text-light">
                <FaWhatsapp size={24} />
              </a>
              <a href="mailto:alexigikungu.012@gmail.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-light">
                <FaEnvelope size={24} />
              </a>
              <a href="https://github.com/Alex-gikungu" target="_blank" rel="noopener noreferrer" className="mx-2 text-light">
                <FaGithub size={24} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="mx-2 text-light">
                <FaTwitter size={24} />
              </a>
            </div>
            <div className="footer-text">
              <p>&copy; 2024 AI Web Development. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
