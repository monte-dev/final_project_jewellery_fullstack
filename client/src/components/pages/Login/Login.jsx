import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { login, loginUserRequest } from '../../../redux/userReducer';
import { useDispatch } from 'react-redux';
import { API_URL } from '../../../config';
const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginForm = (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    };
    fetch(`${API_URL}/auth/login`, options)
      .then((res) => {
        if (res.status === 200) {
          dispatch(login({ login }));
        } else {
        }
      })
      .catch((err) => {
        console.log('fetching error', err);
      });
  };

  return (
    <div>
      <Form onSubmit={handleLoginForm}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Please enter your email..."
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Please enter your password"
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit">Login now</Button>
      </Form>
    </div>
  );
};
export default Login;
