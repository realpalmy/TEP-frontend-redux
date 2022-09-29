import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export function DetailProduct({ className, productId }) {
    const [products, setProducts] = useState([]);

    let [time, settime] = useState();
    var countDownDate = new Date(products.countDown).getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        settime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
    }, 1000);

    useEffect(() => {
        async function getProducts() {
            const products = await axios.get(
                `http://localhost:8000/products/${productId}`
            );
            setProducts(products.data);
        }
        getProducts();
    }, [productId]);

    console.log(products);

    return (
        <div class="margin-top-25rem">
            <div className={className}>
                <div class="d-flex justify-content-center col-12 row mt-3">
                    <div id="card-box" class="card rounded-5" style={{ width: "55rem" }}>
                        <img src={products.imgUrl} class="size-img-bid" alt="..." />
                    </div>
                </div>

                <div class=" row mt-5 p-5">
                    <div class=" detail col-lg-6">
                        <div class="product-content">
                            <div class="product-header" >
                                <h1 class="">{products.title}</h1>
                                <ul>
                                    <li class="text-secondary">Listing ID: {products.id}</li>
                                </ul>
                            </div>
                            <ul class="show-price mb-4">
                                <div class="product-detail d-flex " style={{ display: 'flex' }}>
                                    <h5>Current Price</h5>
                                    <h2 class="text-danger">$ {products.currentBid}</h2>

                                </div>
                                <div class="product-detail d-flex " style={{ display: 'flex' }}>
                                    <h5>Bid Increment (US) </h5>
                                    <h2>$50</h2>

                                </div>
                            </ul>
                            <div class="bid-area">
                                <form class="input-group rounded-pill ">
                                    <div class="search-icon">
                                        <img src="../image/search-icon.png" alt="..." style={{ width: "3rem", height: "3rem" }} />
                                    </div>
                                    <input class="form-control rounded-pill p-2 mx-3 text-secondary" type="text" placeholder="Enter your bid amount..."></input>
                                    <button type="button" class="btn-lg bg-4E598C rounded-pill p-2 text-white mx-3">Submit A Bid</button>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div class="show-time col-lg-3 align-self-center">
                        <h6 class="">This Auction Ends in:</h6>
                        <div class="show-count">
                            <div class="countdown">
                                <div id="bid_counter1">{time}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="detail-content col-8">
                        <div class="item mb-5">
                            <h4 class="item-title mb-2">Detail : </h4>
                            <p class="mt-1">{products.detail}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default styled(DetailProduct)`
.size-img-bid {
    /* width: 100%; */
    height: 30rem;
    margin: 2rem;
}

.show-img-bid {
    /* width: 100%; */
    height: 10rem;
    margin: 1rem;
}

ul li {
    list-style-type: none;

}

.detail,
.detail-content {
    margin-left: 12rem;
}

.product-detail {
    justify-content: space-between;
}

.show-price {
    background: #BBDEF0;
    border-radius: 20px;
    padding: 30px 30px;
    box-shadow: 0 3px 3px #8e8986cd;
}

.bid-area {
    padding: 20px;
    border-top: 1px solid #e0e0f1;
    border-bottom: 1px solid #e0e0f1;
}

.show-time {
    border: 1px solid rgba(255, 140, 66, 1);
    box-shadow: 0 3px 3px #8e8986cd;
    border-radius: 20px;
    padding: 20px;
    text-align: center;
    margin-bottom: 100px;
}

.countdown {
    border-bottom: 2px solid #e0e0f1;
}

#bid_counter1 {
    font-size: 36px;
    text-shadow: 0px 5px 3px rgba(82, 78, 79, 0.5);
}

#card-box {
    border: 1px solid rgba(255, 140, 66, 1);
    box-shadow: 0 3px 3px #8e8986cd;
    ;
}

.detail {
    margin-top: -5rem;
}
`;