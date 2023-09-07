import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";
import jwt from "jwt-decode";
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
      localStorage.setItem("accessToken", data.token);
      return fulfillWithValue(data); //token and success message pass
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// seller register
export const seller_register = createAsyncThunk(
  "auth/seller_register",
  // admin_login function j khan theke call korbo shy khane para meter akare info (information pathabo)
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      // console.log(info)
      const { data } = await api.post("/seller-register", info, {
        // response to distructure data
        withCredentials: true,
      });
      localStorage.setItem("accessToken", data.token);
      return fulfillWithValue(data); //token and success message pass
    } catch (error) {
      // console.log(error.response.data)
      return rejectWithValue(error.response.data);
    }
  }
);

// seller login
export const seller_login = createAsyncThunk(
  "auth/seller_login",
  // admin_login function j khan theke call korbo shy khane para meter akare info (information pathabo)
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      // console.log(info)
      const { data } = await api.post("/seller-login", info, {
        // response to distructure data
        withCredentials: true,
      });
      // console.log(data);
      localStorage.setItem("accessToken", data.token);
      return fulfillWithValue(data); //token and success message pass
    } catch (error) {
      // console.log(error.response.data)
      return rejectWithValue(error.response.data);
    }
  }
);

// seller register
export const get_user_info = createAsyncThunk(
  "auth/get_user_info",
  // admin_login function j khan theke call korbo shy khane para meter akare info (information pathabo)
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get("/get-user", {
        // response to distructure data
        withCredentials: true,
      });
      return fulfillWithValue(data); //token and success message pass
    } catch (error) {
      // console.log(error.response.data)
      return rejectWithValue(error.response.data);
    }
  }
);

// jwt token decode
const returnRole = (token) => {
  if (token) {
    const decodeToken = jwt(token);
    const expireTime = new Date(decodeToken.exp * 1000);
    if (new Date() > expireTime) {
      localStorage.removeItem("accessToken");
      return "";
    } else {
      return decodeToken.role;
    }
  } else {
    return "";
  }
};

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: "",
    role: returnRole(localStorage.getItem("accessToken")),
    token: localStorage.getItem("accessToken"), //jodi local stroage er modde token thake tahole shei token hobe na hole moloto null hobe
  },
  reducers: {
    // clear message
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: {
    // #### admin Login
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
      // set token and role admin jokhon login korteche
      state.token = payload.token;
      state.role = returnRole(payload.token);
    },

    // ###########seller login#############
    //if we any url hit then three conditions faces 1st conditions pending 2nd if any error faces so reject and last 3rd request fullfil
    [seller_login.pending]: (state, _) => {
      state.loader = true;
    },
    [seller_login.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error; //backend e amra response error pathacchi r shy khan thekei error ta ashbe
    },
    [seller_login.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message; //backend e amra response success pathacchi r shy khan thekei error ta ashbe
      state.token = payload.token;
      state.role = returnRole(payload.token);
    },

    // ###########seller register#############
    //if we any url hit then three conditions faces 1st conditions pending 2nd if any error faces so reject and last 3rd request fullfil
    [seller_register.pending]: (state, _) => {
      state.loader = true;
    },
    [seller_register.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error; //backend e amra response error pathacchi r shy khan thekei error ta ashbe
    },
    [seller_register.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message; //backend e amra response success pathacchi r shy khan thekei error ta ashbe
      state.token = payload.token;
      state.role = returnRole(payload.token);
    },

    // user info
    [get_user_info.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.userInfo = payload.userInfo; //backend e amra response success pathacchi r shy khan thekei error ta ashbe
      state.role = payload.userInfo.role;
    },
  },
});
export const { messageClear } = authReducer.actions;
export default authReducer.reducer;
