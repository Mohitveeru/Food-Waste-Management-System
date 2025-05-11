import React from "react";
import { useNavigate } from "react-router-dom";
import './AboutUs.css';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <h1 className="project-title">Food Waste Management System</h1>
        </div>
        <div className="nav-right">
          <button className="nav-button" onClick={() => navigate("/")}>Home</button>
          <button className="nav-button" onClick={() => navigate("/dashboard")}>Dashboard</button>
          <button className="nav-button" onClick={() => navigate("/helppage")}>Help</button>
          
        </div>
      </nav>

      {/* About Us Content */}
      <div className="aboutus-content-wrapper">
        <div className="aboutus-header">
          <h1>About Us</h1>
          <p>Tackling food waste, one meal at a time.</p>
        </div>

        <div className="aboutus-content">
          <section>
            <h2>Our Mission</h2>
            <p>
              The Food Waste Management System aims to bridge the gap between excess food providers
              and those in need. We connect restaurants, households, and organizations with food banks
              and communities to reduce food waste and hunger.
            </p>
          </section>

          <section>
            <h2>What We Do</h2>
            <ul>
              <li>Facilitate food donations and requests</li>
              <li>Track donations in real time</li>
              <li>Promote community awareness</li>
              <li>Support sustainability efforts</li>
            </ul>
          </section>

          <section>
            <h2>Who We Are</h2>
            <p>
              We’re a group of developers and changemakers working toward a zero-waste food ecosystem.
              Join us to build a sustainable future!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
