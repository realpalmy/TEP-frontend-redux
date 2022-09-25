import React, { Fragment } from 'react';
import Navbar from './features/Navbar';
import ContainerNavbar from './features/ContainerNavbar';
import SectionOne from './features/SectionOne';
import Category from './features/Category';
import Footer from './features/Footer';
import Login from './features/Login';
import Bid from './features/Bid';


function App() {
  return (
    <Fragment>
      <ContainerNavbar>
        <Navbar />
        {/* <SectionOne /> */}
        <Bid/>
      </ContainerNavbar>
      
      {/* <Category /> */}
      {/* <Footer /> */}
    </Fragment >
  );
}

export default App;
