import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

// seller request get
export const get_seller_index_data = createAsyncThunk(
  "dashboardIndex/get_seller_index_data",
  // admin_login function j khan theke call korbo shy khane para meter akare info (information pathabo)
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/seller/get-dashboard-index-data`, {
        // response to distructure data
        withCredentials: true,
      });
   

      return fulfillWithValue(data); //token and success message pass
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const get_admin_index_data = createAsyncThunk(
  "dashboardIndex/get_admin_index_data",
  // admin_login function j khan theke call korbo shy khane para meter akare info (information pathabo)
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/admin/get-dashboard-index-data`, {
        // response to distructure data
        withCredentials: true,
      });
      //   console.log(data);

      return fulfillWithValue(data); //token and success message pass
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const dashboardIndexReducer = createSlice({
  name: "dashboardIndex",
  initialState: {
    totalSale: 0,
    totalOrder: 0,
    totalProduct: 0,
    totalPendingOrder: 0,
    totalSeller: 0,
    recentOrder: [],
    // recentMessage: [],
  },
  reducers: {
    // clear message
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: {
    [get_seller_index_data.fulfilled]: (state, { payload }) => {
      state.totalSale = payload.totalSale;
      state.totalOrder = payload.totalOrder;
      state.totalProduct = payload.totalProduct;
      state.totalPendingOrder = payload.totalPendingOrder;
      state.recentOrder = payload.recentOrder;
    },
    [get_admin_index_data.fulfilled]: (state, { payload }) => {
      state.totalSale = payload.totalSale;
      state.totalOrder = payload.totalOrder;
      state.totalProduct = payload.totalProduct;
      state.totalSeller = payload.totalSeller;
      state.recentOrder = payload.recentOrder;
    },
  },
});
export const { messageClear } = dashboardIndexReducer.actions;
export default dashboardIndexReducer.reducer;
