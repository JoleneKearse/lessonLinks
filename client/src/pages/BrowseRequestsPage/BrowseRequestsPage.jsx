import Navigation from '../../components/Navigation/Navigation';
import './BrowseRequestsPage.css';
import fakeRequests from '../../fakeRequests.json'; // Our dummy data in case the fetch fails or the request list is empty
import { useState, useEffect } from 'react';

function BrowseRequestsPage() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch('https://lessonlinksbackend.onrender.com/request', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => setRequests(data))
      .catch(error => console.error('Error fetching requests:', error));
  }, []);

  if (requests.length === 0) {
    setRequests(fakeRequests);
  }

  return (
    <div className="browse-requests-page">
      <Navigation />
      <div className="container">
        <h1>See Requests</h1>
        <div className="requests-container">
          {requests.length === 0 && (
            <p className="no-requests">Requests will appear here!</p>
          )}
          <div className="container">
            <div className="resource-list">
              {requests.map(request => (
                <div key={request.id} className="product-card">
                  <h2>{request.title}</h2>
                  <p>{request.description}</p>
                  <div className="product-details">
                    <span className="grade">{request.grade}</span>
                    <span className="subject">{request.subject}</span>
                    <span className="format">{request.format}</span>
                    <span className="resource-type">
                      {request.resourceType}
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
