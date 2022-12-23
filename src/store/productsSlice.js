import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
// import Swal from "sweetalert2";

// API
// const API_Products_URL = "http://localhost:3005/products";
const API_Products_URL = "https://fakestoreapi.com/products";

const initialState = {
  products: [],
  product: {},
  relateProducts: [],
  isProductsLoading: false,
  error: null,
};

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(API_Products_URL);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editPostById = createAsyncThunk(
  "products/editPostById",
  async (DATA, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      // console.log(`http://localhost:3005/products/${DATA.id}`);
      await fetch(`${API_Products_URL}/${DATA.id}`, {
        method: "PUT",
        body: JSON.stringify(DATA),
        headers: {'Content-Type': 'application/json'},
      });
      return DATA;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Get product by id
    getProductById(state, action) {
      let product = state.products.find((el) => el.id == action.payload);
      state.product = product;
    },
    // Get Products by Category
    getAllProductsByCategory(state, action) {
      let productsCategory = state.products.filter(
        (el) => el.category === action.payload
      );
      state.relateProducts = productsCategory;
    },
    // Edit Post
    editPost: (state, action) => {
      // let Product = state.products.find((el) => el.id == action.payload.id);
      // console.log('Product: ', current(Product));
      let otherProducts = state.products.filter(
        (el) => el.id != action.payload.id
      );
      // console.log('other Products: ',otherProducts);
      // console.log('PAYLOAD: ' , action.payload);
      otherProducts.push(action.payload);
      console.log("Other products: ", otherProducts);
      console.log("state:", current(state.products));

      state.products = otherProducts;

      // state.products = [...otherProducts, Product]
    },
  },
  extraReducers: {
    // get ALl Products
    [getAllProducts.pending]: (state, action) => {
      state.isProductsLoading = true;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      // console.log('State: ', current(state));

      state.products = action.payload;
      state.isProductsLoading = false;
    },
    [getAllProducts.rejected]: (state, action) => {
      state.isProductsLoading = false;
      state.error = action.payload;
    },
    // edit Product
    [editPostById.pending]: (state, action) => {
      state.isProductsLoading = true;
      state.error = null;
    },
    [editPostById.fulfilled]: (state, action) => {
      state.isProductsLoading = false;
      // state.products = action.payload;
      console.log('Edited!');
    },
    [editPostById.rejected]: (state, action) => {
      state.isProductsLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getProductById, getAllProductsByCategory, editPost } =
  productsSlice.actions;
export default productsSlice.reducer;
