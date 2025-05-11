import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any stored session data (if using localStorage or sessionStorage)
    localStorage.removeItem("user"); // Example if you store user data
    sessionStorage.removeItem("user");

    // Redirect to Home Page after logout
    navigate("/");
  }, [navigate]);

  return null; // No UI needed since we are just redirecting
};

export default Logout;
