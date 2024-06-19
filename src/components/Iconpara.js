import React from "react";

function Iconpara(props){

    return(
        <div className="iconpara">
            
            <img src={props.img} alt={props} />
            <p className="iconpara_text">{props.text}</p>   
        </div>
    );

}

export default Iconpara;