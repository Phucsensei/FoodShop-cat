import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  saveShippingAddress,
  savePaymentMethod,
} from "../../redux/features/cart/cartSlice";
import ProgressSteps from "../../components/ProgressSteps";

const Shipping = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress.country || "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (paymentMethod) {
      dispatch(saveShippingAddress({ address, city, postalCode, country }));
      dispatch(savePaymentMethod(paymentMethod));
      navigate("/placeorder");
    } else {
      alert("Please select a payment method.");
    }
  };
  // Payment
  useEffect(() => {
    if (!shippingAddress.address) {
      navigate("/shipping");
    }
  }, [navigate, shippingAddress]);

  return (
    <div className="container mx-auto mt-10">
      <ProgressSteps step1 step2 />
      <div className="mt-16 flex justify-around items-center flex-wrap">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg"
        >
          <h1 className="text-3xl font-bold mb-6">Shipping</h1>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Address
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg form-input bg-gray-100"
              placeholder="Enter address"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              City
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg form-input bg-gray-100"
              placeholder="Enter city"
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Postal Code
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg form-input bg-gray-100"
              placeholder="Enter postal code"
              value={postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Country
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg form-input bg-gray-100"
              placeholder="Enter country"
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Select Payment Method
            </label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-600"
                  name="paymentMethod"
                  value="PayPal"
                  checked={paymentMethod === "PayPal"}
                  onChange={() => setPaymentMethod("PayPal")}
                />
                <span className="ml-2">PayPal or Credit Card</span>
              </label>
            </div>
          </div>
          <div className="mb-6">
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-600"
                  name="paymentMethod"
                  value="PayOs"
                  checked={paymentMethod === "PayOs"}
                  onChange={() => setPaymentMethod("PayOs")}
                />
                <span className="ml-2">Thanh toán QRPAY</span>
              </label>
            </div>
          </div>
          <button
            className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold w-full hover:bg-blue-700 transition-colors duration-300"
            type="submit"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
