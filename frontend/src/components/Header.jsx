import { useState, useEffect } from "react";
import { useGetTopProductsQuery } from "../redux/api/productApiSlice";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import styles from "../styles/styles";
import "../styles.css"; // Ensure you have imported the CSS file
import Footer from "./footer";

const CartDropdown = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-20">
      {cartItems.length === 0 ? (
        <div className="p-4">Your cart is empty</div>
      ) : (
        <div className="p-4">
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-md"
              />
              <div className="ml-4">
                <Link to={`/product/${item._id}`} className="text-black">
                  {item.name}
                </Link>
                <div className="text-sm text-gray-500">
                  {item.qty} x {item.price}₫
                </div>
              </div>
            </div>
          ))}
          <Link to="/cart" className="text-blue-500 hover:underline">
            View Cart
          </Link>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { userInfo } = useSelector((state) => state.auth); // Get user info from Redux store

  const { data } = useGetTopProductsQuery();

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
        <div className="flex justify-between items-center max-w-8xl mx-auto p-5">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img
                className="w-48"
                src="uploads/420242990_375013125221320_4244492130705290905_n.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="flex-grow mx-10 relative">
            <input
              type="text"
              placeholder="Tìm kiếm thông tin tại đây"
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
          <div className="flex items-center space-x-4">
            <div className={`${styles.button} bg-rose-400`}>
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
            {userInfo ? (
              <button className="flex items-center space-x-2">
                <AiOutlineUser className="text-gray-800" size={25} />
                <span
                  className="text-gray-800"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  {userInfo.username}
                </span>
              </button>
            ) : (
              <Link
                to="/login"
                className="text-gray-800 hover:text-rose-400"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </header>
      <div>
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
        <div className="mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-lg shadow-lg p-8">
            <div className="flex-1 border border-gray-300 rounded-lg p-4">
              <h2
                className="text-3xl font-semibold mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                HỆ THỐNG SHOP CỬA HÀNG THÚ CƯNG{" "}
                <span className="text-rose-400">HAPPI PAWS</span>
              </h2>
              <p
                className="mb-4"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                <a href="#" className="text-rose-400 hover:underline text-lg">
                  HAPPI PAWS
                </a>{" "}
                là chuỗi pet shop thú cưng –
                <a href="#" className="text-rose-400 hover:underline">
                  {" "}
                  Đồ cho mèo
                </a>{" "}
                tại Thành phố Hồ Chí Minh, Hà Nội, Đà Nẵng và Hải Phòng với hệ
                thống nhiều chi nhánh cửa hàng thú cưng chuyên cung cấp vật
                dụng, quần áo, thức ăn, sữa tắm, chuồng, vòng cổ xích và các phụ
                kiện dành cho vật nuôi cảnh...
              </p>
              <p
                className="mb-4"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                Là điểm đến hàng đầu tại Việt Nam chuyên cung cấp các dịch vụ
                tắm spa, chăm sóc, cắt tỉa lông và trông giữ thú cưng chuyên
                nghiệp. Với chất lượng dịch vụ tốt nhất luôn được khách hàng tin
                tưởng và đánh giá cao.
              </p>
            </div>
            <div className="flex-1 border border-gray-300 rounded-lg p-4">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/9qvh_CSAFJw?si=yKXFfEqNkCA4X6zn"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
