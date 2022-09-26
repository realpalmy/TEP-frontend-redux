import React from 'react';

export function HeadOnPeoduct({ children }) {
    return (
        <header class="masthead mt-5">
            <div class="d-flex text-centers align-item-center justify-center container">
                <div class="ms-5 fs-3 dropshadow text-white text-start">Bid On These Featured Auctions !</div>
            </div>
            <div>{children}</div>
        </header>
    );
}


export default HeadOnPeoduct;