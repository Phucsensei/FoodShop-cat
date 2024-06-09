import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toast } from "react-toastify";
import HeartIcon from "./HeartIcon";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const ProductCard = ({ p }) => {
  const dispatch = useDispatch();

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
    toast.success("Item added successfully", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  };

  return (
    <div className="max-w-sm relative bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <section className="relative">
        <Link to={`/product/${p._id}`}>
          <span className="absolute bottom-3 right-3 bg-pink-100 text-pink-700 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
            {p?.brand}
          </span>
          <img
            className="cursor-pointer w-full rounded-t-lg"
            src={p.image}
            alt={p.name}
            style={{ height: "200px", objectFit: "cover" }}
          />
        </Link>
        <HeartIcon product={p} />
      </section>

      <div className="p-6">
        <h5 className="truncate mb-2 text-lg font-semibold text-slate-700 dark:text-white">
          {p?.name}
        </h5>

        <p className="text-blue-500 text-lg font-semibold mb-2 flex items-center">
          <FaRegMoneyBillAlt className="mr-1" />
          {p?.price?.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </p>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
          {p?.description?.substring(0, 60)} ...
        </p>

        <div className="flex justify-between items-center">
          <Link
            to={`/product/${p._id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
          >
            Read More
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>

          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            onClick={() => addToCartHandler(p, 1)}
          >
            <AiOutlineShoppingCart size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
