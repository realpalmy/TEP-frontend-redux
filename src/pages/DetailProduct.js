import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom'
import ContainerNavbar from '../components/ContainerNavbar';
import Footer from '../components/Footer';
import DetailFrom from '../components/DetailFrom';



function DetailProduct() {
    let { id } = useParams();
    console.log(id);
    return (
        <Fragment>
            <ContainerNavbar position="DetailProduct">
                <Navbar />
            </ContainerNavbar>
            <DetailFrom productId={`${id}`} />
            <Footer />
        </Fragment >
    );
}

export default DetailProduct;
