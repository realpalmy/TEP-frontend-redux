import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import ContainerNavbar from '../components/ContainerNavbar';
import Footer from '../components/Footer';
import HeadOnPeoduct from '../components/HeadOnPeoduct';
import ShowProduct from '../components/ShowProduct';


function OnProducts({ token }) {
    let { id } = useParams();

    return (
        <Fragment>
            <ContainerNavbar position="OnProduct">
                <Navbar />
                <HeadOnPeoduct />
            </ContainerNavbar>
            <ShowProduct categoryID={`${id}`} token={token} />
            <Footer />
        </Fragment >
    );
}

export default OnProducts;
