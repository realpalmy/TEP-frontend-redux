import React, { Fragment } from 'react';
import Home from './pages/Home';
import LoginPages from './pages/LoginPages';
import WatchList from './pages/WatchList';
import OnProducts from './pages/OnProducts';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';


function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginPages" element={<LoginPages />} />
        <Route path="/WatchList" element={<WatchList />} />
        <Route path="/OnProducts" element={<OnProducts />} />
      </Routes>
    </Fragment >
  );
}

export default App;
