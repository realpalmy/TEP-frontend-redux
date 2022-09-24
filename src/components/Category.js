import React from 'react';
import "./main.css";

export default function Category() {
    return (
        <div class="d-flex justify-content-evenly col-12 row category">
            <div class="col-12 row category-img category-card">
                <img src="./image/01.png" class="size-img-category" alt="..." />
                <div class="dropshadow fs-5 ms-2">VEHICLES</div>
            </div>

            <div class="col-12 row category-img category-card">
                <img src="./image/02.png" class="size-img-category" alt="..." />
                <div class="dropshadow fs-5 ms-2">VEHICLES</div>
            </div>

            <div class="col-12 row category-img category-card">
                <img src="./image/04.png" class="size-img-category" alt="..." />
                <div class="dropshadow fs-5 ms-2">VEHICLES</div>
            </div>

            <div class="col-12 row category-img category-card">
                <img src="./image/05.png" class="size-img-category" alt="..." />
                <div class="dropshadow fs-5 ms-2">VEHICLES</div>
            </div>

            <div class="col-12 row category-img category-card">
                <img src="./image/06.png" class="size-img-category" alt="..." />
                <div class="dropshadow fs-5 ms-2">VEHICLES</div>
            </div>
        </div>

    );
}
