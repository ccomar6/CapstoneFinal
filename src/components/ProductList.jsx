// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../hooks/useCart';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row products">
      {products.map(product => (
        <div className="col-md-3 mb-4" key={product.id}>
          <div className="card h-100">
            <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price.toFixed(2)}</p>
              </div>
            </Link>
            <div className="card-footer">
              <button className="btn btn-primary" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
