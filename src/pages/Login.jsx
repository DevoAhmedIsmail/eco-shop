import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login,getUserFromApi } from "../store/authSlice";
import "../css/login.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isUserLoading, errorMessage, user } = useSelector((state) => state.auth);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
   
      dispatch(login({email, password}))

  };

  useEffect(()=>{
    dispatch(getUserFromApi())
    if(!errorMessage && Object.values(user).length) {
        setEmail("");
        setPassword("");
        navigate('/')
    }
  },[dispatch,errorMessage,navigate,user])

  return (
    <section className="login">
      <form className="py-5" onSubmit={handleLoginSubmit}>
        <div className="form-group">
          <label>email</label>
          <input
            required
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            required
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* Error Message */}
        <p className={`error-message ${errorMessage && 'active'}`} >{errorMessage}</p>

        {/* Submit Form */}
        <button type="submit" className="form-btn" disabled={isUserLoading}>
          {isUserLoading && (
            <i className="fa-solid fa-spinner fa-spin-pulse"></i>
          )}
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
