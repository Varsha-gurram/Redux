import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./Reducer";
const store = configureStore({
  reducer: bookReducer,
});
export default store;
