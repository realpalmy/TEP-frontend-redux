import React from 'react';
import "./main.css";

export default function Footer() {
    return (
        <div>
            <div class="footer-basic">
                <footer>
                    <div class="social">
                        <a href="#"><i class="icon ion-social-instagram"></i></a><a href="#d"><i
                            class="icon ion-social-twitter"></i></a><a href="#d"><i class="icon ion-social-facebook"></i></a>
                    </div>
                    <ul class="list-inline dropshadow fs-5">
                        <li class="list-inline-item dropshadow"><a href="#d">Home</a></li>
                        <li class="list-inline-item"><a href="#d">Aution</a></li>
                        <li class="list-inline-item"><a href="#d">Watchlist</a></li>
                    </ul>
                </footer>
            </div>
        </div>
    );
}