import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../store/dashboardSlice";
import { getAllProducts } from "../../store/productsSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.dashboard);

  const [uploadPhoto, setUploadPhoto] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [message,setMessage] = useState('');

  const formHandler = (e) => {
    setMessage('')
    e.preventDefault();
    let newProduct = {
      title,
      price,
      description,
      category,
      image: URL.createObjectURL(uploadPhoto),
    };
    dispatch(addPost(newProduct)).then(() => {
      setMessage('The product has been added successfully')
      setTitle("");
      setCategory("");
      setDescription("");
      setPrice("");
      setUploadPhoto(null);
      dispatch(getAllProducts());
    });
  };

  return (
    <section className="dashboard__add__product mt-5">
      <h2 className="main-heading">Add Product</h2>
      <form className="py-5" onSubmit={formHandler}>
        <div className="form-group">
          <label>Title</label>
          <input
            required
            type="text"
            placeholder="Enter Product Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            required
            type="text"
            placeholder="Enter Product Price $"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input
            required
            type="text"
            placeholder="Enter Product Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Photo</label>
          <input
            required
            type="file"
            name="inputPhoto"
            onChange={(e) => setUploadPhoto(e.target.files[0])}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            required
            type="text"
            placeholder="Enter Product Description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {/* {
          uploadPhoto && <img src={URL.createObjectURL(uploadPhoto)} alt="not found" />
        } */}
        <button className="form-btn" type="submit" disabled={isLoading}>
          {isLoading ? (
            <i className="fa-solid fa-spinner fa-spin-pulse"></i>
          ) : (
            <i className="fa-solid fa-location-arrow"></i>
          )}
          Add Product
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
    </section>
  );
};

export default AddProduct;
