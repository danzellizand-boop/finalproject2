import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const productsData = [
  {
    category: "Indoor Plants",
    items: [
      { id: 1, name: "Monstera", price: 25, image: "https://via.placeholder.com/150" },
      { id: 2, name: "Snake Plant", price: 18, image: "https://via.placeholder.com/150" },
      { id: 3, name: "Peace Lily", price: 20, image: "https://via.placeholder.com/150" },
      { id: 4, name: "Pothos", price: 15, image: "https://via.placeholder.com/150" },
      { id: 5, name: "ZZ Plant", price: 22, image: "https://via.placeholder.com/150" },
      { id: 6, name: "Rubber Plant", price: 30, image: "https://via.placeholder.com/150" },
    ],
  },
  {
    category: "Succulents",
    items: [
      { id: 7, name: "Aloe Vera", price: 10, image: "https://via.placeholder.com/150" },
      { id: 8, name: "Echeveria", price: 12, image: "https://via.placeholder.com/150" },
      { id: 9, name: "Haworthia", price: 11, image: "https://via.placeholder.com/150" },
      { id: 10, name: "Jade Plant", price: 14, image: "https://via.placeholder.com/150" },
      { id: 11, name: "Cactus", price: 9, image: "https://via.placeholder.com/150" },
      { id: 12, name: "Sedum", price: 13, image: "https://via.placeholder.com/150" },
    ],
  },
  {
    category: "Outdoor Plants",
    items: [
      { id: 13, name: "Rose", price: 20, image: "https://via.placeholder.com/150" },
      { id: 14, name: "Lavender", price: 18, image: "https://via.placeholder.com/150" },
      { id: 15, name: "Hibiscus", price: 22, image: "https://via.placeholder.com/150" },
      { id: 16, name: "Bougainvillea", price: 25, image: "https://via.placeholder.com/150" },
      { id: 17, name: "Jasmine", price: 19, image: "https://via.placeholder.com/150" },
      { id: 18, name: "Sunflower", price: 15, image: "https://via.placeholder.com/150" },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [disabledButtons, setDisabledButtons] = useState([]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setDisabledButtons([...disabledButtons, product.id]);
  };

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div>
      {/* Navbar */}
      <nav style={{ padding: "10px", background: "#e8f5e9" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart ({totalItems})</Link>
      </nav>

      <h1>Our Plants</h1>

      {productsData.map((category) => (
        <div key={category.category}>
          <h2>{category.category}</h2>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {category.items.map((product) => (
              <div
                key={product.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  width: "150px",
                  textAlign: "center",
                }}
              >
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p>${product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={disabledButtons.includes(product.id)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
