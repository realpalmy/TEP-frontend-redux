import ProductCard from "./ProductCard";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export function ShowProduct({ className, categoryID, token }) {
    const [products, setProducts] = useState([]);
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);

    const uslAPI = categoryID == 'random' ? `http://localhost:8000/products/random` : categoryID == 'onOffers' ? `http://localhost:8000/products/onbid/${userToken[0].id}` : categoryID == 'YourSell' ? `http://localhost:8000/products/owner/${userToken[0].id}` : `http://localhost:8000/products/category/${categoryID}`
    useEffect(() => {
        async function getProducts() {
            const products = await axios.get(
                `${uslAPI}`
            );
            setProducts(products.data);
        }
        getProducts();
    }, [categoryID]);



    return (
        <>
            <div class="margin-top-25rem">
                <div className={className}>
                    <div className="container top">
                        {
                            products.length > 0 ? (
                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                    {products.map((product) => (
                                        <ProductCard product={product} token={token} />
                                    ))}
                                </div>
                            ) : (
                                <div class="dropshadow">No Product to display</div>
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
