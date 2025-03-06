import Navigation from '../../components/Navigation/Navigation';
import './BrowseResourcesPage.css';
import products from '../../products.json';
import Footer from '../../components/Footer/Footer';
import { formatGrades } from '../../utilities.js';
import { useState, useEffect } from 'react';

function BrowseResourcesPage() {
  // Assuming products is imported from elsewhere or will be fetched
  // const products = []; // Replace with actual data or import

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch('https://lessonlinksbackend.onrender.com/resource', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => setProductsData(data))
      .catch(error => console.error('Error fetching resources:', error));
  }, []);

  if (productsData.length === 0) {
    setProductsData(products);
  }

  return (
    <div className="browse-resources-page">
      <Navigation />
      <div className="container">
        <h1>Browse Resources</h1>

        <div className="resource-list">
          {productsData.map(product => (
            <div key={product.id} className="product-card">
              <div className="top-container">
                <div className="pill-container">
                  <div className="metadata-item">
                    <span className="metadata-value">{product.subject}</span>
                  </div>
                  <div className="metadata-item">
                    <span className="metadata-value">
                      {formatGrades(product.grade)} grade
                    </span>
                  </div>
                </div>
                <div className="price">${product.price}</div>
              </div>

              <h2>{product.title}</h2>
              <p className="product-description">{product.description}</p>

              <div className="format-info-container">
                <a href={product.link} className="more-info-link">
                  More info &gt;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BrowseResourcesPage;
