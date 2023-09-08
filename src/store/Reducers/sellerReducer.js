import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

// seller request get
export const get_seller_request = createAsyncThunk(
  "seller/get_seller_request",
  // admin_login function j khan theke call korbo shy khane para meter akare info (information pathabo)
  async ({ searchValue }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(
        `/get-sellers-request?searchValue=${searchValue}`,
        {
          // response to distructure data
          withCredentials: true,
        }
      );
      //   console.log(data);

      return fulfillWithValue(data); //token and success message pass
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const get_seller_details = createAsyncThunk(
  "seller/get_seller_details",
  // admin_login function j khan theke call korbo shy khane para meter akare info (information pathabo)
  async (sellerId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/get-seller-details/${sellerId}`, {
        // response to distructure data
        withCredentials: true,
      });

      return fulfillWithValue(data); //token and success message pass
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const seller_status_update = createAsyncThunk(
  "seller/seller_status_update",
  // admin_login function j khan theke call korbo shy khane para meter akare info (information pathabo)
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post(`/seller-status-update`, info, {
        // response to distructure data
        withCredentials: true,
      });

      return fulfillWithValue(data); //token and success message pass
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const sellerReducer = createSlice({
  name: "category",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    sellers: [],
    seller: "",
    totalSeller: 0,
  },
  reducers: {
    // clear message
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: {
    [get_seller_request.fulfilled]: (state, { payload }) => {
      state.sellers = payload.sellers;
      state.totalSeller = payload.totalSeller;
    },
    [get_seller_details.fulfilled]: (state, { payload }) => {
      state.seller = payload.seller;
    },
    [seller_status_update.fulfilled]: (state, { payload }) => {
      state.seller = payload.seller;
      state.successMessage = payload.message;
    },
  },
});
export const { messageClear } = sellerReducer.actions;
export default sellerReducer.reducer;
