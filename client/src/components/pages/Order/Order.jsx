import { useSelector } from 'react-redux';
import { getCart } from '../../../redux/cartReducer.js';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Order.module.css';
import { Button, Form } from 'react-bootstrap';

const Order = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(getCart);

  const [addressData, setAddressData] = useState({
    streetAddress: '',
    city: '',
    postCode: '',
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    shippingAddress: addressData,
    products: cartItems,
  });

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressData({ ...addressData, [name]: value });
  };

  useEffect(() => {
    if (!cartItems || cartItems.length < 1) {
      navigate('/');
    }
  }, [cartItems, navigate]);

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
        <Form>
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
