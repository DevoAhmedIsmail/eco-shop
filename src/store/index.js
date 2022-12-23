import { configureStore } from "@reduxjs/toolkit";
import products from "./productsSlice";
import cart from './cartSlice';
import dashboard from './dashboardSlice'
import auth from './authSlice'

const store = configureStore({
  reducer: {
    products,
    cart,
    dashboard,
    auth
  },
});

export default store;
