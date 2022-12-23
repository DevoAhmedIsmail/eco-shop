import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Actions
import {
  removeFromCart,
  updateQuantity,
  calculateTotalPrice,
  clearCart,
} from "../store/cartSlice";

// Css 
import "../css/cart.css";

function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  let countItems = 0;

  let privateTotalPrice = 0;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateTotalPriceState = () => {
    let finalPrice = privateTotalPrice.toFixed(2);
    dispatch(calculateTotalPrice(finalPrice));
  };

  let classDisplay = cart.length ? "" : "d-none";
  return (
    <section className="cart py-5">
      <div className="container">
        <h1 className="main-heading pb-5">Cart Details</h1>
        <div className={!cart.length ? "" : "d-none"}>
          <h5>
            There is no item here ... Try purchase{" "}
            <Link to="/" className="btn btn-primary">
              here
            </Link>
          </h5>
        </div>
        <div className={`cart-content ${classDisplay}`}>
          <div className="d-flex justify-content-end">
            <button
              className=" btn btn-danger"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>

          {/* OLD TABLE */}

          <div className="cart-items">
            {cart.map((product) => (
              <div className="row cart-item" key={product.id}>
                <div className="col-3">
                  <Link to={`/product/${product.id}`}>
                    <div className="image-wrapper">
                      <p className="d-none">
                        {
                          (privateTotalPrice +=
                            product.price * product.quantity)
                        }
                        {(countItems += product.quantity)}
                      </p>
                      <img src={product.image} alt={product.title} />
                    </div>
                  </Link>
                </div>
                <div className="col-6">
                  <h4>{product.title}</h4>
                  <p>{product.details}</p>
                  <span className="text-bold">Price : {product.price} $</span>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <i
                    className="fa-solid fa-minus operate-icon pointer"
                    onClick={() =>
                      dispatch(
                        updateQuantity({ id: product.id, method: "decrease" })
                      )
                    }
                  ></i>
                  <span className="mx-2 fw-semibold">{product.quantity}</span>
                  <i
                    className="fa-solid fa-plus operate-icon pointer"
                    onClick={() =>
                      dispatch(
                        updateQuantity({ id: product.id, method: "increase" })
                      )
                    }
                  ></i>
                  <i
                    className="fa-solid fa-trash ms-5 text-danger pointer fs-4"
                    onClick={() => dispatch(removeFromCart(product.id))}
                  ></i>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End Cart Content */}
        <div className={cart.length ? "order-now pt-5" : "d-none"}>
          <p className="text-bold m-0">
            You have {countItems} items in Your Cart for total of :{" "}
            {privateTotalPrice.toFixed(2)}$
          </p>
          <Link
            to="/cart/order"
            className="order-now__btn ms-3"
            onClick={updateTotalPriceState}
          >
            Order Now
          </Link>
        </div>
      </div>
      {/* End Container */}
    </section>
  );
}

export default Cart;
