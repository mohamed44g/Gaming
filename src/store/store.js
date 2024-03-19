import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./reducers/Cart-Slice.js";
export const store = configureStore({
  reducer: {
    Cart: CartSlice,
  },
});
