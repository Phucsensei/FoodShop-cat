import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { format } from "date-fns";
import {
  useDeliverOrderMutation,
  useGetOrderDetailsQuery,
  useGetPaypalClientIdQuery,
  useGetPayosClientIdQuery,
  usePayOrderMutation,
} from "../../redux/api/orderApiSlice";

const Order = () => {
  const { id: orderId } = useParams();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const status = query.get("status");

  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId);

  const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();
  const [deliverOrder, { isLoading: loadingDeliver }] =
    useDeliverOrderMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  const {
    data: paypal,
    isLoading: loadingPayPal,
    error: errorPayPal,
  } = useGetPaypalClientIdQuery();

  const {
    data: payos,
    isLoading: loadingPayos,
    error: errorPayos,
  } = useGetPayosClientIdQuery();

  const [paymentCompleted, setPaymentCompleted] = useState(false);

  useEffect(() => {
    if (!errorPayPal && !loadingPayPal && paypal.clientId) {
      const loadPayPalScript = async () => {
        paypalDispatch({
          type: "resetOptions",
          value: {
            "client-id": paypal.clientId,
            currency: "USD",
          },
        });
        paypalDispatch({ type: "setLoadingStatus", value: "pending" });
      };

      if (order && !order.isPaid) {
        if (!window.paypal) {
          loadPayPalScript();
        }
      }
    }
  }, [errorPayPal, loadingPayPal, order, paypal, paypalDispatch]);

  useEffect(() => {
    if (payos && payos.clientId) {
      console.log("PayOS Client ID:", payos.clientId);
    }
  }, [payos]);

  useEffect(() => {
    if (status === "PAID") {
      handleQrPaymentSuccess();
    }
  }, [status]);

  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        await payOrder({ orderId, details });
        refetch();
        toast.success("Order is paid");
        setPaymentCompleted(true);
      } catch (error) {
        toast.error(error?.data?.message || error.message);
      }
    });
  }

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [{ amount: { value: order.totalPrice } }],
      })
      .then((orderID) => {
        return orderID;
      });
  }

  function onError(err) {
    toast.error(err.message);
  }

  const deliverHandler = async () => {
    await deliverOrder(orderId);
    refetch();
  };

  const createPaymentLink = async () => {
    try {
      let totalPrice = Math.round(order.totalPrice * 1000);
      if (totalPrice <= 0) {
        console.error("Invalid totalPrice");
        return;
      }
      const response = await fetch(
        "http://localhost:5000/api/create-payment-link",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ totalPrice, orderId }), // Gửi orderId
        }
      );

      const data = await response.json();
      if (response.ok) {
        window.location.href = data.checkoutUrl;
      } else {
        console.error("Error creating payment link:", data.error);
      }
    } catch (error) {
      console.error("Error creating payment link:", error);
    }
  };

  const handleQrPaymentSuccess = async () => {
    try {
      await payOrder({ orderId });
      refetch();
      toast.success("Order is paid");
      setPaymentCompleted(true);
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error.data.message}</Message>
  ) : (
    <div className="container mx-auto flex flex-col md:flex-row p-6">
      <div className="md:w-2/3 pr-4">
        <div className="border-b pb-4 mb-5">
          {order.orderItems.length === 0 ? (
            <Message>Order is empty</Message>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-md rounded-lg">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-2">Image</th>
                    <th className="p-2">Product</th>
                    <th className="p-2 text-center">Quantity</th>
                    <th className="p-2 text-center">Unit Price</th>
                    <th className="p-2 text-center">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {order.orderItems.map((item, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      </td>
                      <td className="p-2">
                        <Link
                          to={`/product/${item.product}`}
                          className="text-blue-500 hover:underline"
                        >
                          {item.name}
                        </Link>
                      </td>
                      <td className="p-2 text-center">{item.qty}</td>
                      <td className="p-2 text-center">
                        {item.price.toFixed(2)} ₫
                      </td>
                      <td className="p-2 text-center">
                        {(item.qty * item.price).toFixed(2)} ₫
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <div className="md:w-1/3">
        <div className="border p-4 rounded-lg shadow-md mb-4 bg-white">
          <h2 className="text-2xl font-bold mb-4">Shipping</h2>
          <p className="mb-2">
            <strong className="text-pink-500">Order ID:</strong> {order._id}
          </p>
          <p className="mb-2">
            <strong className="text-pink-500">Name:</strong>{" "}
            {order.user.username}
          </p>
          <p className="mb-2">
            <strong className="text-pink-500">Email:</strong> {order.user.email}
          </p>
          <p className="mb-2">
            <strong className="text-pink-500">Address:</strong>{" "}
            {order.shippingAddress.address}, {order.shippingAddress.city}{" "}
            {order.shippingAddress.postalCode}, {order.shippingAddress.country}
          </p>
          <p className="mb-2">
            <strong className="text-pink-500">Payment Method:</strong>{" "}
            {order.paymentMethod}
          </p>
          {order.isPaid ? (
            <Message variant="success">
              Paid on {format(new Date(order.paidAt), "yyyy-MM-dd HH:mm:ss")}
            </Message>
          ) : (
            <Message variant="danger">Not paid</Message>
          )}
        </div>

        {!paymentCompleted && !order.isPaid && (
          <div className="border p-4 rounded-lg shadow-md mb-4 bg-white">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Items:</span>
              <span>{order.itemsPrice} ₫</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>{order.shippingPrice} ₫</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax:</span>
              <span>{order.taxPrice} ₫</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Total:</span>
              <span>{order.totalPrice} ₫</span>
            </div>

            {loadingPay && <Loader />}
            {isPending ? (
              <Loader />
            ) : (
              <div>
                <PayPalButtons
                  createOrder={createOrder}
                  onApprove={onApprove}
                  onError={onError}
                />
              </div>
            )}

            <button
              type="button"
              className="bg-blue-500 text-white w-full py-2 mt-4 rounded-lg"
              onClick={createPaymentLink}
            >
              Quét mã QR
            </button>
          </div>
        )}

        {loadingDeliver && <Loader />}
        {userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (
          <button
            type="button"
            className="bg-pink-500 text-white w-full py-2 mt-4 rounded-lg"
            onClick={deliverHandler}
          >
            Mark As Delivered
          </button>
        )}
      </div>
    </div>
  );
};

export default Order;
