import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight, FaCode, FaPalette, FaRocket } from 'react-icons/fa';
import './Home.css';
import profilePhoto from '../assets/WhatsApp Image 2025-07-14 at 18.27.53_733f4961.jpg';

const Home = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'CSS/SCSS', level: 90 },
    { name: 'Git', level: 85 }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span className="home-name-animated">Pratyush Dash</span>
              </h1>
              <p className="hero-description">
                I'm a Computer Science student with a strong passion for Machine Learning and data-driven problem solving. I enjoy building intelligent systems that turn complex data into meaningful insights.
              </p>
              <div className="hero-buttons">
                <Link to="/projects" className="btn">
                  View My Work
                </Link>
                <a href="https://drive.google.com/file/d/1jRCRkamfMnHrlBofKcYFqNXAgr79CDMT/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-resume">
                  Resume
                </a>
                <Link to="/contact" className="btn btn-outline">
                  Get In Touch
                </Link>
              </div>
              <div className="social-links">
                <a href="https://github.com/dashpratyush277" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/pratyush-dash-475396229" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-card">
                <div className="profile-avatar">
                  <img src={profilePhoto} alt="Pratyush Dash" className="profile-photo" />
                </div>
                <div className="floating-card">
                  <FaCode />
                  <span>React Developer</span>
                </div>
                <div className="floating-card">
                  <FaRocket />
                  <span>Problem Solver</span>
                </div>
                <div className="floating-card">
                  <FaPalette />
                  <span>Machine Learning Engineer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-highlight">Let's Create Something Amazing</div>
            <h2>Ready to Transform Your Ideas Into Reality?</h2>
            <p>I'm passionate about building intelligent solutions that solve real-world problems. Whether you need a machine learning model, a data-driven application, or technical consultation - I'm here to help turn your vision into success.</p>
            
            <div className="cta-features">
              <div className="cta-feature">
                <div className="feature-icon">
                  <FaRocket />
                </div>
                <div className="feature-text">
                  <h3>Fast Delivery</h3>
                  <p>Quick turnaround with quality results</p>
                </div>
              </div>
              <div className="cta-feature">
                <div className="feature-icon">
                  <FaCode />
                </div>
                <div className="feature-text">
                  <h3>Clean Code</h3>
                  <p>Well-structured, maintainable solutions</p>
                </div>
              </div>
            </div>
            
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-large">
                Start a Project <FaArrowRight />
              </Link>
              <Link to="/projects" className="btn btn-outline btn-large">
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 