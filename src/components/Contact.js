import React from "react";
import NavbarTop from "./NavbarTop";
import Linenavbar from "./Linenavbar";

function Contact(){
    return(
        <div className="contact">
            <NavbarTop />
            <h1>For any questions please contact me:<br/>
            <a href="mailto:arundatharun44@gmail.com">arundatharun44@gmail.com,</a><br/>
            <a href="tel:7994352926">7994352926</a>
            </h1>
            <Linenavbar />
        </div>
    );
}

export default Contact;