import Navigation from '../../components/Navigation/Navigation';
import './BrowseRequestsPage.css';

function BrowseRequestsPage() {
  return (
    <div className="browse-requests-page">
      <Navigation />
      <div className="container">
        <h1>Browse Requests</h1>
        
        {/* Add request cards or other content here */}
        <div className="requests-container">
          <p>Resource requests from teachers will appear here.</p>
          {/* You can add actual request cards later */}
        </div>
      </div>
    </div>
  );
}

export default BrowseRequestsPage;
