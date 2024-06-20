import React, { useState, useEffect } from "react";
import Icongroup from "./Icongroup";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function NavbarTop(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [menuOpen]);

    return (
        <nav className={`navbartop ${props.addclass}`}>
            <div className="navbartop_main">
                <HashLink smooth to="/#root">Home</HashLink>
                <Link to="/about">About</Link>
                <HashLink smooth to="/#techstack">Tech Stack</HashLink>
                <HashLink smooth to="/#projects">Projects</HashLink>
                <Link to="/contact">Contact</Link>
            </div>

            <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <div className={`fullscreen-menu ${menuOpen ? 'open' : ''}`}>
                <div className="menu-items">
                    <HashLink smooth to="/#root" onClick={toggleMenu}>Home</HashLink>
                    <Link to="/about" onClick={toggleMenu}>About</Link>
                    <HashLink smooth to="/#techstack" onClick={toggleMenu}>Tech Stack</HashLink>
                    <HashLink smooth to="/#projects" onClick={toggleMenu}>Projects</HashLink>
                    <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                </div>
            </div>

            <Icongroup />
        </nav>
    );
}

export default NavbarTop;
