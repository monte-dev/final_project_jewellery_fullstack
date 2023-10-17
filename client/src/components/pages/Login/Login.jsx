import { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import {
  getCurrentUser,
  getUserError,
  loginUserRequest,
  resetError,
} from '../../../redux/userReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);
  const loginError = useSelector(getUserError);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch]);

  const handleLoginForm = (e) => {
    e.preventDefault();
    dispatch(loginUserRequest(email, password));
  };
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <Form onSubmit={handleLoginForm} data-bs-theme="dark">
      <Alert className="text-center m-auto w-75">
        <p>Test login details:</p>
        <p>johndoe@gmail.com</p>
        <p>somepass123</p>
      </Alert>
      <div className={styles.loginWrapper}>
        {loginError && (
          <Alert variant="danger">Incorrect email or password</Alert>
        )}
        <Form.Group className={styles.loginInput}>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            autoComplete="true"
            name="email"
            required
            placeholder="Please enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className={styles.loginInput}>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            autoComplete="true"
            name="password"
            required
            placeholder="Please enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button variant="none" className={styles.loginButton} type="submit">
          Login now
        </Button>
      </div>
    </Form>
  );
};
export default Login;
