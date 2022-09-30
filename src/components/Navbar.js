import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useToken from './useToken';

function Navbar({ className }) {
    //const {token, setToken} = React.useState(JSON.parse(localStorage.getItem('token')));
    const token = JSON.parse(localStorage.getItem('token'));
    const { token: tk, setToken } = useToken()

    const x = () => {
        localStorage.clear();
        window.location.reload();
    }

    // JSON.parse(localStorage.getItem('token'));

    return (
        <div className='w-100'>
            <div className={className}>
                <nav class="navbar navbar-expand-lg navbar-light fixed-top col-12 py-3 py-md-0" id="mainNav">
                    <div class="container d-flex justify-content-between ms-lg-auto ms-0">
                        <Link to="/">
                            <div class="d-flex">
                                <div class="me-1">
                                    <img src="../image/bid-shadow.png" class="logo" alt="..." />
                                </div>
                            </div>
                        </Link>
                        <Link to="/" class="fs-3 text-white dropshadow text-decoration">
                            TEP AUCTION
                        </Link>
                        <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ms-auto my-2 my-lg-0 py-2 dropshadow fs-5">
                                <li class="nav-item">
                                    <a class="nav-link text-white" href='/'>
                                        <Link to="/" class="text-white text-decoration">
                                            Home
                                        </Link>
                                    </a>
                                </li>
                                <ul class="navbar-nav">
                                    <li class="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-white" href="./" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Auction
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-primary">
                                            <Link to='/OnProducts/1' class="text-decoration dropdown-item">
                                                VEHICLES
                                            </Link>
                                            <li>
                                                <Link to='/OnProducts/2' class="text-decoration dropdown-item">
                                                    WATCHES
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to='/OnProducts/3' class="text-decoration dropdown-item">
                                                    CAMERA
                                                </Link></li>
                                            <li><Link to='/OnProducts/4' class="text-decoration dropdown-item">
                                                JEWELRY
                                            </Link></li>
                                            <li><Link to='/OnProducts/5' class="text-decoration dropdown-item">
                                                SPORT
                                            </Link></li>
                                        </ul>
                                    </li>
                                </ul>
                                <li class="nav-item me-3">
                                    <ul class="navbar-nav">
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle text-white" href="." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                My TEP
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-primary">
                                                <li>
                                                    <Link to="/BidOffers/1" class="text-decoration dropdown-item">
                                                        Bid/Offers
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/AddProduct" class="text-decoration dropdown-item">
                                                        Selling
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/YourSelling/1" class="text-decoration dropdown-item">
                                                        Your Selling
                                                    </Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <div className='text-end'>
                                        <Link to="/LoginPages">
                                            {
                                                token ? (<i class="bi bi-box-arrow-right fs-1 text-white" onClick={x}></i>) :
                                                    (<i class="bi bi-person-bounding-box fs-1 text-white"></i>)
                                            }
                                        </Link>
                                    </div>
                                </li>
                            </ul>

                        </div>

                    </div>
                </nav >
            </div>
        </div>
    );

}
/*
.navbar {
    padding: 0 10rem 0 10rem;
} */


export default styled(Navbar)`
@media (prefers-reduced-motion: no-preference) {
    :root {
        scroll-behavior: smooth;
    }
}

.remove-bg {
    background: rgba(245, 3, 3, 0);
}

.x::placeholder {
    font-weight: bold;
    color: white;
}

.x {
    border: none;
    width: 20rem;
}

.search{
    border: none;
}

.input-group {
    border: 1px solid#fff;
}

nav {
    z-index: 1000;
    background: #ff8c42;
}

.logo {
    margin-top: -0.8rem;
    width: 3.5rem;
}

.dropdown-item:focus,
.dropdown-item:hover {
    color: #ffffff;
    background-color: #ff8c42;
}

.text-decoration{
    text-decoration: none;
}

`;