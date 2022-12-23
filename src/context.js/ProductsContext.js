import React, { createContext, useState } from "react";
import Swal from "sweetalert2";

export const ProductsContext = createContext();

function ProductsProvider(props) {
  // const API_Products_URL = "http://localhost:9000/products";
  //https://fakestoreapi.com/products
  const API_Products_URL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [phones, setPhones] = useState([]);
  const [cart, setCart] = useState([]);

  // Get all phone from products
  const getProductsWithCategory = (category) => {
    const newProducts = products.filter((product) => {
      return product.category === category ? product : null;
    });
    // console.log(newProducts)
    return newProducts;
  };

  // Remove all products from cart
  const clearCart = () => {
    Swal.fire({
      title: `Are you sure to clear the cart ?`,
      showCancelButton: true,
      icon: "question",
    }).then((res) => {
      if (res.isConfirmed) {
        setCart([]);
        Swal.fire({
          title: `The cart is empty now`,
          showConfirmButton: false,
          timer: 2000,
          icon: "success",
        });
      }
    });
  };

  //Remove Specific item from cart
  const removeItemFromCart = (id) => {
    Swal.fire({
      title: `Are you sure to delete this item ?`,
      showCancelButton: true,
      icon: "question",
    }).then((res) => {
      if (res.isConfirmed) {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
        Swal.fire({
          title: `The Product has been Removed from cart`,
          showConfirmButton: false,
          timer: 1000,
          icon: "success",
        });
      }
    });
  };

  

  return (
    <ProductsContext.Provider
      value={{
        products,
        phones,
        cart,
        setCart,
        clearCart,
        getProductsWithCategory,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
