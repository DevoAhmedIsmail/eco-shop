import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import { Link, NavLink } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <div className="logo-container">
            <h2>
              <NavLink to="/">
                <span>Eco</span>-Shop
              </NavLink>
            </h2>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/" end>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="cart">
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Last Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav__right">
            <ul>
              <li>
                <i className="fa-solid fa-magnifying-glass"></i>
              </li>
              <li>
                <i className="fa-regular fa-bell"></i>
              </li>
              <li>
                <i className="fa-regular fa-envelope"></i>
              </li>
              <li className="setting">
                <i className="fa-solid fa-gear pointer"></i>
                <div className="setting-dropdown">
                  <ul>
                    {user.isAdmin && (
                      <li>
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                    )}
                    {Object.values(user).length ? (
                      <li>
                        <Link onClick={() => dispatch(logout())}>logout</Link>
                      </li>
                    ) : (
                      <li>
                        <Link to="/user/login">Login</Link>
                      </li>
                    )}
                  </ul>
                </div>
              </li>
              {Object.values(user).length > 0&& (
                <li style={{ width: "90px" }}>
                  <div className="image-wrapper">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpcLzYU8SsybUPTpqpI01wbVK1Ysqi5FU98w&usqp=CAU" alt="avatar"/>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
