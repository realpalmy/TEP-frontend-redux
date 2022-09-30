import ProductCard from "./ProductCard";
import React, { useState, useEffect } from 'react';
import data from "../app/productData";
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

export function Products({ className, showbg, categoryID }) {
    const [products, setProducts] = useState([]);
    const [nameProduct, setNameProduct] = useState('');

    useEffect(() => {
        async function getProducts() {
            const products = await axios.get(
                `http://localhost:8000/products/category/${categoryID}`
            );

            setProducts(products.data);
            setNameProduct(products.data[0].category.caregoryName);
        }
        getProducts();
    }, [categoryID]);

    return (
        <>
            <div class={`${showbg == 'Show' ? 'bg-productHome' : ""}`}>
                <div className={className}>
                    <div className="container top p-4">
                        <div className="row text-start mb-2">
                            <div class="d-flex">
                                <div class="me-auto d-flex">
                                    <img className="rounded float-start" src={`./image/0${categoryID}.png`} style={{ "width": "4rem" }} alt="" />
                                    <h2 className="col dropshadow ms-2 mt-2">{nameProduct}</h2>
                                </div>
                            </div>

                            <div class="d-flex">
                                <div class="me-auto"><p class="mt-2 text-muted">We offer affordable {nameProduct}</p></div>
                                <div class="p-2">
                                    <button class="btn viewAll fs-5 dropshadow rounded-pill border" type="submit">
                                        <Link to={`/OnProducts/${categoryID}`} class="text-decoration dropdown-item">
                                            View All
                                        </Link>
                                    </button>
                                </div>
                            </div>

                        </div>
                        {
                            products.length > 0 ? (
                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                    {products.slice(0, 3).map((product) => (
                                        <ProductCard product={product} />
                                    ))}
                                </div>
                            ) : (
                                <div>Loading products....</div>
                            )
                        }

                    </div>
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
    color:white;
    background: linear-gradient(to bottom, #ff8c42, #fd9c50, #fab06b, #f9d0a2, #f8e2c5);
}


`;
