import React from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div className="container-fluid">
      <h1>Newest Products</h1>
      <div className="filter-section">
        <label htmlFor="price-range">Price Range:</label>
        <select id="price-range">
          <option value="all">All</option>
          <option value="0-50">$0 - $50</option>
          <option value="51-100">$51 - $100</option>
          <option value="101-200">$101 - $200</option>
          <option value="201-500">$201 - $500</option>
          <option value="501+">$501+</option>
        </select>
        <button className="btn btn-primary" id="filter-button">Filter</button>
      </div>
      <ProductList />
    </div>
  );
};

export default Home;
