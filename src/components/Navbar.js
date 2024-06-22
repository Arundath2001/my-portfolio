import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar(){

    return(
        <div className="navbar">
            <HashLink smooth to="/#root">Home</HashLink>
            <Link to="/about">About</Link>
            <HashLink smooth to="/#techstack">Tech Stack</HashLink>
            <HashLink smooth to="/#projects">Projects</HashLink>
            <Link to="/contact">Contact</Link>
        </div>
    );

}

export default Navbar;