// components/pages/ContactUs.jsx
import React, { useState } from 'react';
import Header from '../Header';
import emailjs from 'emailjs-com';
import '../../styles/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [notification, setNotification] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Send email using EmailJS
      emailjs.send(
        'Pratham_emailService', // Replace with your EmailJS service ID
        'template_5mgfidj', // Replace with your EmailJS template ID
        formData,
        'QLYSVJM-sCsz4tcM7' // Replace with your EmailJS user ID
      )
      .then((result) => {
        setNotification('Mail has been sent and Kathan will reach out to you shortly');
        
        // Clear notification after 5 seconds
        setTimeout(() => {
          setNotification('');
        }, 5000);
        
        // Reset form
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: ''
        });
      }, (error) => {
        setNotification('Sorry, there was an error sending your message. Please try again.');
        setTimeout(() => {
          setNotification('');
        }, 5000);
      });
    }
  };

  return (
    <div className="flyer">
      <Header title="Contact Us" description="Feel free to reach out for collaborations, inquiries, or just to say hello!" />
      <div className="contact-content">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Let's discuss how we can transform your ideas into innovative digital solutions. 
               Whether you need a custom web application, API integration, or consultation on 
               your tech stack, I'm here to help bring your vision to life.</p>
            
            <div className="contact-detail">
              <span className="material-symbols-outlined">location_on</span>
              <div className="contact-detail-content">
                <h3>Address</h3>
                <p>15 rajpath society, p.t. college road, paldi, ahmedabad - 380007</p>
              </div>
            </div>
            
            <div className="contact-detail">
              <span className="material-symbols-outlined">mail</span>
              <div className="contact-detail-content">
                <h3>Email</h3>
                <p>patel.kathan555@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-detail">
              <span className="material-symbols-outlined">call</span>
              <div className="contact-detail-content">
                <h3>Phone</h3>
                <p>(+91) 7600410896</p>
              </div>
            </div>
            
            <div className="contact-detail">
              <span className="material-symbols-outlined">schedule</span>
              <div className="contact-detail-content">
                <h3>Availability</h3>
                <p>Monday - Friday: 9AM - 5PM</p>
              </div>
            </div>
            
            <div className="social-links">
              <h3>Follow Me</h3>
              <div className="social-icons">
                <a href="#" aria-label="LinkedIn">
                  <span className="material-symbols-outlined">person</span>
                </a>
                <a href="#" aria-label="GitHub">
                  <span className="material-symbols-outlined">code</span>
                </a>
                <a href="#" aria-label="Twitter">
                  <span className="material-symbols-outlined">chat</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Your full name"
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name (optional)"
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
                  className={errors.email ? 'error' : ''}
                  placeholder="your.email@example.com"
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number (optional)"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        {notification && (
          <div className="notification">
            {notification}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;