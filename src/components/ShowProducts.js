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
                        <div class="d-flex">
                            <div class="me-auto d-flex">
                                <img className="rounded float-start" src={"./image/01.png"} style={{ "width": "6rem" }} alt="" />
                                <h2 className="col dropshadow ms-2 mt-2">Vehicles</h2>
                            </div>
                        </div>

                        <div class="d-flex">
                            <div class="me-auto"><p class="mt-2 text-muted">We offer affordable Vehicles</p></div>
                            <div class="p-2">
                                <button class="btn viewAll fs-5 dropshadow rounded-pill border" type="submit">
                                    View All
                                </button>
                            </div>
                        </div>

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
.viewAll:hover {
    background: linear-gradient(to bottom, #ff8c42, #fd9c50, #fab06b, #f9d0a2, #f8e2c5);
}
`;
