import React from "react";
import { useNavigate } from "react-router-dom";
import ErrorImg from "../images/404-error.png";
import "../css/error.css";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section className="error text-center d-flex justify-content-center align-items-center">
      <div className="error-image-wrapper">
        <img src={ErrorImg} alt="Error" />
        <br />
      </div>
      <button onClick={() => navigate("/", { replace: true })}>
        <i className="fa-solid fa-arrow-left"></i> Go Back
      </button>
    </section>
  );
};

export default ErrorPage;
