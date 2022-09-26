import ProductCard from "./ProductCard";
import React, { useState, useEffect } from 'react';
import data from "../app/productData";
import styled from 'styled-components';

export function ShowProduct({ className }) {
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

export default styled(ShowProduct)`
.top{
    margin-top:5rem;
}
.viewAll:hover {
    color:white;
    background: linear-gradient(to bottom, #ff8c42, #fd9c50, #fab06b, #f9d0a2, #f8e2c5);
}
`;
