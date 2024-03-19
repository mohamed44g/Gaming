import { createSlice } from "@reduxjs/toolkit";
export const CartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    add: function (state, action) {
      const check = state.find(
        (ele) => ele.productTitle === action.payload.productTitle
      );
      if (!check) {
        void state.push(action.payload);
      }
    },
    remove: (state, action) => {
      const remove = state.filter(
        (ele) => ele.productTitle !== action.payload.productTitle
      );
      return (state = remove);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = CartSlice.actions;

export default CartSlice.reducer;
