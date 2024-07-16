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
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row products">
      {products.map((product) => (
        <div className="col-md-3" key={product.id}>
          <div className="product">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} className="img-fluid" alt={product.title} />
              <div className="info">
                <div className="title">{product.title}</div>
              </div>
            </Link>
            <button className="btn btn-primary" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
