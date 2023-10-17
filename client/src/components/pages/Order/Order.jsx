import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Form } from 'react-bootstrap';
import { clearOrder, createOrderRequest } from '../../../redux/orderReducer.js';
import { clearCart, getCart } from '../../../redux/cartReducer.js';
import LoadingSpinner from '../../features/LoadingSpinner/LoadingSpinner';
import styles from './Order.module.css';

const Order = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  let userId;
  if (user.user !== null) {
    userId = user.user.id;
  } else {
    userId = null;
  }
  const cartItems = useSelector(getCart);
  const [loading, setLoading] = useState(false);
  const [orderSent, setOrderSent] = useState(false);
  const [addressData, setAddressData] = useState({
    streetAddress: '',
    city: '',
    postCode: '',
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    products: cartItems,
  });

  useEffect(() => {
    if (!user || userId === null) {
      navigate('/');
    } else {
      setLoading(false);
    }
  }, [user, userId, navigate]);

  useEffect(() => {
    if (!cartItems || cartItems.length < 1) {
      navigate('/');
    }
  }, [cartItems, navigate, user]);

  const calculateTotalAmount = () => {
    let totalAmount = 0;
    cartItems.forEach((item) => {
      totalAmount += item.quantity;
    });
    return totalAmount;
  };

  const orderData = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    shippingAddress: `${addressData.streetAddress}, ${addressData.city}, ${addressData.postCode}`,
    totalAmount: calculateTotalAmount(cartItems),
    orderStatus: 'PROCESSING',
    userId: userId,
    products: cartItems.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
      additionalInfo: item.additionalInfo || '',
    })),
  };

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressData({ ...addressData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(orderData);
    dispatch(createOrderRequest(orderData));
    setOrderSent(true);
    setTimeout(() => {
      navigate('/');
      dispatch(clearCart());
      dispatch(clearOrder());
      localStorage.removeItem('cartItems');
    }, 5000);
  };

  if (loading) {
    return <LoadingSpinner />;
  } else if (orderSent) {
    return (
      <Alert variant="success">
        Your order has been submitted successfully!
        <hr></hr>
        <p>You will be redirected in 5 seconds...</p>
      </Alert>
    );
  }
  return (
    <main>
      <h2>Order Summary</h2>
      <section className={styles.orderSummary}>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} - ${item.price * item.quantity}
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.orderDeliveryForm}>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group>
            <Form.Label htmlFor="firstName">First Name</Form.Label>
            <Form.Control
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleFormInput}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="lastName">Last Name</Form.Label>
            <Form.Control
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleFormInput}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="email"
              id="email"
              autoComplete="true"
              name="email"
              value={formData.email}
              onChange={handleFormInput}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="streetAddress">Street</Form.Label>
            <Form.Control
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={addressData.streetAddress}
              onChange={handleAddressChange}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="city">City</Form.Label>
            <Form.Control
              type="text"
              id="city"
              name="city"
              value={addressData.city}
              onChange={handleAddressChange}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="postCode">Postal Code</Form.Label>
            <Form.Control
              type="text"
              id="postCode"
              name="postCode"
              value={addressData.postCode}
              onChange={handleAddressChange}
              required
            ></Form.Control>
          </Form.Group>
          <Button type="submit">Pay now</Button>
        </Form>
      </section>
    </main>
  );
};

export default Order;
