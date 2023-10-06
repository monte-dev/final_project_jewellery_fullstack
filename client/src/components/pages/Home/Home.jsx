import {
  fetchProducts,
  fetchProductsFromAPI,
} from '../../../redux/productsReducer.js';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ProductCard from '../../features/ProductCard/ProductCard.jsx';
import './Home.css';
import { Spinner } from 'react-bootstrap';

const Home = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const productsData = await fetchProducts();
        dispatch(fetchProductsFromAPI(productsData));
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
      {isLoading ? (
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
