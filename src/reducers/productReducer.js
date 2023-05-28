import { createReducer } from "@reduxjs/toolkit";
import { fetchProducts, addProduct } from "../actions/productAction";

let currentProductId = 50;

export default createReducer([], {
  [fetchProducts]: (state, action) => {
    return action.payload;
  },
  [addProduct]: (state, action) => {
    state.push({ id: ++currentProductId, ...action.payload });
  },
  
});
