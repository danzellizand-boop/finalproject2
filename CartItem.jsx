import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";
import { Link, useNavigate } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      {/* Navbar */}
      <nav style={{ padding: "10px", background: "#e8f5e9" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>

      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #ccc",
                padding: "10px 0",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                width="80"
                height="80"
              />

              <div style={{ flex: 1, marginLeft: "10px" }}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Total: ${item.price * item.quantity}</p>
              </div>

              <div>
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                  -
                </button>
                <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>
                  +
                </button>
              </div>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                style={{ marginLeft: "20px" }}
              >
                Remove
              </button>
            </div>
          ))}

          <h2>Total Price: ${totalPrice}</h2>

          <button onClick={() => alert("Coming Soon")}>
            Checkout
          </button>

          <button onClick={() => navigate("/plants")} style={{ marginLeft: "10px" }}>
            Continue Shopping
          </button>
        </>
      )}
    </div>
  );
};

export default CartItem;
