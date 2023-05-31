import React from 'react';
import "./main.css";

export default function bid() {
    return (
        <header className="container-fluid masthead">
            <div className="d-flex justify-content-center col-12 row mt-5">
                <div id="card-box" className="card rounded-5" style={{ width: "60rem" }}>
                    <img src="./image/01.png" className="size-img-bid" alt="..." />
                </div>
            </div>
            {/* show detail product */}
            <div className="p-5">
                <div class="d-flex justify-content-center col-12 row ">
                    <div id="card-box" class="card rounded-5 mt-2 mx-3" style={{ width: "10rem", height: "10rem" }}>
                        <img src="./image/02.png" class="show-img-bid" alt="..." />
                    </div>
                    <div id="card-box" class="card rounded-5 mt-2 mx-3" style={{ width: "10rem", height: "10rem" }}>
                        <img src="./image/search-icon.png" class="show-img-bid" alt="..." />
                    </div>
                    <div id="card-box" class="card rounded-5 mt-2 mx-3" style={{ width: "10rem", height: "10rem" }}>
                        <img src="./image/04.png" class="show-img-bid" alt="..." />
                    </div>
                    <div id="card-box" class="card rounded-5 mt-2 mx-3" style={{ width: "10rem", height: "10rem" }}>
                        <img src="./image/05.png" class="show-img-bid" alt="..." />
                    </div>
                    <div id="card-box" class="card rounded-5 mt-2 mx-3" style={{ width: "10rem", height: "10rem" }}>
                        <img src="./image/06.png" class="show-img-bid" alt="..." />
                    </div>
                </div>
            </div>
            {/* product name */}
            <div class=" row mt-5">
                <div class=" detail col-lg-6">
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
                        <div class="bid-area">
                            <form class="input-group rounded-pill ">
                                <div class="search-icon">
                                    <img src="./image/search-icon.png" alt="..." style={{ width: "3rem", height: "3rem" }} />
                                </div>
                                <input class="form-control rounded-pill p-2 mx-3 text-secondary" type="text" placeholder="Enter your bid amount..."></input>
                                <button type="button" class="btn-lg bg-4E598C rounded-pill p-2 text-white mx-3">Submit A Bid</button>
                            </form>
                        </div>
                    </div>

                </div>
                <div class="g-5 show-time col-lg-3 ">
                    <h6 class="">This Auction Ends in:</h6>
                    <div class="show-count">
                        <div class="countdown">
                            <div id="bid_counter1">0d : 0h : 0m : 0s</div>
                        </div>
                    </div>
                </div>
            </div>
            {/*show details */}
            <div class="row mt-5">
                <div class="detail-content col-8">
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

        </header>

    );
}

