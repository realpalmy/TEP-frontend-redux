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
        <div class="margin-top-25rem ">
            <div className={className} >
                <div class="d-flex justify-content-md-center row col-12">
                    <div id="card-box" class="card rounded-5 col-sm-12 col-md-10 col-lg-8" style={{ width: "55rem" }}>
                        <img src="./image/01.png" class="size-img-bid" alt="..." />
                    </div>
                </div>
                <div class="p-5 d-flex row col-12 justify-content-md-center mb-5 ">
                    <div class="row justify-content-center col-sm-12 col-md-10 ">
                        <div id="card-box" class="card rounded-5 m-2" style={{ width: "10rem", height: "8rem" }}>
                            <img src="./image/02.png" class="show-img-bid" alt="..." />
                        </div>
                        <div id="card-box" class="card rounded-5 m-2" style={{ width: "10rem", height: "8rem" }}>
                            <img src="./image/search-icon.png" class="show-img-bid" alt="..." />
                        </div>
                        <div id="card-box" class="card rounded-5 m-2" style={{ width: "10rem", height: "8rem" }}>
                            <img src="./image/04.png" class="show-img-bid" alt="..." />
                        </div>
                        <div id="card-box" class="card rounded-5 m-2" style={{ width: "10rem", height: "8rem" }}>
                            <img src="./image/05.png" class="show-img-bid" alt="..." />
                        </div>
                        <div id="card-box" class="card rounded-5 m-2" style={{ width: "10rem", height: "8rem" }}>
                            <img src="./image/06.png" class="show-img-bid" alt="..." />
                        </div>
                    </div>
                </div>
                <div class=" d-flex p-5 row col-12 justify-content-md-center">
                    <div class=" detail col-lg-6 col-md-8 col-sm-12 ">
                        <div class="product-content">
                            <div class="product-header" >
                                <h1 class="">Product Name</h1>
                                <ul>
                                    <li class="text-secondary">Listing ID: 123456</li>
                                </ul>
                            </div>
                            <ul class="show-price mb-4">
                                <div class="product-detail d-flex " style={{ display: 'flex' }}>
                                    <h5>Current Price</h5>
                                    <h2 class="text-danger">$123.45</h2>
                                </div>
                                <div class="product-detail d-flex " style={{ display: 'flex' }}>
                                    <h5>Bid Increment (US) </h5>
                                    <h2>$50.00</h2>
                                </div>
                            </ul>
                            <div class="bid-area mb-2">
                                <form class="input-group rounded-pill ">
                                    <div class="search-icon">
                                        <img src="./image/search-icon.png" alt="..." style={{ width: "3rem", height: "3rem" }} />
                                    </div>
                                    <input class="form-control col-lg-6 col-md-6 col-sm-12 rounded-pill p-2 mx-3 text-secondary" type="text" placeholder="Enter your bid amount..."></input>
                                    <button type="button" class="btn-lg bg-4E598C rounded-pill p-2 text-white mx-3">Submit A Bid</button>
                                </form>
                            </div>
                            <div class="d-flex justify-content-center mt-3 mb-5">
                                <button type="button" class="btn-lg bg-4E598C rounded-pill p-3 text-white px-3 mx-5">BUY NOW</button>
                                <button type="button" class="btn-lg bg-watchlist rounded-pill p-3 text-dark px-3 mx-5">
                                    <i class="bi bi-star "></i>
                                    Add To WatchList
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="mt-3 show-time col-lg-2 col-md-8 col-sm-12 ">
                        <h6 class="">This Auction Ends in:</h6>
                        <div class="show-count">
                            <div class="countdown">
                                <div id="bid_counter1">0d : 0h : 0m : 0s</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row d-flex row col-12 justify-content-md-center mt-5 ">
                    <div class="detail-content col-lg-8 col-md-10 col-sm-12">
                        <div class="item mb-5">
                            <h4 class="item-title mb-2">Detail 1: </h4>
                            <p class="mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div class="item mb-5">
                            <h4 class="item-title mb-2">Detail 2: </h4>
                            <p class="mt-1">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                        </div>
                        <div class="item mb-5">
                            <h4 class="item-title mb-2">Detail 3: </h4>
                            <p class="mt-1">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
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

// .detail,
// .detail-content {
//     margin-left: 12rem;
// }

.product-detail {
    justify-content: space-between;
}

.show-price {
    background: #BBDEF0;
    border-radius: 20px;
    padding: 2rem 2rem;
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
    padding: 2rem 0 1rem 0;
    text-align: center;
    margin-bottom: 10rem;
}

.countdown {
    border-bottom: 2px solid #e0e0f1;
}

#bid_counter1 {
    font-size: 28px;
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
.detail-content {
    margin-top: -8rem;
}

`;