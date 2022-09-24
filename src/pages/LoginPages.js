import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import ContainerLogin from '../components/ContainerLogin';
import Login from '../components/Login';
import Footer from '../components/Footer';



function LoginPages() {
    return (
        <Fragment>
            <ContainerLogin>
                <Navbar />
            </ContainerLogin>
            <Login />
            <Footer />
        </Fragment >
    );
}

export default LoginPages;
