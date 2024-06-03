import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";
import "../styles.css";

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });

  return (
    <>
      {!keyword ? <Header /> : null}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data.message || isError.error}
        </Message>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h1
              className="ml-40 mt-40 text-3xl font-bold text-gray-800"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Special Products
            </h1>
            <Link
              to="/shop"
              className="bg-rose-400 font-bold rounded-full py-2 px-10 mr-[10rem] mt-[10rem] text-white"
            >
              Shop
            </Link>
          </div>
          <div className="grid grid-cols-5 gap-8 p-8">
            {data.products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
