import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../reducers/productReducer';
import tokenReducer from '../reducers/tokenReducer';

export default configureStore({
  reducer: {
    products: productReducer,
    token: tokenReducer
  }
});