// src/components/Categories.jsx
import React, { useState, useEffect } from 'react';

const Categories = () => {
  const apiURL = 'https://fakestoreapi.com/';
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);

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
    } finally {
      setLoading(false);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <nav>
        <ul id="categories">
          {categories.map(category => (
            <li key={category}>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => setSelectedCategory(category)}
              >
                {toTitleCase(category)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="categories-list row">
        {categories.map(category => (
          <div className="col-md-3" key={category}>
            <a
              href="#"
              className="btn btn-primary"
              onClick={() => setSelectedCategory(category)}
            >
              {toTitleCase(category)}
            </a>
          </div>
        ))}
      </div>

      <div className="products row">
        {products.map(product => (
          <div className="col-md-3" key={product.id}>
            <div className="product">
              <a href={`/product.html?productid=${encodeURIComponent(product.id)}`}>
                <img src={product.image} className="img-fluid" alt={product.title} />
                <div className="info">
                  <div className="title">{product.title}</div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
