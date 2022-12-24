import React, {  useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {clearCart} from '../store/cartSlice'
import {addOrder} from '../store/dashboardSlice';
import "../css/payment.css";
import visaLogo from "../images/visa-masterCard.png";

function Payment() {
  const [paymentInfo, setPaymentInfo] = useState({});

  const dispatch = useDispatch();
  const {totalPrice, cart} = useSelector(state=>state.cart)
  const {shippingInformation} = useSelector(state=> state.dashboard)


  let navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cancelBtn = () => {
    navigate("/cart/order");
  };

  const changeHandler = (e)=>{
    setPaymentInfo((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
  }

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addOrder({'cart': [...cart], 'shippingInformation': shippingInformation})).then(()=>{
      dispatch(clearCart())
      navigate('/cart/order/summary')
    })

  };

  return (
    <section className="payment py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="image-wrapper">
              <img
                src={visaLogo}
                alt="visa logo"
              />
            </div>
          </div>
          <div className="col-md-6">
            <form onSubmit={(e)=> submitForm(e)}>
              <h2>Payment Details</h2>
              <div>
                <input
                  type="text"
                  placeholder="Card Number"
                  name="cardNumber"
                  onChange={(e) => changeHandler(e)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Card Holder Name"
                  name="cardName"
                  onChange={(e) => changeHandler(e)}
                />
              </div>
              <div className="card-data-container d-flex">
                <input
                  type="text"
                  placeholder="month"
                  name="month"
                  onChange={(e) => changeHandler(e)}
                />
                <input
                  type="text"
                  placeholder="year"
                  name="year"
                  onChange={(e) => changeHandler(e)}
                />
                <input
                  type="text"
                  placeholder="CCV"
                  name="ccv"
                  onChange={(e) => changeHandler(e)}
                />
              </div>
              <div className="payment-btns">
                <button>
                  Confirm and pay {totalPrice} $
                </button>
                <button onClick={cancelBtn}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Payment;
