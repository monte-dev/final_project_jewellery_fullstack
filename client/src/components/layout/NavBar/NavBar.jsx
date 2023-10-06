import {
  Offcanvas,
  NavDropdown,
  Navbar,
  Nav,
  Container,
  Button,
  Badge,
} from 'react-bootstrap';
import { HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const user = undefined;
  const totalCartItems = '0';
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Diamondville</Navbar.Brand>
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
              <Button variant="outline-none">
                <Badge bg="info" className="align-middle top-0">
                  {totalCartItems}
                </Badge>
                <HiOutlineShoppingCart size={22} />
              </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
