import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editPost,
  editPostById,
  getAllProducts,
} from "../../store/productsSlice";

const EditProduct = () => {
  const [ID, setID] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [message,setMessage] = useState("");


  const dispatch = useDispatch();
  const { products, isProductsLoading } = useSelector(
    (state) => state.products
  );
  let PRODUCT = {};

  const searchHandleChange = (e) => {
    e.preventDefault()
    PRODUCT = products.find((el) => el.id == ID);
    setTitle(PRODUCT.title);
    setDescription(PRODUCT.description);
    setPrice(PRODUCT.price);
    setCategory(PRODUCT.category);
    setImage(PRODUCT.image);
    setShowForm(true);
    setMessage('')
  };

  const editFormHandler = (e) => {
    e.preventDefault();
    // dispatch(editPost({id: ID, title: title, description: description, category: category, price: price}));
    dispatch(
      editPostById({ id: ID, title, description, category, price, image })
    ).then(() => {
      setMessage("Post edited successfully!");
      setTitle("");
      setDescription("");
      setPrice(0);
      setCategory("");
      setImage("");
      setID("");
      setShowForm(false);
      dispatch(getAllProducts());
    });
  };

  return (
    <section className="dashboard__edit__product mt-5">
      <h2 className="main-heading">Edit Product</h2>
      <form onSubmit={searchHandleChange}>
        <div className="form-group position-relative mt-5">
          <label>Search with Id</label>
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search Product Id"
              value={ID}
              onChange={(e) => setID(e.target.value)}
            />
            <button type="submit" className="search-btn">
              <i className="fa-solid fa-magnifying-glass search-icon"></i>{" "}
              Search
            </button>
          </div>
        </div>
      </form>

      {showForm && (
        <form className="py-5" onSubmit={editFormHandler}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter Product Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="text"
              placeholder="Enter Product Price $"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              placeholder="Enter Product Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              type="text"
              placeholder="Enter Product Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              type="text"
              placeholder="Enter Product Description"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            className="form-btn"
            type="submit"
            disabled={isProductsLoading}
          >
            {isProductsLoading ? (
              <i className="fa-solid fa-spinner fa-spin-pulse"></i>
            ) : (
              <i className="fa-solid fa-pen-to-square"></i>
            )}
            Update Product
          </button>
        </form>
      )}

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
    </section>
  );
};

export default EditProduct;
