import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  // ✅ Fetch cart items from backend
  const fetchCartItems = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/cart/all");
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  // ✅ Remove item from cart
  const handleRemoveFromCart = async (cartItemId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/cart/remove/${cartItemId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Item removed from cart!");
        fetchCartItems(); // Refresh cart items
      } else {
        alert("Failed to remove item");
      }
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  // ✅ Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // ✅ Handle Checkout
  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/cart/checkout", {
        method: "POST",
      });

      if (response.ok) {
        alert("Thank you for your purchase!");
        setCartItems([]); // Clear cart
      } else {
        alert("Checkout failed");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div className="cart-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          
          <h1 className="project-title">Food Waste Management System</h1>
        </div>
        <div className="nav-right">
          <button className="nav-button" onClick={() => navigate("/dashboard")}>Dashboard</button>
          <button className="nav-button" onClick={() => navigate("/logout")}>Logout</button>
          <button className="nav-button" onClick={() => navigate("/helppage")}>Help</button>
        </div>
      </nav>

      {/* Cart Table */}
      <div className="cart-table-container">
        <h2>Food Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Donar</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.productName}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button className="remove-button" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Total Price and Checkout Button */}
        {cartItems.length > 0 && (
          <div className="cart-summary">
            <h3>Total Quantity: {totalPrice.toFixed(0)}</h3>
            <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
