import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  const [priceRange, setPriceRange] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data); // Initially show all products
      });
  }, []);

  const filterProductsByPrice = () => {
    if (priceRange === 'all') {
      setFilteredProducts(products);
    } else {
      const [min, max] = priceRange.split('-').map(Number);
      const filtered = products.filter(product => {
        const productPrice = product.price;
        if (max) {
          return productPrice >= min && productPrice <= max;
        }
        return productPrice >= min;
      });
      setFilteredProducts(filtered);
    }
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleFilterClick = () => {
    filterProductsByPrice();
  };

  return (
    <div className="container-fluid">
      <div className="jumbotron text-center my-4">
        <h1 className="display-4">Welcome to Capstone eCommerce</h1>
        <p className="lead">Discover the latest products and best deals!</p>
        <hr className="my-4" />
        <p>Browse through our extensive collection and find what you need.</p>
      </div>

      <div className="filter-section mb-4 d-flex justify-content-center">
        <label htmlFor="price-range" className="mr-2">Price Range:</label>
        <select id="price-range" value={priceRange} onChange={handlePriceRangeChange} className="form-select w-auto mr-2">
          <option value="all">All</option>
          <option value="0-50">$0 - $50</option>
          <option value="51-100">$51 - $100</option>
          <option value="101-200">$101 - $200</option>
          <option value="201-500">$201 - $500</option>
          <option value="501+">$501+</option>
        </select>
        <button className="btn btn-primary" id="filter-button" onClick={handleFilterClick}>Filter</button>
      </div>

      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Home;

