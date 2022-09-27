import React from 'react';
import styled from 'styled-components';

export function SectionOne({ className }) {
    return (
        <div className={className}>
            <header class="container-fluid masthead">
                <div class="d-flex justify-content-center">
                    <div class="col ms-5 d-flex flex-column justify-content-center d-none d-md-block w-50">
                        <img src="./homePicture.png" class="card-img-top" alt="..." />
                    </div>

                    <div class="col ps-1 ps-md-5 d-flex flex-column justify-content-center w-50">
                        <div class="fs-md-3 fs-1 text-4E598C">
                            Next Generation Auction
                        </div>
                        <div class="text-96 width-563">
                            Find Your
                        </div>
                        <div class="text-96 width-563">
                            Next Deal !
                        </div>
                        <div class="fs-5 mt-2 dropshadow width-563 text-white">
                            Online Auction is where everyone goes to shop, sell,and give, while discovering variety and affordability.
                        </div>
                        <div class="mt-5 width-563">
                            <button type="button" class="btn-lg bg-4E598C fs-4 rounded-pill p-2 text-white">
                                Shop Now!
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
export default styled(SectionOne)`
.text-4E598C {
    color: #4E598C;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.bg-4E598C {
    border: 0px solid rgba(255, 255, 255, 0);
    background-image: linear-gradient(to bottom, #00509d, #1962b0, #2a74c4, #3987d7, #479aeb);
}

.bg-4E598C:hover {
    border: 0px solid rgba(255, 255, 255, 0);
    background-image: linear-gradient(to top, #00509d, #1962b0, #2a74c4, #3987d7, #479aeb);
}



`;