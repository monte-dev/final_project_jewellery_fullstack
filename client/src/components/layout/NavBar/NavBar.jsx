import {
  Offcanvas,
  Navbar,
  Nav,
  Container,
  Button,
  Badge,
} from 'react-bootstrap';
import { HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi';
import { NavLink, useNavigate } from 'react-router-dom';
import CartModal from '../../features/CartModal/CartModal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCart } from '../../../redux/cartReducer';
import { getCurrentUser, logoutUserRequest } from '../../../redux/userReducer';
import { useDispatch } from 'react-redux';

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
      <Navbar expand="md" className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/">
            Diamondville
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand"
            onClick={toggleOffcanvas}
          />
          <Navbar.Offcanvas
            show={offCanvasOpen}
            onHide={handleCloseOffcanvas}
            id="offcanvasNavbar-expand"
            aria-labelledby="offcanvasNavbarLabel-expand"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand">
                Diamondville
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 me-3">
                <Nav.Link as={NavLink} to="/" onClick={handleCloseOffcanvas}>
                  Home
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/contact"
                  onClick={handleCloseOffcanvas}
                >
                  Contact us
                </Nav.Link>
              </Nav>
              <Nav className="me-3">
                {user ? (
                  <>
                    <Nav.Link as={NavLink} className="px-0">
                      <HiOutlineUser />
                    </Nav.Link>
                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link
                      as={NavLink}
                      to="/login"
                      onClick={handleCloseOffcanvas}
                    >
                      Login
                    </Nav.Link>
                    <Nav.Link
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
                <Badge bg="info" className="align-middle top-0">
                  {totalCartItems}
                </Badge>
                <HiOutlineShoppingCart size={22} />
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
