// Links.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const Links = () => {
  return (
    <div className="links-container">
      <ul className="links-list">
        <li className="link-item"><Link to="/">HOME</Link></li>
        <li className="link-item"><Link to="/about">ABOUT</Link></li>
        <li className="link-item"><Link to="/services">SERVICES</Link></li>
        <li className="link-item"><Link to="/blogs">BLOGS</Link></li>
        <li className="link-item"><Link to="/contacts">CONTACTS</Link></li>
      </ul>
    </div>
  );
};

export default Links;
