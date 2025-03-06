import Navigation from '../../components/Navigation/Navigation';
import Form from '../../components/Form/Form';
import Footer from '../../components/Footer/Footer';
import './SubmitPage.css';

function SubmitPage() {
  return (
    <div className="request-page">
      <Navigation />
      <div className="container">
        <Form formTitle="Submit a Resource" isARequest={false} />
      </div>
      <Footer />
    </div>
  );
}

export default SubmitPage;
