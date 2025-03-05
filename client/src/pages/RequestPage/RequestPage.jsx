//import { useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Form from '../../components/Form/Form';
import './RequestPage.css';

function RequestPage() {
  return (
    <div className="request-page">
      <Navigation />
      <div className="container">
        <Form formTitle="Request a Resource" isARequest={true} />
      </div>
    </div>
  );
}

export default RequestPage;
