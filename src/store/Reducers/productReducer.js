import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

//category add
export const add_product = createAsyncThunk(
  "category/add_product",
  // admin_login function j khan theke call korbo shy khane para meter akare info (information pathabo)
  async (product, { rejectWithValue, fulfillWithValue }) => {
    try {
     
      const { data } = await api.post("/product-add", product, {
        // response to distructure data
        withCredentials: true,
      });
      // console.log(data);
      return fulfillWithValue(data); //token and success message pass
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// get
export const get_product = createAsyncThunk(
  "category/get_product",
  // admin_login function j khan theke call korbo shy khane para meter akare info (information pathabo)
  async ({ searchValue }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(
        `/category-get?searchValue=${searchValue}`,
        {
          // response to distructure data
          withCredentials: true,
        }
      );

      return fulfillWithValue(data); //token and success message pass
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const productReducer = createSlice({
  name: "category",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    products: [],
    allProducts: 0,
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
    [add_product.pending]: (state, _) => {
      state.loader = true;
    },
    [add_product.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error; //backend e amra response error pathacchi r shy khan thekei error ta ashbe
    },
    [add_product.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
      
    },
    [get_product.fulfilled]: (state, { payload }) => {
      state.allProducts = payload.allProducts;
      state.products = payload.products;
    },
  },
});
export const { messageClear } = productReducer.actions;
export default productReducer.reducer;
