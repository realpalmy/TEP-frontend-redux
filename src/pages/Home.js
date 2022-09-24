import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import ContainerNavbar from '../components/ContainerNavbar';
import SectionOne from '../components/SectionOne';
import Category from '../components/Category';
import Footer from '../components/Footer';
import Login from '../components/Login';
import { Links } from 'react-router-dom';


function Home() {
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

export default Home;
