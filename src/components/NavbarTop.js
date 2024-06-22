import React from "react";
import Icongroup from "./Icongroup";
import logo from "../assets/logo.png";
import Navbar from "./Navbar";
import Hamburger from "./Hamburger";

function NavbarTop(props) {

    return (
        <div className="navbartop">

            <img src={logo} alt="logo" />

            <div className="navbartop_main">
                
                <Navbar />

                <Icongroup />
                
            </div>

            <Hamburger />

        </div>
    );
}

export default NavbarTop;
