import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email) {
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('contactMessages')) || [];
    localStorage.setItem('contactMessages', JSON.stringify([...existing, formData]));
    setSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });
    setStep(1); // Go back to first step
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={step === 1 ? handleContinue : handleSubmit}>
        <h2>Contact Me</h2>
        {submitted && <p className="success-message">✅ Message submitted successfully!</p>}

        {step === 1 && (
          <>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <button type="submit">Continue to Message</button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit">Send Message</button>
          </>
        )}
      </form>
    </div>
  );
};

export default Contact;
