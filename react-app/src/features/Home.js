import ProductCard from "./ProductCard";
import React, { useState, useEffect } from 'react';
import data from "../app/product_data";


function Home() {
    const [products, setProducts] = useState(data); 
    console.log(products)

    /*
    useEffect (() => {
        data.forEach(element => {
            setProducts(element);
        })
    });
    */

    return (
        <>
            <div className="container">
                <div className="row text-start">
                    <img className="rounded float-start" src={"./"} alt="" />
                <h2 className="col">Car</h2>
                </div>
                {
                    products.length > 0 ? (
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                        {products.map((product) => (
                            <ProductCard product={product}/>
                        ))}
                        </div>
                    ) : (
                        <div>Loading products....</div>
                    )
                }
                
            </div>
        </>
    );
}

export default Home;
