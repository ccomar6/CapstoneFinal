import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We are a leading eCommerce platform providing the best products at the best prices.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/category" className="text-light">Categories</a></li>
              <li><a href="/cart" className="text-light">Cart</a></li>
              <li><a href="/login" className="text-light">Login</a></li>
              <li><a href="/register" className="text-light">Register</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              Email: support@ecommerce.com <br />
              Phone: +123 456 7890
            </p>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>&copy; 2024 Capstone eCommerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
