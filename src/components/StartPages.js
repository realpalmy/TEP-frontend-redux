import React, { Fragment } from 'react';
import Navbar from './Navbar';
import ContainerNavbar from './ContainerNavbar';
import SectionOne from './SectionOne';
import Category from './Category';
import Footer from './Footer';
import Home from './Products';
import { Links } from 'react-router-dom';


function StartPages() {
    return (
        <Fragment>
            <ContainerNavbar>
                <Navbar />
                <SectionOne />
            </ContainerNavbar>
            <Category />
            <Home />
            <Footer />
        </Fragment >
    );
}

export default StartPages;
