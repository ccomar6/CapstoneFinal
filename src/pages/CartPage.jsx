import React from 'react';
import useCart from '../hooks/useCart';

const CartPage = () => {
  const { cart, removeFromCart, clearCart, updateQuantity, getTotal } = useCart();

  const handleQuantityChange = (productId, quantity) => {
    updateQuantity(productId, quantity);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="alert alert-info" role="alert">
          Your cart is empty. <a href="/" className="alert-link">Start shopping!</a>
        </div>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} alt={item.title} style={{ width: '50px', marginRight: '10px' }} />
                      {item.title}
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        min="1"
                      />
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <button className="btn btn-outline-danger" onClick={clearCart}>
              Clear Cart
            </button>
            <h3>Total: ${getTotal().toFixed(2)}</h3>
            <button className="btn btn-success" onClick={() => {
              alert('Checkout functionality not implemented yet.');
              clearCart();
            }}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
