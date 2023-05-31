import React, { Fragment, useState, useEffect } from 'react';
import Home from './pages/Home';
import LoginPages from './pages/LoginPages';
import WatchList from './pages/WatchList';
import OnProducts from './pages/OnProducts';
import DetailProduct from './pages/DetailProduct';
import AddProduct from './pages/AddproductPage';
import BidOffers from './pages/BidOffers';
import YourSelling from './pages/YourSelling';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';

import useToken from './components/useToken';

import { useSelector, useDispatch } from 'react-redux';
import { addToken, fetchToken } from './actions/tokenAction';


function App() {

  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const tokenLocalStorage = JSON.parse(localStorage.getItem('token'));

  useEffect(() =>{
    dispatch(fetchToken(tokenLocalStorage));
  },[])

  return (
    <Fragment>
      <GlobalStyle />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/LoginPages" element={token ? <Home /> : <LoginPages/>} />
        <Route path="/BidLoginPages/:id" element={token ? <DetailProduct /> : <LoginPages/>} />
        <Route path="/WatchList" element={token ? <WatchList /> : <LoginPages />} />
        <Route path="/OnProducts/:id" element={<OnProducts />} />
        <Route path="/DetailProduct/:id" element={<DetailProduct />} />
        <Route path='/AddProduct' element={token ? <AddProduct /> : <LoginPages />} />
        <Route path='/BidOffers/:userid' element={token ? <BidOffers /> : <LoginPages />} />
        <Route path='/YourSelling/:userid' element={token ? <YourSelling /> : <LoginPages />} />
        <Route path='*' element={<Home />} />
      
      </Routes>
    </Fragment >
  );
}

export default App;
