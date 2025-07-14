import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('LyTfp3tJ9vSpRxMnb');
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Pratyush' // Add recipient name
      };

      console.log('Sending email with params:', templateParams);

      const result = await emailjs.send(
        'service_ev7y6gk', // Gmail service ID from EmailJS dashboard
        'template_k6bdwl4',
        templateParams,
        'LyTfp3tJ9vSpRxMnb'
      );

      console.log('Email sent successfully:', result);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "dash.pratyush27@gmail.com",
      link: "mailto:dash.pratyush27@gmail.com"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 9348338135",
      link: "tel:+919348338135"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Bhubaneswar India",
      link: null
    }
  ];

  return (
    <div className="contact">
      <div className="container">
        <h1 className="section-title">Get In Touch</h1>
        
        <div className="contact-content">
          {/* Contact Information */}
          <section className="contact-info-section">
            <h2 className="subsection-title">Contact Information</h2>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-details">
                    <h3>{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="contact-link">
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Form */}
          <section className="contact-form-section">
            <h2 className="subsection-title">Send Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="success-message" style={{ background: '#f8d7da', color: '#721c24', border: '1px solid #f5c6cb' }}>
                  Sorry, there was an error sending your message. Please try again later.
                </div>
              )}
            </form>
          </section>
        </div>

        {/* Availability Section */}
        <section className="availability-section">
          <h2 className="subsection-title">Availability</h2>
          <div className="availability-grid">
            <div className="availability-card">
              <h3>Current Status</h3>
              <div className="status-indicator available">
                <span className="status-dot"></span>
                Available for new projects
              </div>
              <p>I'm currently accepting new freelance projects and full-time opportunities.</p>
            </div>
            <div className="availability-card">
              <h3>Preferred Contact</h3>
              <div className="preferred-contact">
                <span>Email</span>
                <a href="mailto:dash.pratyush27@gmail.com" className="contact-link">dash.pratyush27@gmail.com</a>
                <p>For project inquiries and collaborations, email is the best way to reach me.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact; 