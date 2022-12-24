import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/dashboard/Error";
import Message from "../../components/dashboard/Message";
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
    setMessage("");
    setID(id);
    const PRODUCT = products.filter((el) => el.id == id);
    setProduct(PRODUCT[0]);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deletePost(ID)).then(() => {
      dispatch(getAllProducts());
      setMessage(`${product.title} has been deleted`);
      setID("");
      setProduct("");
    });
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
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "50px", objectFit: "cover" }}
            />
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
      {message && <Message text={message} />}
      {/* End Message */}
      {/* Error */}
      {error && <Error text={error} />}
      {/* Error */}
    </div>
  );
};

export default DeleteProduct;
