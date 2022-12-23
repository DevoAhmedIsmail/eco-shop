import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Line, Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import "../../css/dashboard.css";
import AnimatedNumbers from "react-animated-numbers";

const Dashboard = () => {
  const {
    totalEarning,
    shippingNow,
    waitingOrders,
    deliverdOrders,
    timeUpdate,
  } = useSelector((state) => state.dashboard);

  const pieChart = {
    labels: ["Electronics", "men's clothing", "jewelery", "women's clothing"],
    datasets: [
      {
        label: "Sales",
        data: [220, 190, 50, 310],
        backgroundColor: ["#9925be", "#49be25", "#66ccff", "#ff6600"],
        borderColor: ["#990099", "#009933", "#33ccff", "#ffa366"],
        borderWidth: 1,
      },
    ],
  };
  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  const lineChart = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Total Earning",
        data: [
          "1202.48",
          "2480.2",
          "3125.78",
          "1764.12",
          "2701.11",
          "4570.96",
          "1022.56",
          "1302.48",
          "1303.11",
          "2450.18",
          "3100.78",
          "4100.10",
        ],

        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const doughnutCart = {
    labels: ["User", "Visitor"],
    datasets: [
      {
        label: "# of people",
        data: [1402, 3214],
        backgroundColor: ["#ff42ae", "#42ffae"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="mt-5">
      <div className="dashboard-summary">
        <div className="row">
          <div className="col-lg-3 col-md-6 mt-3 ">
            {/* Card */}
            <div className="dashboard-card orange-card">
              <p className="dashboard-card__title">
                
                <AnimatedNumbers
                  includeComma
                  animateToNumber={totalEarning}
                  fontStyle={{ fontSize: 30 }}
                  configs={[
                    { mass: 1, tension: 220, friction: 100 },
                    { mass: 1, tension: 180, friction: 130 },
                    { mass: 1, tension: 280, friction: 90 },
                    { mass: 1, tension: 180, friction: 135 },
                    { mass: 1, tension: 260, friction: 100 },
                    { mass: 1, tension: 210, friction: 180 },
                  ]}
                ></AnimatedNumbers>
              </p>
              <div className="dashboard-card__body">
                <p>All Earning</p>
                <p>
                  <i className="fa-solid fa-sack-dollar"></i>
                </p>
              </div>
              <div className="split"></div>
              <div className="dashboard-card__footer">
                <i className="fa-regular fa-clock"></i>
                <p>update: {timeUpdate}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-3">
            {/* Card */}
            <div className="dashboard-card blue-card">
              <p className="dashboard-card__title">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={shippingNow}
                  fontStyle={{ fontSize: 30 }}
                  configs={[
                    { mass: 1, tension: 220, friction: 100 },
                    { mass: 1, tension: 180, friction: 130 },
                    { mass: 1, tension: 280, friction: 90 },
                    { mass: 1, tension: 180, friction: 135 },
                    { mass: 1, tension: 260, friction: 100 },
                    { mass: 1, tension: 210, friction: 180 },
                  ]}
                ></AnimatedNumbers>
              </p>
              <div className="dashboard-card__body">
                <p>Shipping Order</p>
                <p>
                  <i className="fa-solid fa-road"></i>
                </p>
              </div>
              <div className="split"></div>
              <div className="dashboard-card__footer">
                <i className="fa-regular fa-clock"></i>
                <p>update: {timeUpdate}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-3 ">
            {/* Card */}
            <div className="dashboard-card red-card ">
              <p className="dashboard-card__title">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={waitingOrders}
                  fontStyle={{ fontSize: 30 }}
                  configs={[
                    { mass: 1, tension: 220, friction: 100 },
                    { mass: 1, tension: 180, friction: 130 },
                    { mass: 1, tension: 280, friction: 90 },
                    { mass: 1, tension: 180, friction: 135 },
                    { mass: 1, tension: 260, friction: 100 },
                    { mass: 1, tension: 210, friction: 180 },
                  ]}
                ></AnimatedNumbers>
              </p>
              <div className="dashboard-card__body">
                <p>Waiting Order</p>
                <p>
                  <i className="fa-brands fa-readme"></i>
                </p>
              </div>
              <div className="split"></div>
              <div className="dashboard-card__footer">
                <i className="fa-regular fa-clock"></i>
                <p>update: {timeUpdate}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-3">
            {/* Card */}
            <div className="dashboard-card green-card">
              <p className="dashboard-card__title">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={deliverdOrders}
                  fontStyle={{ fontSize: 30 }}
                  configs={[
                    { mass: 1, tension: 220, friction: 100 },
                    { mass: 1, tension: 180, friction: 130 },
                    { mass: 1, tension: 280, friction: 90 },
                    { mass: 1, tension: 180, friction: 135 },
                    { mass: 1, tension: 260, friction: 100 },
                    { mass: 1, tension: 210, friction: 180 },
                  ]}
                ></AnimatedNumbers>
              </p>
              <div className="dashboard-card__body">
                <p>Delivered Orders</p>
                <p>
                  <i className="fa-solid fa-house-circle-check"></i>
                </p>
              </div>
              <div className="split"></div>
              <div className="dashboard-card__footer">
                <i className="fa-regular fa-clock"></i>
                <p>update: {timeUpdate}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="chart-content pt-5">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-6 mt-5" style={{ height: "300px" }}>
                  <div className="pieChart">
                    <Pie data={pieChart} />
                  </div>
                </div>
                <div className="col-md-6 mt-5" style={{ height: "300px" }}>
                  <div className="doughnut-chart">
                    <Doughnut data={doughnutCart} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 mt-5 line-chart px-5">
                  <Line options={lineChartOptions} data={lineChart} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="user-activity">
                <h4 className="text-bold ps-3 pb-3">User Activity</h4>
                <div className="divider"></div>
                <ul className="user-activity-list">
                  <li>
                    <div className="list-heading">
                      <p className="list-img">NN</p>
                      <div className="d-flex flex-column ms-3">
                        <p className="list-title">User</p>
                        <p className="list-status">new comment</p>
                      </div>
                    </div>
                    <p className="list-time">4 minutes ago</p>
                  </li>
                  <li>
                    <div className="list-heading">
                      <p className="list-img">NN</p>
                      <div className="d-flex flex-column ms-3">
                        <p className="list-title">User</p>
                        <p className="list-status">ordered 1 item</p>
                      </div>
                    </div>
                    <p className="list-time">9 minutes ago</p>
                  </li>
                  <li>
                    <div className="list-heading">
                      <p className="list-img">NN</p>
                      <div className="d-flex flex-column ms-3">
                        <p className="list-title">User</p>
                        <p className="list-status">orderd 3 items</p>
                      </div>
                    </div>
                    <p className="list-time">13 minutes ago</p>
                  </li>
                  <li>
                    <div className="list-heading">
                      <p className="list-img">NN</p>
                      <div className="d-flex flex-column ms-3">
                        <p className="list-title">User</p>
                        <p className="list-status">signed out</p>
                      </div>
                    </div>
                    <p className="list-time">18 minutes ago</p>
                  </li>
                  <li>
                    <div className="list-heading">
                      <p className="list-img">NN</p>
                      <div className="d-flex flex-column ms-3">
                        <p className="list-title">User</p>
                        <p className="list-status">ordered 1 items</p>
                      </div>
                    </div>
                    <p className="list-time">24 minutes ago</p>
                  </li>
                  <li>
                    <div className="list-heading">
                      <p className="list-img">NN</p>
                      <div className="d-flex flex-column ms-3">
                        <p className="list-title">User</p>
                        <p className="list-status">ordered 5 items</p>
                      </div>
                    </div>
                    <p className="list-time">31 minutes ago</p>
                  </li>
                </ul>
                <button className="btn-view-more">View More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
