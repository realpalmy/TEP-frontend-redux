import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../reducers/productReducer';
import tokenReducer from '../reducers/tokenReducer';
import productOnPageReducer from '../reducers/productOnPageReducer';

export default configureStore({
  reducer: {
    products: productReducer,
    token: tokenReducer,
    productOnPage: productOnPageReducer
  }
});