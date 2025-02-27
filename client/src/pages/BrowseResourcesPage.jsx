import NavBar from '../components/NavBar';
import products from '../products.json';
function BrowseResourcesPage({}) {
  return (
    <div>
      <NavBar />
      <h1>Browse Resources</h1>

      <div className="resource-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <span>{product.price}</span>
            <span>{product.grade}</span>
            <span>{product.subject}</span>
            <span>{product.format}</span>
            <span>{product.resourceType}</span>
            <a href={product.link}>See More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseResourcesPage;
