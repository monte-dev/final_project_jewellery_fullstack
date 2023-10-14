import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  if (user) {
    navigate('/');
  }

  return <div>Register</div>;
};
export default Register;
