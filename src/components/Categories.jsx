import React, { useState, useEffect } from 'react';

const Categories = () => {
  const apiURL = 'https://fakestoreapi.com/';
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchSingleCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const fetchCategories = async () => {
    try {
      const response = await fetch(apiURL + 'products/categories');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      console.log('Categories fetched:', data);
      setCategories(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const fetchSingleCategory = async (category) => {
    try {
      const response = await fetch(apiURL + 'products/category/' + encodeURIComponent(category));
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      console.log('Products fetched:', data);
      setProducts(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Categories</h1>
      <div className="row mb-4">
        {categories.map(category => (
          <div className="col-md-3 mb-3" key={category}>
            <button
              className="btn btn-outline-primary w-100"
              onClick={() => setSelectedCategory(category)}
            >
              {toTitleCase(category)}
            </button>
          </div>
        ))}
      </div>

      <div className="row">
        {products.map(product => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price.toFixed(2)}</p>
                <a href={`/product.html?productid=${encodeURIComponent(product.id)}`} className="btn btn-primary">
                  View Product
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
