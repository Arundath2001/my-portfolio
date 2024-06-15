import React from "react";

function Iconlink(props){
    return(

        <div className="iconlink">
            <img src={props.img} alt="link" />
            <a href="">{props.text}</a>
        </div>

    );
}

export default Iconlink;