import React from 'react';

export function HeadOnPeoduct({ children, text }) {
    const innerText = text ?? 'Bid On These Featured Auctions !';
    return (
        <header class="masthead mt-5">
            <div class="d-flex text-centers align-item-center justify-center container">
                <div class="ms-5 fs-3 dropshadow text-white text-start">{innerText}</div>
            </div>
            <div>{children}</div>
        </header>
    );
}


export default HeadOnPeoduct;