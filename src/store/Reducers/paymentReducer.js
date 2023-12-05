import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_seller_payment_details = createAsyncThunk(
  "payment/get_seller_payment_details",

  async (sellerId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(
        `/payment/seller-payments-details/${sellerId}`,
        {
          withCredentials: true,
        }
      );
      // console.log(data);
      return fulfillWithValue(data); //token and success message pass
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const send_withdraw_Request = createAsyncThunk(
  "payment/send_withdraw_Request",

  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post(`/payment/withdraw-Request`, info, {
        withCredentials: true,
      });
      // console.log(data);
      return fulfillWithValue(data); //token and success message pass
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const get_payment_request = createAsyncThunk(
  "payment/get_payment_request",

  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/payment/get-request`, {
        withCredentials: true,
      });
      // console.log(data);
      return fulfillWithValue(data); //token and success message pass
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const confirm_payment_request = createAsyncThunk(
  "payment/confirm_payment_request",
  async (paymentId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post(`/payment/confirm-payment-request`,{ paymentId },
        { withCredentials: true }
      );
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const PaymentReducer = createSlice({
  name: "payment",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    pendingWithdraws: [],
    successWithdraws: [],
    totalAmount: 0,
    withdrawAmount: 0,
    pendingAmount: 0,
    availableAmount: 0,
  },
  reducers: {
    // clear message
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: {
    [get_seller_payment_details.fulfilled]: (state, { payload }) => {
      state.pendingWithdraws = payload.pendingWithdraws;
      state.successWithdraws = payload.successWithdraws;
      state.totalAmount = payload.totalAmount;
      state.availableAmount = payload.availableAmount;
      state.withdrawAmount = payload.withdrawAmount;
      state.pendingAmount = payload.pendingAmount;
    },
    [send_withdraw_Request.pending]: (state, _) => {
      state.loader = true;
    },
    [send_withdraw_Request.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.message;
    },
    [send_withdraw_Request.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
      state.pendingWithdraws = [...state.pendingWithdraws, payload.withdraw];
      state.availableAmount = state.availableAmount - payload.withdraw.amount;
      state.pendingAmount = payload.withdraw.amount;
    },

    [get_payment_request.fulfilled]: (state, { payload }) => {
      state.pendingWithdraws = payload.withdrawRequest;
    },

    [confirm_payment_request.pending]: (state, _) => {
      state.loader = true;
    },
    [confirm_payment_request.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.message;
    },
    [confirm_payment_request.fulfilled]: (state, { payload }) => {
      const temp = state.pendingWithdraws.filter(r=>r._id !== payload.payment._id)
      state.loader = false;
      state.successMessage = payload.message;
      state.pendingWithdraws = temp;
    },
  },
});
export const { messageClear } = PaymentReducer.actions;
export default PaymentReducer.reducer;
