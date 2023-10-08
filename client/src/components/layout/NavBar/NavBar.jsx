import {
  Offcanvas,
  Navbar,
  Nav,
  Container,
  Button,
  Badge,
} from 'react-bootstrap';
import { HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import CartModal from '../../features/CartModal/CartModal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCart } from '../../../redux/cartReducer';

const NavBar = () => {
  const user = undefined;
  const [showCartModal, setShowCartModal] = useState(false);
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

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/">
            Diamondville
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
          <Navbar.Offcanvas
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
                <Nav.Link as={NavLink} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contact">
                  Contact us
                </Nav.Link>
              </Nav>
              <Nav className="me-3">
                {!user ? (
                  <>
                    <Nav.Link as={NavLink} to="/login">
                      Login
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/register">
                      Register
                    </Nav.Link>
                  </>
                ) : (
                  <Nav.Link as={NavLink}>
                    <HiOutlineUser />
                  </Nav.Link>
                )}
              </Nav>
              <Button variant="outline-none" onClick={toggleCartModal}>
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
