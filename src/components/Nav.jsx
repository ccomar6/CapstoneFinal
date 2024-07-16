import React from 'react';

const Navigation = () => {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container-fluid">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <span className="fs-4">Capstone eCommerce</span>
          </a>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/category">Categories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
