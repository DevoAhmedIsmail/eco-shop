import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = { cart: [], isLoading: false, totalPrice: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // find the product in the cart
      let product = state.cart.find((item) => item.id === action.payload.id);
      // if it not exist create one
      if (product === undefined) {
        state.cart.push({ ...action.payload, quantity: 1,status: 'waiting' });
      } else {
        // if exist update quantity
        product.quantity = product.quantity + 1;
      }

      Swal.fire({
        title: `The Product has been added to cart`,
        showConfirmButton: false,
        timer: 1000,
        icon: "success",
      });
    },

    // Remove a product from the cart
    removeFromCart: (state, action) => {
      let newCart = state.cart.filter((item) => item.id !== action.payload);
      state.cart = newCart;
    },

    // Update the quantity of a product in the cart
    updateQuantity: (state, action) => {
      // find the product in the cart
      let product = state.cart.find((item) => item.id === action.payload.id);
      if (action.payload.method === "increase") {
        product.quantity = product.quantity + 1;
      } else {
        if (product.quantity === 1) {
          state.cart = state.cart.filter((item) => item.id !== product.id);
        } else {
          product.quantity = product.quantity - 1;
        }
      }
    },

    // Clear the cart
    clearCart: (state, action) => {
      state.cart = [];
    },

    // Calculate total Price
    calculateTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },

    // Send cart to dashboard

  },
  extraReducers: {},
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  calculateTotalPrice,
  clearCart
} = cartSlice.actions;
export default cartSlice.reducer;
