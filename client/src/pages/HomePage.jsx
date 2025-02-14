function HomePage({}) {
  return (
    <div className="home-page">
      <h1>Welcome to Lesson Links!</h1>
      <div className="home-buttons">
        <a href="./browse-resources">Browse Resources</a>
        <a href="./request">Request a Resource</a>
        <a href="./browse-requests">Browse Requests</a>
      </div>
    </div>
  );
}

export default HomePage;
