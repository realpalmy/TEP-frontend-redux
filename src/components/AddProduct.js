import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddProduct() {
    const [file, setFile] = useState();
    const [urlFile, setUrlFile] = useState();


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

    const SubmitHandler = (event) => {
        console.log(file);
        axios.post("http://localhost:8000/products/", {
            imgUrl: `http://localhost:8000/products/img/${urlFile}`,
            title: event.target.productName.value,
            category: {
                categoryID: 1,
                caregoryName: "Car",
            },
            detail: event.target.productDetail.value,
            currentBid: event.target.startPrice.value,
            buyNow: event.target.finalPrice.value,
            bitAmount: 0,
            countDown: event.target.addTime.value,
            owner: 0,
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

                                    <label for="formFileMultiple" class="form-label">Upload product image</label>
                                    <input
                                        type="file"
                                        name="myImage"
                                        className="form-control"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Product Name</label>
                                    <input type="text" class="form-control" id="productName" required></input>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Start Price</label>
                                    <input type="number" min="0" class="form-control" id="startPrice" required></input>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Final Price</label>
                                    <input type="number" min="0" class="form-control" id="finalPrice" required></input>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Time</label>
                                    <input type="date" class="form-control" id="addTime" required></input>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Product Details</label>
                                    <textarea class="form-control" id="productDetail" required rows="5"></textarea>
                                </div>
                                <div className="d-flex justify-content-center mt-4">
                                    <button type="submit" class="btn-add rounded-pill text-black mx-5" onClick={onClickUpload}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}