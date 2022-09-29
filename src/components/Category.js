import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export function Category({ className }) {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     async function getProducts() {
    //         const products = await axios.get(
    //             'http://localhost:8000/products/'
    //         );
    //         setProducts(products.data);
    //     }

    //     getProducts();
    // }, []);

    // console.log(products);
    return (
        <div className={className}>
            <div class="d-flex justify-content-evenly col-12 row category d-none d-md-flex">
                <div class="col-12 row category-img category-card d-flex justify-content-center" >
                    <Link to='/OnProducts/1' class="text-decoration text-dark text-category">
                        <div class="text-category">
                            <img src="./image/01.png" class="size-img-category " alt="..." />
                            <div class="dropshadow fs-5 ms-2">
                                VEHICLES
                            </div>
                        </div>

                    </Link>
                </div>

                <div class="col-12 row category-img category-card text-center d-flex justify-content-center">
                    <Link to='/OnProducts/4' class="text-decoration">
                        <div class="text-category">
                            <img src="./image/02.png" class="size-img-category" alt="..." />
                            <div class="dropshadow fs-5">JEWELRY</div>
                        </div>
                    </Link>
                </div>

                <div class="col-12 row category-img category-card text-center d-flex justify-content-center">
                    <Link to='/OnProducts/3' class="text-decoration">
                        <div class="text-category">
                            <img src="./image/04.png" class="size-img-category" alt="..." />
                            <div class="dropshadow fs-5">CAMERA</div>
                        </div>
                    </Link>
                </div>

                <div class="col-12 row category-img category-card text-center d-flex justify-content-center">
                    <Link to='/OnProducts/5' class="text-decoration">
                        <div class="text-category">
                            <img src="./image/05.png" class="size-img-category" alt="..." />
                            <div class="dropshadow fs-5">SPORTS</div>
                        </div>
                    </Link>
                </div>

                <div class="col-12 row category-img category-card text-center d-flex justify-content-center ">
                    <Link to='/OnProducts/2' class="text-decoration">
                        <div class="text-category">
                            <img src="./image/03.png" class="size-img-category-watch" alt="..." />
                            <div class="dropshadow fs-5">WATCH</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default styled(Category)`
.size-img-category {
    width: 100%;
    height: 5rem;
    margin-top: 2rem;
}

.size-img-category-watch{
    width: 70%;
    height: 5rem;
    margin-top: 2rem;
}

.category-img {
    height: 10.5rem;
    width: 9.5rem;
    background: #ffffff72;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    border-radius: 46px;
}

.category {
    position: absolute;
    margin-top: -4rem;
}

.category-card:hover {
    background: linear-gradient(to top, #f8ab64, #fcc98f, #f8e2c5);
  
}

.text-decoration{
    text-decoration: none;
}
.text-category{
    color: #000000;
}
.text-category:hover {
    color: white;
}
`;
