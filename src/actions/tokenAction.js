import { createAction } from "@reduxjs/toolkit";

export const fetchToken = createAction("FETCH_TOKEN");
export const addToken = createAction("SET_TOKEN");
export const deleteToken = createAction("DELETE_TOKEN");
