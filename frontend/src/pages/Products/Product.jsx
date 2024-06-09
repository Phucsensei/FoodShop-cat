import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

const Product = ({ product }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <HeartIcon product={product} className="absolute top-0 right-0 m-4" />
      </div>

      <div className="p-4">
        <Link to={`/product/${product._id}`} className="block">
          <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate">
            {product.name}
          </h2>
        </Link>
        <div className="flex justify-between items-center">
          <span className="text-red-500">{product.price} ₫</span>
          <Link
            to={`/product/${product._id}`}
            className="inline-block px-3 py-1 text-sm font-semibold text-white bg-rose-400 rounded hover:bg-pink-700 focus:outline-none focus:bg-pink-700"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
