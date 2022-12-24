import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  shippingInformation: {},
  isLoading: false,
  error: null,
  totalEarning: 0,
  shippingNow: 0,
  waitingOrders: 0,
  deliverdOrders: 0,
  timeUpdate: null
};

export const addPost = createAsyncThunk(
  "dashboard/addPost",
  async (product, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3005/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "dashboard/deletePost",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:3005/products/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addOrder = createAsyncThunk(
  "dashboard/addOrder",
  async (DATA, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch("http://localhost:3005/orders", {
        method: "POST",
        body: JSON.stringify(DATA),
        headers: { "Content-Type": "application/json" },
      });
      return DATA;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getOrders = createAsyncThunk(
  "dashboard/getOrders",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3005/orders");
      const data = await res.json();
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const changeOrderStatus = createAsyncThunk(
  "dashboard/changeOrderStatus",
  async (info, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3005/orders/${info.id}`, {
        method: "PUT",
        body: JSON.stringify(info),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    // add information of shipping to the store
    setShippingInformation(state, action) {
      state.shippingInformation = action.payload;
    },
   
  },
  extraReducers: {
    // reducer for adding a post
    [addPost.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [addPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
    },
    [addPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // reducer for deleting a post
    [deletePost.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
    },
    [deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Add Order
    [addOrder.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [addOrder.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.orders.push(action.payload);
    },
    [addOrder.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Get Orders
    [getOrders.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getOrders.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
      const orders = action.payload;
      let TOTAL_PRICE = 0;
      let TOTAL_SHIPPING = 0;
      let TOTAL_WAITING = 0;
      let TOTAL_DELIVERED = 0;
      orders.map((order) => {
        return order.cart.map((el) => {
          if (el.status === "delivered") {
            TOTAL_DELIVERED += el.quantity;
            return (TOTAL_PRICE += el.price * el.quantity);
          } else if (el.status === "shipping") {
            return (TOTAL_SHIPPING += el.quantity);
          } else if (el.status === "waiting") {
            return (TOTAL_WAITING += el.quantity);
          }
          return true
        });
      });
      let time = new Date()
      state.timeUpdate = `${time.getHours()}:${time.getMinutes()}`;
      state.totalEarning = TOTAL_PRICE.toFixed(2);
      state.shippingNow = TOTAL_SHIPPING;
      state.waitingOrders = TOTAL_WAITING;
      state.deliverdOrders = TOTAL_DELIVERED;
    },
    [getOrders.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Change Order Status
    [changeOrderStatus.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [changeOrderStatus.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [changeOrderStatus.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setShippingInformation } = dashboardSlice.actions;
export default dashboardSlice.reducer;
