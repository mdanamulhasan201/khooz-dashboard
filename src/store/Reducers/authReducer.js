import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

// admin login
export const admin_login = createAsyncThunk(
  "auth/admin_login",
  // admin_login function j khan theke call korbo shy khane para meter akare info (information pathabo)
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/admin-login", info, {
        // response to distructure data
        withCredentials: true,
      });
      localStorage.setItem('accessToken', data.token)
      return fulfillWithValue(data); //token and success message pass
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: "",
  },
  reducers: {
    // clear message 
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: {
    //if we any url hit then three conditions faces 1st conditions pending 2nd if any error faces so reject and last 3rd request fullfil
    [admin_login.pending]: (state, _) => {
      state.loader = true;
    },
    [admin_login.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error; //backend e amra response error pathacchi r shy khan thekei error ta ashbe
    },
    [admin_login.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message; //backend e amra response success pathacchi r shy khan thekei error ta ashbe
    },
  },
});
export const { messageClear } = authReducer.actions;
export default authReducer.reducer;
