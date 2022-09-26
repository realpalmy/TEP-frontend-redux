import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import ContainerNavbar from '../components/ContainerNavbar';
import SectionOne from '../components/SectionOne';
import Category from '../components/Category';
import Footer from '../components/Footer';
import Products from '../components/ShowProductsHome';


function Home() {
    return (
        <Fragment>
            <ContainerNavbar position="Home">
                <Navbar />
                <SectionOne />
            </ContainerNavbar>
            <Category />
            <Products />
            <Footer position="Home" />
        </Fragment >
    );
}

export default Home;
