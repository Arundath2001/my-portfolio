import React from "react";
import Navbar from "./Navbar";
import Icongroup from "./Icongroup";

function Linenavbar(){

    return(
        <div className="linenavbar">
            <div className="linenavbar_line">

            </div>
            <div className="linenavbar_nav">
                <Navbar />
                <Icongroup />
            </div>

        </div>
    );

}

export default Linenavbar;