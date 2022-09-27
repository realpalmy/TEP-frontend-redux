import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import ContainerNavbar from '../components/ContainerNavbar';
import Footer from '../components/Footer';
import Addproduct from '../components/AddProduct'

function AddproductPage() {
    return (
        <Fragment>
            <ContainerNavbar position="Home">
                <Navbar />
            </ContainerNavbar>
            <Addproduct/>
            <Footer position="Home" />
        </Fragment >
    );
}

export default AddproductPage;
