import React from "react";

function Iconlink(props){
    return(

        <div className="iconlink">
            <img src={props.img} alt="link" />
            <a target="_blank" rel="noreferrer" href={props.link}>{props.text}</a>
        </div>

    );
}

export default Iconlink;