import React from 'react';
//import myphoto from '../Assets/myphoto.png';
import './About.css'; // Ensure you create this CSS file

const About = () => {
  return (
    <>
    <div className="about-container">
      <div className="left-container">
        <h1>About Me</h1>
        <img 
          //src={myphoto} 
          alt="About Me" 
          className="about-image" 
        />
      </div>
      <div className="right-container">
      <h1>About ME</h1>
        <p className='about-detail'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
        <div className="projects">
          <h2>Projects</h2>
          <ul>
            <li className="project-item">Project A</li>
            <li className="project-item">Project B</li>
            <li className="project-item">Project C</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="about-container">
      <div className="left-container">
        <h1>About Me</h1>
        <img 
          //src={myphoto} 
          alt="About Me" 
          className="about-image" 
        />
      </div>
      <div className="right-container">
        <h1>About ME</h1>
        <p className='about-detail'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
        <div className="projects">
          <h2>Projects</h2>
          <ul>
            <li className="project-item">Project A</li>
            <li className="project-item">Project B</li>
            <li className="project-item">Project C</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;