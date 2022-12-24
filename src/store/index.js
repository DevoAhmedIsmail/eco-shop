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
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 128 },
    serializableCheck: { warnAfter: 128 },
  })
});

export default store;
