import React from 'react';
import { GiCancel, GiConfirmed } from "react-icons/gi";

function WatchListCard( { item }) {
    return (
    <>
    <div className="card mb-3 row g-0" style={{height: "12rem"}}>
        <div className="col-md-3">     
          <img src="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/listicle/section/2021-Mercedes-AMG-GT-Black-Series-coupe-silver-1001x565-1.jpg" 
          className="img-fluid rounded-start" style={{height: "12rem", width: "auto"}}  alt="..." />
        </div>
        <div className="col-md-9 d-flex justify-content-between align-items-center h-100">
          <div className="card-body row">
            <div className="col-5">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-text text-danger dropshadow">00d:00h:00m:00s</p>
            </div>
            <div className="col-6 row">
                <div className="col-6">
                  <div className="text-success text-center"><h6>CurrentBid</h6></div>
                  <div className="text-center"><h5>$999</h5></div>
                </div>
                <div className="col-3">
                  <div className="text-danger text-center"><h6>Buynow</h6></div>
                  <div className="text-center"><h5>$855</h5></div>
                </div>  
            </div>
            {
              item.bidEnd === false ? 
                (
                  <div className="col-1 d-flex justify-content-between align-items-center text-danger"><GiCancel size={25} /></div>
                ) : (
                  <div className="col-1 d-flex justify-content-between align-items-center text-success"><GiConfirmed size={25} /></div>

                )
            }
             
          </div>
        </div>
    </div>

    </>
    );
}

export default WatchListCard;