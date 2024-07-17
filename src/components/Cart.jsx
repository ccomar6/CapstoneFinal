// src/components/Cart.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../hooks/useCart';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart();

  const handleQuantityChange = (productId, quantity) => {
    if (quantity > 0) {
      updateQuantity(productId, quantity);
    }
  };

  return (
    <div>
      <h1 className="cart-title">Your Cart</h1>
      <div className="row cart-items-container">
        {cart.map(item => (
          <div className="col-md-3" key={item.id}>
            <div className="cart-item">
              <img src={item.image} className="img-fluid" alt={item.title} />
              <div className="cart-item-info">
                <h5>{item.title}</h5>
                <p>${item.price.toFixed(2)}</p>
                <div className="quantity-control">
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="btn btn-danger remove-from-cart"
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
          <Link to="/checkout" className="btn btn-success">Proceed to Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;


