import React, { Fragment } from 'react';
import "./test.css";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";


function ProductCard({ product }) {
    return (
        <Fragment>
            <div class="card" style={{ width: "18rem" }}>
                <img src="./logo192.png" class="card-img-top" alt="..." />
                <div class="col">
                    <div class="card" style={{ width: "18rem" }}>
                        <div class="card-body" style={{ height: "17rem" }}>
                            <img className='rounded float-center img-fluid' style={{ "max-height": "18rem" }} src={product.imgUrl} alt="..." />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{product.title}</h5>
                        </div>
                        <ul class="list-group list-group-flush container">
                            <div class="row">
                                <div class="col-2 d-flex align-items-center">
                                    <div class="px-1 text-success"><GiTakeMyMoney size={25} /></div>
                                </div>
                                <div class="col-4 border-end">
                                    <div class="row">
                                        <div class="text-10 text-success">CurrentBid</div>
                                        <div>$999</div>
                                    </div>
                                </div>
                                <div class="col-2 d-flex align-items-center">
                                    <div class="px-1 text-danger"><MdAttachMoney size={25} /></div>
                                </div>
                                <div class="col-4">
                                    <div class="row">
                                        <div class="text-10 text-danger">Buynow</div>
                                        <div>$855</div>
                                    </div>
                                </div>
                            </div>
                        </ul>

                        <div class="card-body d-grid gap-2 col-lg-8 mx-auto text-center">
                            <button class="btn btn-primary rounded-pill bg-gradient" type="button">
                                <a href={"./"} class="text-decoration-none text-light">Submit A Bid</a>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ProductCard;