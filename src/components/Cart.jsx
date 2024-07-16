// src/components/Cart.jsx
import React from 'react';
import useCart from '../hooks/useCart';

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart, getTotal } = useCart();

  const handleCheckout = () => {
    alert('Checkout functionality not implemented yet.');
    // Implement checkout process, e.g., redirect to a checkout page
  };

  return (
    <div>
      <h1 className="cart-title">Your Cart</h1>
      <div className="row cart-items-container">
        {cart.map((item) => (
          <div className="col-md-3" key={item.id}>
            <div className="cart-item">
              <img src={item.image} className="img-fluid" alt={item.title} />
              <div className="cart-item-info">
                <h5>{item.title}</h5>
                <p>${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(item)}
                >
                  Add One More
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-md-12 text-right">
          <h3 id="cart-total">Total: ${getTotal().toFixed(2)}</h3>
          <button className="btn btn-secondary" onClick={clearCart}>
            Clear Cart
          </button>
          <button className="btn btn-success" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
