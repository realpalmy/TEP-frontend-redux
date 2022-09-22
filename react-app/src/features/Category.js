import React from 'react';
import "./main.css";

export default function Category() {
    return (
        <div class="d-flex justify-content-evenly col-12 row category">
            <div class="col-12 row category-img">
                <img src="./01.png" class="size-img-category" alt="..." />
                <div class="dropshadow fs-5 ms-2">VEHICLES</div>
            </div>

            <div class="col-12 row category-img">
                <img src="./02.png" class="size-img-category" alt="..." />
                <div class="dropshadow fs-5 ms-2">VEHICLES</div>
            </div>

            <div class="col-12 row category-img">
                <img src="./04.png" class="size-img-category" alt="..." />
                <div class="dropshadow fs-5 ms-2">VEHICLES</div>
            </div>

            <div class="col-12 row category-img">
                <img src="./05.png" class="size-img-category" alt="..." />
                <div class="dropshadow fs-5 ms-2">VEHICLES</div>
            </div>

            <div class="col-12 row category-img">
                <img src="./06.png" class="size-img-category" alt="..." />
                <div class="dropshadow fs-5 ms-2">VEHICLES</div>
            </div>
        </div>

    );
}
