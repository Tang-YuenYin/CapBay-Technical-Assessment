import React from 'react';
import Navbar from './component/NavBarSeller.jsx'
import Table from './component/customerTable.jsx'


const Seller = () => {
    return (
        <div className="row justify-content-md-center">
             <Navbar/>
            <br/>
            <h1>Registered Customer Details</h1>
            <h2>CapBay Vroom Model</h2>
            <br/>
            <Table/>
        </div>
    );
}

export default Seller;