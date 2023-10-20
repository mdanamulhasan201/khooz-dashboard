// all reducer input
// root reducer create
import authReducer from "./Reducers/authReducer";
import categoryReducers from "./Reducers/categoryReducers";
import productReducer from "./Reducers/productReducer";
import sellerReducer from "./Reducers/sellerReducer";
import ordersReducer from "./Reducers/ordersReducer";

const rootReducers = {
  auth: authReducer,
  category: categoryReducers,
  product: productReducer,
  seller: sellerReducer,
  order: ordersReducer,
};

export default rootReducers;
