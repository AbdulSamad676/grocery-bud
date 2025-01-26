import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/CategorySlice";
import authReducer from "./slices/AuthSlice";
const store = configureStore({
  reducer: {
    categories: categoryReducer,
    auth: authReducer,
  },
});

export default store;
