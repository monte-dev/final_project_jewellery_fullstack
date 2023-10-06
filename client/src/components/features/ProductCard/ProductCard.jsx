import { HiOutlineShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div>
      <div>
        <img src={product.images[0]} alt={product.name} />
      </div>
      <div>
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <Link to={`/product/${product.id}`}>
          <button>Read More</button>
        </Link>
        <input type="number" min={0} max={200}></input>

        <button>
          <HiOutlineShoppingCart />
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
