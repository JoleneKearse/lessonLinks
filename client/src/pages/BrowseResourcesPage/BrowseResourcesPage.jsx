import Navigation from '../../components/Navigation/Navigation';
import './BrowseResourcesPage.css';
import { useState, useEffect } from 'react';
import products from '../../products.json'; // Our dummy data in case the fetch fails or the resource list is empty

function BrowseResourcesPage() {
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
          {products.map(product => (
            <div key={product.id} className="product-card">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <div className="product-details">
                <span className="price">{product.price}</span>
                <span className="grade">{product.grade}</span>
                <span className="subject">{product.subject}</span>
                <span className="format">{product.format}</span>
                <span className="resource-type">{product.resourceType}</span>
              </div>
              <a href={product.link} className="btn">
                See More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrowseResourcesPage;
