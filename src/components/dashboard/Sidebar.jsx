import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/sidebar.css";

const Sidebar = ({ toggleSidebar, showSideBar }) => {
  return (
    <div className={`dashboard-sidebar ${showSideBar && "active"}`}>
      <i className="fa-solid fa-xmark close-btn" onClick={toggleSidebar}></i>
      <div className="logo-title" to="/">
        <span>Eco</span>-Shop
      </div>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="dashboard-default-heading">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-default"
              aria-expanded="true"
              aria-controls="dashboard-default"
            >
              Default
            </button>
          </h2>
          <div
            id="dashboard-default"
            className="accordion-collapse collapse show"
            aria-labelledby="dashboard-default-heading"
          >
            <div className="accordion-body d-flex flex-column gap-3">
              <NavLink to="/dashboard" end>
                <i className="fa-solid fa-wand-magic-sparkles"></i> Dashboard
              </NavLink>
              <NavLink to="/" end>
                <i className="fa-solid fa-house"></i> Home
              </NavLink>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="action-heading">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-actions"
              aria-expanded="false"
              aria-controls="dashboard-actions"
            >
              Actions
            </button>
          </h2>
          <div
            id="dashboard-actions"
            className="accordion-collapse collapse show"
            aria-labelledby="action-heading"
          >
            <div className="accordion-body d-flex flex-column gap-3">
              <NavLink to="/dashboard/add-product" end>
                <i className="fa-solid fa-location-arrow"></i> Add new Product
              </NavLink>
              <NavLink to="/dashboard/edit-product" end>
                <i className="fa-solid fa-pen-to-square"></i> Update Product
              </NavLink>
              <NavLink to="/dashboard/delete-product" end>
                <i className="fa-solid fa-trash"></i> Delete Product
              </NavLink>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Orders
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body d-flex flex-column gap-3">
              <NavLink to="/dashboard/info" end>
                <i className="fa-solid fa-info"></i> Info
              </NavLink>
              <NavLink to="/dashboard/waiting" end>
                <i className="fa-solid fa-pause"></i> Waiting
              </NavLink>
              <NavLink to="/dashboard/shipping" end>
                <i className="fa-solid fa-truck-fast"></i> Shipping Now
              </NavLink>
              <NavLink to="/dashboard/completed" end>
                <i className="fa-solid fa-check-double"></i> Completed
              </NavLink>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
