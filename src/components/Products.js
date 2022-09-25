import ProductCard from "./ProductCard";
import React, { useState, useEffect } from 'react';
import data from "../app/productData";
import styled from 'styled-components';

export function Products({ className }) {
    const [products, setProducts] = useState(data);
    console.log(products)

    /*
    useEffect (() => {
        data.forEach(element => {
            setProducts(element);
        })
    });
    */
    return (
        <>
            <div className={className}>
                <div className="container top">
                    <div className="row text-start mb-2">
                        <img className="rounded float-start" src={"./image/01.png"} style={{ "width": "6rem" }} alt="" />
                        <h2 className="col dropshadow">Vehicles</h2>
                        <p class="mt-2 text-muted">We offer affordable Vehicles</p>
                    </div>
                    {
                        products.length > 0 ? (
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                {products.map((product) => (
                                    <ProductCard product={product} />
                                ))}
                            </div>
                        ) : (
                            <div>Loading products....</div>
                        )
                    }

                </div>
            </div>
        </>
    );
}

export default styled(Products)`
.top{
    margin-top:10rem;
}
`;
