import React from 'react';
import "./main.css";

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3 col-12" id="mainNav">
            <div class="container px-4 px-lg-5">
                <div class="me-1">
                    <img src="./image/bid-shadow.png" class="logo" alt="..." />
                </div>
                <div class="d-flex">
                    <a class="navbar-brand fs-3 text-white dropshadow" href="#page-top">TEP AUCTION </a>
                </div>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto my-2 my-lg-0 dropshadow fs-5">
                        <li class="nav-item"><a class="nav-link text-white" href="#about">Home</a></li>
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Auction
                                </a>
                                <ul class="dropdown-menu dropdown-menu-primary">
                                    <li><a class="dropdown-item" href="#">VEHICLES</a></li>
                                    <li><a class="dropdown-item" href="#">WATCHES</a></li>
                                    <li><a class="dropdown-item" href="#">ELECTRONICS</a></li>
                                    <li><a class="dropdown-item" href="#">JEWELRY</a></li>
                                </ul>
                            </li>
                        </ul>
                        <li class="nav-item"><a class="nav-link text-white" href="#portfolio">Watchlist</a></li>
                    </ul>
                </div>
            </div>
            <form class="input-group rounded-pill x">
                <input class="form-control remove-bg x rounded-pill" type="text" placeholder="Search any product..." />
                <i class="bi bi-search m-2 me-3 text-white text-shadow"></i>
            </form>
            <a class="nav-link text-white" href="https://www.google.com/"> <i class="bi bi-person-bounding-box ms-5 fs-1 text-white"></i></a>
        </nav>
    );
}