import React from "react";
import Iconpara from "./Iconpara";
import office from "../assets/office.png";
import calendar from "../assets/calendar.png";

function Workcard(props){
    return(
        <div className="workcard">
            <div className="workcard_top">
                <h4>{props.role}</h4>
                <p className="workcard_btn">{props.type}</p>
            </div>

            <div className="workcard_down">
                <div className="workcard_down1">
                    <Iconpara text={props.office} img={office} />
                    <Iconpara text={props.location} img={props.img} />
                </div>
                <Iconpara text={props.date} img={calendar} />
            </div>

            <div className="workcard_line"></div>
        </div>
    );
}

export default Workcard;