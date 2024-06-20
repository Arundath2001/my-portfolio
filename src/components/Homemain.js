import React from "react";
import arundath from "../assets/Arundath.jpg";

function Homemain() {
    return (
        <div className="homemain">
            <div className="toright">
            <div className="homemain_left">
                <h1>Hi <span className="wave">👋</span>,<br />
                    My name is<br />
                    <span className="headname">Arundath</span><br />
                    I build things for web
                </h1>
            </div>
            </div>
            <div className="totleft">
            <div className="homemain_right">
                <img src={arundath} alt="arundath" />
            </div>
            </div>
        </div>
    );
}

export default Homemain;
