import React, { useState, useEffect } from 'react';
import "./test.css";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

function ProductCard({ product, token }) {
    const targetTime = moment(product.countDown);
    const [currentTime, setCurrentTime] = useState(moment());
    const [user, setUser] = useState([]);
    const timeBetween = moment.duration(targetTime.diff(currentTime));
    let styledisable = `btn-lg bg-4E598C rounded-pill p-2 text-white mx-3`;
    let disabled = false;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        async function getUser() {
            const users = await axios.get(
                `http://localhost:8000/login/${product.winnerBid}`
            );
            setUser(users.data);
        }
        getUser();
    }, [product.winnerBid]);


    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    const curUser = userToken && userToken[0].id;
    console.log(curUser)
    let x;
    if (timeBetween > 0) {
        x = `${timeBetween.days()}d ${timeBetween.hours()}h ${timeBetween.minutes()}min ${timeBetween.seconds()} s`;
    } else if (product.winnerBid == curUser) {
        x = 'Your Winner';
        styledisable = `btn-lg rounded-pill p-2 text-white mx-3 disabled`;
        disabled = true;
    } else {
        x = 'End time Bid';
        styledisable = `btn-lg rounded-pill p-2 text-white mx-3 disabled`;
        disabled = true;
    }

    return (
        <>
            <div className="col mb-5">
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
                                <div className="d-flex col-12 show-high text-center text-primary align-items-center pb-2" style={{ display: 'flex' }}>
                                    <div className="ms-5 me-3">Higher Bid!! : </div>
                                    <div className="">{user.username}</div>
                                </div>
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
                                <div className="col-8 border-end text-center text-danger">{x}</div>
                                <div className="col-4 text-center text-success">{product.bitAmount.length} bid(s)</div>
                            </div>
                        </li>

                    </ul>

                    <div className="card-body d-grid gap-2 col-lg-8 mx-auto text-center">

                        <Link to={token ? `/DetailProduct/${product.id}` : `/BidLoginPages/${product.id}`} class="text-light text-decoration-none">
                            <button
                                disabled={disabled}
                                type="submit" class={styledisable}>
                                Submit A Bid
                            </button>
                        </Link>

                        <div class={userToken[0].id == product.owner ? 'text-light text-decoration-none' : 'text-light text-decoration-none hide-block'}>
                            <button type="submit" class="btn-lg bg-delete rounded-pill p-2 text-white mx-5 px-4">
                                Delete
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default ProductCard;