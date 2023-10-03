import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home.jsx';
import NotFound from './components/pages/NotFound/NotFound.jsx';
import Cart from './components/pages/Cart/Cart.jsx';
import Order from './components/pages/Order/Order.jsx';
import Product from './components/pages/Product/Product.jsx';
import Login from './components/pages/Login/Login.jsx';
import Register from './components/pages/Register/Register.jsx';
import MainLayout from './components/layout/MainLayout/MainLayout.jsx';

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </MainLayout>
  );
};
export default App;
