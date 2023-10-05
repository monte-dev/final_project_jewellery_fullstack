import {
  fetchProducts,
  fetchProductsFromAPI,
} from '../../../redux/productsReducer.js';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ProductCard from '../../features/ProductCard/ProductCard.jsx';
import './Home.css';

const Home = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const productsData = await fetchProducts();
        dispatch(fetchProductsFromAPI(productsData));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchData();
  }, [dispatch]);
  return (
    <div className="products-parent">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Home;
