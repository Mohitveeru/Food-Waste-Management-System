import React from "react";
import { useNavigate } from "react-router-dom";
import "./HelpPage.css";

const HelpPage = () => {
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
          
        </div>
      </nav>

      {/* Help Content */}
      <div className="help-content-wrapper">
        <div className="help-header">
          <h1>Need Help?</h1>
          <p>We're here to assist you with using our system.</p>
        </div>

        <div className="help-section">
          <h2>1. How to Donate Food?</h2>
          <p>
            After signing in, navigate to the “Donate” section in your dashboard. Fill in the required details such as food type, quantity, pickup time, and location.
          </p>
        </div>

        <div className="help-section">
          <h2>2. How to Receive Food?</h2>
          <p>
            If you’re a registered user, go to the “Receive” tab. You can browse available food items and request a pickup.
          </p>
        </div>

        <div className="help-section">
          <h2>3. Account Issues</h2>
          <p>
            For login or password issues, please use the "Forgot Password" link on the sign-in page or contact support using the details below.
          </p>
        </div>

        <div className="help-section">
          <h2>4. Contact Support</h2>
          <ul>
            <li>Email: support@foodwastemgmt.org</li>
            <li>Phone: +91-9876543210</li>
            <li>Live Chat: Available 10am–6pm IST</li>
          </ul>
        </div>

        <div className="help-section">
          <h2>5. Frequently Asked Questions (FAQs)</h2>
          <ul>
            <li><strong>Is this service free?</strong> Yes, both donors and receivers can use this platform free of cost.</li>
            <li><strong>Can NGOs use this?</strong> Absolutely, NGOs can register and coordinate bulk donations.</li>
            <li><strong>How are food safety standards ensured?</strong> We follow FSSAI guidelines and recommend donating only fresh and safe food.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
