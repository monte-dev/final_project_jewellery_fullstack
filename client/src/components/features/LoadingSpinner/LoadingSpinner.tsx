import { Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center w-100  pt-5">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
};

export default LoadingSpinner;
