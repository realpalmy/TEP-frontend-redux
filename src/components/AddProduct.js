import React from 'react';

export default function AddProduct() {
    return (
        <>
            <div className="margin-top-addForm">
                <div className="d-flex justify-content-center col-12 row">
                    <div className="card rounded-5 col-12 col-sm-10 col-md-8" style={{ height: "50rem" }}>
                        <div className="product-content">
                            <div className="product-header mt-4 ms-3 mb-3" >
                                <h1 className="">Add New Product</h1>
                            </div>
                            <div className="mb-3">
                                <label for="formFileMultiple" class="form-label">Upload product image</label>
                                <input className="form-control" type="file" id="formFileMultiple" multiple></input>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Product Name</label>
                                <input type="text" class="form-control" id="FormControlInput1"></input>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Start Price</label>
                                <input type="text" class="form-control" id="FormControlInput1" placeholder="$"></input>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Final Price</label>
                                <input type="text" class="form-control" id="FormControlInput1" placeholder="$"></input>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Time</label>
                                <input type="date" class="form-control" id="FormControlInput1"></input>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Product Details</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <button type="submit" class="bg-4E598C rounded-pill text-white p-2 px-4 mx-5">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>


        </>
    );
}