import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ViewAnalytics.css";

const ViewAnalytics = () => {
  const [analytics, setAnalytics] = useState({
    totalProducts: 0,
    totalUsers: 0,
    totalOrders: 0
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/analytics/data");
      const data = await response.json();
      setAnalytics(data);
    } catch (error) {
      console.error("Error fetching analytics:", error);
    }
  };

  return (
    <div className="analytics-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <h1 className="project-title">Food Waste Management System</h1>
        </div>
        <div className="nav-right">
          <button className="nav-button" onClick={() => navigate("/dashboard")}>Dashboard</button>
          <button className="nav-button" onClick={() => navigate("/aboutus")}>About Us</button>
          <button className="nav-button" onClick={() => navigate("/helppage")}>Help</button>
          
        </div>
      </nav>

      {/* Main Content */}
      <h2>Dashboard Analytics</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total Products</td>
            <td>{analytics.totalProducts}</td>
          </tr>
          <tr>
            <td>Total Users</td>
            <td>{analytics.totalUsers}</td>
          </tr>
          <tr>
            <td>Total Orders</td>
            <td>{analytics.totalOrders}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewAnalytics;
