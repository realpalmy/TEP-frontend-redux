import { createReducer } from "@reduxjs/toolkit";
import { fetchToken, addToken, deleteToken } from "../actions/tokenAction";


export default createReducer([], {
  [fetchToken]: (state, action) => {
    return action.payload;
  },
  [addToken]: (state, action) => {
    localStorage.setItem('token', JSON.stringify(action.payload));
    return action.payload
  },
  [deleteToken]: (state, action) => {
    localStorage.clear();
    return action.payload
  },
});
