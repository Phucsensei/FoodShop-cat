import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import payos from "./utils/payos.js";
import Order from "./models/orderModel.js";

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) => {
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID });
});

app.get("/api/config/payos", (req, res) => {
  res.send({ clientId: process.env.PAYOS_CLIENT_ID });
});

app.post("/api/create-payment-link", async (req, res) => {
  let { totalPrice, orderId } = req.body;
  totalPrice = Math.round(totalPrice);
  console.log("Received totalPrice: ", totalPrice);

  if (totalPrice <= 0) {
    return res.status(400).json({ error: "Invalid totalPrice" });
  }

  const YOUR_DOMAIN = "http://localhost:5173";
  const returnUrl = `${YOUR_DOMAIN}/order/${orderId}`;
  const cancelUrl = `${YOUR_DOMAIN}/shop`;

  const body = {
    orderCode: Number(String(Date.now()).slice(-6)),
    amount: totalPrice,
    description: "Thanh toan don hang",
    returnUrl,
    cancelUrl,
  };

  try {
    const paymentLinkResponse = await payos.createPaymentLink(body);
    res.json({ checkoutUrl: paymentLinkResponse.checkoutUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.post("/api/payment-success", async (req, res) => {
  const { orderId, status } = req.body;

  if (!orderId || !status) {
    return res.status(400).json({ error: "Order ID and status are required" });
  }

  try {
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    if (status === "PAID") {
      order.isPaid = true;
      order.paidAt = Date.now();
      await order.save();
      res.status(200).json({ message: "Order marked as paid" });
    } else {
      res.status(400).json({ error: "Invalid payment status" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.listen(port, () => console.log(`Server running on port ${port}`));
