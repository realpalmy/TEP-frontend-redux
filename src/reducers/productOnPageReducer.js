import { createReducer } from "@reduxjs/toolkit";
import { fetchProductsOnPage } from "../actions/productOnPageAction";

export default createReducer([], {
  [fetchProductsOnPage]: (state, action) => {
    return action.payload;
  }
});
