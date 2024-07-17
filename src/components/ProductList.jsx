import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductList = ({ products }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart'); // Navigate to the cart page
  };

  return (
    <div className="container">
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm product-card">
              <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                <img src={product.image} className="card-img-top product-image" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price.toFixed(2)}</p>
                </div>
              </Link>
              <div className="card-footer bg-transparent border-top-0">
                <button className="btn btn-primary w-100" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;


