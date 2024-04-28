import React from 'react';
import car from "../assets/vroom.png";

const vroomCard = () => {
    return (
        <div className="row justify-content-md-center">
        <div class="row">
            <br/>
            <div class="col-sm-3">
            <img src={car} className="car" style={{ width: '300px', height: '200px' }} alt="" />
            </div>

            <div class="col-sm-4">
                <br/>
                <br/>
               <h2>CAPBAY VROOM</h2>
               <p>RM200,000</p>
            </div>
        </div>
        </div>
    );
}


export default vroomCard;