import React from 'react';
import './Home.css';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div>
      {/* ✅ Hero Section */}
      <section className="hero">
        <div className="hero-background">
          
        </div>
      </section>

      {/* ✅ Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* ✅ Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
