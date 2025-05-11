import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          
          <h1 className="project-title">Food Waste Management System</h1>
        </div>
        <div className="nav-right">
          
          <button className="nav-button" onClick={() => navigate("/dashboard")}>Dashboard</button>
          <button className="nav-button" onClick={() => navigate("/aboutus")}>About Us</button>
          <button className="nav-button" onClick={() => navigate("/helppage")}>Help</button>
          <button className="nav-button" onClick={() => navigate("/signin")}>Sign In</button>
          <button className="nav-button" onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="content">
        <h2>Welcome to Food Waste Management System</h2>
        <p>
          Our system connects food providers and recipients to reduce food waste.
          Sign up to donate or receive food, monitor stats, and be part of the change.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
