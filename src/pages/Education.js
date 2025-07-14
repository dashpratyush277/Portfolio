import React from 'react';
import { FaGraduationCap, FaCertificate, FaCalendarAlt, FaMapMarkerAlt, FaStar, FaCogs, FaUsers, FaLightbulb } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "Institute of Technical Education And Research, Siksha ‘O’ Anusandhan",
      location: "Bhubaneswar, Odisha",
      duration: "2020 - Present",
      cgpa: "9.34/10.0",
      description: "Pursuing B.Tech in Computer Science. Cumulative CGPA: 9.34/10.0.",
      courses: []
    },
    {
      id: 2,
      degree: "Senior Secondary Certificate (12th) - Science",
      institution: "DAV Public School, Unit-8",
      location: "Bhubaneswar, Odisha",
      duration: "2018 - 2020",
      percentage: "90%",
      description: "Completed 12th grade with a focus on Science. Cumulative Percentage: 90%.",
      courses: []
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Google AI Essentials",
      issuer: "Coursera",
      date: "2024",
      credential: "",
      description: [
        "Gained foundational knowledge about Artificial Intelligence.",
        "Developed hands-on experience with AI tools and techniques for real-world problem-solving.",
        "Enhanced skills in data analysis, model building, and ethical AI implementation."
      ]
    },
    {
      id: 2,
      name: "Machine Learning",
      issuer: "Udemy",
      date: "2023",
      credential: "",
      description: [
        "Gained in-depth knowledge of machine learning concepts and techniques using Python.",
        "Worked on hands-on projects to implement AI solutions in real-world scenarios.",
        "Developed practical skills in data processing, model training, and evaluation."
      ]
    },
    {
      id: 3,
      name: "Google Cybersecurity Certificate",
      issuer: "Coursera",
      date: "2023",
      credential: "",
      description: [
        "Trained in cybersecurity principles, focusing on key protection strategies and tools.",
        "Developed skills in threat analysis, cryptography, and network security to safeguard digital systems."
      ]
    }
  ];

  return (
    <div className="education hive-bg">
      <div className="container">
        <h1 className="section-title">Education</h1>
        
        {/* Academic Background */}
        <section className="education-section">
          <h2 className="subsection-title">
            <FaGraduationCap /> Academic Background
          </h2>
          <div className="education-timeline">
            {education.map((item) => (
              <div key={item.id} className="education-item">
                <div className="education-card">
                  <div className="education-header">
                    <h3>{item.degree}</h3>
                    {item.cgpa && <span className="gpa">CGPA: {item.cgpa}</span>}
                    {item.percentage && <span className="gpa">Percentage: {item.percentage}</span>}
                  </div>
                  <div className="education-details">
                    <div className="detail-item">
                      <FaMapMarkerAlt />
                      <span>{item.institution}</span>
                    </div>
                    <div className="detail-item">
                      <FaMapMarkerAlt />
                      <span>{item.location}</span>
                    </div>
                    <div className="detail-item">
                      <FaCalendarAlt />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                  <p className="education-description">{item.description}</p>
                  <div className="courses">
                    <h4>Key Courses:</h4>
                    <div className="course-tags">
                      {item.courses.map((course, index) => (
                        <span key={index} className="course-tag">{course}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="certifications-section">
          <h2 className="subsection-title">
            <FaCertificate /> Certifications
          </h2>
          <div className="certifications-grid">
            {certifications.map((cert) => (
              <div key={cert.id} className="certification-card">
                <div className="cert-header">
                  <h3>{cert.name}</h3>
                  {cert.credential && <span className="credential-id">{cert.credential}</span>}
                </div>
                <div className="cert-details">
                  <p className="issuer">{cert.issuer}</p>
                  <p className="date">{cert.date}</p>
                </div>
                {Array.isArray(cert.description) ? (
                  <ul className="cert-description">
                    {cert.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="cert-description">{cert.description}</p>
                )}
                <div className="cert-badge">
                  <FaCertificate />
                  <span>Certified</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Achievements */}
        <section className="achievements-section">
          <h2 className="subsection-title">Skills & Achievements</h2>
          <div className="hive-achievements-grid">
            <div className="hive-achievement-card">
              <FaCogs className="hive-icon" />
              <h3>Technical Skills</h3>
              <ul>
                <li>Python, Java, C++</li>
                <li>Machine Learning, Data Science</li>
                <li>Web Development (React, Node.js)</li>
              </ul>
            </div>
            <div className="hive-achievement-card">
              <FaUsers className="hive-icon" />
              <h3>Leadership & Teamwork</h3>
              <ul>
                <li>Project Team Lead</li>
                <li>Hackathon Participant</li>
              </ul>
            </div>
            <div className="hive-achievement-card">
              <FaLightbulb className="hive-icon" />
              <h3>Innovation</h3>
              <ul>
                <li>Capstone Project on AI</li>
                <li>Open Source Contributor</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className="hive-bg-effect"></div>
    </div>
  );
};

export default Education; 