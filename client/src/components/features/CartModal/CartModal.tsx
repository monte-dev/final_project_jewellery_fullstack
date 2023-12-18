import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, removeFromCart, clearCart } from '../../../redux/cartReducer';
import './styles.css';
import { NavLink } from 'react-router-dom';
import { HiTrash } from 'react-icons/hi';
import { getProductImageSource } from '../../../utils/getProductImageSource';
import React from 'react';

type CartModalProps = {
  showModal: boolean;
  handleClose: () => void;
};

interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  rating: number;
  images: {
    id: string;
    name: string;
    productId: string;
  }[];
}
const CartModal: React.FC<CartModalProps> = ({ showModal, handleClose }) => {
  console.log(showModal);
  const cartItems: CartItem[] = useSelector(getCart);
  console.log(cartItems);
  const dispatch = useDispatch();

  return (
    <div>
      <Modal show={showModal} onHide={handleClose} className="modalWrapper">
        <Modal.Header closeButton data-bs-theme="dark">
          <Modal.Title className="modalHeader">Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalContent">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((cartItem) => (
              <div key={cartItem.id} className="cartItem">
                <img
                  alt={cartItem.name}
                  src={getProductImageSource(cartItem)}
                ></img>
                <div className="cartItemInfo">
                  <p>Name: {cartItem.name}</p>
                  <p>Price: ${cartItem.price.toLocaleString()}</p>
                  <p>Quantity: {cartItem.stockQuantity}</p>
                </div>
                <div className="cartItemActions">
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
        <Modal.Footer className="modalFooter">
          <NavLink to="/cart">
            <Button variant="none" className="cartBtn" onClick={handleClose}>
              View/Edit Cart
            </Button>
          </NavLink>
          <Button
            variant="none"
            className="cartBtnSecondary"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartModal;
