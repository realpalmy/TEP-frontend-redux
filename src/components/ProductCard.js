import React, { useState, useEffect } from 'react';
import "./test.css";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";
import { Link } from 'react-router-dom';
import moment from 'moment';


function ProductCard({ product, token }) {
    const targetTime = moment(product.countDown);
    const [currentTime, setCurrentTime] = useState(moment());
    const timeBetween = moment.duration(targetTime.diff(currentTime));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment());
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    // const countDownDate = new Date(product.countDown).getTime();
    // var x = setInterval(function () {
    //     let now = new Date().getTime();
    //     let distance = countDownDate - now;
    //     let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //     let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //     let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //     settime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

    //     if (distance < 0) {
    //         settime('End Time Bid');
    //     }

    // }, 1100);

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
                                <div className="col-8 border-end text-center text-danger">{`${timeBetween.days()}d ${timeBetween.hours()}h ${timeBetween.minutes()}min ${timeBetween.seconds()} s`}</div>
                                <div className="col-4 text-center text-success">{product.bitAmount} bid(s)</div>
                            </div>
                        </li>

                    </ul>

                    <div className="card-body d-grid gap-2 col-lg-8 mx-auto text-center"> BidLoginPages

                        <Link to={token ? `/DetailProduct/${product.id}` : `/BidLoginPages/${product.id}`} class="text-light text-decoration-none">
                            <button className="btn btn-primary rounded-pill bg-gradient" type="button">
                                Submit A Bid
                            </button>
                        </Link>

                    </div>

                </div>
            </div>
        </>
    );
}

export default ProductCard;