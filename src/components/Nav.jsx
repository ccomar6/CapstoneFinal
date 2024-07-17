// src/components/Nav.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';
import { useCart } from '../context/CartContext.jsx'; // Use the CartContext

const Navigation = () => {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useCart();

  return (
    <header className="p-3 bg-dark text-white">
      <div className="container-fluid">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start py-3 mb-4 border-bottom">
          <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span className="fs-4">Capstone eCommerce</span>
          </Link>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/category">Categories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/cart">Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})</Link>
            </li>
          </ul>
          {user ? (
            <button className="btn btn-danger" onClick={logout}>Logout</button>
          ) : (
            <div>
              <Link className="btn btn-primary me-2" to="/login">Login</Link>
              <Link className="btn btn-secondary" to="/register">Register</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
