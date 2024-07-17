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
        setFilteredProducts(data);
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
      <h1>Newest Products</h1>
      <div className="filter-section">
        <label htmlFor="price-range">Price Range:</label>
        <select id="price-range" value={priceRange} onChange={handlePriceRangeChange}>
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

