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

function App() {

  const { token, setToken } = useToken();
  const [tk , setTk] = useState()
  useEffect(() =>{
    setTk(token)
  },[token])

  console.log(typeof(token), token[0].token);


  return (
    <Fragment>
      <GlobalStyle />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/LoginPages" element={tk ? <Home /> : <LoginPages setToken={setToken}/>} />
        <Route path="/BidLoginPages/:id" element={tk ? <DetailProduct /> : <LoginPages setToken={setToken}/>} />
        <Route path="/WatchList" element={tk ? <WatchList /> : <LoginPages setToken={setToken} />} />
        <Route path="/OnProducts/:id" element={<OnProducts token={token}/>} /> {/*ShowProduct => ProductCard*/}
        <Route path="/DetailProduct/:id" element={<DetailProduct />} />
        <Route path='/AddProduct' element={tk ? <AddProduct /> : <LoginPages setToken={setToken} />} />
        <Route path='/BidOffers/:userid' element={tk ? <BidOffers /> : <LoginPages setToken={setToken} />} />
        <Route path='/YourSelling/:userid' element={tk ? <YourSelling /> : <LoginPages setToken={setToken} />} />
      
      </Routes>
    </Fragment >
  );
}

export default App;
