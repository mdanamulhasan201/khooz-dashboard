import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

//category add
export const add_product = createAsyncThunk(
  "product/add_product",
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

// get product in seller
export const get_products = createAsyncThunk(
  "product/get_products",
  // admin_login function j khan theke call korbo shy khane para meter akare info (information pathabo)
  async ({ email }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(
        `/products-get/${email}`,
        {
          // response to distructure data
          withCredentials: true,
        }
      );
      // console.log(data)

      return fulfillWithValue(data); //token and success message pass
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// edit get product in sellers
export const get_product = createAsyncThunk(
  "product/get_product",

  async (productId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/product-get/${productId}`, {
        // response to distructure data
        withCredentials: true,
      });
      console.log(data)

      return fulfillWithValue(data); //token and success message pass
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const update_product = createAsyncThunk(
  "product/update_product",
  // admin_login function j khan theke call korbo shy khane para meter akare info (information pathabo)
  async (product, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/product-update", product, {
        // response to distructure data
        withCredentials: true,
      });
      console.log(data);
      return fulfillWithValue(data); //token and success message pass
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// product_image_update
export const product_image_update = createAsyncThunk(
  "product/product_image_update ",
  // admin_login function j khan theke call korbo shy khane para meter akare info (information pathabo)
  async (
    { oldImage, newImage, productId },{ rejectWithValue, fulfillWithValue }) => {
    try {
      const formData = new FormData()
      formData.append('oldImage', oldImage)
      formData.append('newImage', newImage)
      formData.append('productId', productId)
    
      const { data } = await api.post("/product-image-update", formData, {
        // response to distructure data
        withCredentials: true,
      });
      console.log(data);
      return fulfillWithValue(data); //token and success message pass
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const productReducer = createSlice({
  name: "product",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    products: [],
    product: "",
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
    [get_products.fulfilled]: (state, { payload }) => {
      state.allProducts = payload.allProducts;
      state.products = payload.products;
    },
    [get_product.fulfilled]: (state, { payload }) => {
      state.product = payload.product;
    },
    [update_product.pending]: (state, _) => {
      state.loader = true;
    },
    [update_product.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error; //backend e amra response error pathacchi r shy khan thekei error ta ashbe
    },
    [update_product.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.product = payload.product;
      state.successMessage = payload.message;
    },
    [product_image_update.fulfilled]: (state, { payload }) => {
      
      state.product = payload.product;
      state.successMessage = payload.message;
    },
  },
});
export const { messageClear } = productReducer.actions;
export default productReducer.reducer;
