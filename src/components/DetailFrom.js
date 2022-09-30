import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';

export function DetailProduct({ className, productId }) {
    const [products, setProducts] = useState([]);
    let [time, settime] = useState();
    let [bid, setBid] = useState();

    const targetTime = moment(products.countDown);
    const [currentTime, setCurrentTime] = useState(moment());
    const timeBetween = moment.duration(targetTime.diff(currentTime));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment());
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    let x;
    if (timeBetween > 0) {
        x = `${timeBetween.days()}d ${timeBetween.hours()}h ${timeBetween.minutes()}min ${timeBetween.seconds()} s`;
    } else {
        x = 'End time Bid';
    }

    useEffect(() => {
        async function getProducts() {
            const products = await axios.get(
                `http://localhost:8000/products/${productId}`
            );
            setProducts(products.data);
        }
        getProducts();
    }, [bid]);


    const onBid = async (event) => {
        event.preventDefault();
        setBid(Number.parseInt(event.target.bid.value));
        axios.put(`http://localhost:8000/products/update/${products.id}`, {
            currentBid: Number.parseInt(event.target.bid.value),
        })
    }

    return (
        <div class="margin-top-25rem ">
            <div className={className} >
                <div class="d-flex justify-content-md-center row col-12">
                    <div id="card-box" class="card rounded-5 col-sm-12 col-md-10 col-lg-8" style={{ width: "55rem" }}>
                        <img src={products.imgUrl} class="size-img-bid" alt="..." />
                    </div>
                </div>

                <div class=" d-flex p-5 row col-12 justify-content-md-center justify-content-start mt-5">
                    <div class=" detail col-lg-6 col-md-8 col-sm-12 ">
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
                                    <h2 class="text-danger">${products.currentBid}</h2>
                                </div>
                                <div class="product-detail d-flex " style={{ display: 'flex' }}>
                                    <h5>Bid Increment (US)</h5>
                                    <h2>$50</h2>
                                </div>
                            </ul>
                            <div class="bid-area mb-2">
                                <form class="input-group rounded-pill" onSubmit={onBid}>
                                    <div class="search-icon">
                                        <img src="../image/search-icon.png" alt="..." style={{ width: "3rem", height: "3rem" }} />
                                    </div>
                                    <input class="form-control col-lg-6 col-md-6 col-sm-12 rounded-pill p-2 mx-3 text-secondary" type="number" placeholder="Enter your bid amount..." required min={products.currentBid + 50} id="bid" ></input>
                                    <button type="submit" class="btn-lg bg-4E598C rounded-pill p-2 text-white mx-3">Submit A Bid</button>
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
                    <div class="show-time col-lg-3 align-self-start mt-5">
                        <h6 class="">This Auction Ends in:</h6>
                        <div class="show-count">
                            <div class="countdown">
                                <div id="bid_counter1">{x}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row d-flex row col-12 justify-content-md-center mt-5 ">
                    <div class="detail-content col-lg-8 col-md-10 col-sm-12">
                        <div class="item mb-5">
                            <h4 class="item-title mb-2">Detail</h4>
                            <p class="mt-1 text-secondary">{products.detail}</p>
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