import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddProduct() {
    const [file, setFile] = useState();
    const [urlFile, setUrlFile] = useState();

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;

    const handleChange = (e) => {
        setFile(e.target.files[0]);
        setUrlFile(e.target.files[0].name);
    }


    const onClickUpload = async () => {
        const formData = new FormData()
        formData.append('file', file)
        const uploadImg = await axios({
            method: 'post',
            url: 'http://localhost:8000/products/upload',
            data: formData
        });
    }

    const category = ["VEHICLES", "WATCH", "CAMERA", "JEWELRY", "SPORTS"];
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);

    const SubmitHandler = (event) => {
        axios.post("http://localhost:8000/products/", {
            imgUrl: `http://localhost:8000/products/img/${urlFile}`,
            title: event.target.productName.value,
            category: {
                categoryID: Number.parseInt(event.target.category.value),
                caregoryName: category[event.target.category.value - 1],
            },
            detail: event.target.productDetail.value,
            currentBid: event.target.startPrice.value,
            buyNow: event.target.finalPrice.value,
            bitAmount: [],
            countDown: event.target.addTime.value,
            owner: userToken[0].id,
            winnerBid: 0,
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <>
            <form onSubmit={SubmitHandler}>
                <div className="margin-top-addForm">
                    <div className="d-flex justify-content-center col-12 row">
                        <div className="card rounded-5 col-12 col-sm-10 col-md-8" style={{ height: "50rem" }}>
                            <div className="product-content">
                                <div className="product-header mt-3 ms-3 mb-3" >
                                    <h1 className="">Add New Product</h1>
                                </div>
                                <div className="mb-3">
                                    <label for="formFileMultiple" className="form-label">Upload product image</label>
                                    <input
                                        type="file"
                                        name="myImage"
                                        className="form-control"
                                        onChange={handleChange}

                                    />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Product Name</label>
                                    <input type="text" className="form-control" id="productName" required></input>
                                </div>
                                <div className="mb-3">
                                    <select className="form-select" aria-label="Default select example" id="category" required>
                                        <option selected>Product Category ...</option>
                                        <option value="1">VEHICLES</option>
                                        <option value="2">WATCH</option>
                                        <option value="3">CAMERA</option>
                                        <option value="4">JEWELRY</option>
                                        <option value="5">SPORTS</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Start Price</label>
                                    <input type="number" min="0" class="form-control" id="startPrice" required></input>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Buy Now Price</label>
                                    <input type="number" min="0" class="form-control" id="finalPrice" required></input>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Time</label>
                                    <input type="date" className="form-control" id="addTime" min={today} required></input>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Product Details</label>
                                    <textarea className="form-control" id="productDetail" required rows="5"></textarea>
                                </div>
                                <div className="d-flex justify-content-center mt-4">
                                    <button type="submit" className="btn-add rounded-pill text-black mx-5" onClick={onClickUpload}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}