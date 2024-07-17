import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';
import { useCart } from '../context/CartContext.jsx';

const Navigation = () => {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useCart();

  return (
    <header className="p-4 bg-dark text-white shadow-sm">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <span className="display-4">Capstone eCommerce</span>
          </Link>
          <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
            <li className="nav-item">
              <Link className="nav-link text-white h5" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white h5" to="/category">Categories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white h5" to="/cart">Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})</Link>
            </li>
          </ul>
          <div className="text-end">
            {user ? (
              <button className="btn btn-outline-light btn-lg me-2" onClick={logout}>Logout</button>
            ) : (
              <>
                <Link className="btn btn-outline-light btn-lg me-2" to="/login">Login</Link>
                <Link className="btn btn-primary btn-lg" to="/register">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
