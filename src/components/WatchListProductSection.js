import React from 'react';
import WatchListCard from './WatchListCard';

function WatchListProductSection() {
    const products = [
        {
            id: 1,
            name: "Car1",
            bidEnd: true
        },
        {
            id: 2,
            name: "Car1",
            bidEnd: false
        }
    ];
    return (
        <>
            <div className="d-flex justify-content-center margin-top-25rem">
                <div className="row g-0 d-flex justify-content-center bg-light rounded-5 col-10 py-5 px-4">
                    <h2 className="pb-2 dropshadow">Watch List</h2>
                    <WatchListCard item={products[0]} />
                    <WatchListCard item={products[1]} />
                </div>
            </div>
        </>
    );
}

export default WatchListProductSection;