import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const apiURL = "http://localhost:3005/users";

const initialState = {
  users: [],
  user: {},
  isUserLoading: false,
  errorMessage: null,
};

export const getUserFromApi = createAsyncThunk(
  "auth/getUserFromApi",
  async (_, thunAPI) => {
    const { rejectWithValue } = thunAPI;
    try {
      const res = await fetch(apiURL);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //User login
    login(state, action) {
      state.isUserLoading = true;
      let userLoginSuccess = state.users.find(
        (el) =>
          el.email === action.payload.email  &&
          el.password === action.payload.password
      );
      console.log('Email: ', action.payload.email);
      console.log('Password: ', action.payload.password);
        console.log(current(userLoginSuccess));

      if (userLoginSuccess) {
        state.isUserLoading = false;
        state.user = userLoginSuccess
      }else {
        state.isUserLoading = false;
        state.errorMessage = 'Faild To Login';
      }
    },
    // User logout
    logout(state) {
        state.user = {};
    }
  },
  extraReducers: {
    // Get user from api
    [getUserFromApi.pending]: (state, action) => {
      state.isUserLoading = true;
      state.errorMessage = null;
    },
    [getUserFromApi.fulfilled]: (state, action) => {
      state.isUserLoading = false;
      state.users = action.payload;
    },
    [getUserFromApi.rejected]: (state, action) => {
      state.isUserLoading = false;
      state.errorMessage = action.payload;
      console.log(action.payload);
    },
  },
});

export const {login,logout} = authSlice.actions;
export default authSlice.reducer;
