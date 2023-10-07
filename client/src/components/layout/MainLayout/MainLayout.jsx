import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './MainLayout.module.css';

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};
export default MainLayout;
