import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt, FaUserGraduate } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  return (
    <div className="hive-bg">
      <div className="experience">
        <div className="container">
          <h1 className="section-title">Experience</h1>

          {/* Internship Section */}
          <section className="internship-section">
            <h2 className="subsection-title">
              <FaUserGraduate /> Internship
            </h2>
            <div className="internship-card">
              <div className="internship-header">
                <div>
                  <h3>PWC Cloud And Digital Launchpad</h3>
                  <div style={{paddingLeft: '2px', color: 'var(--text-secondary)', fontWeight: 500, fontSize: '1rem', marginTop: '2px'}}>Apprentice</div>
                </div>
                <div className="internship-meta">
                  <span className="internship-location">Bhubaneswar, Odisha, India</span>
                  <span className="internship-duration">Feb 2024 – Jun 2024</span>
                </div>
              </div>
              <ul className="internship-details">
                <li>Completed in-depth training on Database Management Systems, Web Designing, and Cloud Fundamentals, gaining practical expertise.</li>
                <li>Acquired hands-on skills in Java, MySQL, Responsive Web Design, and DevOps for building scalable applications.</li>
              </ul>
            </div>
          </section>

          {/* Skills Summary */}
          <section className="skills-summary">
            <h2 className="subsection-title">Skills Summary</h2>
            <div className="skills-categories">
              <div className="skill-category">
                <h3>Machine Learning</h3>
                <div className="skill-list">
                  <span>Supervised Learning</span>
                  <span>Unsupervised Learning</span>
                  <span>Neural Networks</span>
                  <span>Scikit-learn</span>
                  <span>Regression & Classification</span>
                  <span>Model Evaluation</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Frontend Development</h3>
                <div className="skill-list">
                  <span>React.js</span>
                  <span>TypeScript</span>
                  <span>HTML5/CSS3</span>
                  <span>JavaScript (ES6+)</span>
                  <span>SCSS/Sass</span>
                  <span>Responsive Design</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Backend Development</h3>
                <div className="skill-list">
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>Python</span>
                  <span>RESTful APIs</span>
                  <span>GraphQL</span>
                  <span>Microservices</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Experience; 