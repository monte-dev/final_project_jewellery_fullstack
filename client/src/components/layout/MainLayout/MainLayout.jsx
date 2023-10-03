import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default MainLayout;
