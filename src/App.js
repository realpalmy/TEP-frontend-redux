import React, { Fragment, useState, useEffect } from 'react';
import Home from './pages/Home';
import LoginPages from './pages/LoginPages';
import WatchList from './pages/WatchList';
import OnProducts from './pages/OnProducts';
import DetailProduct from './pages/DetailProduct';
import AddProduct from './pages/AddproductPage';
import { Routes, Route, Switch } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';

import useToken from './components/useToken';

function App() {
  
  const { token, setToken } = useToken();
  console.log(token)


  // if(!token || token.length === 0) {
  //   return (
  //     <>
  //       <GlobalStyle />
  //       <LoginPages setToken={setToken} />
  //     </>
  //   );
  // }

  
  return (
    <Fragment>
      <GlobalStyle />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/LoginPages" element={<LoginPages setToken={setToken}/>} />
        <Route path="/BidLoginPages/:id" element={token ? <DetailProduct /> : <LoginPages setToken={setToken}/>} />
        <Route path="/WatchList" element={ token ? <WatchList /> : <LoginPages setToken={setToken} />} />
        <Route path="/OnProducts/:id" element={<OnProducts token={token}/>} /> {/*ShowProduct => ProductCard*/}
        <Route path="/DetailProduct/:id" element={<DetailProduct />} />
        <Route path='/AddProduct' element={<AddProduct />} />

      </Routes>
    </Fragment >
  );
}

export default App;
