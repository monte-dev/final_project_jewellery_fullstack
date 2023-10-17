import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, removeFromCart, clearCart } from '../../../redux/cartReducer';
import styles from './CartModal.module.css';
import { NavLink } from 'react-router-dom';
import { HiTrash } from 'react-icons/hi';
import { getProductImageSource } from '../../../utils/getProductImageSource';

const CartModal = ({ showModal, handleClose }) => {
  const cartItems = useSelector(getCart);
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        show={showModal}
        onHide={handleClose}
        className={styles.modalWrapper}
      >
        <Modal.Header closeButton data-bs-theme="dark">
          <Modal.Title className={styles.modalHeader}>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalContent}>
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((cartItem) => (
              <div key={cartItem.id} className={styles.cartItem}>
                <img
                  alt={cartItem.name}
                  src={getProductImageSource(cartItem)}
                ></img>
                <div className={styles.cartItemInfo}>
                  <p>Name: {cartItem.name}</p>
                  <p>Price: ${cartItem.price.toLocaleString()}</p>
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
        <Modal.Footer className={styles.modalFooter}>
          <NavLink to="/cart">
            <Button
              variant="none"
              className={styles.cartBtn}
              onClick={handleClose}
            >
              View/Edit Cart
            </Button>
          </NavLink>
          <Button
            variant="none"
            className={styles.cartBtnSecondary}
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartModal;
