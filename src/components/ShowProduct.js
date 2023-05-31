import ProductCard from "./ProductCard";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsOnPage } from "../actions/productOnPageAction";

export function ShowProduct({ className, categoryID }) {
    const token = useSelector((state) => state.token);
    const urlAPI = categoryID === 'random' ? `http://localhost:8000/products/random` : 
                        categoryID === 'onOffers' ? `http://localhost:8000/products/onbid/${token[0]?.id}` : 
                            categoryID === 'YourSelling' ? `http://localhost:8000/products/owner/${token[0]?.id}` : `http://localhost:8000/products/category/${categoryID}`

    const productOnPage = useSelector((state) => state.productOnPage)
    const dispatch = useDispatch();
    useEffect(() => {
        async function getProducts() {
            const products = await axios.get(
                `${urlAPI}`
            );
            dispatch(fetchProductsOnPage(products.data));
        }
        getProducts();
    }, []);

    return (
        <>
            <div class="margin-top-25rem">
                <div className={className}>
                    <div className="container top">
                        {
                            productOnPage.length > 0 ? (
                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                    {productOnPage.map((product) => (
                                        <ProductCard product={product} />
                                    ))}
                                </div>
                            ) : (
                                <div>No Products Displays....</div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default styled(ShowProduct)`
.top{
    margin-top:5rem;
}
.viewAll:hover {
    color:white;
    background: linear-gradient(to bottom, #ff8c42, #fd9c50, #fab06b, #f9d0a2, #f8e2c5);
}
`;
