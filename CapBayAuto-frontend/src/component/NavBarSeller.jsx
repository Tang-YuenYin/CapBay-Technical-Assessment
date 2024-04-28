import React from 'react';
import logo from "../assets/logo_capbay.png";
import { Link } from "react-router-dom";

const NavBarSeller = () => {
    return (
        <nav class="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">
        <img src={logo} className="logo" width="300" height="300" alt="" />
    </a>

    <ul class="nav justify-content-end">
        <li className="nav-item">
        <Link to="/">
            <button className="btn btn-primary">Logout</button>
        </Link>
        </li>
    </ul>
</nav>
    );
}

export default NavBarSeller;