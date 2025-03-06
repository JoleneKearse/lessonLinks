import Navigation from '../../components/Navigation/Navigation';
import './BrowseResourcesPage.css';
import products from '../../products.json';
import { formatGrades } from '../../utilities.js';

function BrowseResourcesPage() {
  // Assuming products is imported from elsewhere or will be fetched
  // const products = []; // Replace with actual data or import

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
                <span className="grade">{formatGrades(product.grade)}</span>
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
