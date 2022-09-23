import React, { Fragment } from 'react';
import Navbar from './features/Navbar';
import ContainerNavbar from './features/ContainerNavbar';
import SectionOne from './features/SectionOne';
import Category from './features/Category';
import Footer from './features/Footer';


function App() {
  return (
    <Fragment>
      <ContainerNavbar>
        <Navbar />
        <SectionOne />
      </ContainerNavbar>
      <Category />
      <Footer />
    </Fragment >
  );
}

export default App;
