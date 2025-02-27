//import { useState } from 'react';
import NavBar from '../components/NavBar';
import Form from '../components/Form';

function RequestPage({}) {
  return (
    <>
      <NavBar />
      <Form formTitle="Request a Resource" isARequest={true}>
        {''}
      </Form>
    </>
  );
}

export default RequestPage;
