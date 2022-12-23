import React from 'react'
import './css/navDashboard.css'

const NavDashboard = ({toggleSidebar,showSideBar}) => {
  return (
    <nav>
      <span className='sidebar-btn' onClick={toggleSidebar}><i className="fa-solid fa-bars"></i></span>
      <h2>Dashboard</h2>
      <div>
      <i className="fa-solid fa-bell"></i>
      </div>
    </nav>
  )
}

export default NavDashboard
