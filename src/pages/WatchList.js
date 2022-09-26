import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import ContainerNavbar from '../components/ContainerNavbar';
import WatchListProductSection from '../components/WatchListProductSection';
import Footer from '../components/Footer';

function WatchList() {
    return (
        <Fragment>
            <ContainerNavbar position="WatchList">
                <Navbar />
            </ContainerNavbar>
            <WatchListProductSection />
            <Footer />
        </Fragment >
    );
}

export default WatchList;