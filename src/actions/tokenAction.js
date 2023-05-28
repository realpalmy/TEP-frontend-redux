import { createAction } from "@reduxjs/toolkit";

const getToken = () => {
  const tokenString = localStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken;
};

export const fetchToken = createAction("FETCH_TOKEN");
export const addToken = createAction("SET_TOKEN");
export const deleteToken = createAction("DELETE_TOKEN");
