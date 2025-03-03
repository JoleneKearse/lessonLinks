import NavBar from '../components/NavBar';
import Form from '../components/Form';

function SubmitPage({}) {
  //for children in react, no need to write props.children, already assumes children is passed in
  return (
    <>
      <NavBar />
      <Form formTitle="Submit a Resource" isARequest={false}></Form>
    </>
  );
}

export default SubmitPage;
