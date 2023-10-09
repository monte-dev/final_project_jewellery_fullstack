import { Button, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getCart } from '../../../redux/cartReducer';
import styles from './Cart.module.css';
import { HiTrash } from 'react-icons/hi';
import { useState } from 'react';

const Cart = () => {
  const cartItems = useSelector(getCart);

  const initialQty = {};
  cartItems.forEach((item) => {
    initialQty[item.id] = item.quantity;
  });

  const [quantity, setQuantity] = useState(initialQty || 1);
  console.log(cartItems);

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
        {cartItems.map((item) => (
          <div key={item.id} className={styles.itemContainer}>
            <div className={styles.itemImage}>
              {/* <img src={cartItem.images[0]} alt={cartItem.name} /> */}
              <img
                alt={item.name}
                // src={item.images}
                src="/assets/images/products/placeholder.svg"
              ></img>
            </div>
            <div className={styles.itemInfo}>
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
            <div className={styles.itemActions}>
              <div>
                <input
                  type="number"
                  min="1"
                  value={quantity[item.id]}
                  onChange={(e) =>
                    setQuantity({ ...quantity, [item.id]: e.target.value })
                  }
                />
                <Button
                  variant="secondary"
                  className={styles.productActionItem}
                >
                  <HiTrash className="mb-1" />
                </Button>
              </div>
            </div>
          </div>
        ))}
        <div className={styles.cartActions}>
          <p>Total: {}</p>
          <Button variant="info">Checkout</Button>
        </div>
      </section>
      <section></section>
    </Container>
  );
};
export default Cart;
