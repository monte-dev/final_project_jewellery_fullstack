import { Button, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {
  getCart,
  removeFromCart,
  updateAdditionalInfo,
  updateQuantity,
} from '../../../redux/cartReducer';
import styles from './Cart.module.css';
import { HiTrash } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getProductImageSource } from '../../../utils/getProductImageSource';

const Cart = () => {
  const cartItems = useSelector(getCart);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const cartTotal = cartItems
    .reduce((acc, item) => {
      const itemTotalCost = item.price * item.quantity;
      return acc + itemTotalCost;
    }, 0)
    .toFixed(2);

  const handleQuantityChange = (cartItem, updatedQuantity) => {
    if (updatedQuantity >= 1) {
      const validatedQuantity = Math.min(updatedQuantity, 100);
      dispatch(updateQuantity(cartItem.id, validatedQuantity));
    } else {
      dispatch(updateQuantity(cartItem.id, 1));
    }
  };
  if (!cartItems || cartItems.length < 1) {
    return (
      <Container className="p-3">
        <section className={styles.cartWrapper}>
          <h2>Cart</h2>
          <p>Your cart is empty</p>
        </section>
      </Container>
    );
  }
  return (
    <Container>
      <section className={styles.cartWrapper}>
        <h2>Cart</h2>
        {cartItems.map((cartItem) => (
          <div key={cartItem.id} className={styles.itemContainer}>
            <div className={styles.itemImage}>
              <img
                alt={cartItem.name}
                src={getProductImageSource(cartItem)}
              ></img>
            </div>
            <div className={styles.itemInfoText}>
              <p>{cartItem.name}</p>
              <p>${cartItem.price}</p>
            </div>
            <div className={styles.itemInfo}>
              <textarea
                name="additionalInfo"
                value={cartItem.additionalInfo}
                onChange={(e) => {
                  const updatedInfo = e.target.value;
                  dispatch(updateAdditionalInfo(cartItem.id, updatedInfo));
                }}
              ></textarea>
            </div>
            <div className={styles.itemActions}>
              <div>
                <input
                  type="number"
                  name="quantity"
                  value={cartItem.quantity}
                  onChange={(e) =>
                    handleQuantityChange(cartItem, parseInt(e.target.value))
                  }
                />
                <Button
                  variant="secondary"
                  className={styles.productActionItem}
                  onClick={() => dispatch(removeFromCart(cartItem.id))}
                >
                  <HiTrash className="mb-1" />
                </Button>
              </div>
            </div>
          </div>
        ))}
        <div className={styles.cartActions}>
          <p>
            Total: <span>${cartTotal}</span>
          </p>
          {user.user ? (
            <NavLink to="/order">
              <Button variant="none">Continue To Checkout</Button>
            </NavLink>
          ) : (
            <>
              <NavLink to="/login">
                <Button variant="none" className="ms-3">
                  Login
                </Button>
              </NavLink>
              <NavLink to="/register">
                <Button variant="none">Register</Button>
              </NavLink>
            </>
          )}
        </div>
      </section>
    </Container>
  );
};
export default Cart;
