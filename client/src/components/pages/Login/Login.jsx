import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { loginUserRequest } from '../../../redux/userReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
