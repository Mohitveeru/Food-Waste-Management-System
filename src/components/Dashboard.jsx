import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
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
          <button className="nav-button" onClick={() => navigate("/cart")}>Cart</button>
          <button className="nav-button" onClick={() => navigate("/helppage")}>Help</button>
          <button className="nav-button" onClick={() => navigate("/logout")}>Logout</button>
          
          
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="dashboard-container">
        <h2>Welcome to Food Waste Management System</h2>
        <p>
          This is the central hub where you can manage Food Availability settings.
        </p>

        <div className="dashboard-cards">
          <div className="card" onClick={() => navigate("/manage-products")}>
            <h3>Manage Food</h3>
            <p>Add, edit, and delete Food Availability from your inventory.</p>
          </div>

          <div className="card" onClick={() => navigate("/usermanagement")}>
            <h3> User Management</h3>
            <p>Manage user roles and permissions for the system.</p>
          </div>

          <div className="card" onClick={() => navigate("/analytics")}>
            <h3> Analytics</h3>
            <p>View reports and insights about product sales.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
