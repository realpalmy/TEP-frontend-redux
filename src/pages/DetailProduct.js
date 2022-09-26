import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import ContainerNavbar from '../components/ContainerNavbar';
import SectionOne from '../components/SectionOne';
import Category from '../components/Category';
import Footer from '../components/Footer';
import Products from '../components/ShowProductsHome';
import DetailFrom from '../components/DetailFrom';
import HeadOnPeoduct from '../components/HeadOnPeoduct';


function Home() {
    return (
        <Fragment>
            <ContainerNavbar position="DetailProduct">
                <Navbar />
            </ContainerNavbar>
            <DetailFrom />
            <Footer />
        </Fragment >
    );
}

export default Home;
