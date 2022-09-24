import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import ContainerNavbar from './components/ContainerNavbar';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Fragment>
            <ContainerNavbar>
                <Navbar />
            </ContainerNavbar>
            <Footer />
        </Fragment >
    );
}

export default Login;
