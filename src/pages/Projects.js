import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFilter, FaCode, FaMobile, FaDesktop, FaArrowRight } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Image to Image Translation Using Pix2Pix (CGAN)",
      description: "Objective: To develop an image-to-image translation model using a Conditional Generative Adversarial Network (Pix2Pix). Pix2Pix provides a robust solution by generating high-quality, context-aware images through adversarial learning and can be used in various fields like sketch-to-photo conversion, satellite-to-map translation, etc.",
      image: "https://via.placeholder.com/400x250/ff6b35/ffffff?text=Pix2Pix",
      technologies: ["PyTorch", "Tensorflow", "NumPy", "OpenCV", "Matplotlib", "Pandas"],
      category: "ai",
      github: "https://github.com/dashpratyush277/Image-To-Image-Translation-Using-Pix2Pix",
      live: "https://github.com/dashpratyush277/Image-To-Image-Translation-Using-Pix2Pix",
      featured: true
    },
    {
      id: 2,
      title: "Text Generation Using GPT-2",
      description: "Objective: To develop a text generation model using GPT-2, leveraging Python to train a model to produce contextually relevant and coherent text based on given prompts. It involves predicting the next word in the sequence to generate meaningful text.",
      image: "https://via.placeholder.com/400x250/ff6b35/ffffff?text=GPT-2",
      technologies: ["PyTorch", "PyTorch-Geometric", "StellarGraph", "Scikit-learn", "Numpy", "Pip packaging"],
      category: "ai",
      github: "https://github.com/dashpratyush277/Text-Generation-Using-GPT-2",
      live: "https://github.com/dashpratyush277/Text-Generation-Using-GPT-2",
      featured: true
    },
    {
      id: 3,
      title: "Client Server Dictionary Generation System",
      description: "Objective: To develop a networked dictionary system using Java socket programming for real-time word management. Allows users to add, delete, and retrieve word definitions over a TCP/IP connection.",
      image: "https://via.placeholder.com/400x250/ff6b35/ffffff?text=Dictionary+System",
      technologies: ["Java", "Java- Socket Programming", "TCP-IP Connection"],
      category: "web",
      github: "https://github.com/dashpratyush277/Client-Server-Dictionary-Response-System",
      live: "https://github.com/dashpratyush277/Client-Server-Dictionary-Response-System",
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: <FaCode /> },
    { id: 'web', label: 'Web Apps', icon: <FaDesktop /> },
    { id: 'ai', label: 'AI/ML', icon: <FaCode /> }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects">
      <div className="container">
        <h1 className="section-title">Projects</h1>
        
        {/* Filter Section */}
        <section className="filter-section">
          <div className="filter-container">
            <h3 className="filter-title">
              <FaFilter /> Filter Projects
            </h3>
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                  onClick={() => setFilter(category.id)}
                >
                  {category.icon} {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        {filter === 'all' && (
          <section className="featured-section">
            <h2 className="subsection-title">Featured Projects</h2>
            <div className="featured-grid">
              {projects.filter(project => project.featured).map((project) => (
                <div key={project.id} className="featured-card">
                  {/* Removed project-image for featured section */}
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaGithub />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* All Projects Grid */}
        <section className="projects-grid-section">
          <h2 className="subsection-title">
            {filter === 'all' ? 'All Projects' : `${categories.find(c => c.id === filter)?.label}`}
          </h2>
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                {/* Show image only for AI/ML filter */}
                {filter === 'ai' && project.category === 'ai' && (
                  <div className="project-image" style={{ width: '100%', marginBottom: '1.2rem' }}>
                    <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: '12px' }} />
                  </div>
                )}
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Stats */}
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>{projects.length}</h3>
              <p>Total Projects</p>
            </div>
            <div className="stat-card">
              <h3>{projects.filter(p => p.featured).length}</h3>
              <p>Featured Projects</p>
            </div>
            <div className="stat-card">
              <h3>{projects.filter(p => p.category === 'web').length}</h3>
              <p>Web Applications</p>
            </div>
            <div className="stat-card">
              <h3>{projects.filter(p => p.category === 'ai').length}</h3>
              <p>AI/ML</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Let's Build Something Great Together!</h2>
              <p>
                Whether you have a challenging idea, a data-driven project, or just want to collaborate on something innovative, I'm always excited to connect with like-minded people. Let's turn your vision into reality and make an impact together.
              </p>
              <a href="/contact" className="btn">
                Start Your Project <FaArrowRight />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects; 