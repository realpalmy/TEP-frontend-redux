import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import ContainerNavbar from '../components/ContainerNavbar';
import Footer from '../components/Footer';
import HeadOnPeoduct from '../components/HeadOnPeoduct';
import Products from '../components/ShowProduct';


function OnProducts() {
    return (
        <Fragment>
            <ContainerNavbar position="OnProduct">
                <Navbar />
                <HeadOnPeoduct>
                    <Products />
                </HeadOnPeoduct>

            </ContainerNavbar>
        </Fragment >
    );
}

export default OnProducts;
