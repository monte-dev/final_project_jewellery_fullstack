import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, removeFromCart, clearCart } from '../../../redux/cartReducer';
import styles from './CartModal.module.css';
import { NavLink } from 'react-router-dom';
import { HiTrash } from 'react-icons/hi';

const CartModal = ({ showModal, handleClose }) => {
  const cartItems = useSelector(getCart);
  const dispatch = useDispatch();

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((cartItem) => (
              <div key={cartItem.id} className={styles.cartItem}>
                <img
                  alt={cartItem.name}
                  src="/assets/images/products/placeholder.svg"
                ></img>
                <div className={styles.cartItemInfo}>
                  <p>Name: {cartItem.name}</p>
                  <p>Price: {cartItem.price}</p>
                  <p>Quantity: {cartItem.quantity}</p>
                </div>
                <div className={styles.cartItemActions}>
                  <Button
                    variant="secondary"
                    onClick={() => dispatch(removeFromCart(cartItem.id))}
                  >
                    <HiTrash className="mb-1" />
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </Modal.Body>
        <Modal.Footer>
          <NavLink to="/cart">
            <Button variant="primary" onClick={handleClose}>
              View/Edit Cart
            </Button>
          </NavLink>
          <Button variant="danger" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartModal;
