import {
  fetchProductsFromAPI,
  getProducts,
} from '../../../redux/productsReducer.js';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ProductCard from '../../features/ProductCard/ProductCard.jsx';
import './Home.css';
import { Spinner } from 'react-bootstrap';

const Home = () => {
  const products = useSelector(getProducts);

  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await dispatch(fetchProductsFromAPI());
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <main className="products-parent">
      {isLoading && !products ? (
        <Spinner animation="grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        products.map((product) => (
          <ProductCard
            className="product-card"
            key={product.id}
            product={product}
          />
        ))
      )}
    </main>
  );
};

export default Home;
