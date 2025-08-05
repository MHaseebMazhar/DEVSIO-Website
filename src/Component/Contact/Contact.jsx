import React from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="contact-wrapper" id="contact">
      <div className="contact-header">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">We’d love to hear from you – whether you have a question or are ready to grow your business.</p>
      </div>
      <div className="contact-card">
        <div className="contact-item">
          <FaUser className="contact-icon" />
          <span>Umer Shafique – Founder & CEO</span>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span>+92‑315‑5073543</span>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span>+92‑330‑9341181</span>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span>umer@devsioservices.com</span>
        </div>
        <div className="contact-item">
          <FaGlobe className="contact-icon" />
          <span><a href="https://www.devsioservices.com" target="_blank" rel="noreferrer">www.devsioservices.com</a></span>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span>Islamabad, Pakistan</span>
        </div>
      </div>
    </section>
  );
}
