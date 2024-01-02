// About.jsx
import React from 'react';
import Links from './Links';
import Footer from './Footer';
// import './About.css'; 

const skills = [
  { name: 'HTML', percentage: 95 },
  { name: 'CSS', percentage: 90 },
  { name: 'Bootstrap', percentage: 80 },
  { name: 'JavaScript', percentage: 90 },
  { name: 'React', percentage: 85 },
  { name: 'Python', percentage: 80 },
  { name: 'Flask', percentage: 80 },
  { name: 'C', percentage: 70 },
];

const About = () => {
  return (
    <>
      <Links />
      <div className="about-container">
        {/* <img src='edit2.jpg' alt='cover image'></img> */}
        <div className="about">
          <h1>About Me</h1>
          <p>
            Hello, I'm Alex Gikungu, a software engineer with more than one year of experience.
            I graduated from Moringa School and specialize in both front-end and back-end development,
            including API generation.
          </p>
        </div>

        <div className="about">
          <h2>Skills</h2>
          <div className="skill-grid">
{skills.map((skill) => (
  <div key={skill.name} className="skill-item">
    <img src={`${skill.name.toLowerCase()}.png`} alt={`${skill.name} icon`} />
    <div className="progress-bar">
      <div style={{ width: `${skill.percentage}%` }}></div>
    </div>
    <span>{skill.name}</span>
  </div>
))}

          </div>
        </div>

        <div className="about">
          <h2>Languages Learnt</h2>
          <p>
            I've learned and worked with a variety of languages, including HTML, CSS, Bootstrap, C, JavaScript,
            React, Python, and Flask.
          </p>
        </div>

        <div className="about">
          <h2>Hobbies</h2>
          <p>
            In my free time, I enjoy playing football, contributing to open-source projects, and reading magazines.
          </p>
        </div>

        <div className="about">
          <h2>Soft Skills</h2>
          <ul>
            <li>Problem solving</li>
            <li>Team Collaboration</li>
            <li>Creativity</li>
            {/* Add more soft skills as needed */}
          </ul>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
