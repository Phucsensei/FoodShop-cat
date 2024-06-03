import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../../../Utils/cartUtils";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {
      cartItems: [],
      shippingAddress: {},
      paymentMethod: "PayPal",
      itemsPrice: 0,
      shippingPrice: 0,
      taxPrice: 0,
      totalPrice: 0,
    };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { user, rating, numReviews, reviews, ...item } = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      const updatedState = updateCart(state);
      return updatedState;
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
      const updatedState = updateCart(state);
      return updatedState;
    },

    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      const updatedState = updateCart(state);
      return updatedState;
    },

    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      const updatedState = updateCart(state);
      return updatedState;
    },

    clearCartItems: (state) => {
      state.cartItems = [];
      const updatedState = updateCart(state);
      return updatedState;
    },

    resetCart: (state) => {
      localStorage.removeItem("cart");
      return initialState;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  savePaymentMethod,
  saveShippingAddress,
  clearCartItems,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
