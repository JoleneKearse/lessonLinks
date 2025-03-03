import NavBar from '../components/NavBar';
import Form from '../components/Form';

function SubmitPage({}) {
  return (
    <>
      <NavBar />
      <Form formTitle="Submit a Resource" isARequest={false}></Form>
    </>
  );
}

export default SubmitPage;
