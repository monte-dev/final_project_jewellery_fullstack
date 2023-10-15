import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Spinner } from 'react-bootstrap';
import { createOrderRequest } from '../../../redux/orderReducer.js';
import { getCart } from '../../../redux/cartReducer.js';
import styles from './Order.module.css';

const Order = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const cartItems = useSelector(getCart);

  const [loading, setLoading] = useState(true);
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
    if (!user || !user.user || user.user.id == null) {
      navigate('/');
    } else {
      setLoading(false);
    }
  }, [user, navigate]);

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
    userId: user.user.id,
    products: cartItems.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
      additionalInfo: item.additionalInfo || '',
    })),
  };
  console.log(orderData);
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
  };

  if (loading) {
    return <Spinner>Loading...</Spinner>;
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
            <Form.Label>First Name</Form.Label>
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
            <Form.Label>Last Name</Form.Label>
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
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleFormInput}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Street</Form.Label>
            <Form.Control
              type="text"
              name="streetAddress"
              value={addressData.streetAddress}
              onChange={handleAddressChange}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={addressData.city}
              onChange={handleAddressChange}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type="text"
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
