import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

//category add
export const categoryAdd = createAsyncThunk(
  "category/categoryAdd",
  // admin_login function j khan theke call korbo shy khane para meter akare info (information pathabo)
  async ({ name, image }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", image);
      const { data } = await api.post("/category-add", formData, {
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
export const get_category = createAsyncThunk(
  "category/get_category",
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

export const categoryReducers = createSlice({
  name: "category",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    categorys: [],
    allCategories: 0,
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
    [categoryAdd.pending]: (state, _) => {
      state.loader = true;
    },
    [categoryAdd.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error; //backend e amra response error pathacchi r shy khan thekei error ta ashbe
    },
    [categoryAdd.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
      state.categorys = [...state.categorys, payload.category];
    },
    [get_category.fulfilled]: (state, { payload }) => {
      state.allCategories = payload.allCategories;
      state.categorys = payload.categorys;
    },
  
  },
});
export const { messageClear } = categoryReducers.actions;
export default categoryReducers.reducer;
