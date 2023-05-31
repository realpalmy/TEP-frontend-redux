import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ContainerNavbar from '../components/ContainerNavbar';
import SectionOne from '../components/SectionOne';
import Category from '../components/Category';
import Footer from '../components/Footer';
import Products from '../components/ShowProductsHome';

import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { addProduct, fetchProducts } from "../actions/productAction";


function Home() {

    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        async function getProducts() {
            const products = await axios.get(
                `http://localhost:8000/products/`
            );
            dispatch(fetchProducts(products.data)); //`http://localhost:8000/products/`
        }
        getProducts();
    }, []);


    return (
        <Fragment>
            <ContainerNavbar position="Home">
                <Navbar />
                <SectionOne />
            </ContainerNavbar>
            <Category />
        
            { products.length ? (
                <>
                    <Products categoryID={`${1}`} />
                    <Products showbg="Show" categoryID={`${2}`} />
                </>
            ) : (
                <div>Loading products....</div>
            )}
            
            <Footer position="Home" />
        </Fragment >
    );
}

export default Home;
