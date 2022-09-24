import React from 'react';
import styled from 'styled-components';

export function Category({ className }) {
    return (
        <div className={className}>
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
        </div>
    );
}

export default styled(Category)`
.size-img-category {
    width: 100%;
    height: 5rem;
    margin-top: 2rem;
}

.category-img {
    height: 10.5rem;
    width: 9.5rem;
    background: #ffffff72;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    border-radius: 46px;
}

.category {
    position: absolute;
    margin-top: -4rem;
}

.category-card:hover {
    background: linear-gradient(to top, #f8ab64, #fcc98f, #f8e2c5);
    color: white;
}

`;
