import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import ContainerNavbar from '../components/ContainerNavbar';
import Login from '../components/Login';
import Footer from '../components/Footer';



function LoginPages() {
    return (
        <Fragment>
            <ContainerNavbar position="Login">
                <Navbar />
            </ContainerNavbar>
            <Login />
            <Footer position="Login" />
        </Fragment >
    );
}

export default LoginPages;
