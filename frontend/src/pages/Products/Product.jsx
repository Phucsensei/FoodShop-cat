import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"; // Import star icons
import HeartIcon from "./HeartIcon";

// Helper function to format the price
const formatPrice = (price) => {
  let priceStr = price.toString();
  // Check if price has decimals
  if (!priceStr.includes(".")) {
    priceStr += "000";
  } else {
    const parts = priceStr.split(".");
    if (parts[1].length === 1) {
      priceStr += "00";
    }
  }
  return `${priceStr}₫`;
};

// Helper function to display stars
const displayStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStars ? 1 : 0);
  return (
    <>
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <AiFillStar key={`full-${i}`} className="text-yellow-500" />
        ))}
      {halfStars && <AiOutlineStar className="text-yellow-500" />}
      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <AiOutlineStar key={`empty-${i}`} className="text-yellow-500" />
        ))}
    </>
  );
};

const Product = ({ product }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white flex flex-col justify-between border border-gray-200">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <HeartIcon product={product} className="absolute top-0 right-0 m-4" />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/product/${product._id}`} className="block flex-grow">
          <h2
            className="text-lg font-normal text-gray-800 mb-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {product.name}
          </h2>
        </Link>
        <div className="flex items-center mb-2">
          {displayStars(product.rating)}
          <span className="text-sm text-gray-600 ml-2">
            ({product.numReviews})
          </span>
        </div>
        <div className="flex justify-between items-end mt-2">
          <span className="text-red-800 font-semibold">
            {formatPrice(product.price)}
          </span>
          <Link
            to={`/product/${product._id}`}
            className="inline-block px-3 py-1 text-sm font-semibold text-white bg-rose-400 rounded hover:bg-pink-700 focus:outline-none focus:bg-pink-700"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
