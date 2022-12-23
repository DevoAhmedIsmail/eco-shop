import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeOrderStatus, getOrders } from "../../store/dashboardSlice";
import "../../css/waiting.css";

const Completed = () => {
   // const [] = useState([])
   const { orders, isLoading } = useSelector((state) => state.dashboard);

   // orders :=>  [{id,cart:{}, shippingInformation: {}},{id,cart:{}, shippingInformation: {}}]
 
   const changeHandlerStatus = ({ status, order, item }) => {
     let newCart = [];
     order.cart.map((el) => {
       if (el.id === item.id) {
         return newCart.push({ ...el, status });
       } else {
         return newCart.push(el);
       }
     });
     dispatch(
       changeOrderStatus({
         id: order.id,
         shippingInformation: order.shippingInformation,
         cart: newCart,
       })
     ).then(() => {
       dispatch(getOrders());
     });
   };
 
   const productsList =
     orders &&
     orders.map((order) =>
       order.cart.map(
         (item) =>
           item.status === "delivered" && (
             <tr key={item.id}>
               <td>{order.id}</td>
               <td>
                 <img src={item.image} alt={item.title} />
               </td>
               <td>{item.title}</td>
               <td>{item.quantity}</td>
               <td>{item.price * item.quantity}$</td>
               <td>
                 <span className="badge d-flex text-center align-items-center bg-blue px-5">
                   Delivered
                 </span>
               </td>
               <td>
                 <div className="table-actions">
                   <button
                     className="btn btn-warning"
                     onClick={() =>
                       changeHandlerStatus({ status: "shipping", order, item })
                     }
                   >
                     {isLoading && (
                       <i className="fa-solid fa-spinner fa-spin-pulse"></i>
                     )}
                     Shipping
                   </button>
                   
                 </div>
               </td>
             </tr>
           )
       )
     );
 
   const dispatch = useDispatch();
 
   useEffect(() => {
     dispatch(getOrders());
   }, [dispatch]);
 
   return (
     <section className="dashboard-waiting  mt-5">
       <h2 className="main-heading">Delivered Products</h2>
 
       <div className="table-wrapper">
         <table className="table table-hover">
           <thead>
             <tr>
               <th>ID</th>
               <th>Image</th>
               <th>Title</th>
               <th>Quantity</th>
               <th>Total Price</th>
               <th>Status</th>
               <th>Actions</th>
             </tr>
           </thead>
           <tbody>{productsList}</tbody>
         </table>
       </div>
     </section>
   );
};

export default Completed;
