import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import ContainerNavbar from '../components/ContainerNavbar';
import Footer from '../components/Footer';
import HeadOnPeoduct from '../components/HeadOnPeoduct';
import Products from '../components/ShowProducts';


function OnProducts() {
    return (
        <Fragment>
            <ContainerNavbar>
                <Navbar />
                <HeadOnPeoduct />
            </ContainerNavbar>
            <Products />
            <Footer />
        </Fragment >
    );
}

export default OnProducts;
