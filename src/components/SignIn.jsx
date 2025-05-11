import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css"; // Import CSS for styling

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook to navigate after login

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.text();
      if (response.ok) {
        alert("Login successful!");
        navigate("/dashboard"); // Redirect to Dashboard on success
      } else {
        alert(data || "Invalid email or password!");
      }
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed. Please check your backend connection.");
    }
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          
          <h1 className="project-title">Food Waste Management System</h1>
        </div>
        <div className="nav-right">
          <button className="nav-button" onClick={() => navigate("/")}>Home</button>
          <button className="nav-button" onClick={() => navigate("/helppage")}>Help</button>
          <button className="nav-button" onClick={() => navigate("/signup")}>Sign Up</button>
          
        </div>
      </nav>

      {/* Sign-in Form */}
      <div className="form-container1">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <table className="signin-table">
            <tbody>
              <tr>
                <td><label>Email:</label></td>
                <td>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td><label>Password:</label></td>
                <td>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button type="submit" className="submit-button">Sign In</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
