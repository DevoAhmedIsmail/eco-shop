import React from 'react'
import Confetti from 'react-confetti'
import {Link, useNavigate} from 'react-router-dom'


function OrderSummary() {
  let navigate = useNavigate();
  setTimeout(()=>{
    navigate('/')
  },5000)
  return (
    <section className='order-summary py-5 hidden'>
      <div className="container">
        <div className='d-flex justify-content-center align-items-center' style={{flexDirection: 'column'}}>
          <h1>Congratulation</h1>
          <p>Your order is on way</p>
          <Link to="/" className='bg-blue text-white py-2 px-3 mt-5 rounded' >Back to Home</Link>
          <Confetti />
        </div>
      </div>
    </section>
  )
}

export default OrderSummary
