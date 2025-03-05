//import { useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Form from '../../components/Form/Form';
import Footer from '../../components/Footer/Footer';
import './RequestPage.css';

function RequestPage() {
  return (
    <div className="request-page">
      <Navigation />
      <div className="container">
        <Form formTitle="Post a Request" isARequest={true} />
      </div>
      <Footer />
    </div>
  );
}

export default RequestPage;
