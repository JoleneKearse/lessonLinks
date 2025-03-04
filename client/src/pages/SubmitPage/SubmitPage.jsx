import Navigation from '../../components/Navigation/Navigation';
import Form from '../../components/Form/Form';
import './SubmitPage.css';

function SubmitPage() {
  return (
    <>
      <Navigation />
      <Form formTitle="Submit a Resource" isARequest={false} />
    </>
  );
}

export default SubmitPage;
