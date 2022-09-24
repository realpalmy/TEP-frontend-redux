import React, { Fragment } from 'react';
import StartPages from './components/StartPages';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<StartPages />} />
      </Routes>
    </Fragment >
  );
}

export default App;
