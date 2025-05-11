import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Import cart icon
import "./Product.css";

const ManageProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState({
    name: "",
    image: "",
    price: "",
  });
  const [selectedProduct, setSelectedProduct] = useState(null); // For Show Product Details
  const [cartCount, setCartCount] = useState(0); // Cart count state

  useEffect(() => {
    fetchProducts();
    fetchCartCount(); // Fetch cart count on page load
  }, []);

  //  Fetch all products
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/products/all");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  //  Fetch Cart Count
  const fetchCartCount = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/cart/all");
      const data = await response.json();
      setCartCount(data.length); // Update cart count
    } catch (error) {
      console.error("Error fetching cart count:", error);
    }
  };

  //  Handle Input Change
  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  //  Add a Product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        alert("Product added successfully!");
        fetchProducts();
        setProductData({ name: "", image: "", price: "" });
      } else {
        alert("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  //  Delete a Product
  const handleDeleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/products/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Product deleted successfully!");
        fetchProducts();
      } else {
        alert("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  //  Update a Product
  const handleUpdateProduct = async (id) => {
    const updatedName = prompt("Enter new product name:");
    const updatedPrice = prompt("Enter new price:");
    const updatedImage = prompt("Enter new image URL:");

    if (!updatedName || !updatedPrice || !updatedImage) return;

    try {
      const response = await fetch(`http://localhost:8080/api/products/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: updatedName,
          price: parseFloat(updatedPrice),
          image: updatedImage,
        }),
      });

      if (response.ok) {
        alert("Product updated successfully!");
        fetchProducts();
      } else {
        alert("Failed to update product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Show Product Details
  const handleShowProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/products/${id}`);
      const data = await response.json();
      setSelectedProduct(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  //  Add to Cart
  const handleAddToCart = async (productId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/cart/add/${productId}/1`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        alert("Product added to cart successfully!");
        fetchCartCount(); // Update cart count after adding item
      } else {
        alert("Failed to add product to cart.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
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
          <button className="nav-button" onClick={() => navigate("/dashboard")}>Dashboard</button>
          <button className="nav-button" onClick={() => navigate("/helppage")}>Help</button>
          <button className="nav-button" onClick={() => navigate("/logout")}>Logout</button>
          <div className="cart-icon" onClick={() => navigate("/cart")}>
            <FaShoppingCart size={24} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </div>
      </nav>

      {/* Show Selected Product Details */}
      {selectedProduct ? (
        <div className="product-details">
          <h2>Food Item Details</h2>
          <p><strong>Name:</strong> {selectedProduct.name}</p>
          <p><strong>Quantity:</strong> {selectedProduct.price}</p>
          <img src={selectedProduct.image} alt={selectedProduct.name} className="product-image-large" />
          <div className="product-actions">
            <button className="add-to-cart-button" onClick={() => handleAddToCart(selectedProduct.id)}>🛒 Add to Cart</button>
            <button className="close-button" onClick={() => setSelectedProduct(null)}>Close</button>
          </div>
        </div>
      ) : (
        // Only show manage products section when no product is selected
        <div className="manage-products-container">
          <h2>Manage Food</h2>

          {/* Add Product Form */}
          <form onSubmit={handleAddProduct} className="add-product-form">
            <input type="text" name="name" placeholder="Food Name" value={productData.name} onChange={handleChange} required />
            <input type="number" name="price" placeholder="Quantity" value={productData.price} onChange={handleChange} required />
            <input type="text" name="image" placeholder="Image URL" value={productData.image} onChange={handleChange} required />
            <button type="submit" className="add-button">Add New Food Item</button>
          </form>

          {/* Product List */}
          <div className="product-list">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button className="edit-button" onClick={() => handleUpdateProduct(product.id)}>Edit</button>
                <button className="delete-button" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                <button className="show-button" onClick={() => handleShowProduct(product.id)}>Show</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
