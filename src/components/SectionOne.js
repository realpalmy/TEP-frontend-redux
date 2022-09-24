import React from 'react';
import "./main.css";

export default function SectionOne() {
    return (
        <header class="container-fluid masthead">
            <div class="d-flex justify-content-center ">
                <div class="col ms-5 d-flex flex-column justify-content-center">
                    <img src="./homePicture.png" class="card-img-top" alt="..." />
                </div>

                <div class="col ms-5 d-flex flex-column justify-content-center">
                    <div class="ps-5 fs-3 text-4E598C width-563">
                        Next Generation Auction
                    </div>
                    <div class="ps-5 text-96 width-563">
                        Find Your
                    </div>
                    <div class="ps-5 text-96 width-563">
                        Next Deal !
                    </div>
                    <div class="ps-5 fs-5 mt-2 dropshadow width-563 text-white">
                        Online Auction is where everyone goes to shop, sell,and give, while discovering variety and affordability.
                    </div>
                    <div class="ps-5 mt-5 width-563">
                        <button type="button" class="btn-lg bg-4E598C fs-4 rounded-pill p-2 text-white">Shop
                            Now
                            !</button>
                    </div>
                </div>
            </div>
        </header>
    );
}
