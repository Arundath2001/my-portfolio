import React from "react";
import Icongroup from "./Icongroup";

function NavbarTop(props){
    return(
        <div className={`navbartop ${props.addclass}`}>
            <div className="navbartop_main">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="#techstack">Tech Stack</a>
                <a href="#projects">Projects</a>
                <a href="/contact">Contact</a>
            </div>

            <Icongroup />

        </div>

    );
}

export default NavbarTop;