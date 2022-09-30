import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';

export function DetailProduct({ className, productId }) {
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState([]);
    let [time, settime] = useState();
    let [bid, setBid] = useState();

    const targetTime = moment(products.countDown);
    const [currentTime, setCurrentTime] = useState(moment());
    const timeBetween = moment.duration(targetTime.diff(currentTime));

    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);

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

    useEffect(() => {
        async function getUser() {
            const users = await axios.get(
                `http://localhost:8000/login/${products.winnerBid}`
            );
            setUser(users.data);
        }
        getUser();
    }, [products.winnerBid]);

    const onBid = async (event) => {
        event.preventDefault();
        setBid(Number.parseInt(event.target.bid.value));
        axios.put(`http://localhost:8000/products/update/${products.id}`, {
            currentBid: Number.parseInt(event.target.bid.value),
            userid: userToken[0].id,
            winnerBid: userToken[0].id
        })
    }

    return (
        <div className="margin-top-25rem ">
            <div className={className} >
                <div className="d-flex justify-content-md-center row col-12 mb-5 ">
                    <div id="card-box" className="card rounded-5 col-sm-12 col-md-10 col-lg-8" style={{ width: "55rem" }}>
                        <img src={products.imgUrl} className="size-img-bid" alt="..." />
                    </div>
                </div>

                <div className=" d-flex p-5 row col-12 justify-content-md-center justify-content-start tap">
                    <div className=" detail col-lg-8 col-md-8 col-sm-12 ">
                        <div className="product-content">
                            <div className="product-header" >
                                <h1 className="col-12">{products.title}</h1>
                                <ul>
                                    <li className="text-secondary">Listing ID: {products.id}</li>
                                </ul>
                            </div>
                            <div className="row d-flex col-12 justify-content-md-center">
                                <ul className="show-price mb-4 col-md-8 col-sm-12">
                                    <div className="product-detail d-flex text-success" style={{ display: 'flex' }}>
                                        <h5>Current Price</h5>
                                        <h2 className="">${products.currentBid}</h2>
                                    </div>
                                    <div className="product-detail d-flex text-primary" style={{ display: 'flex' }}>
                                        <h5>Bid Increment (US)</h5>
                                        <h2>$50</h2>
                                    </div>
                                    <div className="product-detail d-flex text-danger" style={{ display: 'flex' }}>
                                        <h5 >Buy Now </h5>
                                        <h2 className="">$50.00</h2>
                                    </div>
                                    <div className="product-detail d-flex text-secondary" style={{ display: 'flex' }}>
                                        <h5><strong>Higher Bid!!! </strong></h5>
                                        <h2 className=""><strong>{user.username}</strong></h2>
                                    </div>
                                </ul>
                                <div className="ms-3 show-time col-lg-3 align-self-start mt-5 mb-4">
                                    <h6 className="">This Auction Ends in:</h6>
                                    <div className="show-count">
                                        <div className="countdown">
                                            <div id="bid_counter1">{x}</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="ms-0 bid-area mb-2 col-lg-8 col-md-8 col-sm-12">
                                <form className="input-group rounded-pill d-flex" onSubmit={onBid}>
                                    <div className="d-flex">
                                        <div className="search-icon">
                                            <img src="../image/search-icon.png" alt="..." style={{ width: "3rem", height: "3rem" }} />
                                        </div>
                                        <div className="d-flex ">
                                            <input className="ms-1 form-control col-lg-6 col-md-6 col-sm-12 rounded-pill text-secondary me-2" type="number" placeholder="Enter your bid amount..." required min={products.currentBid + 50} id="bid" ></input>
                                            <button type="submit" className="btn-lg bg-4E598C rounded-pill  text-white  px-5 me-1">Submit A Bid</button>
                                            <button type="button" className="btn-lg bg-buynow rounded-pill text-white  px-5 me-1">BUY NOW</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row d-flex row col-12 justify-content-md-center tap">
                    <div className="detail-content col-lg-8 col-md-10 col-sm-12">
                        <div className="item mb-5">
                            <h4 className="item-title mb-2">Detail</h4>
                            <p className="mt-1 text-secondary">{products.detail}</p>
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
    // margin-bottom: 10rem;
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


.tap{
    margin-top: 8rem;
}
`;