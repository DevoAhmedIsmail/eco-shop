import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders, changeOrderStatus } from "../../store/dashboardSlice";
import "../../css/waiting.css";

const Waiting = () => {
  const { orders, isLoading } = useSelector((state) => state.dashboard);

  const changeHandlerStatus = ({ status, order, item }) => {
    let newCart = [];
    order.cart.map((el) => {
      if (el.id === item.id) {
        return newCart.push({ ...el, status });
      } else {
        return newCart.push(el);
      }
    });
    dispatch(
      changeOrderStatus({
        id: order.id,
        shippingInformation: order.shippingInformation,
        cart: newCart,
      })
    ).then(() => {
      dispatch(getOrders());
    });
  };

  const productsList =
    orders &&
    orders.map((order) =>
      order.cart.map(
        (item) =>
          item.status === "waiting" && (
            <tr key={item.id}>
              <td>{order.id}</td>
              <td>
                <img src={item.image} alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity}$</td>
              <td>
                <div className="table-actions">
                  <button
                    className="btn btn-success"
                    onClick={() =>
                      changeHandlerStatus({ status: "shipping", order, item })
                    }
                  >
                    {isLoading && (
                      <i className="fa-solid fa-spinner fa-spin-pulse"></i>
                    )}
                    Shipping
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      changeHandlerStatus({ status: "rejected", order, item })
                    }
                  >
                    {isLoading && (
                      <i className="fa-solid fa-spinner fa-spin-pulse"></i>
                    )}
                    Rejected
                  </button>
                </div>
              </td>
            </tr>
          )
      )
    );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <section className="dashboard-waiting mt-5">
      <h2 className="main-heading">Products Info</h2>

      <div className="table-wrapper">
        <table className="table table-hover table-responsive">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Title</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{productsList}</tbody>
        </table>
      </div>
    </section>
  );
};

export default Waiting;
