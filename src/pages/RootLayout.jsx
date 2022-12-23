import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

//  TEMPORARY 
import ProductsProvider from "../context.js/ProductsContext";
import { getUserFromApi } from '../store/authSlice';
import { getAllProducts } from '../store/productsSlice';

const RootLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getUserFromApi())

  }, [dispatch]);
  return (
    <ProductsProvider>
       <Navbar /> 
            <Outlet />
       <Footer />
    </ProductsProvider>
  )
}

export default RootLayout
