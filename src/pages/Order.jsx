import React, {  useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux' 
import {setShippingInformation} from '../store/dashboardSlice'
import "../css/order.css";

function Order() {
  const [userOrderInfo, setUserOrderInfo] = useState({});
  // console.log(userOrderInfo);

  const dispatch = useDispatch();
  let navigate = useNavigate();
  let isRequired = false;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const changeHandler = (e) => {
    // console.log(e.target.name,e.target.value)
    setUserOrderInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      status: 'waiting'
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    // alert(userOrderInfo.length)
    dispatch(setShippingInformation(userOrderInfo))
    navigate("/cart/order/payment");
  };


  // console.log(userOrderInfo);

  return (
    <section className="order">
      <div className="container py-5">
        <h1 className="text-center">
          <span className="text-blue">Getting</span> Your order
        </h1>
        <form
          onSubmit={(e) => submitForm(e)}
          className="py-3">
          <div className="row">
            <div className="col-md-6 form-left">
              <h4 className="py-3 fw-bold">Shipping Information</h4>
              <div className="input-wrapper">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Enter Your Full Name"
                  required={isRequired}
                  onChange={(e) => changeHandler(e)}
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter Your Address"
                  required={isRequired}
                  onChange={(e) => changeHandler(e)}
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter Your City"
                  required={isRequired}
                  onChange={(e) => changeHandler(e)}
                />
              </div>
              <div className="d-flex">
                <div className="input-wrapper me-5">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="Enter Your State"
                    required={isRequired}
                    onChange={(e) => changeHandler(e)}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="zip">ZIP Code</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    placeholder="Enter Zip code"
                    required={isRequired}
                    onChange={(e) => changeHandler(e)}
                  />
                </div>
              </div>
              {/* End d-Flex */}
            </div>
            {/* End col-md-6 */}
            <div className="col-md-6 form-right">
              <h4 className="py-3 fw-bold">Contact information</h4>
              <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required={isRequired}
                  onChange={(e) => changeHandler(e)}
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="address">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter Your Phone"
                  required={isRequired}
                  onChange={(e) => changeHandler(e)}
                />
              </div>
            </div>
            {/* End col-md-6 */}
            <div className="d-flex justify-content-center">
              <button className="border-0 py-3 px-5 rounded  bg-blue text-white mt-5">
                Continue To Payment Information
              </button>
            </div>
          </div>
          {/* End Row */}
        </form>
      </div>
      {/* End Container */}
    </section>
  );
}

export default Order;
