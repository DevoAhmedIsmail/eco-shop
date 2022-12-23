import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../store/dashboardSlice";
import { getAllProducts } from "../../store/productsSlice";

const DeleteProduct = () => {
  const [ID, setID] = React.useState("");
  const [product, setProduct] = React.useState("");
  const [message, setMessage] = React.useState("");

  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.dashboard);
  const { products } = useSelector((state) => state.products);

  const changeHandler = (id) => {
    setMessage('')
    setID(id);
    const PRODUCT = products.filter((el) => el.id == id);
    setProduct(PRODUCT[0]);
    console.log(PRODUCT, ID);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deletePost(ID)).then(() => {
      dispatch(getAllProducts())
      setMessage(`${product.title} has been deleted`);
      setID("");
      setProduct('')
    });
    // console.log("After Clicked :", ID);
  };

  return (
    <div className=" mt-5">
      <h2 className="main-heading">Delete Product</h2>
      <form className="py-5" onSubmit={handleDelete}>
        <div className="form-group">
          <label>Product ID</label>
          <input
            type="text"
            placeholder="Enter Product Id"
            value={ID}
            onChange={(e) => changeHandler(e.target.value)}
          />
        </div>
        {product && (
          <div className="d-flex align-items-center">
            <img src={product.image} alt={product.title} style={{width: '50px', objectFit: 'cover'}} />
            <p className="ms-3">{product.title}</p>
          </div>
        )}
        <button className="form-btn" type="submit" disabled={isLoading}>
          {isLoading ? (
            <i className="fa-solid fa-spinner fa-spin-pulse"></i>
          ) : (
            <i className="fa-solid fa-trash"></i>
          )}
          Delete Product
        </button>
      </form>
      
      {/* Message */}
      {message && (
        <div
          className="toast align-items-center text-white bg-primary position-fixed bottom-0 mb-3 end-0 border-0 show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">
             {message}
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      )}
      {/* End Message */}
      {/* Error */}
      {error && (
        <div
          className="toast align-items-center text-white bg-primary position-fixed bottom-0 mb-3 end-0 border-0 show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">
              Hello, world! This is a toast message.
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      )}
      {/* Error */}
    </div>
  );
};

export default DeleteProduct;
