// all reducer input
// root reducer create
import authReducer from "./Reducers/authReducer";
import categoryReducers from "./Reducers/categoryReducers";
import productReducer from "./Reducers/productReducer";

const rootReducers = {
  auth: authReducer,
  category: categoryReducers,
  product: productReducer,
};

export default rootReducers;
