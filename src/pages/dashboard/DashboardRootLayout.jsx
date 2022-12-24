import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import "../../components/dashboard/css/dashboard.css";
import NavDashboard from "../../components/dashboard/NavDashboard";
import Sidebar from "../../components/dashboard/Sidebar";
import { getOrders } from "../../store/dashboardSlice";
import { getAllProducts } from "../../store/productsSlice";

const DashboardRootLayout = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSidebar = () => {
    setShowSideBar(!showSideBar);
  };

  const closeSideBar = () => {
    setShowSideBar(false);
  }

  const openSideBar = () => {
    setShowSideBar(true);
  }
 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getOrders())

    !user.isAdmin && navigate("/");
  }, [dispatch,user,navigate]);

  return (
    <section className="dashboard">
      <Sidebar toggleSidebar={toggleSidebar} closeSideBar={closeSideBar} openSideBar={openSideBar} showSideBar={showSideBar} />
      <div className="dashboard-main">
        <NavDashboard
          toggleSidebar={toggleSidebar}
          setShowSideBar={setShowSideBar}
        />
        <div className="dashboard-content py-5">
          <div className="container-lg">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardRootLayout;
