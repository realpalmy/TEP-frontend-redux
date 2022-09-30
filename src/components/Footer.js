import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export function Footer({ className, position }) {
    console.log(position);
    return (
        <div className={className}>
            <div class={`${position == 'Home' ? 'footer-basic Home' : position == 'Login' ? 'footer-basic Login' : 'footer-basic Watchlist'}`}>
                <footer>
                    <div class="social">
                        <a href="#"><i class="icon ion-social-instagram"></i></a><a href="#d"><i
                            class="icon ion-social-twitter"></i></a><a href="#d"><i class="icon ion-social-facebook"></i></a>
                    </div>
                    <ul class="list-inline dropshadow fs-5">
                        <li class="list-inline-item dropshadow">
                            <Link to="/" class="text-white text-decoration">
                                Home
                            </Link></li>
                        <li class="list-inline-item"><a href="#d">Aution</a></li>
                        <li class="list-inline-item"><a href="#d"><Link to="/WatchList" class="text-white text-decoration">
                            Watchlist
                        </Link></a></li>
                    </ul>
                </footer>
            </div>
        </div>
    );
}

export default styled(Footer)`
.footer-basic {
    background: linear-gradient(to top, #f69e67, #f5a263, #f6bc86, #f9d0a2, #f8e2c5);
    height: 10rem;
    border-radius: 200px 200px 0px 0px;
    padding: 40px 0 50px;
    color: #ffffff;
}

.Home{
    margin-top: 9rem;
}

.Login{
    margin-top: 1rem;
}

.Watchlist{
    margin-top:14rem;
}

.footer-basic ul {
    padding: 0;
    list-style: none;
    text-align: center;
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 0;
}

.footer-basic li {
    padding: 0 10px;
}

.footer-basic ul a {
    color: inherit;
    text-decoration: none;
    opacity: 0.8;
}

.footer-basic ul a:hover {
    opacity: 1;
}

.footer-basic .social {
    text-align: center;
    padding-bottom: 25px;
}

.footer-basic .social>a {
    font-size: 30px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    border: 1px solid rgb(255, 255, 255);
    margin: 0 8px;
    color: inherit;
    opacity: 0.75;
}

.footer-basic .social>a:hover {
    opacity: 0.9;
}
`;