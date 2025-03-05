import Navigation from '../../components/Navigation/Navigation';
import './BrowseRequestsPage.css';
import products from '../../products.json';

function BrowseRequestsPage() {
  return (
    <div className="browse-requests-page">
      <Navigation />
      <div className="container">
        <h1>Browse Requests</h1>

        {/* Add request cards or other content here */}
        <div className="requests-container">
          <div className="container">
            <div className="resource-list">
              {products.map(product => (
                <div key={product.id} className="product-card">
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <div className="product-details">
                    <span className="grade">{product.grade}</span>
                    <span className="subject">{product.subject}</span>
                    <span className="format">{product.format}</span>
                    <span className="resource-type">
                      {product.resourceType}
                    </span>
                  </div>
                  <a href="/submit" className="btn btn-primary">
                    Create This Resource
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseRequestsPage;
