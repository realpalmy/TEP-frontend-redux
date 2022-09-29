import React, { useState } from 'react';
import "./test.css";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";


function ProductCard({ product }) {
    let [time, settime] = useState();
    var countDownDate = new Date(product.countDown).getTime();
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

    return (
        <>
            <div className="col">
                <div className="shadow card" style={{ width: "20rem" }}>
                    <div className="card-body d-flex justify-content-center align-items-center" style={{ height: "15rem" }}>
                        <img className='rounded float-center img-fluid' style={{ "max-width": '100%', "max-height": '100%' }} src={product.imgUrl} alt="..." />
                    </div>
                    <div className="card-body" style={{ height: "6rem" }}>
                        <h5 className="card-title">{product.title}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-2 d-flex align-items-center">
                                    <div className="text-success"><GiTakeMyMoney size={25} /></div>
                                </div>
                                <div className="col-4 border-end">
                                    <div className="row">
                                        <div className="text-10 text-success">CurrentBid</div>
                                        <div>${product.currentBid}</div>
                                    </div>
                                </div>
                                <div className="col-2 d-flex align-items-center">
                                    <div className="text-danger"><MdAttachMoney size={25} /></div>
                                </div>
                                <div className="col-4">
                                    <div className="row">
                                        <div className="text-10 text-danger">Buynow</div>
                                        <div>${product.buyNow}</div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-8 border-end text-center text-danger">{time}</div>
                                <div className="col-4 text-center text-success">{product.bitAmount} bid(s)</div>
                            </div>
                        </li>

                    </ul>

                    <div className="card-body d-grid gap-2 col-lg-8 mx-auto text-center">
                        <button className="btn btn-primary rounded-pill bg-gradient" type="button">
                            <a href={"./"} className="text-decoration-none text-light">Submit A Bid</a>
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ProductCard;