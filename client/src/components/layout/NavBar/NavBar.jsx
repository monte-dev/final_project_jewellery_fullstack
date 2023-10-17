import {
  Offcanvas,
  Navbar,
  Nav,
  Container,
  Button,
  Badge,
} from 'react-bootstrap';
import { FaMountain, FaCartShopping, FaUser } from 'react-icons/fa6';
import { NavLink, useNavigate } from 'react-router-dom';
import CartModal from '../../features/CartModal/CartModal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCart } from '../../../redux/cartReducer';
import { getCurrentUser, logoutUserRequest } from '../../../redux/userReducer';
import { useDispatch } from 'react-redux';
import styles from './NavBar.module.css';

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);
  const [showCartModal, setShowCartModal] = useState(false);
  const [offCanvasOpen, setOffcanvasOpen] = useState(false);
  const cartItems = useSelector(getCart);

  const totalCartItems =
    cartItems && cartItems.length > 0
      ? cartItems
          .reduce((total, product) => total + parseInt(product.quantity), 0)
          .toString()
      : '0';

  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  const toggleOffcanvas = () => {
    setOffcanvasOpen(!offCanvasOpen);
  };

  const handleCloseOffcanvas = () => {
    setOffcanvasOpen(false);
  };

  const handleLogout = () => {
    dispatch(logoutUserRequest());

    navigate('/');
  };

  return (
    <>
      <Navbar expand="md" data-bs-theme="dark" className={styles.navbar}>
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/" className={styles.navbarBrand}>
            <FaMountain className="mb-1 me-1" />
            <span>Summit Watches</span>
          </Navbar.Brand>
          <Navbar.Toggle
            className={styles.navbarToggle}
            aria-controls="offcanvasNavbar-expand"
            onClick={toggleOffcanvas}
          />
          <Navbar.Offcanvas
            data-bs-theme="dark"
            show={offCanvasOpen}
            onHide={handleCloseOffcanvas}
            id="offcanvasNavbar-expand"
            aria-labelledby="offcanvasNavbarLabel-expand"
            placement="end"
          >
            <Offcanvas.Header closeButton className={styles.offcanvasHeader}>
              <Offcanvas.Title
                id="offcanvasNavbarLabel-expand"
                as="div"
                className={styles.offcanvasTitle}
              >
                Summit Watches
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={styles.offcanvasBody} as="div">
              <Nav className={styles.navMenu}>
                <Nav.Link
                  className={styles.navLink}
                  exact
                  activeClassName={styles.activeNavLink}
                  as={NavLink}
                  to="/"
                  onClick={handleCloseOffcanvas}
                >
                  Home
                </Nav.Link>
              </Nav>
              <Nav className={styles.navUser}>
                {user ? (
                  <>
                    <Nav.Link
                      className={styles.navLink}
                      exact
                      activeClassName={styles.activeNavLink}
                      as={NavLink}
                    >
                      <FaUser />
                    </Nav.Link>
                    <Nav.Link
                      className={styles.navLink}
                      exact
                      activeClassName={styles.activeNavLink}
                      onClick={handleLogout}
                    >
                      Logout
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link
                      className={styles.navLink}
                      exact
                      activeClassName={styles.activeNavLink}
                      as={NavLink}
                      to="/login"
                      onClick={handleCloseOffcanvas}
                    >
                      Login
                    </Nav.Link>
                    <Nav.Link
                      className={styles.navLink}
                      exact
                      activeClassName={styles.activeNavLink}
                      as={NavLink}
                      to="/register"
                      onClick={handleCloseOffcanvas}
                    >
                      Register
                    </Nav.Link>
                  </>
                )}
              </Nav>
              <Button
                variant="outline-none"
                onClick={() => {
                  toggleCartModal();
                  handleCloseOffcanvas();
                }}
              >
                <Badge bg="none" className={styles.cartBadge}>
                  {totalCartItems}
                </Badge>
                <FaCartShopping className={styles.cartIcon} />
              </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {showCartModal && (
        <CartModal showModal={showCartModal} handleClose={toggleCartModal} />
      )}
    </>
  );
};

export default NavBar;
