import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useGetProductDetailsQuery,
  useCreateReviewMutation,
  useGetTopProductsQuery,
} from "../../redux/api/productApiSlice";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import {
  FaBox,
  FaClock,
  FaShoppingCart,
  FaStar,
  FaStore,
  FaCartPlus,
  FaHeart,
  FaDollarSign,
} from "react-icons/fa";
import moment from "moment";
import HeartIcon from "./HeartIcon";
import Ratings from "./Ratings";
import CustomRating from "./CustomRating";
import { addToCart } from "../../redux/features/cart/cartSlice";
import ProductTabs from "./ProductTabs";
import SmallProduct from "./SmallProduct";
import "./ProductDetails.css"; // Import the CSS file

const ProductDetails = () => {
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId);

  const { data: relatedProducts, isLoading: loadingRelatedProducts } =
    useGetTopProductsQuery();

  const { userInfo } = useSelector((state) => state.auth);

  const [createReview, { isLoading: loadingProductReview }] =
    useCreateReviewMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await createReview({
        productId,
        rating,
        comment,
      }).unwrap();
      refetch();
      toast.success("Review created successfully");
    } catch (error) {
      toast.error(error?.data || error.message);
    }
  };

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };

  // Chuyển đổi mô tả thành các dòng riêng biệt
  const formattedDescription = product?.description
    ?.split("-")
    .map((item, index) => (
      <p key={index} className="mb-2">
        {item.trim()}
      </p>
    ));

  return (
    <div className="container mx-auto mt-4 font-sans">
      <Link to="/" className="text-gray-600 hover:text-gray-800 ml-4">
        &larr; Go Back
      </Link>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.message}
        </Message>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4 px-4">
            <div className="lg:col-span-6 flex justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full h-auto"
                style={{ maxWidth: "400px", maxHeight: "400px" }}
              />
              <HeartIcon product={product} />
            </div>

            <div className="lg:col-span-3 flex flex-col">
              <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>

              <p className="text-3xl mb-4 font-extrabold text-red-600">
                {product.price} ₫
              </p>

              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <FaStore className="mr-2 text-black" />{" "}
                  <span className="font-semibold">Brand:</span> {product.brand}
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-2 text-black" />{" "}
                  <span className="font-semibold">Added:</span>{" "}
                  {moment(product.createAt).fromNow()}
                </div>
                <div className="flex items-center">
                  <FaStar className="mr-2 text-black" />{" "}
                  <span className="font-semibold">Reviews:</span>{" "}
                  {product.numReviews}
                </div>
                <div className="flex items-center">
                  <Ratings
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </div>
                <div className="flex items-center">
                  <FaShoppingCart className="mr-2 text-black" />{" "}
                  <span className="font-semibold">Quantity:</span>{" "}
                  {product.quantity}
                </div>
                <div className="flex items-center">
                  <FaBox className="mr-2 text-black" />{" "}
                  <span className="font-semibold">In Stock:</span>{" "}
                  {product.countInStock}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 border p-5 rounded-lg shadow-lg">
              <div className="text-center">
                {product.countInStock > 0 && (
                  <div className="flex items-center my-4">
                    <span className="mr-2">Số lượng:</span>
                    <select
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                      className="p-2 border rounded-lg"
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <button
                  onClick={addToCartHandler}
                  className="text-blue-400  border-2 border-blue-500 py-2 px-4 rounded-lg w-full mb-4 button-with-icon hover:bg-blue-600 transition duration-300 ease-in-out"
                  disabled={product.countInStock === 0}
                >
                  <FaCartPlus size={30} className="mr-2 text-blue-400" />
                  Thêm vào giỏ hàng
                </button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mb-4 button-with-icon hover:bg-blue-600 transition duration-300 ease-in-out">
                  <FaHeart size={30} className="mr-2" />
                  Thêm vào danh sách yêu thích
                </button>
                <button className="text-blue-400  border-2 border-blue-500  py-2 px-4 rounded-lg w-full mb-4 button-with-icon hover:bg-blue-600 transition duration-300 ease-in-out">
                  <FaDollarSign size={30} className="mr-4" />
                  Mua ngay
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 mx-4">
            <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
            <div className="flex flex-col lg:flex-row lg:space-x-8">
              <div className="w-full lg:w-2/3">
                <p className="mb-4">
                  <strong>Description: </strong>
                  {formattedDescription}
                </p>
                <div className="border-t pt-4">
                  <h3 className="text-xl font-semibold mb-2">Reviews</h3>
                  {product.reviews.length === 0 && (
                    <Message>No Reviews</Message>
                  )}
                  <ul>
                    {product.reviews.map((review) => (
                      <li key={review._id} className="mb-4 border-b pb-2">
                        <div className="flex items-center mb-2">
                          <strong>{review.name}</strong>
                          <div className="ml-4">
                            <Ratings value={review.rating} />
                          </div>
                          <span className="ml-4 text-gray-600">
                            {moment(review.createdAt).format("LL")}
                          </span>
                        </div>
                        <p>{review.comment}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="hidden lg:block lg:w-1/3">
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Write a Customer Review
                  </h3>
                  {userInfo ? (
                    <form onSubmit={submitHandler}>
                      <div className="mb-4">
                        <label htmlFor="rating" className="block mb-2">
                          Rating
                        </label>
                        <CustomRating
                          name="rating"
                          value={rating}
                          onChange={(e, newValue) => setRating(newValue)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="comment" className="block mb-2">
                          Comment
                        </label>
                        <textarea
                          id="comment"
                          rows="4"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          className="p-2 border rounded-lg w-full"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                        disabled={loadingProductReview}
                      >
                        Submit
                      </button>
                    </form>
                  ) : (
                    <Message>
                      Please <Link to="/login">sign in</Link> to write a review
                    </Message>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 mx-4 ">
            <h2 className="text-2xl font-semibold mb-4">
              Những sản phẩm tương tự
            </h2>
            <div className="border border-gray-200 p-4 rounded-lg">
              <div className="flex flex-wrap -mx-4">
                {loadingRelatedProducts ? (
                  <Loader />
                ) : (
                  relatedProducts.map((relatedProduct) => (
                    <div
                      key={relatedProduct._id}
                      className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8"
                    >
                      <SmallProduct product={relatedProduct} />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
