import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

// CSS AND BOOTSTRAP STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./css/App.css";
import "./css/global.css";
import "./css/footer.css";

// store
import store from "./store";

// Components
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Payment from "./pages/Payment";
import OrderSummary from "./pages/OrderSummary";
import About from "./pages/About";
import CartRootLatout from "./pages/CartRootLatout";
import ErrorPage from "./pages/ErrorPage";
import DashboardRootLayout from "./pages/dashboard/DashboardRootLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import AddProduct from './pages/dashboard/AddProduct'
import EditProduct from './pages/dashboard/EditProduct'
import Info from "./pages/dashboard/Info";
import Waiting from "./pages/dashboard/Waiting";
import Shipping from "./pages/dashboard/Shipping";
import Completed from "./pages/dashboard/Completed";
import DeleteProduct from "./pages/dashboard/DeleteProduct";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product/:productId",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <CartRootLatout />,
        children: [
          {
            index: true,
            element: <Cart />,
          },
          {
            path: "order",
            element: <Order />,
          },
          {
            path: "order/payment",
            element: <Payment />,
          },
          {
            path: "order/summary",
            element: <OrderSummary />,
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: 'user/login',
        element: <Login />
      }
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardRootLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'add-product',
        element: <AddProduct />
      },
      {
        path: 'edit-product',
        element: <EditProduct />
      }
      ,
      {
        path: 'delete-product',
        element: <DeleteProduct />
      },
      {
        path: "info",
        element: <Info />,
      },
      {
        path: 'waiting',
        element: <Waiting />,
      },
      {
        path: 'shipping',
        element: <Shipping />,
      },
      {
        path: 'completed',
        element: <Completed />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);
