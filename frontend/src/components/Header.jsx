import { useState, useEffect } from "react";
import { useGetTopProductsQuery } from "../redux/api/productApiSlice";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import styles from "../styles/styles";
import "../styles.css"; // Đảm bảo bạn đã import file CSS

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);

  const { data, isLoading, error } = useGetTopProductsQuery();

  useEffect(() => {
    if (data) {
      const filteredProducts = data.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchData(filteredProducts);
    }
  }, [searchTerm, data]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-5">
          <Link to="/">
            <div className="w-48 mr-20">
              <img
                className="mr-16"
                src="uploads/420242990_375013125221320_4244492130705290905_n.png"
                alt="Logo"
              />
            </div>
          </Link>
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-rose-400 border-[2px] rounded-md focus:outline-none focus:border-rose-400"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: "16px" }}
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer text-gray-500"
            />
            {searchTerm && searchData?.length > 0 && (
              <div className="absolute bg-white w-full shadow-md rounded-md mt-1 max-h-60 overflow-y-auto z-10">
                {searchData.map((product) => (
                  <Link to={`/product/${product._id}`} key={product._id}>
                    <div className="w-full flex items-center py-3 hover:bg-gray-200 rounded-md">
                      {product.images?.length > 0 && (
                        <img
                          src={product.images[0].url}
                          alt={product.name}
                          className="w-[40px] h-[40px] mr-[10px] rounded-md"
                        />
                      )}
                      <h1
                        className="text-gray-800"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                      >
                        {product.name}
                      </h1>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className={`${styles.button} ml-3 bg-rose-400`}>
            <Link
              to="/user-order"
              className="flex items-center text-white hover:text-rose-200"
            >
              <h1
                className="uppercase"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                My Order
              </h1>
              <IoIosArrowForward className="ml-1" />
            </Link>
          </div>
          <Link to="/cart">
            <button className="p-2 rounded-full bg-rose-400 hover:bg-gray-300">
              <AiOutlineShoppingCart size={25} className="text-white" />
            </button>
          </Link>
        </div>
      </header>
      <div>
        <div className="flex justify-center items-center min-h-screen">
          <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto text-center">
            <div className="circular-animation-container">
              <h1
                className="circular-animation text-rose-400 font-bold text-3xl lg:text-6xl"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Pet shop HappiPaws
              </h1>
            </div>
            <div
              className="text-gray-500 text-xs sm:text-base"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              HappiPaws là cửa hàng thú cưng với đa dạng sản phẩm, từ thức ăn
              hạt đến phụ kiện và súp thưởng, …. Chúng tôi cung cấp hộp quà bí
              ẩn đặc biệt và tính toán calo dành cho thú cưng trên website.
              <br />
              Hãy đến với chúng tôi để tận hưởng trải nghiệm mua sắm thú vị và
              chăm sóc thú cưng một cách thông minh!
            </div>
            <Link
              to="/shop"
              className="text-xs sm:text-xl text-rose-400 font-bold hover:underline"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Let's get started...
            </Link>
          </div>
        </div>
        <div>
          <div className="image-container relative w-full">
            <Link to="/">
              <div>
                <img src="uploads/slider-1.jpg" alt="Logo" />
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="overlay-text text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold uppercase text-gray-600">
                      Món ăn ngon <br />
                      kèm theo lợi ích
                    </h2>
                    <div className="mt-8">
                      <a
                        href="shop.html"
                        className=" text-white btn btn-outlined--primary btn-rounded py-3 px-6 bg-rose-400 hover:bg-rose-200 transition duration-300 ease-in-out"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="">
          <div className="policy-block grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border">
            <div className="policy-block-single flex flex-col items-center text-center p-4 border">
              <div className="icon mb-4">
                <span className="ti-truck text-3xl"></span>
              </div>
              <div className="text">
                <h3 className="text-xl font-semibold">Giao hàng miễn phí</h3>
                <p>Với đơn hàng trên $100</p>
              </div>
            </div>
            <div className="policy-block-single flex flex-col items-center text-center p-4 border">
              <div className="icon mb-4">
                <span className="ti-credit-card text-3xl"></span>
              </div>
              <div className="text">
                <h3 className="text-xl font-semibold">
                  Thanh toán khi giao hàng
                </h3>
                <p>Cash on Delivery</p>
              </div>
            </div>
            <div className="policy-block-single flex flex-col items-center text-center p-4 border">
              <div className="icon mb-4">
                <span className="ti-gift text-3xl"></span>
              </div>
              <div className="text">
                <h3 className="text-xl font-semibold">Hộp quà tặng miễn phí</h3>
                <p>Buy a Gift</p>
              </div>
            </div>
            <div className="policy-block-single flex flex-col items-center text-center p-4 border">
              <div className="icon mb-4">
                <span className="ti-headphone-alt text-3xl"></span>
              </div>
              <div className="text">
                <h3 className="text-xl font-semibold">Hỗ trợ miễn phí 24/7</h3>
                <p>Online 24hrs a Day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
