// Home.jsx
import React from 'react';
import { DarkModeContext } from './Layout';
import Links from './Links';
import Footer from './Footer';

const Home = () => {
  return (
    <>
    <DarkModeContext.Consumer>
      {({ darkMode, toggleDarkMode }) => (
        <div className={`home ${darkMode ? 'dark-mode' : ''}`}>
          <Links />

          <section className="cover-section">
            <div className="mode-switch">
              <label>
                <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
                Dark Mode
              </label>
            </div>
            <div className="text-content">
              <h1>Alex</h1>
              <p>Welcome to my portfolio</p>
              <div className="info-bubble">
                <h2>About Me</h2>
                <p>
                  I'm a full-stack developer passionate about creating
                  innovative solutions. Proficient in both front-end and
                  back-end technologies. Specialized in building APIs to power
                  dynamic web applications.
                </p>
              </div>
            </div>
            <img
              src="home.jpeg"
              alt="cover image"
              className={`profile-image rotating ${darkMode ? 'dark-mode' : ''}`}
            />
          </section>
        </div>
      )}
    </DarkModeContext.Consumer>
    <Footer/>
    </>
  );
};

export default Home;
