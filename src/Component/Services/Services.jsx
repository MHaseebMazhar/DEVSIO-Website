import React from 'react';
import './Services.css';
import { FaLaptopCode, FaBullhorn, FaChartLine, FaSearch, FaFileInvoice, FaPaintBrush } from 'react-icons/fa';

const services = [
  { title: "Digital Marketing", icon: <FaChartLine /> },
  { title: "Search Engine Optimization (SEO)", icon: <FaSearch /> },
  { title: "Website Development", icon: <FaLaptopCode /> },
  { title: "Graphic Designing", icon: <FaPaintBrush /> },
  { title: "Video Advertisement", icon: <FaBullhorn /> },
  { title: "Accounting Software", icon: <FaFileInvoice /> },
];

export default function Services() {
  return (
    <div className="services-container">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">We provide innovative solutions to elevate your business</p>
      
      <div className="services-group">
        {services.map((item, index) => (
          <React.Fragment key={index}>
            <div className="service-card">
              <div className="service-icon">{item.icon}</div>
              <h3 className="service-title">{item.title}</h3>
            </div>
           
          </React.Fragment>
        ))}
      </div>

      <div className="cta-section">
        <h2>Ready to Elevate Your Business?</h2>
        <p>Claim Your Free Consultation Today</p>
      </div>
    </div>
  );
}
