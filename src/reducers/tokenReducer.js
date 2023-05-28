import { createReducer } from "@reduxjs/toolkit";
import { fetchToken, addToken, deleteToken } from "../actions/tokenAction";


export default createReducer([], {
  [fetchToken]: (state, action) => {
    return action.payload;
  },
  [addToken]: (state, action) => {
    state.push({...action.payload});
    localStorage.setItem('token1', JSON.stringify(state));
  },
});
