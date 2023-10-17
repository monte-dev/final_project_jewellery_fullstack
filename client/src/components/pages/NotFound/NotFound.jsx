import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';
import LoadingSpinner from '../../features/LoadingSpinner/LoadingSpinner';

const NotFound = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/');
  }, 3000);

  return (
    <div className={styles.wrapper}>
      <h2>Sorry, this page has not been found.</h2>
      <LoadingSpinner></LoadingSpinner>
    </div>
  );
};
export default NotFound;
