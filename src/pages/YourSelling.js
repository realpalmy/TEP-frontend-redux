import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import ContainerNavbar from '../components/ContainerNavbar';
import HeadOnPeoduct from '../components/HeadOnPeoduct';
import ShowProduct from '../components/ShowProduct';


function YourSelling() {
    let { userid } = useParams();

    return (
        <Fragment>
            <ContainerNavbar position="OnProduct">
                <Navbar />
                <HeadOnPeoduct text="Your On Selling Product" />
            </ContainerNavbar>
            <ShowProduct categoryID={'YourSelling'} />
        </Fragment >
    );
}

export default YourSelling;
